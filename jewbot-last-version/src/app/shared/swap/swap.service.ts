import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
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
  // number_of_targets: number = 0;

  constructor(public _FormBuilder: FormBuilder, public _Router: Router) {}

  addTargetControl(): void {
    (<FormArray>(
      this.trnsactionSettingsForm.controls.targets_array.value.controls
    )).push(new FormControl('0'));
  }

  toggleModal(propertyName: string) {
    this.modals[propertyName] = !this.modals[propertyName];
  }
  saveTransactionSettings() {
    // this.trnsactionSettingsForm.patchValue({
    //   number_of_targets: this.number_of_targets,
    // });
    localStorage.setItem(
      'transactionSettings',
      JSON.stringify(this.trnsactionSettingsForm.value)
    );

    this.modals.modal_transactions_settings = false;
  }
  toggleBtn(propertyName: any) {
    this.trnsactionSettingsForm.patchValue({
      [propertyName]: !this.trnsactionSettingsForm.controls[propertyName].value,
    });
  }

  changeKoshernessSettings(name: string) {
    this.trnsactionSettingsForm.patchValue({
      kosher_mode: name,
    });
  }
}
