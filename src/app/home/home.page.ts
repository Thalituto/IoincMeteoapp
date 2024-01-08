import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  weatherData:any;
  temperature:any;
  humidity:any;
  pressure:any;
  pays:any;
  ville: string = '';
  cityname:string = '';
  constructor(private router:Router,private httpClient:HttpClient) {
    this.getDataFromApis();
  }
  calculator():void{
    this.router.navigate(['calculator'])
  }
getDataFromApis(){
this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Rabat&appid=f970f5db2177d4a152241ec1d1088270&units=metric')
.subscribe((data)=>{
  this.weatherData = data;
  console.log(this.weatherData['main']);
  this.temperature=this.weatherData['main']['temp'];
console.log(this.temperature);
this.pressure=this.weatherData['main']['pressure'];

this.humidity=this.weatherData['main']['humidity'];

this.pays=this.weatherData['sys']['country'];
this.cityname=this.weatherData['name'];

} );

}

searchWeather() {
  if (this.ville.trim() !== '') {
    this.httpClient
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.ville}&appid=f970f5db2177d4a152241ec1d1088270&units=metric`
      )
      .subscribe((data) => {
        this.weatherData = data;
        console.log(this.weatherData['main']);
        this.temperature = this.weatherData['main']['temp'];
        console.log(this.temperature);
        this.pressure = this.weatherData['main']['pressure'];
        this.humidity = this.weatherData['main']['humidity'];
        this.pays = this.weatherData['sys']['country'];
        this.cityname=this.weatherData['name'];
      });
  } else {
    
    console.log('Please enter a city');
  }
}
  
}
