import produce from "immer"
import { Regions } from "src/models/namespaces/regions.namespace";
import { Region } from "src/models/types/region.type"
import { WORLD_ACTION } from "../actions/world.actions"

export interface WorldState {
    isLoading: boolean,
    regions: Array<{
        name: Region;
        countries: any[];
        active: boolean
    }>
}

const initialWorldState: WorldState = {
    isLoading: false,
    regions: [
        {
            name: Regions.AFRICA,
            countries: [],
            active: false
        },
        {
            name: Regions.AMERICA,
            countries: [],
            active: false
        },
        {
            name: Regions.ASIA,
            countries: [],
            active: false
        },
        {
            name: Regions.EUROPE,
            countries: [],
            active: false
        },
        {
            name: Regions.OCEANIA,
            countries: [],
            active: false
        },
    ]
}

export function worldReducer(worldState = initialWorldState, action): WorldState{
    return produce((draft, worldAction) => {
        switch(action.type){
            
            case WORLD_ACTION.GET_COUNTRIES_BY_REGION_SUCCESSFULLY:
                const regionIndex = draft.regions.findIndex(region => region.name === action.payload.regionName);
                if(regionIndex !== -1){
                    draft.regions[regionIndex].countries = action.payload.countries;
                }
                return;

            case WORLD_ACTION.GET_COUNTRIES_BY_REGION_FAILED:
                console.error(action.payload.error);
                return;

            case WORLD_ACTION.SET_REGION_ACTIVE:
                const regionActiveIndex = draft.regions.findIndex(region => region.name === action.payload.region);
                if(regionActiveIndex !== -1){
                    draft.regions.map(region => ({...region, active: false}));
                    draft.regions[regionActiveIndex].active = true;
                }
                return;
            
            case WORLD_ACTION.SHOW_LOADING_SPINNER:
                draft.isLoading = true;
                return;
            
            case WORLD_ACTION.HIDE_LOADING_SPINNER:
                draft.isLoading = false;
                return;
        }
    }, initialWorldState)(worldState, action)
}