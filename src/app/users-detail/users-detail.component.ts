import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

let r: any;

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss'],
})
export class UsersDetailComponent implements OnInit {
  constructor(public service: UsersService, public route: ActivatedRoute) {}

  u: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.user(params['id']).subscribe((u: any) => {
        this.u = u;
      });
    });
  }
}
