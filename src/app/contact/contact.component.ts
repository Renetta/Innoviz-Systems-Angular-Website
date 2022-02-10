import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnquiryService } from '../InnovizService/enquiry.service';
import { Enquiry } from '../modal/enquiry';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  company: any;
  services: any;
  officeImg = './assets/images/office1.jpg';
  enquiry: Enquiry = {
    fname: '',
    lname: '',
    company: '',
    email: '',
    message: '',
    phone: '',
    service: 'Security Solutions',
    subject: '',
  };

  responseMessage: any;
  enquiryForm!: FormGroup;
  emailSentSuccess: boolean = false;
  emailReceived: boolean = false;
  selectOtherService: any = {
    id: 10015,
    name: 'Others Services',
  };

  constructor(
    private httpService: HttpClient,
    private service: EnquiryService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    // Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$') - for phone
    this.enquiryForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      company: new FormControl(''),
      service: new FormControl('Security Solutions', Validators.required),
      message: new FormControl('', Validators.required),
    });
    this.httpService.get<any>('./assets/innovizDatas.json').subscribe((res) => {
      this.company = res.CompanyContactDetails;
      res.ServiceComponents[res.ServiceComponents.length] =
        this.selectOtherService;
      this.services = res.ServiceComponents;
      this.enquiry.service = res.ServiceComponents[0].name;
    });
  }

  get f() {
    return this.enquiryForm.controls;
  }

  sendEnquiry() {
    const enquiryData = this.enquiryForm.value;
    this.emailSentSuccess = true;
    enquiryData.subject = 'WEB ENQUIRY - ' + enquiryData.service;
    this.service.sendEnquiry(enquiryData).subscribe((data) => {
      this.emailSentSuccess = false;
      this.emailReceived = true;
      this.responseMessage = data;
      this.enquiryForm = new FormGroup({
        fname: new FormControl('', Validators.required),
        lname: new FormControl(''),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl('', Validators.required),
        company: new FormControl(''),
        service: new FormControl('Security Solutions', Validators.required),
        message: new FormControl('', Validators.required),
      });
    });
  }
}
