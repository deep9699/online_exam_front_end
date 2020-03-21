import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSortModule } from "@angular/material/sort";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";


import { LiveExamComponent } from './live-exam/live-exam.component';
import { ViewAnswersheetComponent } from './view-answersheet/view-answersheet.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    CreateTestComponent,
    LiveExamComponent,
    ViewAnswersheetComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    routing,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
