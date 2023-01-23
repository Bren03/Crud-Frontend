import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
// import clients
import { Client } from '../../Client';

// Import client data from respective folders
// import { ClientService } from '../../service/client.service';
// import { Client } from '../../Client';
// import { CLIENTS } from '../../mock-clients';

export interface DialogData {
  animal: string;
  name: string;
}

export class DialogOverviewExample {
  animal!: string;
  name!: string;

  constructor(public dialog: MatDialog) {}
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    // this.dialogRef.close({ save: false });
    this.dialogRef.close({
      id: 0,
      clientFullName: '123',
      clientID: '123',
      cellNumber: '123',
    });
  }

  onSave() {
    // Save operation
    this.dialogRef.close({
      id: 0,
      clientFullName: '123',
      clientID: '123',
      cellNumber: '123',
    });
  }
}
