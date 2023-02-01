import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { ClientService } from '../../service/client.service';
import { FormComponent } from '../form/form.component';
// import clients
import { Client } from '../../Client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Client Information';

  ngOnInit(): void {}
  logOut(): void {
    // this.router.navigateByUrl('login');
    location.reload();
  }

  client: Client = {
    no: 0,
    name: '',
    idNum: '',
    cellphoneNum: '',
  };
  // Give add button function

  constructor(public dialog: MatDialog, private router: Router) {}

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
