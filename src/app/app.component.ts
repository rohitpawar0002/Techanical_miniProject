import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

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


  constructor(private fb: FormBuilder){}


ngOnInit(): void {
  this.registraction=this.fb.group(
    {contact:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    email:['',[Validators.required,Validators.email]],
    registractionFees:['',Validators.required],
    collegeFees:['',Validators.required],
    examFees:['',Validators.required],
    
  }
  )

}

onSubmit1() {
  this.submitted = true;

  if (this.registraction.invalid) {
    return;
  }

  alert("Submitted Successfully!")
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
}


