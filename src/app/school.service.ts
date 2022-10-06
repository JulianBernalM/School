import { Injectable } from '@angular/core';
import { Student } from './class-student';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  public getStudents(): Observable<Student[]> {
    const students = of(STUDENTS)
    return students;
  }

  constructor() { }
}
