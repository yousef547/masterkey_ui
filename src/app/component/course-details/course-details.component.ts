import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { environment } from 'src/environments/environment';
import { Router,NavigationEnd  } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  courseId: any;
  courseDetails: any;
  path: any = environment.PathFile;
  randomCourses: any
  loader: boolean;


  constructor(private _activetedRouder: ActivatedRoute, private _HttpRequestsService: HttpRequestsService,private location:Location, private router:Router) { 
    this.loader = true;

  }


  getDetailsCourse() {

    this.courseId = this._activetedRouder.snapshot.params["id"];
    this._HttpRequestsService.serviceGet(`courses/GetCourseById/${this.courseId}`).subscribe((res) => {
      if(res.Status){
        this.courseDetails = res.course;
      }else {
        this.router.navigateByUrl('**');
      }
    });
  }
  getRandomCourses() {
    this._HttpRequestsService.serviceGet(`courses/GetRandomCourses`).subscribe((res) => {
      this.randomCourses = res.courses;
    });
    this._activetedRouder.paramMap.subscribe(prams => {
      this.getDetailsCourse();
      
    })
  }
  
  ngOnInit(): void {
    this.getDetailsCourse();
    this.getRandomCourses();
    this.loader = false;
  }

}
