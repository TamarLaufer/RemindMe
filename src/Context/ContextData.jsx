import React, {useContext, useEffect, useState} from 'react';
import RemoveChild from '../components/RemoveChild';
import AddGroup from '../components/AddGroup';
import {childrenData, groups} from '../data/tempData';
import AllChildrenList from '../components/AllChildrenList';
import {useNavigation} from '@react-navigation/native';
import {screenNames, strings} from '../utils/Strings';
import ChildrenListForEdit from '../components/ChildrenListForEdit';
import GroupListForEdit from '../components/GroupListForEdit';
import Add from '../components/Add';
import RemoveGroup from '../components/RemoveGroup';
import {Alert} from 'react-native';
import {URLS} from '../Api/urls';
import Groups from '../components/Groups';
import GroupsForEditOrRemoveChild from '../components/GroupsForEditOrRemoveChild';
import {navigate} from '../components/RootNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContextData = React.createContext();

export function useContextData() {
  return useContext(ContextData);
}

export const DataProvider = ({children}) => {
  const allModesForModal = {
    EDIT_CHILD: 'edit',
    REMOVE_CHILD: 'remove',
  };

  const [childrenList, setChildrenList] = useState([]);
  const [child, setChild] = useState([]);
  const [group, setGroup] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isEditUserMode, setIsEditUserMode] = useState(false);
  const [groups, setGroups] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(null);
  const [loader, setLoader] = useState(false);
  const [groupByPress, setGroupByPress] = useState([]);
  const [mode, setMode] = useState(null);
  const [error, setError] = useState(null);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const updateCurrentScreen = (screen, isEditFlag) => {
    setCurrentScreen(screen);
    setIsEditMode(isEditFlag);
  };

  const logout = () => {
    setLoader(true);
    setUserInfo(null);
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    setLoader(false);
  };

  const updateModeForModal = mode => {
    setMode(mode);
  };

  const image = require('../images/photo1.jpg');

  const switchScreens = {
    ADD_CHILD: <Add />,
    EDIT_CHILD_LIST: <ChildrenListForEdit />,
    REMOVE_CHILD: <RemoveChild />,
    ADD_GROUP: <AddGroup />,
    EDIT_GROUP_LIST: <GroupListForEdit />,
    REMOVE_GROUP: <RemoveGroup />,
    GROUPS: <Groups />,
    GROUP_FOR_EDIT_CHILD: <GroupsForEditOrRemoveChild />,
  };

  const updateChosenChild = childData => {
    setChild(childData);
  };

  const updateChosenGroup = groupData => {
    setGroup(groupData);
  };

  const insertUserData = userData => {
    const newUser = {...userInfo, ...userData};
    AsyncStorage.setItem('userInfo', JSON.stringify(newUser));
    setUserInfo(newUser);
    setUserToken(newUser.data.token);
  };

  const popUp = (textToDisplay, setStateOk, setStateCancel) =>
    Alert.alert(textToDisplay, ' ', [
      {
        text: strings.ok,
        onPress: () => {
          setStateOk;
        },
      },
      // {
      //   text: strings.cancel,
      //   onPress: () => {
      //     setStateCancel;
      //   },
      // },
    ]);

  const getAllChildren = () => {
    setLoader(true);
    fetch(URLS.getAllChildren())
      .then(response => response.json())
      .then(data => {
        setChildrenList(data);
        setLoader(false);
      })
      .catch(err => {
        console.log('getAllChildrenError', err);
        setLoader(false);
      });
  };

  const getAllChildrenByGroup = groupId => {
    setLoader(true);
    fetch(URLS.getAllChildrenInGroup(groupId))
      .then(response => response.json())
      .then(data => {
        setChildrenList(data);
        setLoader(false);
      })
      .catch(err => {
        console.log('getAllChildrenError', err);
        setLoader(false);
      });
  };

  const addChild = values => {
    setLoader(true);
    console.log(values);
    const childWithGroupValue = {
      ...values,
      parentPhone: '+972' + values.parentPhone,
      parent2Phone: '+972' + values.parent2Phone,
      group: values.group.value,
    };
    fetch(URLS.addChild(), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(childWithGroupValue),
    })
      .then(data => data.json())
      .then(resJson => {
        const newList = [...childrenList, resJson];
        setChildrenList(newList);
        setLoader(false);
      })
      .catch(err => {
        console.log(err, 'the post failed');
        setLoader(false);
      });
  };

  const removeChild = id => {
    setLoader(true);
    fetch(URLS.removeChild(id), {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(resJson => {
        const newList = childrenList.filter(child => child._id !== id);
        setChildrenList(newList);
        setLoader(false);
      })
      .catch(err => {
        console.log('removeChildError', err);
        setLoader(false);
      });
  };

  const getChildById = id => {
    setLoader(true);
    fetch(URLS.getChildById(id))
      .then(response => response.json())
      .then(data => {
        setChild(data);
        setLoader(false);
      })
      .catch(err => {
        console.log(err);
        setLoader(false);
      });
  };

  const updateChildIfArrived = (id, isArrived) => {
    setLoader(true);
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
        setLoader(false);
      })
      .catch(err => {
        console.log(err);
        setLoader(false);
      });
  };

  const updateChild = (id, values) => {
    setLoader(true);
    const childWithGroupValue = {
      ...values,
      parentPhone: '+972' + values.parentPhone,
      parent2Phone: '+972' + values.parent2Phone,
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
        setLoader(false);
      })
      .catch(err => {
        console.log('the update failed', err);
        setLoader(false);
      });
  };

  const getAllGroupsByUserId = userId => {
    setLoader(true);
    fetch(URLS.getAllGroupsByUserId(userId))
      .then(response => response.json())
      .then(data => {
        setGroups(data);
        console.log('groups added to the group list');
        setLoader(false);
      })
      .catch(err => {
        console.log('getAllGroupsError', err);
        setLoader(false);
      });
  };

  const addGroup = values => {
    setLoader(true);
    fetch(URLS.addGroup(), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values),
    })
      .then(data => data.json())
      .then(resJson => {
        console.log('the post performed', resJson);
        const newList = [...groups, resJson];
        setGroups(newList);
        setLoader(false);
      })
      .catch(err => {
        console.log(err, 'the post failed');
        setLoader(false);
      });
  };

  const updateGroup = (id, values) => {
    setLoader(true);
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
        setGroups(newList);
        setLoader(false);
      })
      .catch(err => {
        console.log(err);
        setLoader(false);
      });
  };

  const removeGroup = id => {
    setLoader(true);
    fetch(URLS.removeGroup(id), {
      method: 'DELETE',
    })
      .then(data => data.json())
      .then(resJson => {
        // console.log('resJson', resJson);
        const newList = groups.filter(group => group._id !== id);
        setGroups(newList);
        const newChildrenList = childrenList.filter(
          child => resJson.childrenList.include(child._id) === false,
        );
        setChildrenList(newChildrenList);
        console.log(newChildrenList);
        setLoader(false);
      })
      .catch(err => {
        console.log(err);
        setLoader(false);
      });
  };

  const addUser = values => {
    setLoader(true);
    console.log('values', values);
    const userWithPhone972 = {
      ...values,
      phoneNumber: '+972' + values.phoneNumber,
    };
    console.log('userWithPhone972', userWithPhone972);
    console.log('URLS.register()', URLS.register());
    fetch(URLS.register(), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userWithPhone972),
    })
      .then(resData => {
        return resData.json();
      })
      .then(resJson => {
        console.log('resJson', resJson);
        if (resJson.code === 11000) {
          setError(strings.userAlreadyExist);
          setLoader(false);
          return;
        }
        setError(null);
        navigate(screenNames.login);
        setLoader(false);
        console.log('User post performed', resJson);
      })
      .catch(err => {
        setLoader(false);
        console.log('err addUser: ', err);
      });
  };

  const loginFetch = values => {
    setLoader(true);
    fetch(URLS.login(), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values),
    })
      .then(resData => {
        return resData.json();
      })
      .then(resJson => {
        console.log('resJson login: ', resJson);
        insertUserData(resJson);
        setError(null);
        setLoader(false);
      })
      .catch(err => {
        console.log('User login failed', err);
        setLoader(false);
      });
  };

  return (
    <ContextData.Provider
      value={{
        error,
        getAllChildren,
        // getAllGroups,
        getAllGroupsByUserId,
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
        getAllChildrenByGroup,
        updateChildIfArrived,
        mode,
        updateModeForModal,
        allModesForModal,
        setLoader,
        error,
        setError,
        logout,
        userToken,
        addUser,
        loginFetch,
        userInfo,
        setUserInfo,
        setUserToken,
      }}>
      {children}
    </ContextData.Provider>
  );
};
