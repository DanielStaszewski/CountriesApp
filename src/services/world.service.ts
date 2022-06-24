import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Region } from "src/models/types/region.type";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WorldService {

  private readonly regionCountriesEndpoint = environment.worldApi + "region";

  constructor(private httpClient: HttpClient) { }

  getCountriesByRegion(region: Region){
    return this.httpClient
      .get(`${this.regionCountriesEndpoint}/${region}`);
  }
}
