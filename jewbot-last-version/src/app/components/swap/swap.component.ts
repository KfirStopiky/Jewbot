import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css'],
})
export class SwapComponent implements OnInit {
  tokenSelection: boolean = false;
  transactionSettingsForm!: FormGroup;
  modals = {
    modal_transactions_settings: false,
    modal_help: false,
    modal_menu: false,
  };
  init_data = {
    token: null,
    amount: 0,
    stop_loss: 0,
    stop_loss_percent: 0,
    slippage_buy: 0,
    slippage_sell: 0,
    buy_at: 0,
    // sell_at: 0,
    moonbag: 0,
    targets: [],
    targets_percent: [],
    is_kosher: false,
    is_kosher_settings: false,
    auto_slippage: false,
    auto_gas: false,
    auto_moon_bag: false,
    auto_time_out: false,
    is_market_price: false,
    is_market_price_sell: false,
    is_stop_loss: false,
    trailing: false,
    defender: false,
    skip: true,
    kosher_mode: 'jew',
    gas: 0,
    gas_limit: 0,
    fees: 0,
    total_supply: 0,
    price: 0,
    pair: null,
    MTA: 0,
    MWA: 0,
    tx_transfer_limit: 25,
    strainer: [],
  };

  constructor(public _FormBuilder: FormBuilder) {}

  ngOnInit(): void {
    let init_data =
      JSON.parse(localStorage.getItem('transactionSettings') || 'false') ||
      this.init_data;

    for (var i in init_data) {
      init_data[i] = new FormControl(init_data[i]);
    }

    this.transactionSettingsForm = this._FormBuilder.group(init_data);
  }
  saveTransactionSettings() {
    localStorage.setItem(
      'transactionSettings',
      JSON.stringify(this.transactionSettingsForm.value)
    );
    this.modals.modal_transactions_settings = false;
  }
  toggleBtn(propertyName: string) {
    this.init_data[propertyName] = !this.init_data[propertyName];
  }
  toggleModal(propertyName: string) {
    this.modals[propertyName] = !this.modals[propertyName];
  }
  removeTarget(target){
    
  }
}
