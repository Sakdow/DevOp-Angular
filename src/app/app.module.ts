import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DisplayBooksComponent} from './consultation/display-books/display-books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule} from "@angular/common/http";
import {DisplayBookComponent} from "./consultation/display-book/display-book.component";
import {ConsultationModule} from "./consultation/consultation.module";
import {RouterModule, Routes} from "@angular/router";

const route : Routes  = [
    {path : "", component : ConsultationModule}];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        MaterialModule,
        RouterModule.forRoot(route),
        BrowserModule,
        HttpClientModule,
        ConsultationModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
