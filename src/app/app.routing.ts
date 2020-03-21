import { RouterModule, Routes } from '@angular/router';
import { CreateTestComponent } from "./create-test/create-test.component";
import { LiveExamComponent } from './live-exam/live-exam.component';
import { ViewAnswersheetComponent } from './view-answersheet/view-answersheet.component';
import { MenuComponent } from './menu/menu.component';

const arr:Routes=[
  {path:'',component:MenuComponent},
  {path:'live_exam/:id',component:LiveExamComponent},
  {path:'view_answersheet/:id',component:ViewAnswersheetComponent},
  {path:'create_test',component:CreateTestComponent},
];

export const routing=RouterModule.forRoot(arr);
