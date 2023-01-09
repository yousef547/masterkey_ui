import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  loader: boolean;
  aboutUs:any;
  teams:any;
  path: any = environment.PathFile;


  constructor(private _HttpRequestsService: HttpRequestsService) { 
    this.loader =true;
  }

  getAbout(){
    this._HttpRequestsService.serviceGet('courses/GetAbout').subscribe((res) => {
      this.aboutUs = res.data
    //  this.GetOurTeam();
    this.loader = false;

    })
  }

  getTeam(){
    this._HttpRequestsService.serviceGet('home/GetOurTeam').subscribe((res) => {
      this.teams = res.data
    //  this.GetOurTeam();

    })
  }

teamsOptions: OwlOptions = {
  autoplay: true,
  smartSpeed: 1000,
  margin: 30,
  dots: false,
  loop: true,
  nav : true,
  navText : [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      }
  }
  }


  ngOnInit(): void {
    this.getAbout();
    this.getTeam();
  }

}
