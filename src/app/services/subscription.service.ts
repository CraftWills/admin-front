import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private _httpServe: HttpService) { }
  getSubscriptionUser(){
    return this._httpServe.get(environment.serverUrl +'admin/allSubscriptionUsers');
  }
  getSortByuser(){
    return this._httpServe.get(environment.serverUrl +'admin/sortBySubscribers');
  }
  totalSubscribedUser() {
    return this._httpServe.get(environment.serverUrl + 'admin/totalSubscribedUser');
  }
  subscriptionHistory() {
    return this._httpServe.get(environment.serverUrl + 'subscription/subscriptionHistory');
  }
  getPromoCode() {
    return this._httpServe.get(environment.serverUrl + 'subscription/getPromocode');
  }
  deletePromoCode(id) {
    return this._httpServe.delete(environment.serverUrl + `subscription/deletePromocode/${id}`);
  }
  getPlansList(){
    return this._httpServe.get(environment.serverUrl + 'subscription/getPlanDetails');
  }
  getSubscriptionStats(){
    return this._httpServe.get(environment.serverUrl + 'admin/totalSubscribedUser');
  }
  deleteUser(id){
    return this._httpServe.delete(environment.serverUrl + `admin/deleteUser/${id}`);
  }
}
