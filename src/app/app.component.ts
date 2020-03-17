import { Component, ElementRef, OnInit } from '@angular/core';
import { ItemModel } from './models/Item.model';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    /** App title. */
    title = 'BoodschApp';

    /** Central ItemModel array. */
    items: ItemModel[];

    /** Generic ElementRef for manipulating background color. */
    element: ElementRef;

    /**
     * App Constructor.
     */
    constructor(library: FaIconLibrary, element: ElementRef) {
        library.addIconPacks(fas, far);
        this.items = new Array<ItemModel>();
        this.element = element;
    }

    /**
     * Adds an item to the ItemModel array.
     */
    addItem(item: ItemModel): void {
        this.items.push(item);
    }

    /**
     * Deletes an item from the ItemModel array.
     */
    deleteItem(index: number): void {
        this.items.splice(index, 1);
    }

    /**
     * OnInit grab the generic element and set the background color to '#3b444b'.
     * We have to do this because setting it in the 'style.css' will have it overridden.
     */
    ngOnInit(): void {
        this.element.nativeElement.ownerDocument.body.style.backgroundColor = '#3b444b';
    }
}
