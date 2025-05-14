import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getWaterData() :Observable<any>{

    return this.http.get(environment.apiurl+'/api/v1/waterData');
    
  }

  searchProducts(searchText: string) {
  return this.http.get(environment.apiurl + '/api/v1/waterData/' + searchText);
}

addWaterData(data: any) {
  return this.http.post(environment.apiurl + '/api/v1/addWater', data);
}
 


}
