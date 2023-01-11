import React, {useContext, useState, useEffect} from 'react';
import RemoveChild from '../components/RemoveChild';
import AddGroup from '../components/AddGroup';
import {childrenData, groups} from '../data/tempData';
import AllChildrenList from '../components/AllChildrenList';
import {useNavigation} from '@react-navigation/native';
import {screenNames, strings} from '../utils/Strings';
// import EditChild from '../components/EditChild';
import ChildrenListForEdit from '../components/ChildrenListForEdit';
import GroupListForEdit from '../components/GroupListForEdit';
import Add from '../components/Add';
import EditGroup from '../components/EditGroup';
import RemoveGroup from '../components/RemoveGroup';
import EditChild from '../components/EditChild';
import {Alert} from 'react-native';
import {URLS} from '../Api/urls';

const ContextData = React.createContext();

export function useContextData() {
  return useContext(ContextData);
}

export const DataProvider = ({children}) => {
  const [childrenList, setChildrenList] = useState([]);
  const [child, setChild] = useState([]);
  const [group, setGroup] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [groups, setAllGroups] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(null);
  const [loader, setLoader] = useState(false);
  const [groupByPress, setGroupByPress] = useState([]);
  const [listIsEmpty, setListIsEmpty] = useState(true);

  const updateGroupsList = (groupList = []) => {
    setAllGroups(groupList);
  };

  const updateCurrentScreen = (screen, isEditFlag) => {
    setCurrentScreen(screen);
    setIsEditMode(isEditFlag);
  };

  const image = {
    uri: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  };

  const switchScreens = {
    ADD_CHILD: <Add />,
    EDIT_CHILD_LIST: <ChildrenListForEdit />,
    EDIT_CHILD: <EditChild />,
    REMOVE_CHILD: <RemoveChild />,
    ADD_GROUP: <AddGroup />,
    EDIT_GROUP_LIST: <GroupListForEdit />,
    EDIT_GROUP: <EditGroup />,
    REMOVE_GROUP: <RemoveGroup />,
  };

  const isGroupListEmpty = () => {
    console.log(groups.length);
    groups.length > 0 ? setListIsEmpty(false) : setListIsEmpty(true);
  };

  const updateChosenChild = childData => {
    setChild(childData);
  };

  const updateChosenGroup = groupData => {
    setGroup(groupData);
  };

  const popUp = (textToDisplay, setStateOk, setStateCancel) =>
    Alert.alert(textToDisplay, ' ', [
      {
        text: strings.ok,
        onPress: () => {
          setStateOk;
        },
      },
      {
        text: strings.cancel,
        onPress: () => {
          setStateCancel;
        },
      },
    ]);

  const getAllChildren = async () => {
    setLoader(true);
    await fetch(URLS.getAllChildren())
      .then(response => response.json())
      .then(data => {
        setChildrenList(data);
      })
      .catch(err => {
        console.log('getAllChildrenError', err);
      });
    setLoader(false);
  };

  const getAllChildrenByGroup = groupId => {
    fetch(URLS.getAllChildrenInGroup(groupId))
      .then(response => response.json())
      .then(data => {
        setChildrenList(data);
      })
      .catch(err => {
        console.log('getAllChildrenError', err);
      });
  };

  const addChild = values => {
    console.log(values);
    const childWithGroupValue = {
      ...values,
      group: values.group.value,
    };
    fetch(URLS.addChild(), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(childWithGroupValue),
    })
      .then(data => data.json())
      .then(resJson => {
        // console.log('the post performed', resJson);
        const newList = [...childrenList, resJson];
        setChildrenList(newList);
      })
      .catch(err => {
        console.log(err, 'the post failed');
      });
  };

  const removeChild = id => {
    fetch(URLS.removeChild(id), {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(resJson => {
        const newList = childrenList.filter(child => child._id !== id);
        setChildrenList(newList);
      })
      .catch(err => {
        console.log('removeChildError', err);
      });
  };

  const getChildById = id => {
    fetch(URLS.getChildById(id))
      .then(response => response.json())
      .then(data => setChild(data))
      .catch(err => {
        // console.log(err);
      });
  };

  const updateChildIfArrived = (id, isArrived) => {
    fetch(URLS.updateArrived(id, isArrived), {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({}),
    })
      .then(response => {
        const newList = childrenList.filter(child => child._id !== id);
        console.log(childrenList);
        const child = childrenList.find(child => child._id === id);
        child.isArrived = isArrived;
        setChildrenList([...newList, child]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const updateChild = (id, values) => {
    const childWithGroupValue = {
      ...values,
      group: values.group.value,
    };
    fetch(URLS.updateChild(id), {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(childWithGroupValue),
    })
      .then(data => data.json())
      .then(resJson => {
        console.log('resJson', resJson);
        const listWithoutId = childrenList.filter(child => child._id !== id);
        const newList = [...listWithoutId, resJson];
        setChildrenList(newList);
      })
      .catch(err => {
        console.log('the update failed', err);
      });
  };

  const getAllGroups = async () => {
    setLoader(true);
    await fetch(URLS.getAllGroups())
      .then(response => response.json())
      .then(data => {
        // console.log('getAllGroups', data);
        updateGroupsList(data);
      })
      .catch(err => {
        console.log('getAllGroupsError', err);
      });
    setLoader(false);
    isGroupListEmpty();
  };

  const addGroup = values => {
    fetch(URLS.addGroup(), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values),
    })
      .then(data => data.json())
      .then(resJson => {
        // console.log('the post performed', resJson);
        const newList = [...groups, resJson];
        updateGroupsList(newList);
      })
      .catch(err => {
        console.log(err, 'the post failed');
      });
  };

  const updateGroup = (id, values) => {
    fetch(URLS.updateGroup(id), {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values),
    })
      .then(data => data.json())
      .then(resJson => {
        // console.log('resJson', resJson);
        const listWithoutGroup = groups.filter(group => group._id !== id);
        const newList = [...listWithoutGroup, resJson];
        updateGroupsList(newList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const removeGroup = id => {
    fetch(URLS.removeGroup(id), {
      method: 'DELETE',
    })
      .then(data => data.json())
      .then(resJson => {
        // console.log('resJson', resJson);
        const newList = groups.filter(group => group._id !== id);
        updateGroupsList(newList);
        const newChildrenList = childrenList.filter(
          child => resJson.childrenList.include(child._id) === false,
        );
        setChildrenList(newChildrenList);
        console.log(newChildrenList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ContextData.Provider
      value={{
        getAllChildren,
        getAllGroups,
        childrenList,
        setChildrenList,
        addChild,
        removeChild,
        updateChild,
        updateGroup,
        getChildById,
        addGroup,
        switchScreens,
        removeGroup,
        child,
        showModal,
        setShowModal,
        popUp,
        updateChosenChild,
        setCurrentScreen,
        updateCurrentScreen,
        currentScreen,
        image,
        updateChosenGroup,
        group,
        loader,
        groups,
        groupByPress,
        isEditMode,
        setGroupByPress,
        isGroupListEmpty,
        listIsEmpty,
        getAllChildrenByGroup,
        updateChildIfArrived,
      }}>
      {children}
    </ContextData.Provider>
  );
};
