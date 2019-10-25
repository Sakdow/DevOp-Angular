import {Injectable} from '@angular/core';
import {Book} from './shared/book';
import {HttpClient} from "@angular/common/http";
import {retry} from "rxjs/operators";
import {Input} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ServiceLivreService {



    constructor(private http : HttpClient) {
    }

    getBooks() {
        return this.http.get<Book[]>('/api/books').pipe(retry(3));
    }

    getBookById(id : number) {
        return this.http.get<Book>('/api/books/'+id).pipe(retry(3));
    }
}
