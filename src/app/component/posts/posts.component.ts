import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
subjects:any
posts:any
path:any = environment.PathFile;
loader:boolean;

constructor(private _HttpRequestsService:HttpRequestsService,protected _sanitizer: DomSanitizer) {
  this.loader = true;
   }
getSubjects(){

  this._HttpRequestsService.serviceGet('subject/GetSubject').subscribe((data)=>{
    this.subjects = data.html
 
  });
}

getPosts(id:any) {
  this.loader = true;

  this._HttpRequestsService.serviceGet(`subject/GetPostById/${id}`).subscribe((data)=>{
    this.posts = data.posts
    for(var i =0;i<data.posts.length;i++){
      if(data.posts[i].text != null){
        data.posts[i].text = this._sanitizer.bypassSecurityTrustHtml(data.posts[i].text);
      }
    }
    this.loader = false;
  });

}

  ngOnInit(): void {
    this.getSubjects();
    this.getPosts(0);

  }

}
