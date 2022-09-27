import { Component, OnInit } from '@angular/core';
import { Student } from '../class-student';
import { STUDENTS } from '../mock-students'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor() {}

  public students = STUDENTS;

  ngOnInit(): void {
  }

  public deleteStudent(index: number): void {
    this.students.splice(index, 1)
  }

  public addStudent(): void {
    var studentToAdd = new Student('Mario', './assets/Images/Estudiante_4.jpg', 'Once / Secundaria', 'Programming')
    this.students.push(studentToAdd)
  }
}
