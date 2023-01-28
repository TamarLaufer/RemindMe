const mainURL = `http://10.100.102.12:3000`;

export const URLS = {
  getAllChildren: () => `${mainURL}/child`,
  addChild: () => `${mainURL}/child/add-child`,
  removeChild: id => `${mainURL}/child/delete-child/${id}`,
  updateChild: id => `${mainURL}/child/update-child/${id}`,
  getAllGroupsByUserId: userId => `${mainURL}/group/${userId}`,
  addGroup: () => `${mainURL}/group/add-group`,
  updateGroup: id => `${mainURL}/group/update-group/${id}`,
  removeGroup: id => `${mainURL}/group/delete-group/${id}`,
  getAllChildrenInGroup: groupId => `${mainURL}/child/${groupId}`,
  updateArrived: (id, isArrived) =>
    `${mainURL}/child/arrived/${id}?isChildArrived=${isArrived}`,
  register: () => `${mainURL}/register`,
  updateUser: userId => `${mainURL}/user/update-user/${userId}`,
  login: () => `${mainURL}/login`,
  getAllUsers: () => `${mainURL}/user`,
};
