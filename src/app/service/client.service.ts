import { Injectable } from '@angular/core';

// Use to make function Observable
import { Observable, of } from 'rxjs';

// Import client data from respective folders
import { Client } from '../Client';
import { CLIENTS } from '../mock-clients';
import { WebrequestService } from './webrequest.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private webReqService: WebrequestService) {}

  createClient(client: Client) {
    console.log('create a client');
    // Send web request to create client
    return this.webReqService.post('clients/add', client);
  }

  // 'Client validation failed: idNum: Path `idNum` is required., cellphoneNum: Path `cellphoneNum` is required.';

  // Function used to get client information
  getClients(): Observable<Client[]> {
    // Used to make CLIENTS a Observable
    const clients = of(CLIENTS);
    // Returns clients
    return clients;
  }
}
