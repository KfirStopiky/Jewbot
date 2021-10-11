import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SwapService {
  object: any;
  init_data: any;
  trnsactionSettingsForm: FormGroup;
  modals = {
    modal_transactions_settings: false,
    modal_help: false,
    modal_menu: false,
    modal_transactions: false,
    modal_transactions_completed: false,
    modal_token_selection: false,
    modal_transaction_active: false,
  };
  targets = [0];

  constructor(public _FormBuilder: FormBuilder, public _Router: Router) {}

  toggleModal(propertyName: string) {
    console.log('modal clicked')
    this.modals[propertyName] = !this.modals[propertyName];
  }
  saveTransactionSettings() {
    localStorage.setItem(
      'transactionSettings',
      JSON.stringify(this.trnsactionSettingsForm.value)
    );

    this.modals.modal_transactions_settings = false;
  }
  toggleBtn(propertyName: any) {
    console.log(this.trnsactionSettingsForm.controls[propertyName]);
    this.trnsactionSettingsForm.patchValue({
      [propertyName]: !this.trnsactionSettingsForm.controls[propertyName].value,
    });
  }
  addTarget() {
    this.targets.push(this.targets.length);
  }
  removeTarget(i: number) {
    this.targets.splice(i, 1);
  }
}
