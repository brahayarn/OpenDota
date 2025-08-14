import { Hero } from ".";

export type RootStackParamList = {
    Home: undefined;
    HeroDetail: { hero: Hero }; 
};