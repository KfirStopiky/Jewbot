import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SwapService {
  object: any;
  init_data: any;
  trnsactionSettingsForm: FormGroup;
  kosherness_settings: string = 'jewbot';
  modals = {
    modal_transactions_settings: false,
    modal_help: false,
    modal_menu: false,
    modal_transactions: false,
    modal_transactions_completed: false,
    modal_token_selection: false,
    modal_transaction_active: false,
  };
  number_of_targets: number = 0;
  getTargets() {
    return this.trnsactionSettingsForm.get('targets') as FormArray;
  }
  constructor(public _FormBuilder: FormBuilder, public _Router: Router) {}

  toggleModal(propertyName: string) {
    this.modals[propertyName] = !this.modals[propertyName];
  }
  saveTransactionSettings() {
    this.trnsactionSettingsForm.patchValue({
      number_of_targets: this.number_of_targets,
    });
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
    console.log(this.trnsactionSettingsForm.controls.targets);
  }

  addTarget() {
    (this.trnsactionSettingsForm.controls.targets as FormArray).push(
      this._FormBuilder.control('')
    );
  }
  // addTarget() {
  // this.trnsactionSettingsForm.addControl(
  //   'target' + this.number_of_targets,
  //   []
  // );
  // this.number_of_targets += 1;
  // }

  // removeTarget(i: number) {
  //   this.number_of_targets.splice(i, 1);
  // }
  changeKoshernessSettings(name: string) {
    this.kosherness_settings = name;
  }
}
