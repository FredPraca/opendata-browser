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

  cols: any[];

  constructor(private collegeService: CollegeService) { }

  ngOnInit() {
    this.collegeService.getColleges().subscribe(colleges => this.setColleges(colleges));

    this.cols = [
      { field: 'numeroImmat', header: 'Immatriculation' },
      { field: 'timestamp', header: 'Timestamp' },
      { field: 'nom', header: 'Nom' },
      { field: 'nomVoie', header: 'Adresse' },
      { field: 'codePostal', header: 'Code postal' },
      { field: 'commune', header: 'Commune' },
      { field: 'nouveauCanton', header: 'Canton' }
  ];
  }

  setColleges(colleges: College[]) {
    this.colleges = colleges;
  }
}
