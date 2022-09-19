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

  public student = STUDENTS;

  ngOnInit(): void {
  }

  public deleteStudent(): void {
    this.student.pop()
  }

  public addStudent(): void {
    var student = new Student('Julian', '/src/assets/Images/Estudiante_4.jpg', 'Once / Secundaria', 'Programming')
    this.student.push(student)
  }

  }
