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






  ngOnInit(): void {
    this.getVideo();
  }

}
