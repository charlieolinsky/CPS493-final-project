import { reactive } from "vue";

// Define the User interface with expected properties for each user.
export interface User {
  name: string;
  username: string;
  id: number;
  isLoggedIn: boolean;
  profilePicURL?: string; // Optional property
  isAdmin: boolean;
  emails: string[];
}

// Define the UserStore interface, outlining the structure of our user store including the users array and functions to manipulate it.
interface UserStore {
  users: User[];
  userLogIn(username: string): void; // Function to log a user in
  userLogOut(): void; // Function to log the current user out
  getLoggedInUser(): User | undefined; // Function to get the currently logged-in user
}

// Variable to ensure only one instance of the store is used application-wide.
let userStoreinstance: UserStore | null = null;

// Function to get the current UserStore instance, creating it if it doesn't exist.
export const getUserStore = (): UserStore => {
  if (userStoreinstance === null) {
    userStoreinstance = createInstance();
  }
  return userStoreinstance;
};

// Private function to create an instance of UserStore, initializing it with default users and methods to manipulate the store.
function createInstance(): UserStore {
  // Initialize users array with default users, making it reactive.
  const users = reactive<User[]>([
    // Default users
    { name: "Charles Olinsky", username: "pdox9235", id: 2, isLoggedIn: false, profilePicURL: "https://picsum.photos/id/22/200/200", isAdmin: true, emails:["charlesolinsky@gmail.com", "olinskyc1@newpaltz.edu"]},
    { name: "Moshe Plotkin", username: "jewpaltz", id: 1, isLoggedIn: false, profilePicURL: "https://picsum.photos/id/1/200/200", isAdmin: false, emails:["charlesolinsky@gmail.com", "olinskyc1@newpaltz.edu"]},
    { name: "John Smith", username: "jsmitty", id: 3, isLoggedIn: false, isAdmin: false, profilePicURL: "https://picsum.photos/id/6/200/200" , emails:["charlesolinsky@gmail.com", "olinskyc1@newpaltz.edu"] }
  ]);

  // Method to log a user in by setting their isLoggedIn flag to true.
  const userLogIn = (name: string) => {
    users.forEach((user) => {
      if (user.name === name) {
        user.isLoggedIn = true;
        console.log(`${user.name} is logged in`);
      }
    });
  };

  // Method to log out the currently logged-in user.
  const userLogOut = () => {
    users.forEach((user) => {
      if (user.isLoggedIn) {
        user.isLoggedIn = false;
        console.log(`${user.name} is logged out`);
      }
    });
  };

  // Method to find and return the currently logged-in user, if any.
  const getLoggedInUser = () => {
    return users.find((user) => user.isLoggedIn === true);
  };

  // Return the store instance with users and methods.
  return { users, userLogIn, userLogOut, getLoggedInUser };
};
