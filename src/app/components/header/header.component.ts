import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { ClientService } from '../../service/client.service';
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
    no: 0,
    name: '',
    idNum: '',
    cellphoneNum: '',
  };
  // Give add button function

  constructor(public dialog: MatDialog) {}

  getClientobj() {
    console.log(this.client);
  }

  addClient(): void {
    console.log(this.client);

    const dialogRef = this.dialog.open(FormComponent, {
      data: {
        name: this.client.name,
        idNum: this.client.idNum,
        cellphoneNum: this.client.cellphoneNum,
        type: 'Add',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      window.location.reload();
      if (result) {
        // this.client = result;
        this.client = {
          no: 0,
          name: '',
          idNum: '',
          cellphoneNum: '',
        };
        console.log(this.client);
      }
    });
  }
}
