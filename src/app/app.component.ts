import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project_test';

  registraction!: FormGroup;
  submitted = false;
  totalFee:any;
  option:boolean=true;
  http: any;


  constructor(private fb: FormBuilder, private toster:ToastrService){}


ngOnInit(): void {
  this.registraction=this.fb.group(
    {
    name:['',Validators.required],  
    contact:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email:['',[Validators.required,Validators.email]],
    registractionFees:['',Validators.required],
    collegeFees:['',Validators.required],
    examFees:['',Validators.required],
    address:['',Validators.required],
    passingYear:['',Validators.required],
    dateBirth:['',Validators.required]
    
  }
  )

}

onSubmit() {
  this.submitted = true;

  if (this.registraction.invalid) {
    return;
  }
  localStorage.setItem("token", JSON.stringify( this.registraction.value))
  this.toster.success('Save data')
}

  
get feesRegister(){
  return this.registraction.controls["registractionFees"]
}
get feesCollege(){
  return this.registraction.controls["collegeFees"]
}
get feesExam(){
  return this.registraction.controls["examFees"]
}
totalFeeDisplay(){
 
 this.totalFee=this.feesRegister.value + this.feesCollege.value + this.feesExam.value


}
resetForm(){
  this.registraction.reset();
  localStorage.removeItem("token")
  this.toster.warning('Form is reset')
}



}


