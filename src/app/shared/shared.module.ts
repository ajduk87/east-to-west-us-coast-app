import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LoaderComponent } from './loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [MaterialModule, ReactiveFormsModule, LoaderComponent]
})
export class SharedModule { }
