import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class MaterialModule { }
