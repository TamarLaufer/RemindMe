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
  const [groups, setAllGroups] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(null);
  const [loader, setLoader] = useState(false);
  const [groupByPress, setGroupByPress] = useState([]);
  const [mode, setMode] = useState(null);
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoding] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [loggedUser, setLoggedUser] = useState({});
  const [userInfo, setUserInfo] = useState(null);

  const updateCurrentScreen = (screen, isEditFlag) => {
    setCurrentScreen(screen);
    setIsEditMode(isEditFlag);
  };
  const updateLoggedUser = user => {
    setLoggedUser(user);
  };

  // const login = () => {
  //   setUserToken('1245656asdefd98');
  //   AsyncStorage.setItem('userToken', '1245656asdefd98');
  // };

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem(userToken);
    AsyncStorage.removeItem(userInfo);
  };

  const isLoggedIn = () => {
    try {
      const userInfo = JSON.parse(AsyncStorage.getItem('userInfo'));
      const userToken = AsyncStorage.getItem('userToken');

      if (userInfo) {
        setUserToken(userToken);
        setUserToken(userInfo);
      }
    } catch (e) {
      console.log(`isLoggedIn error in ${e}`);
    }
  };

  const updateModeForModal = mode => {
    setMode(mode);
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

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

  const updateCreatedUser = userData => {
    setUserDetails(userData);
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

  const getAllChildren = () => {
    setLoader(true);
    fetch(URLS.getAllChildren())
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
    setLoader(true);
    fetch(URLS.getAllChildrenInGroup(groupId))
      .then(response => response.json())
      .then(data => {
        setChildrenList(data);
      })
      .catch(err => {
        console.log('getAllChildrenError', err);
      });
    setLoader(false);
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
        // console.log('the post performed', resJson);
        const newList = [...childrenList, resJson];
        setChildrenList(newList);
      })
      .catch(err => {
        console.log(err, 'the post failed');
      });
    setLoader(false);
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
      })
      .catch(err => {
        console.log('removeChildError', err);
      });
    setLoader(false);
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

  const getAllGroups = () => {
    setLoader(true);
    fetch(URLS.getAllGroupsFetch())
      .then(response => response.json())
      .then(data => {
        setAllGroups(data);
        console.log('groups added to the group list');
      })
      .catch(err => {
        console.log('getAllGroupsError', err);
      });
    setLoader(false);
  };

  const addGroup = values => {
    fetch(URLS.addGroup(), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(values),
    })
      .then(data => data.json())
      .then(resJson => {
        console.log('the post performed', resJson);
        const newList = [...groups, resJson];
        setAllGroups(newList);
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
        setAllGroups(newList);
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
        setAllGroups(newList);
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
        updateCreatedUser(resJson);
        setError(null);
        navigate(screenNames.login);
        console.log('User post performed', resJson);
      })
      .catch(err => {
        console.log('err addUser: ', err);
      });
    setLoader(false);
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
        setUserInfo(resJson);
        setUserToken(resJson.data.token);
        AsyncStorage.setItem('userInfo', JSON.stringify(resJson));
        AsyncStorage.setItem('userToken', resJson.data.token);
        setError(null);
      })
      .catch(err => {
        console.log(err, 'User login failed');
      });
    setLoader(false);
  };

  return (
    <ContextData.Provider
      value={{
        error,
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
        getAllChildrenByGroup,
        updateChildIfArrived,
        mode,
        updateModeForModal,
        allModesForModal,
        updateCreatedUser,
        setLoader,
        error,
        setError,
        logout,
        userToken,
        isLoading,
        addUser,
        loginFetch,
        userInfo,
        updateLoggedUser,
        isLoggedIn,
      }}>
      {children}
    </ContextData.Provider>
  );
};
