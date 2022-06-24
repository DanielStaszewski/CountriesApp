import { Action } from "@ngrx/store";


export namespace WORLD_ACTION {
    export const GET_COUNTRIES_BY_REGION = 'GET_COUNTRIES_BY_REGION';
    export const GET_COUNTRIES_BY_REGION_SUCCESSFULLY = 'GET_COUNTRIES_BY_REGION_SUCCESSFULLY';
    export const GET_COUNTRIES_BY_REGION_FAILED = 'GET_COUNTRIES_BY_REGION_FAILED';
}

export class GetCountriesByRegion implements Action {
    readonly type: string = WORLD_ACTION.GET_COUNTRIES_BY_REGION;
  constructor(public payload: any) {
  }
}

export class GetCountriesByRegionSuccessfully implements Action {
    readonly type: string = WORLD_ACTION.GET_COUNTRIES_BY_REGION_SUCCESSFULLY;
    constructor(public payload: any) {
  }
}

export class GetCountriesByRegionFailed implements Action {
    readonly type: string = WORLD_ACTION.GET_COUNTRIES_BY_REGION_FAILED;
    constructor(public payload: any) {
  }
}