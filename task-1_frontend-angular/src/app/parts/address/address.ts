import { Component } from '@angular/core';
import {Card} from '../card/card';
import {NumberInput} from '../number-input/number-input';
import {TextInput} from '../text-input/text-input';
import {FormControl, FormGroup, Validators} from '@angular/forms';

const standardMaxLength = 50;
const multiLineMaxLength = 100;
const houseNumberMaxLength = 10
const postcodeMin = 1000;
const postcodeMax = 9999;

const standardValidator = [
  Validators.required,
  Validators.maxLength(standardMaxLength),
  Validators.pattern(/^[\p{L} \-,./]*$/u)
];
const multilineValidator= [
  Validators.maxLength(multiLineMaxLength),
  Validators.pattern(/^[\p{L}\d \-,._/&!]*$/u)
];

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
  protected nameFormControl= new FormControl<string | null>(
    '',
    standardValidator,
  );
  protected prenameFormControl= new FormControl<string | null>(
    '',
    standardValidator,
  );
  protected companyFormControl = new FormControl<string | null>(
    '', multilineValidator
  );
  protected streetFormControl= new FormControl<string | null>(
    '', standardValidator,
  );
  protected houseNumberFormControl= new FormControl<string | null>(
    '', [Validators.maxLength(houseNumberMaxLength), Validators.pattern(/^[\p{L}\d \-/]*$/u)],
  );
  protected addressAdditionFormControl = new FormControl<string | null>(
    '', multilineValidator
  );
  protected postcodeFormControl = new FormControl<number | null>(
    null, [Validators.required, Validators.min(1000), Validators.max(9999)],
  );
  protected localityFormControl = new FormControl<string | null>(
    '', standardValidator,
  );

  protected addressFormGroup= new FormGroup({
    name: this.nameFormControl,
    prename: this.prenameFormControl,
    company: this.companyFormControl,
    street: this.streetFormControl,
    houseNumber: this.houseNumberFormControl,
    addressAddition: this.addressAdditionFormControl,
    postcode: this.postcodeFormControl,
    locality: this.localityFormControl,
  });

  protected readonly standardMaxLength = standardMaxLength;
  protected readonly multiLineMaxLength = multiLineMaxLength;
  protected readonly houseNumberMaxLength = houseNumberMaxLength;
  protected readonly postcodeMin = postcodeMin;
  protected readonly postcodeMax = postcodeMax;
}
