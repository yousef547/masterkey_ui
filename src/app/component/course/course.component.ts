import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  path: any = environment.PathFile;
  loader: boolean;
  courses:any;
  p = 1;
  count = 6;
  constructor(private _HttpRequestsService: HttpRequestsService) {
    this.loader = true;
   }


  requestCourses(){
    this._HttpRequestsService.serviceGet('courses/GetCourses').subscribe((res) => {
     this.courses = res.courses.data;
    this.loader = false;

    })
  }


  ngOnInit(): void {
    this.requestCourses();
  }

}
