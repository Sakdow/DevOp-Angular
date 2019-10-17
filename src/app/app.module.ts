import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DisplayBooksComponent} from './consultation/display-books/display-books.component';

@NgModule({
    declarations: [
        AppComponent,
        DisplayBooksComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
