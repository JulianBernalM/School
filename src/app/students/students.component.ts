import { Component, OnInit } from '@angular/core';
import { Student } from '../mock-student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public student: Student[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public addStudentManually(): void {
    var student = new Student('Julian', 'Segundo', 'Science')
    this.student.push(student)
  }

}
