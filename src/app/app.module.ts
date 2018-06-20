import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule, 
  MatTooltipModule, 
  MatCheckboxModule, 
  MatButtonModule,
  MatButtonToggleModule,
  MatGridListModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { AppComponent } from './app.component';
import  'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent, 
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FlexLayoutModule, 
    FormsModule, 
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule, 
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatButtonToggleModule, 
    MatCheckboxModule,
    MatGridListModule
    
  ],
  providers: [ DishService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
