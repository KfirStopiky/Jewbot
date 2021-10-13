import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SwapService } from 'src/app/shared/swap/swap.service';

@Component({
  selector: 'app-transaction-settings',
  templateUrl: './transaction-settings.component.html',
  styleUrls: ['./transaction-settings.component.css'],
})
export class TransactionSettingsComponent implements OnInit {
  constructor(
    public _SwapService: SwapService,
    public _FormBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    console.log(this._SwapService.trnsactionSettingsForm.controls.number_of_targets);
  }
}
