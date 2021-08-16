import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  emailRegex =
    /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  // phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  phoneRegex = "^((\\+91-?)|0)?[0-9]{10}$"

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phoneNumber: [
        null,
        [Validators.required, Validators.pattern(this.phoneRegex)],
      ],
      dob: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(this.emailRegex)]],
    });
  }
  submit() {
    if (!this.employeeForm.valid) {
      return;
    }
    console.log(this.employeeForm.value);
  }
}
