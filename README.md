# Welcome to pollitos-school-ui

We are building a UI for a school management system. The application will manage two schools: **Gerardo Institute** and **Zet College**. The UI will consume APIs that manage the data for these schools, including students, courses, and grades.

### Pages Created

- **Home Page:** A dashboard with links to Students, Courses, and Grades modules.
- **Students Module:**
  - List Students: Display all students in the selected school.
  - Create Student: A form to add a new student.
  - Edit Student: A form to update a student’s information.
  - Delete Student’s Grades: A button to delete all grades for a specific student.
- **Courses Module:**
  - List Courses: Display all courses in the selected school.
  - Create Course: A form to add a new course.
  - Edit Course: A form to update course details.
  - Delete Course’s Grades: A button to delete all grades for a specific course.
- **Grades Module:**
  - Create Grade: A form to assign a grade to a student for a specific course.
  - View Grades of a Student: Display all grades for a specific student.

## Project info

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Project specifications

The Forms to enter a new student, course or qualification have a button that will be activated until all the requested fields are filled out.

To update student and course data, press the "UPDATE" button which will execute a function that will give us the data in the same form below for modification. Once the modification is made, we will click on "Edit student" and the change on the screen then we will exit with the "cancel" button

To delete grades for a student or a subject, we will click on the respective "DELETE" buttons, a message will appear and we will be able to see that the data was deleted in the grades module.

## COMMENTS

- Download the latest changes to the BackEnd repository since changes were made
- The data consumed for both schools is the same
