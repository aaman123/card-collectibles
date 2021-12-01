import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

const sharedMaterialModule = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ...sharedMaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    ...sharedMaterialModule,
    NavbarComponent
  ]
})
export class SharedMaterialModule { }
