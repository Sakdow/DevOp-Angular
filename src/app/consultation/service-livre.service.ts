import {Injectable} from '@angular/core';
import {Book} from './shared/book';

@Injectable({
    providedIn: 'root'
})
export class ServiceLivreService {

    book : Book;
    constructor() {
    }

    getBook(): Book {
        this.book = {
            title : "Title",
            author : "Author"
        };
        return this.book;
    }
}
