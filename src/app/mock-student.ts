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
