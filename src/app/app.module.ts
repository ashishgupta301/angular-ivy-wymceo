import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GrandParentComponent } from '../grand-parent/grand-parent.component';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    GrandParentComponent,
    ParentComponent,
    ChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
