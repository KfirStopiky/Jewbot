import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css'],
})
export class SwapComponent implements OnInit {
  object = {};
  trnsactionSettingsForm: FormGroup;
  modals = {
    modal_transactions_settings: false,
    modal_help: false,
    modal_menu: false,
    modal_transactions: false,
    modal_transactions_completed: false,
    modal_token_selection: false,
  };
  targets = [0];

  constructor(public _FormBuilder: FormBuilder, public _Router: Router) {}

  ngOnInit(): void {
    var init_data = JSON.parse(
      localStorage.getItem('transactionSettings') || 'false'
    ) || {
      token: null,
      amount: 0,
      stop_loss: 0,
      stop_loss_percent: 0,
      slippage_buy: 0,
      slippage_sell: 0,
      buy_at: 0,
      sell_at: 0,
      moonbag: 0,
      time_out: 0,
      targets: [],
      targets_percent: [],
      strainer: [],
      kosher_mode: 'jew',
      gas: 0,
      gas_limit: 0,
      fees: 0,
      total_supply: 0,
      price: 0,
      pair: null,
      MTA: 0,
      MWA: 0,
      transfet_limit: 10,
      tx_transfer_limit: 25,
      auto_slippage: false,
      auto_gas: false,
      is_kosher: false,
      is_kosher_settings: false,
      auto_moon_bag: false,
      auto_time_out: false,
      is_market_price: false,
      is_market_price_sell: false,
      is_stop_loss: false,
      trailing: false,
      defender: false,
      skip: true,
    };

    for (var i in init_data) {
      this.object[i] = new FormControl(init_data[i]);
    }

    this.trnsactionSettingsForm = this._FormBuilder.group(this.object);
  }
  saveTransactionSettings() {
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
  toggleModal(propertyName: string) {
    this.modals[propertyName] = !this.modals[propertyName];
  }
  addTarget() {
    this.targets.push(this.targets.length);
    console.log(this.targets);
  }
  removeTarget(e: any) {
    // let index = this.targets.findIndex(e => e.target.)
    this.targets.pop();
  }
}
