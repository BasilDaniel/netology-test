import users from "../api/users";
const getUsers = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(users);
    }, 2000);
  }).then(response => response);
};
const userApi = {
  getUsers
};
export default userApi;
