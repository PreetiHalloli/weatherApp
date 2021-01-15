import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  // This variable is used to store the data of weather information
  public weatherInfo: any;

  // It is used to save the city name.
  public cityname: string;

  constructor(private service: DataService) { }

  ngOnInit() {
  }

  /* this method checks the data is available or not in localstorage dependin on that 
  it wil call service.
   */
  public getWeather() {

    let dataFromLocalstorage = localStorage.getItem(this.cityname)
    let retrievedObject = JSON.parse(dataFromLocalstorage);

    if (dataFromLocalstorage) {
      this.weatherInfo = retrievedObject
    } else {
      this.service.getWeatherInfo(this.cityname).subscribe(data => {
        this.weatherInfo = data;
        let dataObj = {
          main: {
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            temp: data.main.temp,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
          },
          name: data.name
        }
        localStorage.setItem(this.cityname, JSON.stringify(dataObj));
      })
    }
  }

}
