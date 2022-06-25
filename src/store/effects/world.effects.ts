
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { WorldService } from "src/services/world.service";
import { AppState } from "..";
import { GetCountriesByRegionFailed, GetCountriesByRegionSuccessfully, HideLoadingSpinner, ShowLoadingSpinner, WORLD_ACTION } from "../actions/world.actions";
import {catchError, map, switchMap, tap} from 'rxjs/operators';

@Injectable()
export class WorldEffects{

    @Effect()
    loadCountriesData$: Observable<Action> = this.actions$.pipe(
        ofType(WORLD_ACTION.GET_COUNTRIES_BY_REGION),
        tap(() => this.store.dispatch(new ShowLoadingSpinner())),
        switchMap(
            (action: any) => this.worldService.getCountriesByRegion(action.payload.region)
                .pipe(
                    tap(() => this.store.dispatch(new HideLoadingSpinner())),
                    map((response) => new GetCountriesByRegionSuccessfully({regionName: action.payload.region, countries: response})),
                    catchError(() => of(new GetCountriesByRegionFailed({error: "Fetching countries failed"})))
                )
        )
    )


    constructor(private actions$: Actions,
        private store: Store<AppState>,
        private router: Router,
        private worldService: WorldService) { }
}