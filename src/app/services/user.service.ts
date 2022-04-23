import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _httpservices : HttpService) { }

  getUsersMonthly(){
      return this._httpservices.get(environment.serverUrl +'admin/getUsersMonthly');
    }
  getUsers(){
      return this._httpservices.get(environment.serverUrl +'admin/sortBySubscribers');
    }


    getStats(){
      return this._httpservices.get(environment.serverUrl +'admin/quickStats');
    }
    getEarning(){
      return this._httpservices.get(environment.serverUrl +'admin/quickStats');
    }
    getProfile(){
      return this._httpservices.get(environment.serverUrl +'admin/quickStats');
    }
    getProfilePic(){
      return this._httpservices.get(environment.serverUrl +'admin/getProfilepic');
    }
     profileUpdate(obj){
      return this._httpservices.update(environment.serverUrl +'admin/updateAdmin',obj);
    }
    imageUpload(obj){
      return this._httpservices.update(environment.serverUrl +'admin/upload',obj);
    }
    updatePassword(obj){
      return this._httpservices.update(environment.serverUrl +'admin/updateProfile',obj);
    }
    updateProfile(obj){
      return this._httpservices.update(environment.serverUrl +'admin/updateProfile',obj);
    }

}
