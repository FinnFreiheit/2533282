import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApixuService} from '../apixu.service';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-weather-comp',
  templateUrl: './weather-comp.component.html',
  styleUrls: ['./weather-comp.component.css']
})
export class WeatherCompComponent implements OnInit {
  weatherSearchForm!: FormGroup;
  public weatherData: any;
  public lat: any;
  public lng: any;

  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService
  ) {
  }

  ngOnInit(): void {
    this.getUserLocation();
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    if (this.lat !== undefined && this.lng !== undefined) {
      this.sendToAPIXU({location: this.lat + ',' + this.lng});
    } else {
      this.sendToAPIXU({location: 'Stuttgart'});
    }
    console.log(this.lat);
    console.log(this.lng);
  }

  getUserLocation(): void {
    // get Users current position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log('position', position);
      });
    } else {
      console.log('User not allowed');
    }
  }


  sendToAPIXU(formValues: any): void {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe((data: any) => {
        console.log(formValues);
        this.weatherData = data;
        console.log(this.weatherData);
      });
  }
}
