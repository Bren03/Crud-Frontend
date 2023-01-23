import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// Import client data from respective folders
import { ClientService } from '../../service/client.service';
import { Client } from '../../Client';
import { CLIENTS } from '../../mock-clients';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent implements OnInit {
  // Create dataSource that takes in the client data from CLIENTS
  displayedColumns: string[] = [
    'id',
    'clientFullName',
    'clientID',
    'cellNumber',
    'buttons',
  ];
  dataSource = new MatTableDataSource(CLIENTS);

  // Asign clients as properties of component
  clients: Client[] = [];

  constructor(private clientService: ClientService, public dialog: MatDialog) {}

  ngOnInit(): void {
    // Used to return Observable
    this.clientService
      .getClients()
      .subscribe((clients) => (this.clients = clients));
  }

  // Give edit button function
  deleteClient() {
    console.log('Edit');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Give edit button function

  // animal!: string;
  // name!: string;

  animal = 'Panda';
  name = 'Branden';

  editClient(): void {
    console.log('The dialog was closed');

    const dialogRef = this.dialog.open(FormComponent, {
      data: { name: this.name, animal: this.animal, type: 'Edit' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
