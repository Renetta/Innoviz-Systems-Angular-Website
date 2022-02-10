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

  constructor(private route: Router,
              private httpService: HttpClient) {}

  name: any = '';
  partners: any = [];
  services: any = [];
  partnerOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
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

