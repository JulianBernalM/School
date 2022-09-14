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

  public addStudent(): void {
    var student = new Student('Julian', 'Segundo', 'Science , Physics, Programming')
    this.student.push(student)
  }

  public deleteStudent(): void {
    this.student.pop()
  }

}
