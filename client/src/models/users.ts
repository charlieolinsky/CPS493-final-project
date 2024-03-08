import data from '../data/users.json';  

export interface User {
    name: string
    username: string
    profilePicURL: string
    description: string
    distance: string
    duration: string
    location: string
    imageURL: string
}

export function getUsers(): User[] {
    return data.items;
}