import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PromocodeService {

  constructor(private _httpservices : HttpService) { }
  createPromo(obj){
    return this._httpservices.post(environment.serverUrl +'admin/createPromocode',obj);
  }
  editPromo(obj,id){
    return this._httpservices.update(environment.serverUrl +`admin/updatePromocode/${id}`,obj);
  }
  deletePromo(_id){
    return this._httpservices.delete(environment.serverUrl +`admin/deletePromocode/${_id}`);
  }
  csvUpload(obj){
    return this._httpservices.update(environment.serverUrl +'admin/upload',obj);
  }
  getPromo(){
    return this._httpservices.get(environment.serverUrl +'admin/getPromocode');
  }
}
