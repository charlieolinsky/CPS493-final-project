import data from '../data/activity.json';  

export interface Actviity {
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

export function getActviity(): Actviity[] {
    return data.items;
}