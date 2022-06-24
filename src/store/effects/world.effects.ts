import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { WorldService } from "src/services/world.service";
import { AppState } from "..";

@Injectable()
export class WorldEffects{

    @Effect()
    loadCountriesData$: Observable<Action> = this.actions$.pipe(

    )


    constructor(private actions$: Actions,
        private store: Store<AppState>,
        private router: Router,
        private worldService: WorldService) { }
}