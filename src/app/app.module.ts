import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ListBodyComponent } from './list-body/list-body.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
