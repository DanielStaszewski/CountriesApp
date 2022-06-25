import { ActionReducerMap, createSelector } from "@ngrx/store";
import { Region } from "src/models/types/region.type";
import { worldReducer, WorldState } from "./reducers/world.reducer";

export interface AppState {
    worldState: WorldState;
}

export const Reducers: ActionReducerMap<AppState> = {
    worldState: worldReducer
}

//selectors 
export const worldState = (state: AppState) => state.worldState;
export const isLoading = createSelector(worldState, (state: WorldState) => state.isLoading);
export const countriesForRegion = createSelector(worldState, (state: WorldState, r: Region) => state.regions.find(region => region.name === r)?.countries);
export const country = createSelector(worldState, (state: WorldState, c: {regionName: Region, country: string}) => 
    state.regions.find(region => region.name === c.regionName)?.countries.find(country => country.name.common === c.country));
