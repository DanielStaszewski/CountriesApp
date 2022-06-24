import { ActionReducerMap } from "@ngrx/store";
import { countriesReducer, CountriesState } from "./reducers/countries.reducer";

export interface AppState {
    countriesState: CountriesState;
}

export const Reducers: ActionReducerMap<AppState> = {
    countriesState: countriesReducer
}

//selectors 
export const countriesState = (state: AppState) => state.countriesState;