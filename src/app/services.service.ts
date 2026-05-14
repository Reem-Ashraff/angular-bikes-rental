import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  categoriesURL = "/api/categories";
  bikesURL = "/api/bikes";
  adduserURL = "https://bikes-rental.infinityfreeapp.com/bikes_rental_laravel/public/api/addUser";
  bikeURL = "/api/bike/";
  offersURL = "/api/offers/";
  categorybikeURL = "/api/categoryBikes/";
  durationsURL = "/api/durations";
  locationsURL = "/api/locations";
  homebikesURL = "/api/homeBikes";
  loginURL = "/api/login";
  userURL = "https://bikes-rental.infinityfreeapp.com/bikes_rental_laravel/public/api/user/";
  rentURL = "http://localhost:8080/bikes_rental_laravel/public/api/rent";
  receiptURL = "http://localhost:8080/bikes_rental_laravel/public/api/receipt";
  creditURL = "http://localhost:8080/bikes_rental_laravel/public/api/credit/";
  messageURL = "http://localhost:8080/bikes_rental_laravel/public/api/message/";
  getbikesURL = "/api/getbikes";
  usersURL = "http://localhost:8080/bikes_rental_laravel/public/api/users";
  rentalsURL = "http://localhost:8080/bikes_rental_laravel/public/api/rentals";
  limitedbikesURL = "http://localhost:8080/bikes_rental_laravel/public/api/limitedbikes";
  limitedrentalsURL = "http://localhost:8080/bikes_rental_laravel/public/api/limitedrentals";
  alloffersURL = "http://localhost:8080/bikes_rental_laravel/public/api/alloffers";
  addcategoryURL = "http://localhost:8080/bikes_rental_laravel/public/api/addcategory";
  updatecategoryURL = "http://localhost:8080/bikes_rental_laravel/public/api/updatecategory";
  updatebikeURL = "http://localhost:8080/bikes_rental_laravel/public/api/updatebike";
  addbikeURL = "http://localhost:8080/bikes_rental_laravel/public/api/addbike";
  deletecategoryURL = "http://localhost:8080/bikes_rental_laravel/public/api/deletecategory";
  deletebikeURL = "http://localhost:8080/bikes_rental_laravel/public/api/deletebike";
  addlocationURL = "http://localhost:8080/bikes_rental_laravel/public/api/addlocation";
  updatelocationURL = "http://localhost:8080/bikes_rental_laravel/public/api/updatelocation";
  deletelocationURL = "http://localhost:8080/bikes_rental_laravel/public/api/deletelocation";
  addofferURL = "http://localhost:8080/bikes_rental_laravel/public/api/addoffer";
  updateofferURL = "http://localhost:8080/bikes_rental_laravel/public/api/updateoffer";
  deleteofferURL = "http://localhost:8080/bikes_rental_laravel/public/api/deleteoffer";
  updatebikenameURL = "http://localhost:8080/bikes_rental_laravel/public/api/updatebikename";
  updatebikedesURL = "http://localhost:8080/bikes_rental_laravel/public/api/updatebikedescription";
  updatebikecategoryURL = "http://localhost:8080/bikes_rental_laravel/public/api/updatebikecategory";
  updatebikeageURL = "http://localhost:8080/bikes_rental_laravel/public/api/updatebikeage";
  discountURL = "http://localhost:8080/bikes_rental_laravel/public/api/discount/";

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

