import { Action } from "@ngrx/store";


export namespace WORLD_ACTION {
    export const GET_COUNTRIES = 'GET_COUNTRIES';
    export const GET_COUNTRIES_SUCCESSFULLY = 'GET_COUNTRIES_SUCCESSFULLY';
    export const GET_COUNTRIES_FAILED = 'GET_COUNTRIES_FAILED';
}

export class GetCountries implements Action {
    readonly type: string = WORLD_ACTION.GET_COUNTRIES;
  constructor(public payload: any) {
  }
}

export class GetCountriesSuccessfully implements Action {
    readonly type: string = WORLD_ACTION.GET_COUNTRIES_SUCCESSFULLY;
    constructor(public payload: any) {
  }
}

export class GetCountriesFailed implements Action {
    readonly type: string = WORLD_ACTION.GET_COUNTRIES_FAILED;
    constructor(public payload: any) {
  }
}