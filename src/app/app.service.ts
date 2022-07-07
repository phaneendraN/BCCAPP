import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { map, Observable } from "rxjs";

@Injectable()
export class AppService{
  constructor(public http:HttpClient){}

  getHorizantalData():Observable<any>{
    let url = "assets/jsonFiles/horizantalBarChartData.json";
    return this.http.get(url).pipe(map((res) => res));
  }

}
