import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../services/college.service';
import { College } from './college';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.css']
})
export class CollegesComponent implements OnInit {

  colleges: College[];

  constructor(private collegeService: CollegeService) { }

  ngOnInit() {
    this.collegeService.getColleges().subscribe(colleges => this.setColleges(colleges));
  }

  setColleges(colleges: College[]) {
    this.colleges = colleges;
  }
}
