import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ItemModel } from '../models/Item.model';

@Component({
    selector: 'app-item-input',
    templateUrl: './item-input.component.html',
    styleUrls: ['./item-input.component.css']
})

export class ItemInputComponent {
    /** Variable for #contentInput value. */
    content: string;

    /** Variable for #amountInput value. */
    amount: number;

    /** ItemModel array */
    @Input() items: ItemModel[];

    /** AddItem EvenEmitter */
    @Output() addItem = new EventEmitter();

    /** ContentInput DOM Element. */
    @ViewChild('contentInput') contentInput: ElementRef;

    /** AmountInput DOM Element. */
    @ViewChild('amountInput') amountInput: ElementRef;

    /**
     * If variables has truthy values, emit event to add item and reset variables.
     */
    addToList(): void {
        if (! this.content || ! this.amount) {
            return;
        }

        this.addItem.emit({
            checked: false,
            content: this.content,
            amount: this.amount
        });

        this.resetValues();
        this.contentInput.nativeElement.focus();
    }

    /**
     * Reset the variables.
     */
    resetValues(): void {
        this.content = '';
        this.amount = 0;
    }
}
