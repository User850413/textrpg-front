import type { Backpack, BackpackResponse } from "./backpacks";
import type { Place, PlaceResponse } from "./place";
import type { User } from "./users";

export type Hero = {
    id: string;
    name: string;
    place: Place;
    backpack: Backpack;
    level: number;
    exp: number;
    user: User;
}

export type HeroGeneralResponse = {
    id: string;
    name: string;
    location: PlaceResponse;
    backpack: BackpackResponse;
    level: number;
    exp: number;
}

export type HeroDetailResponse = {
    id: string;
    name: string;
    location: PlaceResponse;
    backpack: BackpackResponse;
    level: number;
    exp: number;
}
