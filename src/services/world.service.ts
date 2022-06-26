import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Region } from "src/models/types/region.type";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class WorldService {

  private readonly regionCountriesEndpoint = environment.worldApi + "region";
  private readonly countryDetailsEndpoint = environment.worldApi + "name";

  constructor(private httpClient: HttpClient) { }

  getCountriesByRegion(region: Region): Observable<Object> {
    return this.httpClient
      .get(`${this.regionCountriesEndpoint}/${region}`);
  }

  getCountryDetails(countryName: string): Observable<Object>{
    return this.httpClient
      .get(`${this.countryDetailsEndpoint}/${countryName}`);
  }
}
