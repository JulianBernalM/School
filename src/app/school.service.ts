import { Injectable } from '@angular/core';
import { Student } from './class-student';
import { STUDENTS } from './mock-students';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  public getStudents(): Student[] {
    return STUDENTS;
  }

  constructor() { }
}
