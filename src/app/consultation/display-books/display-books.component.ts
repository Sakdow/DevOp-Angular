import {Component, Input, OnInit} from '@angular/core';
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
        this.bookService.getBooks().subscribe({
            next : books => this.books = books
        });
        return this.books;
    }

    delete(book : Book){
        const index: number = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }
}
