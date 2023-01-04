import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  loader: boolean;
  constructor(private _HttpRequestsService: HttpRequestsService, private toastr: ToastrService) {
    this.loader = false;
  }
  subscriptionForm: FormGroup = new FormGroup({
    'phone': new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
    'email': new FormControl(null, [Validators.required, Validators.email]),

  })
  subscriptionSubmit() {
    this.loader = true;

    if (this.subscriptionForm.invalid) {
      return
    }
    this._HttpRequestsService.servicePost('subscription/create', this.subscriptionForm.value).subscribe((data) => {
      if (data.Status) {
        this.toastr.info('Subscription', 'success!');
        this.subscriptionForm.reset();
        this.loader = false;


      }
    });
  }
  ngOnInit(): void {
  }

}
