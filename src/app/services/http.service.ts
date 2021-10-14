import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  path = environment.path;

  constructor(private http:HttpClient) { }

  getEgyptStats(){
  return  this.http.get(this.path+'egypt');
  }
  getNodeStats(fetchNodeId:number){
    return this.http.get(this.path+'node',{
      params:{
        'nodeId':fetchNodeId.toString()
      }
    });

  }
  getCityStats(fetchCityId:number){
    return this.http.get(this.path+'city',{
      params:{
        'cityId':fetchCityId.toString()
      }
    });

  }
}
