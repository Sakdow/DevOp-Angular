import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayBooksComponent} from './display-books/display-books.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import {MaterialModule} from "../material/material.module";
import {RouterModule, Routes} from "@angular/router";

const route : Routes  = [
    {path : "book/:id", component: DisplayBookComponent},
    {path : "", component : DisplayBooksComponent}];


@NgModule({
    declarations: [DisplayBooksComponent, DisplayBookComponent],
    imports: [
        MaterialModule,
        RouterModule.forChild(route),
        CommonModule,
        RouterModule
    ],
    exports: [DisplayBooksComponent, DisplayBookComponent]
})

export class ConsultationModule {
}
