import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.component.html',
  styleUrls: ['./allcategories.component.css']
})
export class AllcategoriesComponent {

  categories:any=[];
  categories_num:any;

  constructor(private apiservice:ServicesService,private router:Router){}

  ngOnInit(){
    this.apiservice.get_categories()
    .subscribe({next:(data:any)=>{
      this.categories = data[0];
      this.categories_num = data[1];
    }})
  }

  todelete(){
    this.router.navigate(["/dashboard/deletecategory"]);
  }

}
