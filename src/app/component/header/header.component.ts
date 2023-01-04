import { Component, OnDestroy, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit, OnDestroy {

  @Input() title: string | undefined;
  constructor() {

  }

  

  ngOnInit(): void {

  }



  ngOnDestroy() {
  }
}
