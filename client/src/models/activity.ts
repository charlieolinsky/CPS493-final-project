import data from '../data/activity.json';  

export interface Activity {
    name: string
    username: string
    title: string
    distance: number
    duration: string
    location: string
    imageURL: string
    timePosted: string
}

export function getActivity(): Activity[] {
    return data.items;
}