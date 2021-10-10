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

  // init_data = {
  //   token: null,
  //   amount: 0,
  //   stop_loss: 0,
  //   stop_loss_percent: 0,
  //   slippage_buy: 0,
  //   slippage_sell: 0,
  //   buy_at: 0,
  //   sell_at: 0,
  //   moonbag: 0,
  //   time_out: 0,
  //   targets: [],
  //   targets_percent: [],
  //   is_kosher: false,
  //   is_kosher_settings: false,
  //   auto_slippage: false,
  //   auto_gas: false,
  //   auto_moon_bag: false,
  //   auto_time_out: false,
  //   is_market_price: false,
  //   is_market_price_sell: false,
  //   is_stop_loss: false,
  //   trailing: false,
  //   defender: false,
  //   skip: true,
  //   kosher_mode: 'jew',
  //   gas: 0,
  //   gas_limit: 0,
  //   fees: 0,
  //   total_supply: 0,
  //   price: 0,
  //   pair: null,
  //   MTA: 0,
  //   MWA: 0,
  //   transfet_limit: 10,
  //   tx_transfer_limit: 25,
  //   strainer: [],
  // };

  constructor(public _FormBuilder: FormBuilder, public _Router: Router) {}

  ngOnInit(): void {
    // let storage = JSON.parse(localStorage.getItem('settings') || 'false');
    // console.log(storage);
    // this.trnsactionSettingsForm = storage
    //   ? storage
    //   : this._FormBuilder.group({
    //       token: new FormControl(null),
    //       pairs: new FormControl(null),
    //       amount: new FormControl(0),
    //       stop_loss: new FormControl(0),
    //       stop_loss_percent: new FormControl(0),
    //       slippage_buy: new FormControl(0),
    //       slippage_sell: new FormControl(0),
    //       sell_at: new FormControl(0),
    //       buy_at: new FormControl(0),
    //       moonbag: new FormControl(0),
    //       time_out: new FormControl(0),
    //       gas_limit: new FormControl(0),
    //       fees: new FormControl(0),
    //       total_supply: new FormControl(0),
    //       price: new FormControl(0),
    //       MTA: new FormControl(0),
    //       MWA: new FormControl(0),
    //       transfet_limit: new FormControl(0),
    //       tx_transfer_limit: new FormControl(0),
    //       targets: new FormControl([]),
    //       targets_percent: new FormControl([]),
    //       strainer: new FormControl([]),
    //       is_kosher: new FormControl(false),
    //       is_kosher_settings: new FormControl(false),
    //       auto_slippage: new FormControl(false),
    //       auto_gas: new FormControl(false),
    //       auto_moon_bag: new FormControl(false),
    //       auto_time_out: new FormControl(false),
    //       is_market_price: new FormControl(false),
    //       is_market_price_sell: new FormControl(false),
    //       is_stop_loss: new FormControl(false),
    //       trailing: new FormControl(false),
    //       defender: new FormControl(false),
    //       skip: new FormControl(false),
    //       kosher_mode: new FormControl('jew'),
    //     });
    // console.log(this.trnsactionSettingsForm.value);

    var init_data = JSON.parse(localStorage.getItem('settings') || 'false') || {
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
    console.log(this.trnsactionSettingsForm);
    localStorage.setItem(
      'transactionSettings',
      JSON.stringify(this.trnsactionSettingsForm.value)
    );
    console.log(this.trnsactionSettingsForm);

    this.modals.modal_transactions_settings = false;
  }
  toggleBtn(propertyName: string) {
    this.trnsactionSettingsForm[propertyName] =
      !this.trnsactionSettingsForm[propertyName];
    console.log(this.trnsactionSettingsForm[propertyName]);
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
