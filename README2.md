# My Angular Project

## My Folder Structure

```Plain Text
src/
├── app/
│   ├── core/                        
│   │   └── models/                               #Model classes
│   ├── features/   
│   │   ├── home/                                 # Select School
│   │   ├── zetcollege/              
│   │   │   └── pages/               
│   │   │       └── main-page/                    # Main page for Zet College (Empty)
│   │   ├── gerardoinstitute/        
│   │   │   └── pages/               
│   │   │       └── main-page/                    # Main page for Zet College (Empty)
│   │   ├── students/                             # Students Module
│   │   │   ├── components/      
│   │   │   ├── pages/
│   │   │   │   ├── create-student/
│   │   │   │   ├── edit-student/
│   │   │   │   └── list-student/
│   │   │   └── services/        
│   │   │       └── student-api.service.ts        # Student API Service
│   │   ├── courses/                              # Courses Module
│   │   │   ├── components/      
│   │   │   ├── pages/           
│   │   │   │   ├── create-course/
│   │   │   │   ├── edit-course/
│   │   │   │   └── list-course/
│   │   │   └── services/        
│   │   │       └── course-api.service.ts         # Course API Service
│   │   ├── grades/                               # Grades Module             
│   │   │   ├── components/      
│   │   │   ├── pages/        
│   │   │   │   ├── create-grade/
│   │   │   │   ├── edit-grade/
│   │   │   │   └── view-grade/   
│   │   │   └── services/  
│   │   │       └── grade-api.service.ts          # Grade API Service  
│   ├── shared/                                    
│   ├── layout/                                   # Layout components 
│   │   ├── header/
│   │   ├── nav-bar/                  
│   │   ├── footer/                  
│   ├── app-routing.module.ts                     # Main routing configuration
│   ├── app.component.ts             
│   └── app.module.ts                
├── assets/                                         
├── index.html                       
└── tsconfig.json                           
```
