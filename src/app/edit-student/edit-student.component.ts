import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../class-student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  @Input() studentChosen?: Student;

  constructor() { }

  ngOnInit(): void {
  }

}
