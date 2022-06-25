import { Action } from "@ngrx/store";
import { Region } from "src/models/types/region.type";


export namespace WORLD_ACTION {
    export const GET_COUNTRIES_BY_REGION = 'GET_COUNTRIES_BY_REGION';
    export const GET_COUNTRIES_BY_REGION_SUCCESSFULLY = 'GET_COUNTRIES_BY_REGION_SUCCESSFULLY';
    export const GET_COUNTRIES_BY_REGION_FAILED = 'GET_COUNTRIES_BY_REGION_FAILED';
    export const SET_REGION_ACTIVE = 'SET_REGION_ACTIVE';
    export const SHOW_LOADING_SPINNER = 'SHOW_LOADING_SPINNER';
    export const HIDE_LOADING_SPINNER  = 'HIDE_LOADING_SPINNER';
}

export class ShowLoadingSpinner implements Action {
  readonly type: string = WORLD_ACTION.SHOW_LOADING_SPINNER ;
constructor() {
}
}

export class HideLoadingSpinner implements Action {
  readonly type: string = WORLD_ACTION.HIDE_LOADING_SPINNER ;
constructor() {
}
}

export class GetCountriesByRegion implements Action {
    readonly type: string = WORLD_ACTION.GET_COUNTRIES_BY_REGION;
  constructor(public payload: {region: Region}) {
  }
}

export class GetCountriesByRegionSuccessfully implements Action {
    readonly type: string = WORLD_ACTION.GET_COUNTRIES_BY_REGION_SUCCESSFULLY;
    constructor(public payload: {regionName: Region, countries: any}) {
  }
}

export class GetCountriesByRegionFailed implements Action {
    readonly type: string = WORLD_ACTION.GET_COUNTRIES_BY_REGION_FAILED;
    constructor(public payload: {error: string}) {
  }
}

export class SetRegionActive implements Action {
    readonly type: string = WORLD_ACTION.SET_REGION_ACTIVE;
  constructor(public payload: {region: Region}) {
  }

}