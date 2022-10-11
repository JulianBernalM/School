import { Component, OnInit } from '@angular/core';
import { Student } from '../class-student';
import { SchoolService } from '../school.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public studentSelected?: Student;

  public onSelect(student: Student): void {
    this.studentSelected = student;
    this.messageService.add(`The student selected is: ${student.name}`);
  }

  constructor(private schoolService: SchoolService, private messageService: MessageService) {}

  public students: Student[] = [];

  ngOnInit(): void {
    this.getStudents();
  }

  public getStudents(): void {
    this.schoolService.getStudents()
        .subscribe(students => this.students = students)
  }

  public deleteStudent(student: Student) {
    var studentsFilter = this.students.filter(function(nameStudent) {
      return nameStudent.name !== student.name;
    })
  this.students = studentsFilter;
  }

  public addStudent(): void {
    var studentToAdd = new Student('Mario', './assets/Images/Estudiante_4.jpg', 'Once / Secundaria', 'Programming')
    this.students.push(studentToAdd)
  }
}
