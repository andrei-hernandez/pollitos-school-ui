# My Angular Project

## My Folder Structure
```Plain Text
src/
├── app/
│   ├── core/                        # Core services, guards, and shared logic
│   │   ├── services/                # Reusable services (e.g., AuthService, ApiService)
│   │   ├── guards/                  # Route guards (e.g., AuthGuard)
│   │   ├── interceptors/            # HTTP interceptors
│   │   ├── models/                  # Shared interfaces and types
│   │   └── utils/                   # Utility functions (pipes or helpers)
│   ├── features/                    # Feature-specific modules
│   │   ├── zetcollege/              # Módulo específico para ZetCollege
│   │   │   ├── pages/               # Páginas específicas de ZetCollege
│   │   │   │   └── main-page/       # Página principal de ZetCollege
│   │   │   ├── students/            # Módulo de estudiantes de ZetCollege
│   │   │   │   ├── components/      # Componentes de estudiantes
│   │   │   │   ├── pages/           # Páginas de estudiantes
│   │   │   │   └── services/        # Servicios de estudiantes
│   │   │   ├── courses/             # Módulo de cursos de ZetCollege
│   │   │   │   ├── components/      # Componentes de cursos
│   │   │   │   ├── pages/           # Páginas de cursos
│   │   │   │   └── services/        # Servicios de cursos
│   │   │   ├── grades/              # Módulo de calificaciones de ZetCollege
│   │   │   │   ├── components/      # Componentes de calificaciones
│   │   │   │   ├── pages/           # Páginas de calificaciones
│   │   │   │   └── services/        # Servicios de calificaciones
│   │   ├── gerardoinstitute/        # Módulo específico para GerardoInstitute
│   │   │   ├── pages/               # Páginas específicas de GerardoInstitute
│   │   │   │   └── main-page/       # Página principal de GerardoInstitute
│   │   │   ├── students/            # Módulo de estudiantes de GerardoInstitute
│   │   │   │   ├── components/      # Componentes de estudiantes
│   │   │   │   ├── pages/           # Páginas de estudiantes
│   │   │   │   └── services/        # Servicios de estudiantes
│   │   │   ├── courses/             # Módulo de cursos de GerardoInstitute
│   │   │   │   ├── components/      # Componentes de cursos
│   │   │   │   ├── pages/           # Páginas de cursos
│   │   │   │   └── services/        # Servicios de cursos
│   │   │   ├── grades/              # Módulo de calificaciones de GerardoInstitute
│   │   │   │   ├── components/      # Componentes de calificaciones
│   │   │   │   ├── pages/           # Páginas de calificaciones
│   │   │   │   └── services/        # Servicios de calificaciones
│   ├── shared/                      # Shared components, pipes, and modules
│   │   ├── components/              # Componentes comunes para ambas escuelas (e.g., buttons, modals)
│   │   ├── directives/              # Directivas personalizadas
│   │   ├── pipes/                   # Pipes compartidos
│   │   └── modules/                 # Módulos reutilizables
│   ├── layout/                      # Layout components (header, footer, etc.)
│   │   ├── header/                  # Componente para el header (común o específico)
│   │   ├── footer/                  # Componente para el footer (común)
│   ├── app-routing.module.ts        # Main routing configuration (gestiona las rutas de las páginas)
│   ├── app.component.ts             # Componente raíz de la aplicación
│   └── app.module.ts                # Módulo principal de la aplicación
├── assets/                          # Archivos estáticos (imágenes, íconos, etc.)
├── environments/                    # Configuración específica para entornos (dev, prod)
│   ├── environment.ts               # Configuración para desarrollo
│   ├── environment.prod.ts          # Configuración para producción
├── styles/                          # Estilos globales (SCSS o CSS)
│   ├── styles.scss                  # Estilo principal global
├── index.html                       # Archivo principal HTML
└── tsconfig.json                    # Configuración de TypeScript
```
1. Carpeta components
   Propósito:

Contiene los componentes reutilizables y específicos de una funcionalidad.
Representa partes de la interfaz que pueden ser utilizadas varias veces o en diferentes páginas.
Características:

Son más pequeños y enfocados en tareas específicas (por ejemplo, mostrar una tarjeta, un botón, o una tabla).
Generalmente no definen rutas por sí mismos.
Son independientes y pueden ser usados dentro de otros componentes o páginas.

2. Carpeta pages
   Propósito:

Contiene componentes principales o contenedores que representan páginas completas dentro de la aplicación.
Están asociados a rutas específicas en la aplicación (definidas en el módulo de rutas del feature).
Características:

Son responsables de coordinar múltiples componentes (incluidos los de la carpeta components).
Suelen contener un router-outlet si tienen subrutas.
Manejan la lógica a nivel de página y suelen recibir datos del servicio para pasarlos a componentes hijos.
Ejemplo:

Una página StudentPage que lista a todos los estudiantes:
Tiene un título principal.
Contiene el componente StudentList para mostrar una lista de tarjetas de estudiantes.
Incluye un botón para agregar nuevos estudiantes.

3. Carpeta services
   Propósito:

Maneja la lógica de negocio y la interacción con la API.
Se encarga de obtener, enviar, actualizar, o eliminar datos desde un servidor REST API u otras fuentes de datos.
Características:

Utiliza el módulo HttpClient para realizar llamadas HTTP (GET, POST, PUT, DELETE, etc.).
Los métodos del servicio son invocados por los componentes o páginas.
Se registran como proveedores en el módulo correspondiente (a menudo con providedIn: 'root').
Ejemplo:

Un servicio StudentService con métodos como:
getAllStudents(): Retorna todos los estudiantes.
addStudent(student: Student): Agrega un nuevo estudiante.
deleteStudent(studentId: number): Elimina un estudiante por ID.
