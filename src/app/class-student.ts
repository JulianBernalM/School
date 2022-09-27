export class Student {
  name: string;
  image: string;
  academicGrade: string;
  favoriteSubjects : string;

  constructor (name: string, image: string, academicGrade: string, favoriteSubjects: string) {
    this.name = name;
    this.image = image;
    this.academicGrade = academicGrade;
    this.favoriteSubjects = favoriteSubjects;
  }
}
