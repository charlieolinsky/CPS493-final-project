import { reactive } from "vue";

// Here I will store my Users, their data, and methods used to mutate that data

export interface User {
  name: string;
  username: string;
  id: number;
  isLoggedIn: boolean;
  profilePicURL?: string;
}

interface UserStore {
  users: User[];
  userLogIn(username: string): void;
  getLoggedInUser(): User | undefined;
}

// Create a store with users and methods to manipulate users
//reactive is like ref, but for objects. It makes the object reactive, so that when it changes, the view updates. 
export const getUserStore = (): UserStore => {
  const users = reactive<User[]>([
    { name: "Charles Olinsky", username: "pdox9235", id: 2, isLoggedIn: false, profilePicURL: "https://picsum.photos/id/22/200/300"},
      { name: "Moshe Plotkin", username: "jewpaltz", id: 1, isLoggedIn: false, profilePicURL: "https://picsum.photos/id/1/200/300"},
      { name: "John Smith", username: "jsmitty", id: 3, isLoggedIn: false }
  ]);

  const userLogIn = (username: string) => {
    //Log out the currently logged in user
    users.forEach((user) => {
      if (user.isLoggedIn) {
        user.isLoggedIn = false;
        console.log(`${user.name} is logged out`);
      }
    });
    //Log in the specified user
    users.forEach((user) => {
      if (user.username === username) {
        user.isLoggedIn = true;
        console.log(`${user.name} is logged in`);
      }
    });
  }

  const getLoggedInUser = () => {
    return users.find((user) => user.isLoggedIn);
  }

  return { users, userLogIn, getLoggedInUser };
};
