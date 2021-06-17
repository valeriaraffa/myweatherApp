import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheaterApiService {
  
  // API stündliche wetterdaten: 'https://api.weatherbit.io/v2.0/history/hourly?city_id=5368361&start_date=2021-06-16&end_date=2021-06-17&key=a0e178e53c6e4077834d7d4b21b6311b'
  urlfs ='https://api.weatherbit.io/v2.0/history/hourly';
  
  // API aktuelle wetterdaten: 'https://api.weatherbit.io/v2.0/current?city_id=4487042&key=a0e178e53c6e4077834d7d4b21b6311b'
  urlc ='https://api.weatherbit.io/v2.0/current';

  // Key
  appid ='a0e178e53c6e4077834d7d4b21b6311b';

  constructor(private http: HttpClient) { }

  // API stündliche wetterdaten
  async getForecasts(id) {
  
    let data: Observable<any>;
      data = await this.http.get(`${this.urlfs}?city_id=${id}&start_date=2021-06-16&end_date=2021-06-17&key=${this.appid}`);
      // console.log(data);
    return data;
       
    }

    // API aktuelle wetterdaten
    async getCurrent(id) {
  
      let data: Observable<any>;
        data = await this.http.get(`${this.urlc}?city_id=${id}&key=${this.appid}`);
        // console.log(data);
      return data;
         
      }
  
  
}
