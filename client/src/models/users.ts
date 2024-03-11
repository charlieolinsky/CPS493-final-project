import data from '../data/users.json';  

export interface User {
    name: string
    username: string
    profilePicURL: string
    title: string
    distance: string
    duration: string
    location: string
    imageURL: string
    timePosted: string
}

export function getUsers(): User[] {
    return data.items;
}