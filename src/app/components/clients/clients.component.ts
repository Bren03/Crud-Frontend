import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// Import client data from respective folders
import { ClientService } from '../../service/client.service';
import { Client } from '../../Client';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  constructor(private clientService: ClientService, public dialog: MatDialog) {}

  // Create dataSource that takes in the client data from CLIENTS
  displayedColumns: string[] = [
    'no',
    'name',
    'idNum',
    'cellphoneNum',
    'buttons',
  ];

  // Asign clients as properties of component
  clients: Client[] = [];

  dataSource: any;

  ngOnInit(): void {
    // Used to return Observable

    this.clientService
      .getClients()
      .subscribe(
        (clients) => (this.dataSource = new MatTableDataSource<Client>(clients))
      );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Give edit button function
  // animal!: string;
  // name!: string;

  editClient(client: Client): void {
    console.log(client._id);

    const dialogRef = this.dialog.open(FormComponent, {
      data: {
        _id: client._id,
        name: client.name,
        idNum: client.idNum,
        cellphoneNum: client.cellphoneNum,
        type: 'Edit',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        // this.client = result;
        client = {
          no: 0,
          name: '',
          idNum: '',
          cellphoneNum: '',
        };
      }
    });
  }

  // Give delete button function
  deleteClient(client: Client) {
    console.log('Delete', client._id);
    this.clientService.deleteClientID(client._id).subscribe((res: any) => {
      console.log(res);
    });
  }
}
