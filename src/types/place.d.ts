export type Place = {
    id: string;
    name: string;
    placeId: string;
}

export type PlaceResponse = {
    id: string;
    name: string;
    placeId: string;
}

export type PlaceDetailResponse = {
    id: string;
    name: string;
    placeId: string;
    connectedPlace: PlaceResponse[];
}