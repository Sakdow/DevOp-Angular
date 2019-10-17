import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DisplayBooksComponent} from './display-books/display-books.component';


@NgModule({
    declarations: [DisplayBooksComponent],
    imports: [
        CommonModule
    ],
    exports: [DisplayBooksComponent]
})
export class ConsultationModule {
}
