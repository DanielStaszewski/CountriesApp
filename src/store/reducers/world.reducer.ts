import produce from "immer"
import { Regions } from "src/models/namespaces/regions.namespace";
import { Region } from "src/models/types/region.type"
import { WORLD_ACTION } from "../actions/world.actions"

export interface WorldState {
    regions: Array<{
        name: Region;
        countries: any[];
        active: boolean
    }>
}

const initialWorldState: WorldState = {
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
                    draft.regions[regionIndex].active = true;
                }
                return;

            case WORLD_ACTION.GET_COUNTRIES_BY_REGION_FAILED:
                console.error(action.payload.error);
                return;

        }
    }, initialWorldState)(worldState, action)
}