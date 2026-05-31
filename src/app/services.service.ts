import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  categoriesURL = "https://laravelbikesrental-production.up.railway.app/api/categories";
  bikesURL = "https://laravelbikesrental-production.up.railway.app/api/bikes";
  adduserURL = "https://laravelbikesrental-production.up.railway.app/api/addUser";
  bikeURL = "https://laravelbikesrental-production.up.railway.app/api/bike/";
  offersURL = "https://laravelbikesrental-production.up.railway.app/api/offers/";
  categorybikeURL = "https://laravelbikesrental-production.up.railway.app/api/categoryBikes/";
  durationsURL = "https://laravelbikesrental-production.up.railway.app/api/durations";
  locationsURL = "https://laravelbikesrental-production.up.railway.app/api/locations";
  homebikesURL = "https://laravelbikesrental-production.up.railway.app/api/homeBikes";
  loginURL = "https://laravelbikesrental-production.up.railway.app/api/login";
  userURL = "https://laravelbikesrental-production.up.railway.app/api/user/";
  rentURL = "https://laravelbikesrental-production.up.railway.app/api/rent";
  receiptURL = "https://laravelbikesrental-production.up.railway.app/api/receipt";
  creditURL = "https://laravelbikesrental-production.up.railway.app/api/credit";
  messageURL = "https://laravelbikesrental-production.up.railway.app/api/message";
  getbikesURL = "https://laravelbikesrental-production.up.railway.app/api/getbikes";
  usersURL = "https://laravelbikesrental-production.up.railway.app/api/users";
  rentalsURL = "https://laravelbikesrental-production.up.railway.app/api/rentals";
  limitedbikesURL = "https://laravelbikesrental-production.up.railway.app/api/limitedbikes";
  limitedrentalsURL = "https://laravelbikesrental-production.up.railway.app/api/limitedrentals";
  alloffersURL = "https://laravelbikesrental-production.up.railway.app/api/alloffers";
  addcategoryURL = "https://laravelbikesrental-production.up.railway.app/api/addcategory";
  updatecategoryURL = "https://laravelbikesrental-production.up.railway.app/api/updatecategory";
  updatebikeURL = "https://laravelbikesrental-production.up.railway.app/api/updatebike";
  addbikeURL = "https://laravelbikesrental-production.up.railway.app/api/addbike";
  deletecategoryURL = "https://laravelbikesrental-production.up.railway.app/api/deletecategory";
  deletebikeURL = "https://laravelbikesrental-production.up.railway.app/api/deletebike";
  addlocationURL = "https://laravelbikesrental-production.up.railway.app/api/addlocation";
  updatelocationURL = "https://laravelbikesrental-production.up.railway.app/api/updatelocation";
  deletelocationURL = "https://laravelbikesrental-production.up.railway.app/api/deletelocation";
  addofferURL = "https://laravelbikesrental-production.up.railway.app/api/addoffer";
  updateofferURL = "https://laravelbikesrental-production.up.railway.app/api/updateoffer";
  deleteofferURL = "https://laravelbikesrental-production.up.railway.app/api/deleteoffer";
  updatebikenameURL = "https://laravelbikesrental-production.up.railway.app/api/updatebikename";
  updatebikedesURL = "https://laravelbikesrental-production.up.railway.app/api/updatebikedescription";
  updatebikecategoryURL = "https://laravelbikesrental-production.up.railway.app/api/updatebikecategory";
  updatebikeageURL = "https://laravelbikesrental-production.up.railway.app/api/updatebikeage";
  discountURL = "https://laravelbikesrental-production.up.railway.app/api/discount/";

  constructor(private http:HttpClient) {}

  get_categories(){
    return this.http.get<[]>(this.categoriesURL);
  }
  get_bikes(){
    return this.http.get<[]>(this.bikesURL);  
  }
  get_home_bikes(){
    return this.http.get<[]>(this.homebikesURL);  
  }
  get_offers(cond:any){
    return this.http.get<[]>(this.offersURL+cond);  
  }
  discount(cond:any){
    return this.http.get<[]>(this.discountURL+cond);  
  }
  get_bike(cond:any){
    return this.http.get<[]>(this.bikeURL+cond);  
  }
  get_category_bikes(cond:any){
    return this.http.get<[]>(this.categorybikeURL+cond);  
  }
  get_durations(){
    return this.http.get<[]>(this.durationsURL);
  }
  get_locations(){
    return this.http.get<[]>(this.locationsURL);
  }
  insert_user(user:any){
    return this.http.post<[]>(this.adduserURL,user);
  }
  login(user:any){
    const body = JSON.stringify(user);
    return this.http.post<[]>(this.loginURL,body);  
  }
  get_user(cond:any){
    return this.http.get<[]>(this.userURL+cond);  
  }
  rent(data:any){
    return this.http.post<[]>(this.rentURL,data);  
  }
  receipt(){
    return this.http.get<[]>(this.receiptURL);  
  }
  credit(data:any,cond:any){
    return this.http.post<[]>(this.creditURL+cond,data);  
  }
  message(data:any,cond:any){
    return this.http.post<[]>(this.messageURL+cond,data);  
  }
  all_bikes(){
    return this.http.get<[]>(this.getbikesURL);  
  }
  all_users(){
    return this.http.get<[]>(this.usersURL);  
  }
  all_rentals(){
    return this.http.get<[]>(this.rentalsURL);  
  }
  limited_bikes(){
    return this.http.get<[]>(this.limitedbikesURL);  
  }
  limited_rentals(){
    return this.http.get<[]>(this.limitedrentalsURL);  
  }
  all_offers(){
    return this.http.get<[]>(this.alloffersURL);  
  }
  add_category(data:any){
    return this.http.post<[]>(this.addcategoryURL,data);  
  }
  update_category(data:any){
    return this.http.post<[]>(this.updatecategoryURL,data);  
  }
  delete_category(data:any){
    return this.http.post<[]>(this.deletecategoryURL,data);  
  }
  delete_bike(data:any){
    return this.http.post<[]>(this.deletebikeURL,data);  
  }
  add_location(data:any){
    return this.http.post<[]>(this.addlocationURL,data);  
  }
  update_location(data:any){
    return this.http.post<[]>(this.updatelocationURL,data);  
  }
  delete_location(data:any){
    return this.http.post<[]>(this.deletelocationURL,data);  
  }
  add_offer(data:any){
    return this.http.post<[]>(this.addofferURL,data);  
  }
  update_offer(data:any){
    return this.http.post<[]>(this.updateofferURL,data);  
  }
  delete_offer(data:any){
    return this.http.post<[]>(this.deleteofferURL,data);  
  }
  update_bike_name(data:any){
    return this.http.post<[]>(this.updatebikenameURL,data);  
  }
  update_bike_description(data:any){
    return this.http.post<[]>(this.updatebikedesURL,data);  
  }
  update_bike_category(data:any){
    return this.http.post<[]>(this.updatebikecategoryURL,data);  
  }
  update_bike_age(data:any){
    return this.http.post<[]>(this.updatebikeageURL,data);  
  }
  update_bike(data:any){
    return this.http.post<any>(this.updatebikeURL,data)
  }
  add_bike(data:any){
    return this.http.post<any>(this.addbikeURL,data)
  }
}

