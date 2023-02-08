import { Component, Inject } from '@angular/core';
import {
  // MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ClientService } from '../../service/client.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private clientService: ClientService
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onSave() {
    // Save operation
    if (this.data.type === 'Add') {
      console.log('create a client.....', this.data);
      this.clientService.createClient(this.data).subscribe((response: any) => {
        console.log(response);
        this.dialogRef.close(true);
      });
    }
    if (this.data.type === 'Edit') {
      console.log('edit a client.....', this.data);
      this.clientService.editClients(this.data).subscribe((response: any) => {
        console.log('hdahdadh', response);
        this.dialogRef.close(true);
      });
    }
  }
}
