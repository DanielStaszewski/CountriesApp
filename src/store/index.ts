import { ActionReducerMap, createSelector } from "@ngrx/store";
import { worldReducer, WorldState } from "./reducers/world.reducer";

export interface AppState {
    worldState: WorldState;
}

export const Reducers: ActionReducerMap<AppState> = {
    worldState: worldReducer
}

//selectors 
export const worldState = (state: AppState) => state.worldState;
export const countriesForRegion = createSelector(worldState, (state: WorldState) => state.regions.find(region => region.active)?.countries);