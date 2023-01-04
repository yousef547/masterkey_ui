import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from 'src/app/http-requests.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent implements OnInit {

  questions:any
  loader: boolean;

  constructor(private _HttpRequestsService:HttpRequestsService) {
    this.loader = true;
   }



  ngOnInit(): void {
    this._HttpRequestsService.serviceGet('FAQs/GetQuestion').subscribe((data)=>{
      this.questions = data.html
      this.loader = false;
   
    });
  }

}
