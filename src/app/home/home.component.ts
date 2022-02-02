import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { OwlOptions } from 'ngx-owl-carousel-o';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // services = [
  //   {
  //     id: 10001,
  //     name: 'Electrical Solutions',
  //     img: './assets/images/ELV.png',
  //     details: [
  //       'Parking Guidance System',
  //       'Parking Revenue System',
  //       'Speed Gates',
  //       'Turnstile gates',
  //       'Hydraulic Bollards',
  //       'Road Blockers',
  //       'Automatic Barriers',
  //       'Ticketing Systems',
  //       'Booth Systems',
  //       'VIP/Valet Parking',
  //     ],
  //   },
  //   {
  //     id: 10002,
  //     name: 'Security Solutions',
  //     img: './assets/images/securitysoln.png',
  //     details: [
  //       'CCTV systems',
  //       'Perimeter Security',
  //       'Setting up Control Centers',
  //       'Access Control Systems',
  //       'Visitors Management System',
  //     ],
  //   },
  //   {
  //     id: 10003,
  //     name: 'Networking Solutions',
  //     img: './assets/images/networking.png',
  //     details: [
  //       'Structure Cabling',
  //       'IP Telephony',
  //       'Routing & Switching',
  //       'Perimeter & Core Firewalls',
  //       'Wireless Networking',
  //       'SDWAN',
  //     ],
  //   },
  //   {
  //     id: 10004,
  //     name: 'Parking Solutions',
  //     img: './assets/images/parking.png',
  //     details: [
  //       'Parking Guidance System',
  //       'Parking Revenue System',
  //       'Speed Gates',
  //       'Turnstile gates',
  //       'Hydraulic Bollards',
  //       'Road Blockers',
  //       'Automatic Barriers',
  //       'Ticketing Systems',
  //       'Booth Systems',
  //       'VIP/Valet Parking',
  //     ],
  //   },
  //   {
  //     id: 10005,
  //     name: 'Information Security',
  //     img: './assets/images/infosec.png',
  //     details: [
  //       'Identity and Privilege Access',
  //       'Management (PAM)',
  //       'Integrated Risk Management',
  //       'Threat Detection and Response',
  //       'Application and Email Security',
  //       'Data Loss Prevention (DLP)',
  //       'Cloud Security',	
  //       'Security Operation Center',
  //     ],
  //   },
  //   {
  //     id: 10006,
  //     name: 'Fiber Optic Solutions',
  //     img: './assets/images/fibreOptic.png',
  //     details: [
  //       'Supply and Installation',
  //       'Design Services for Complete Fiber Optic System', 
  //       'Cable pulling & Splicing Services',
  //       'Testing & Reporting Services',
  //     ],
  //   },
  // ];
  constructor(private route: Router,
              private httpService: HttpClient) {}

  name: any = '';
  partners: any = [];
  services: any = [];
  partnerOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  ngOnInit(): void {
    this.httpService.get<any>('./assets/innovizDatas.json').subscribe(
      (res) => {
        this.partners = res.Partners;
        this.services = res.Services;
        console.log(this.partners)
      }
    )
  }

  onSelectService = (service:  any) => {
    this.route.navigate(['/services', service.name], { queryParams: service.name});
  }
}

