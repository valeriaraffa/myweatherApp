import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WheaterApiService } from '../wheaterAPI/wheater-api.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  //aktuelle Wetterdaten 
  public dateC:any;
  public tempC:any;
  public precipC:any;
  public iconC:String='';

    // Stündliche Wettervohersage 
    public date0:any;
    public temp0:any;
    public precip0:any;
    public icon0:String='';

    // Stündliche Wettervohersage 
    public date10:any;
    public temp10:any;
    public precip10:any;
    public icon10:String='';

    public date20:any;
    public temp20:any;
    public precip20:any;
    public icon20:String='';

  constructor(private WeatherAPI: WheaterApiService) {
    this.loadAPIweatherData();
  }

  async loadAPIweatherData(){

    // LOS Angeles LA
  
       // aktuelle Wettervohersage 
       let dataweatherid: Observable<any>;
       // Go to wheater API services
       dataweatherid = await this.WeatherAPI.getCurrent(5368361);
       dataweatherid.subscribe(results => {
        var obj = <any>results;
        // console.log(obj);
        this.dateC = obj.data[0].datetime;
        console.log(this.dateC);
        this.tempC = obj.data[0].temp +"°";
        this.precipC = obj.data[0].precip+"%";
        this.iconC = "https://www.weatherbit.io/static/img/icons/"+obj.data[0].weather.icon+".png";
       
    })


        // LA ID =  5368361
        let dataforecastid: Observable<any>;
  
        // Stündliche Wettervohersage 
        dataforecastid = await this.WeatherAPI.getForecasts(5368361);
        dataforecastid.subscribe(results => {
            var obj = <any>results;
            console.log(obj);
            this.date0 = obj.data[0].datetime;
            // console.log(this.date0);
            this.temp0 = obj.data[0].temp +"°";
            this.precip0 = obj.data[0].precip+"%";
            this.icon0 = "https://www.weatherbit.io/static/img/icons/"+obj.data[0].weather.icon+".png";
            
            this.date10 = obj.data[10].datetime;
            this.temp10 = obj.data[10].temp +"°";
            this.precip10 = obj.data[10].precip+"%";
            this.icon10 = "https://www.weatherbit.io/static/img/icons/"+obj.data[10].weather.icon+".png";

            this.date20 = obj.data[20].datetime;
            this.temp20 = obj.data[20].temp +"°";
            this.precip20 = obj.data[20].precip+"%";
            this.icon20 = "https://www.weatherbit.io/static/img/icons/"+obj.data[20].weather.icon+".png";
        })
    
  }
}
