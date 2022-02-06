import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { faMobile } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  company: any;
  
  ngOnInit(): void {
    this.httpService.get<any>('./assets/innovizDatas.json').subscribe(
      (res) => {
        this.company = res.CompanyContactDetails;
        console.log(this.company)
      }
    )
  }

}
