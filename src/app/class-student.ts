export class Student {
  name: string;
  Image: string;
  academicGrade: string;
  favoriteSubjects : string;

  constructor (name: string, Image: string, academicGrade: string, favoriteSubjects: string) {
    this.name = name;
    this.Image = Image;
    this.academicGrade = academicGrade;
    this.favoriteSubjects = favoriteSubjects;
  }
}
