import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  name!: string;
  
  form = this.fb.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public sendEmail(){        
    emailjs.init("HWQc4nglltdkAaPzJ");
    emailjs.send("service_8f58ydm","template_csu1c1c",{
      from_name: this.form.value.name,
      message: this.form.value.message,
      reply_to: this.form.value.email,
      subject: this.form.value.subject,
      phone: this.form.value.phoneNumber,
      });
      this.form.reset();
      alert("Seu e-mail foi enviado. Retornaremos contato em breve!")
    }
}
