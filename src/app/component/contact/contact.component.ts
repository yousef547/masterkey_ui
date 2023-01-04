import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpRequestsService } from 'src/app/http-requests.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  loader: boolean;

  constructor(private _HttpRequestsService: HttpRequestsService, private toastr: ToastrService, private builder: FormBuilder) {
    this.loader = false;
  }

  massageForm: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'name': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    'subject': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    'massage': new FormControl(null, [Validators.required, Validators.minLength(5)]),


  })

  massageSubmit() {
    this.loader = true;

    if (this.massageForm.invalid) {
      return
    }
    this._HttpRequestsService.servicePost('massage/create', this.massageForm.value).subscribe((data) => {
      if (data.Status) {
        console.log(data);
        this.toastr.info('Send Massage', 'success!');
        this.massageForm.reset();
        this.loader = false;

      }
    });

  }

  ngOnInit(): void {
  }

}
