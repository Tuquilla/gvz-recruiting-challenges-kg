import { Component } from '@angular/core';
import {Card} from '../card/card';
import {NumberInput} from '../number-input/number-input';
import {TextInput} from '../text-input/text-input';
import {FormControl, Validators} from '@angular/forms';

const standardValidator = [
  Validators.required, Validators.maxLength(50)
];

const multilineValidator= [
  Validators.maxLength(100)
]


@Component({
  selector: 'app-address',
  imports: [
    Card,
    NumberInput,
    TextInput
  ],
  templateUrl: './address.html',
  styleUrl: './address.scss',
})

export class AddressComponent {

  protected validateName= new FormControl<string | null>(
    '',
    standardValidator,
  );
  protected validatePrename= new FormControl<string | null>(
    '',
    standardValidator,
  );

  protected validateCompany = new FormControl<
    string | null
  >('', multilineValidator
  );

  protected validateStreet= new FormControl<string | null>(
    '',
    standardValidator,
  );
  protected validateHousenumber= new FormControl<string | null>(
    '',
    [Validators.required, Validators.maxLength(10)],
  );

  protected validateAddressAddition = new FormControl<
    string | null
  >('', multilineValidator
  );

  protected validatePostcode = new FormControl<number | null>(
    null,
    [Validators.required, Validators.min(1000), Validators.max(9999)],
  );
  protected validateLocality = new FormControl<string | null>(
    '',
    standardValidator,
  );
}
