import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ItemModel } from '../models/Item.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent {
    /**
     * ItemModel array.
     */
    @Input() items: ItemModel[];

    /**
     * DeleteItem event emitter.
     */
    @Output() deleteItem: EventEmitter<number>;

    /**
     * ListComponent constructor.
     */
    constructor() {
        this.deleteItem = new EventEmitter<number>();
    }

    /**
     * Delete event.
     */
    deleteFromList(index: number): void {
        this.deleteItem.emit(index);
    }

    /**
     * Handle the drop event from 'CdkDragDrop'.
     */
    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }

    /**
     * Toggle the value of an Item's checked attribute.
     */
    toggleChecked(index: number): void {
        const result = this.items.find((item, i) => {
            return i === index;
        });

        result.checked = ! result.checked;
    }
}
