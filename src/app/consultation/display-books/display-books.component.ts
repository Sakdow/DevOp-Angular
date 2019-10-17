import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book';
import {ServiceLivreService} from '../service-livre.service';

@Component({
    selector: 'app-display-books',
    templateUrl: './display-books.component.html',
    styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {
    books : Book[];
    constructor(private bookService : ServiceLivreService) {
    }

    ngOnInit() {
        this.books = [this.bookService.getBook()];
    }

}
