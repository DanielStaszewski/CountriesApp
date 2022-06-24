import produce from "immer"

export interface CountriesState {
 
}

const initialCountriesState: CountriesState = {

}

export function countriesReducer(countriesState = initialCountriesState, action){
    return produce((draft, countriesAction) => {
        switch(action.type){
            
        }
    })
}