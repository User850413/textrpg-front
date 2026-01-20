export type Backpack = {
    id: string;
    maxCarriage: number;
    name: string;
}

export type BackpackResponse = {
    id: string;
    name: string;
    maxCarriage: number;
    currentCarriage: number;
}