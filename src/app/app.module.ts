import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemInputComponent } from './item-input/item-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemInputComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        DragDropModule,
        FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
