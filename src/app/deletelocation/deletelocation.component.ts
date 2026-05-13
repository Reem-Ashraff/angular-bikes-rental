import { Component } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deletelocation',
  templateUrl: './deletelocation.component.html',
  styleUrls: ['./deletelocation.component.css']
})
export class DeletelocationComponent {

  delete:FormGroup;
  message = '';
  message2 = '';
  locations:any=[];

  constructor(private formBuilder: FormBuilder,private router: Router,private apiservice:ServicesService){ 
    this.delete = this.formBuilder.group({
      id: ['', [Validators.required]]
    })
  }

  ngOnInit(){
    this.apiservice.get_locations()
    .subscribe({next:(data:any)=>{
      this.locations = data[0];
    }})
  }

  get f(){
    return this.delete.controls;
  }

  submit(){
    this.apiservice.delete_location(this.delete.value)
    .subscribe({next:(data:any)=>{
      if(data['message']=='Location deleted successfully.'){
        this.message="Location deleted successfully.";
      }
      else{
        this.message2=data['message'];
      }
    }})
  }

}
