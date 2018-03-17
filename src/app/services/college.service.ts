import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Data } from '../colleges/data';
import { HttpClient } from '@angular/common/http';
import { College } from '../colleges/college';
import { plainToClass } from 'class-transformer';

@Injectable()
export class CollegeService {

  private collegesUrl =
  'http://odata76.cloudapp.net/v1/opendata76/CD76COEDTECOCOLPUBEffectifparcollegespublics?$filter=&format=json';  // URL to web api

  constructor(private http: HttpClient) { }

  getColleges(): Observable<College[]> {
    return this.http.get<Data>(this.collegesUrl).pipe(map(value => plainToClass(Data, value).colleges));
  }
}
