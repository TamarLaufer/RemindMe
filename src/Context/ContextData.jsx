import React, {useContext, useState, useEffect} from 'react';
import RemoveChild from '../components/RemoveChild';
import AddGroup from '../components/AddGroup';
import {childrenData, groups} from '../data/tempData';
import AllChildrenList from '../components/AllChildrenList';
import {useNavigation} from '@react-navigation/native';
import {screenNames, strings} from '../utils/Strings';
// import EditChild from '../components/EditChild';
import ChildrenListForEdit from '../components/ChildrenListForEdit';
import Add from '../components/Add';
import EditGroup from '../components/EditGroup';
import RemoveGroup from '../components/RemoveGroup';
import EditChild from '../components/EditChild';
import {Alert} from 'react-native';

const ContextData = React.createContext();

export function useContextData() {
  return useContext(ContextData);
}

export const DataProvider = ({children}) => {
  const [childrenList, setChildrenList] = useState([]);
  const [child, setChild] = useState([]);
  const [groupsList, setGroupsList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(null);

  const image = {
    uri: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  };

  const switchScreens = {
    ADD_CHILD: <Add />,
    EDIT_CHILD_LIST: <ChildrenListForEdit />,
    EDIT_CHILD: <EditChild />,
    REMOVE_CHILD: <RemoveChild />,
    ADD_GROUP: <AddGroup />,
    EDIT_GROUP: <EditGroup />,
    REMOVE_GROUP: <RemoveGroup />,
  };

  const updateChosenChild = childData => {
    setChild(childData);
  };
  const popUp = textToDisplay =>
    Alert.alert(textToDisplay, ' ', [
      {
        text: strings.ok,
        onPress: () => {
          console.log('ok pressed');
        },
      },
    ]);

  const getAllChildren = () => {
    fetch('http://10.100.102.12:3000/child')
      .then(response => response.json())
      .then(data => {
        setChildrenList(data);
        console.log('result', data);
      })
      .catch(err => {
        console.log('getAllChildrenError', err);
      });
  };

  const getAllChildrenByGroup = groupId => {
    fetch(`http://10.100.102.12:3000/child?groupId=${groupId}`)
      .then(response => response.json())
      .then(data => {
        setChildrenList(data);
        console.log('result', data);
      })
      .catch(err => {
        console.log('getAllChildrenError', err);
      });
  };

  const addChild = values => {
    console.log(values);
    fetch('http://10.100.102.12:3000/child/add-child', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values),
    })
      .then(data => data.json())
      .then(resJson => {
        console.log('the post performed', resJson);
        const newList = [...childrenList, resJson];
        setChildrenList(newList);
      })
      .catch(err => {
        console.log(err, 'the post failed');
      });
  };

  const removeChild = id => {
    fetch(`http://10.100.102.12:3000/child/delete-child/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(resJson => {
        console.log('resJson', resJson);
        const newList = childrenList.filter(child => child._id !== id);
        setChildrenList(newList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getChildById = id => {
    fetch(`http://10.100.102.12:3000/child/${id}`)
      .then(response => response.json())
      .then(data => setChild(data))
      .catch(err => {
        console.log(err);
      });
  };

  const updateChild = (id, values) => {
    fetch(`http://10.100.102.12:3000/child/update-child/${id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values),
    })
      .then(data => data.json())
      .then(resJson => {
        console.log('the update performed', resJson);
        const listWithoutId = childrenList.filter(child => child._id !== id);
        const newList = [...listWithoutId, resJson];
        setChildrenList(newList);
      })
      .catch(err => {
        console.log(err, 'the update failed');
      });
  };

  const getAllGroups = () => {
    fetch('http://10.100.102.12:3000/group')
      .then(response => response.json())
      .then(data => {
        console.log('getAllGroups', data);
        setGroupsList(data);
      })
      .catch(err => {
        console.log('getAllGroupsError', err);
      });
  };

  const addGroup = values => {
    console.log(values);
    fetch('http://10.100.102.12:3000/group/add-group', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values),
    })
      .then(data => data.json())
      .then(resJson => {
        console.log('the post performed', resJson);
        const newList = [...groupsList, resJson];
        setGroupsList(newList);
      })
      .catch(err => {
        console.log(err, 'the post failed');
      });
  };

  const removeGroup = id => {
    fetch(`http://10.100.102.12:3000/group/delete-group/${id}`, {
      method: 'DELETE',
    })
      .then(data => data.json())
      .then(resJson => {
        console.log('resJson', resJson);
        const newList = groupsList.filter(group => group._id !== id);
        setGroupsList(newList);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllChildren();
    getAllGroups();
  }, []);

  return (
    <ContextData.Provider
      value={{
        childrenList,
        setChildrenList,
        groupsList,
        addChild,
        removeChild,
        updateChild,
        getChildById,
        addGroup,
        switchScreens,
        removeGroup,
        child,
        showModal,
        setShowModal,
        popUp,
        updateChosenChild,
        child,
        setCurrentScreen,
        currentScreen,
        image,
      }}>
      {children}
    </ContextData.Provider>
  );
};
