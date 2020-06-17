import users from "../api/users";
const getUsers = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    resolve(users);
  }).then(response => response);
};
const userApi = {
  getUsers
};
export default userApi;
