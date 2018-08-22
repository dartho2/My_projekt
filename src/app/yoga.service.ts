import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { Yoga } from './yoga.model';
import { Router } from '@angular/router';

@Injectable({providedIn : 'root'})
export class YogaService {
    private yogas: Yoga[] = [];
    private yogasUpdated = new Subject<Yoga[]>();

    constructor(private _http: HttpClient, private router: Router) {}

    getYogas() {
        this._http.get<{ message: string, yoga: any }>('http://localhost:3000/api/yoga')
        .pipe(
            map((yogaData) => {
                return yogaData.yoga.map(yoga => {
                    return {
                        title: yoga.title,
                        point1: yoga.point1,
                        point2: yoga.point2,
                        point3: yoga.point3,
                        point4: yoga.point4,
                        point5: yoga.point5,
                        point6: yoga.point6,
                        id: yoga._id
                    };
                });
            }))
        .subscribe(transformedYogas => {                       // transformedPosts because we need chane mongo "_id" to "id"
            this.yogas = transformedYogas;
            this.yogasUpdated.next([...this.yogas]);
        });
    }
    getYogaUpdatedListener() {
        return this.yogasUpdated.asObservable();
    }
  
   
}