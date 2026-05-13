import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deleteoffer',
  templateUrl: './deleteoffer.component.html',
  styleUrls: ['./deleteoffer.component.css']
})
export class DeleteofferComponent {

  delete:FormGroup;
  message = '';
  message2 = '';
  offers:any=[];

  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice:ServicesService){ 
    this.delete = this.formBuilder.group({
      id: ['', [Validators.required]]
    })
  }

  ngOnInit(){
    this.apiservice.all_offers()
    .subscribe({next:(data:any)=>{
      this.offers = data[0];
    }})
  }

  get f(){
    return this.delete.controls;
  }

  submit(){
    this.apiservice.delete_offer(this.delete.value)
    .subscribe({next:(data:any)=>{
      if(data['message']=='Offer deleted successfully.'){
        this.message="Offer deleted successfully.";
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

}
