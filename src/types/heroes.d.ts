import type { Backpack } from "./backpacks";
import type { Place } from "./place";
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

export type HeroDetailResponse = {
    id: string;
    name: string;
    locationName: string;
    locationId: string;
    backpackName: string;
    backpackMax: number;
    level: number;
    exp: number;
}