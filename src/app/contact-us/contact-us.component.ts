import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from '../data-storage.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { User } from '../model/user.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  userForm: FormGroup;

  private user: User;

  constructor(private dataService: DataStorageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    let userAdded = this.dataService.createUser(this.userForm.value);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let fullname = '';
    let email = '';

    this.userForm = new FormGroup({
      'fullname': new FormControl(fullname),
      'email': new FormControl(email)
    });
  }

}
