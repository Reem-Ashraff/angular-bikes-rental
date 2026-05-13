import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deletecategory',
  templateUrl: './deletecategory.component.html',
  styleUrls: ['./deletecategory.component.css']
})
export class DeletecategoryComponent {

  delete:FormGroup;
  message = '';
  message2 = '';
  categories:any=[];

  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice:ServicesService){ 
    this.delete = this.formBuilder.group({
      id: ['', [Validators.required]],
    })
  }

  ngOnInit(){
    this.apiservice.get_categories()
    .subscribe({next:(data:any)=>{
      this.categories = data[0];
    }})
  }

  get f() {
    return this.delete.controls;
  }

  submit(){
    this.apiservice.delete_category(this.delete.value)
    .subscribe({next:(data:any)=>{
      if(data['message']=='Category deleted successfully.'){
        this.message="Category deleted successfully.";
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

}
