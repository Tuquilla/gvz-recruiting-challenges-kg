import { Component } from '@angular/core';
import {PartDemo} from '../part-demo';
import {AddressComponent} from '../../parts/address/address';

@Component({
  selector: 'app-address-demo',
  imports: [
    PartDemo,
    AddressComponent
  ],
  templateUrl: './address-demo.component.html',
  styleUrls: ['./address-demo.component.scss','../part-demo-common.scss','../part-demo.scss']
})
export class AddressDemo {
  protected label = 'Adresse'
  protected description = 'Zeigt die Postadresse an'
}
