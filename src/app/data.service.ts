import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable } from 'rxjs';

// const STORAGE_KEY = "todo";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // base url
  public url :string = "http://api.openweathermap.org/data/2.5/weather"

  constructor( private http: HttpClient) { }

  // this service does the api call to get weather info from city name.
  public getWeatherInfo(cityName): Observable<any>{
    let id = "094aa776d64c50d5b9e9043edd4ffd00"
    return this.http.get<any>(this.url, {params:{q: cityName, appid: id }}  );
  }

}
