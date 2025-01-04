import { Component, inject, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../../../shared/modules/student.model';
import { StudentServiceService } from '../../services/student.service.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button'
import { MatDialog } from '@angular/material/dialog';
import { EditEstudentComponent } from '../edit-estudent/edit-estudent.component';

@Component({
  selector: 'app-list',
  imports: [
    CommonModule, 
    MatTableModule, 
    MatInputModule, 
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  @Input() school?: string;
  auxSchool: string = '';

  students = signal<Student[]>([]);
  private studentService = inject(StudentServiceService);
  displayedColumns: string[] = ['id', 'firtsName', 'lastName', 'age', 'option'];
  dataSource = new MatTableDataSource<Student>([]);

  readonly dialog = inject(MatDialog);
  
  constructor(private dialogEdit: MatDialog){}

  ngOnInit(){
    if(this.school){
      this.auxSchool = this.school;
    }

    this.getStudents();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, student: Student){
    const dialogRef = this.dialogEdit.open(EditEstudentComponent, {
      width: '560px',
      height: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {student: student, school: this.school},
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if(result){
          this.getStudents();
        }
      }
    )
  }
  
   getStudents(){
    this.studentService.getStudents(this.auxSchool)
    .subscribe({
      next: (students) => {
        this.students.set(students);
        this.dataSource.data = students;
        
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    this.dataSource.filterPredicate = (data: Student, filter: string) => {
      return (
        data.firstName.toLowerCase().includes(filter) ||
        data.lastName.toLowerCase().includes(filter) ||
        data.age.toString().toLowerCase().includes(filter)
      );
    };
  }
}
