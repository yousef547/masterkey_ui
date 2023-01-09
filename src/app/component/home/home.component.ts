import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { environment } from 'src/environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  aboutUs: any;
  loader: boolean;
  myVideo: any;
  video: any;
  path: any = environment.PathFile;
  isPage: boolean = false;
  testimonials: any;
  courses:any;
  @ViewChild('myVideo', { static: true }) myVideoS: ElementRef | any;
  @ViewChild('play', { static: true }) play: ElementRef | any;


  constructor(private _HttpRequestsService: HttpRequestsService) {
    this.loader = true;
  }


  getVideo() {

    this._HttpRequestsService.serviceGet('home/video').subscribe((res) => {
      if (res.Status) {
        this.getAbout()
        this.getTestimonial()
        this.video = res.data;
        this.isPage = true;
        this.loader = false;
      }
    })
  }

  playPause() {
    var myVideo: any = document.getElementById("playVideo");
    var playVideo: any = document.getElementById("play");

    if (myVideo?.paused) {

      myVideo.play();
      playVideo.classList.remove("fa-pause-circle");
      playVideo.classList.add("fa-play");
    }
    else {

      myVideo?.pause();
      playVideo.classList.add("fa-pause-circle");
      playVideo.classList.remove("fa-play");
    }
  }
  muteF() {
    var myVideo: any = document.getElementById("playVideo");
    var mutedVideo: any = document.getElementById("muted");

    if (myVideo.volume !== 0) {
      myVideo.volume = 0;
      mutedVideo.classList.remove("fa-volume-up");
      mutedVideo.classList.add("fa-volume-mute");

    } else {
      myVideo.volume = 1;
      mutedVideo.classList.remove("fa-volume-mute");
      mutedVideo.classList.add("fa-volume-up");
    }
  }



  getAbout() {
    this._HttpRequestsService.serviceGet('home/GetAboutPage').subscribe((res) => {
      this.aboutUs = res.data;
    })
  }

  getTestimonial() {
    this._HttpRequestsService.serviceGet('home/GetTestimonial').subscribe((res) => {
      this.testimonials = res.data;

    })
  }
  requestCourses(){
    this._HttpRequestsService.serviceGet('courses/GetCourses').subscribe((res) => {
     this.courses = res.courses.data;
     console.log(this.courses)
    this.loader = false;

    })
  }
  

  customOptions: OwlOptions = {
    autoplay: true,
    smartSpeed: 50,
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }
  CoursesOptions: OwlOptions = {
    autoplay: true,
        smartSpeed: 1500,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
  }

  slides = [
    {id: 1, img: "https://dummyimage.com/350x150/423b42/fff"},
    {id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff"},
    {id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff"},
    {id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff"},
    {id: 5, img: "https://dummyimage.com/350x150/9a2b7a/fff"},
    {id: 6, img: "https://dummyimage.com/350x150/5a2b7a/fff"},
    {id: 6, img: "https://dummyimage.com/350x150/4a2b7a/fff"}
  ];






  ngOnInit(): void {
    this.getVideo();
    this.requestCourses();
  }

}
