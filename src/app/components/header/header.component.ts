import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientService } from '../../service/client.service';
import { FormComponent } from '../form/form.component';
// import clients
import { Client } from '../../Client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Client Information';

  ngOnInit(): void {}

  client: Client = {
    id: 0,
    clientFullName: '',
    clientID: '',
    cellNumber: '',
  };
  // Give add button function

  constructor(public dialog: MatDialog, private clientService: ClientService) {}

  getClientobj() {
    console.log(this.client);
  }

  addClient(): void {
    console.log(this.client);

    this.clientService.createClient('Testing').subscribe((response: any) => {
      console.log(response);
    });
    const dialogRef = this.dialog.open(FormComponent, {
      data: {
        name: this.client.clientFullName,
        clientID: this.client.clientID,
        cellNumber: this.client.cellNumber,
        type: 'Add',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        // this.client = result;
        this.client = {
          id: 0,
          clientFullName: '',
          clientID: '',
          cellNumber: '',
        };
        console.log(this.client);
      }
    });
  }
}
