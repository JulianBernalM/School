import { Injectable } from '@angular/core';
import { Student } from './class-student';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private messageService: MessageService) { }

  public getStudents(): Observable<Student[]> {
    const students = of(STUDENTS)
    this.messageService.add('Selected students information:')
    return students;
  }


}
