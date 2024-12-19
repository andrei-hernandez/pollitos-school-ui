# Welcome to pollitos-school-ui

We are building a UI for a school management system. The application will manage two schools: **Gerardo Institute** and **Zet College**. The UI will consume APIs that manage the data for these schools, including students, courses, and grades.

## Features and Functionality

### Pages to Create

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

## UI Requirements

- Allow users to switch between the two schools (Gerardo Institute and Zet College).
- **Reusable Components:** Use reusable components for forms and tables.
- **Validation:** Ensure valid inputs, like scores between 0 and the maximum score (default is 100).
- **Styling:** Students can use any CSS framework, library, or custom styles.

## Criteria to Evaluate

### Implementation Requirements

- Use Angular modules for Students, Courses, and Grades.
- Implement routing with lazy loading for the modules.
- Use Angular services for API interactions.
- Log API responses and handle errors gracefully.

### Extra Points

- **Testing:** Create unit tests for components and services using Jasmine and Karma. Add integration tests with Protractor or Cypress.
- **Reusable Interfaces:** Create TypeScript interfaces for entities like Student, Course, and Grade.
- **Documentation:** Provide instructions in the README, including:
  - How to set up the project
  - How to run the app
  - How to configure the API endpoints

## Folder Structure

```plaintext
src/
├── app/
│   ├── core/                  # Core services, guards, and shared logic
│   │   ├── services/          # Reusable services (e.g., AuthService, ApiService)
│   │   ├── guards/            # Route guards (e.g., AuthGuard)
│   │   ├── interceptors/      # HTTP interceptors
│   │   ├── models/            # Shared interfaces and types
│   │   └── utils/             # Utility functions (pipes or helpers)
│   ├── features/              # Feature-specific modules
│   │   ├── feature1/          # Example: "users" (one folder per feature/module)
│   │   │   ├── components/    # Components related to this feature
│   │   │   ├── pages/         # Main pages/components for routes
│   │   │   └── services/      # Services specific to this module
│   │   └── feature2/
│   ├── shared/                # Shared components, pipes, and modules
│   │   ├── components/        # Common components (e.g., buttons, modals)
│   │   ├── directives/        # Custom directives
│   │   ├── pipes/             # Shared pipes
│   │   └── modules/           # Reusable secondary modules
│   ├── layout/                # Layout components (e.g., header, footer)
│   └── app-routing.module.ts  # Main routing configuration
├── assets/                    # Static files (images, icons, etc.)
├── environments/              # Environment-specific configuration (dev, prod)
├── styles/                    # Global styles (SCSS or CSS)
└── index.html
```

## Project info

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.
