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
  protected description = 'Ermöglicht die Eingabe einer schweizer Postadresse'

  protected parameters = [
    { name: 'Name', valueRange: '<Text> & length <= 50', required: true},
    { name: 'Vorname', valueRange: '<Text> & length <= 50', required: true},
    { name: 'Firmenzusatz', valueRange: '<Text> & length <= 100', required: false},
    { name: 'Strasse', valueRange: '<Text> & length <= 50', required: true},
    { name: 'Hausnummer', valueRange: '<Text> & length <= 10', required: true},
    { name: 'Adresszusatz', valueRange: '<Text> & length <= 100', required: false},
    { name: 'Postleitzahl', valueRange: '<Zahl> & >= 1000 & <= 9999', required: true},
    { name: 'Ort', valueRange: '<Text> & length <= 50', required: true},
  ];
}
