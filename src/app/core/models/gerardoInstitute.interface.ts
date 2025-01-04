export interface GerardoInterface{
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    creationDate: Date,
    grades: gradeInterface[]
}


export interface gradeInterface{
    id: number;
    score: number;
    studentId: number;
    courseId: number;
    creationDate: Date;
}