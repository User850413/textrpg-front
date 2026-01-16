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