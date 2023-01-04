import { Component, OnInit } from '@angular/core';
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
  path: any = environment.PathFile;


  constructor(private _HttpRequestsService: HttpRequestsService) { 
    this.loader =true;
  }

  getAbout(){
    this._HttpRequestsService.serviceGet('courses/GetAbout').subscribe((res) => {
      this.aboutUs = res.data
      console.log(this.aboutUs); 
    //  this.GetOurTeam();
    this.loader = false;

    })
  }


  ngOnInit(): void {
    this.getAbout();
    
  }

}
