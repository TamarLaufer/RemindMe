import React, {useContext, useState, useEffect} from 'react';
import {childrenData, groups} from '../data/tempData';

const ContextData = React.createContext();

export function useContextData() {
  return useContext(ContextData);
}

export const DataProvider = ({children}) => {
  const pagesData = {
    ADD_CHILD: 'add child',
    REMOVE_CHILD: 'remove child',
    UPDATE_CHILD: 'update child',
    ADD_GROUP: 'add group',
    DELETE_GROUP: 'delete group',
    UPDATE_GROUP: 'update group',
  };
  const [pageName, setPageName] = useState(pagesData.ADD_CHILD);
  const [childrenList, setChildrenList] = useState(childrenData);
  const [groupsList, setGroupsList] = useState(groups);

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
      .then(data => {
        console.log('the post performed', data);
      })
      .catch(err => {
        console.log(err, 'the post failed');
      });
  };

  const removeChild = id => {
    fetch(`http://10.100.102.12:3000/child/delete-child/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        console.log(res.json());
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getChildById = id => {
    fetch(`http://10.100.102.12:3000/child/${id}`)
      .then(response => response.json())
      .then(data => setChildrenList(data))
      .catch(err => {
        console.log(err);
      });
  };

  const updateChild = (id, values) => {
    fetch(`http://10.100.102.12:3000/child/update-child/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  // const changePagesData = () => {
  //   if (pageName===pagesData.ADD_CHILD) {
  //     return
  //   }
  // };

  useEffect(() => {
    getAllChildren();
  }, []);

  return (
    <ContextData.Provider
      value={{
        childrenList,
        groupsList,
        pagesData,
        addChild,
        removeChild,
        updateChild,
        // pageName,
        // setPageName,
      }}>
      {children}
    </ContextData.Provider>
  );
};
