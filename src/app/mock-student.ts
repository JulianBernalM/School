export class Student {
  name: string;
  academicGrade: string;
  favoriteSubjects : string;

  constructor (name: string, academicGrade: string, favoriteSubjects: string) {
    this.name = name;
    this.academicGrade = academicGrade;
    this.favoriteSubjects = favoriteSubjects;
  }
}

export const STUDENTS = [
  {name: 'Julian Bernal', grade: 'Primero / Primaria', preferredSubjects: 'philosophy, history'},
  {name: 'Antonio Aguilar', grade: 'Decimo / Secundaria', preferredSubjects: 'philosophy, chemist, mathematics'},
  {name: 'Ricki Martin', grade: 'Sexto / Secundaria', preferredSubjects: 'physics, chemist, mathematics'},
  {name: 'Roberto Carlos', grade: 'Once / Secundaria', preferredSubjects: 'Spanish, chemist, mathematics'},
  {name: 'Maria del Mar', grade: 'Cuarto / Primaria', preferredSubjects: 'history, philosophy'},
]
