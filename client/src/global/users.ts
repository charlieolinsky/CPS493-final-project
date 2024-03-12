import { reactive } from "vue";

// Here I will store my Users, their data, and methods used to mutate that data

interface User {
  name: string;
  username: string;
  id: number;
  isLoggedIn: boolean;
  profilePicURL?: string;
}

interface UserStore {
  users: User[];
  addUser(user: User): void;
}

// Create a store with users and methods to manipulate users
//reactive is like ref, but for objects. It makes the object reactive, so that when it changes, the view updates. 
export const getUserStore = (): UserStore => {
  const users = reactive<User[]>([
      { name: "Moshe Plotkin", username: "jewpaltz", id: 1, isLoggedIn: false, profilePicURL: "https://picsum.photos/id/1/200/300"},
      { name: "Charles Olinsky", username: "pdox9235", id: 2, isLoggedIn: true, profilePicURL: "https://picsum.photos/id/22/200/300"},
      { name: "John Smith", username: "jsmitty", id: 3, isLoggedIn: false }
  ]);

  const addUser = (user: User) => {
    users.push(user);
  };

  return { users, addUser};
};
