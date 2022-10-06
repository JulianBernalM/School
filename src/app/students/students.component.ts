import { Component, OnInit } from '@angular/core';
import { Student } from '../class-student';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public studentSelected?: Student;

  constructor(private schoolService: SchoolService) {}

  public students: Student[] = [];

  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.schoolService.getStudents()
        .subscribe(students => this.students = students)
  }

  public deleteStudent(index: number): void {
    this.students.splice(index, 1)
  }

  public addStudent(): void {
    var studentToAdd = new Student('Mario', './assets/Images/Estudiante_4.jpg', 'Once / Secundaria', 'Programming')
    this.students.push(studentToAdd)
  }

  public onSelect(student: Student): void {
    this.studentSelected = student;
  }
}
