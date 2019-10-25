import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../shared/book";
import {ActivatedRoute} from "@angular/router";
import {ServiceLivreService} from "../service-livre.service";

@Component({
    selector: 'app-display-book',
    templateUrl: './display-book.component.html',
    styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {

    private id : number;
    book : Book;

    constructor(private bookService : ServiceLivreService, private activatedRoute : ActivatedRoute) {
        this.id = activatedRoute.snapshot.params["id"]
    }


    ngOnInit() {
        this.bookService.getBookById(this.id).subscribe({
            next : book => this.book = book
        });
        return this.book;
    }



}
