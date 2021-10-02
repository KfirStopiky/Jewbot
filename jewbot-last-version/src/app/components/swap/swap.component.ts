import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css'],
})
export class SwapComponent implements OnInit {
  tokenSelection: boolean = false;
  modal_transactions_settings: boolean = false;
  transactionSettingsForm!: FormGroup;
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
  closeTokenSelection() {
    this.tokenSelection != this.tokenSelection;
  }
  openTransactionsSettingsModal() {
    this.modal_transactions_settings = true;
  }
  closeTransactionsSettingsModal() {
    this.modal_transactions_settings = false;
  }
  saveTransactionSettings() {
    localStorage.setItem(
      'transactionSettings',
      JSON.stringify(this.transactionSettingsForm.value)
    );
    this.closeTransactionsSettingsModal();
  }
  toggleAutoSlippage() {
    this.init_data.auto_slippage = !this.init_data.auto_slippage;
  }
  toggleAutoGas() {
    this.init_data.auto_gas = !this.init_data.auto_gas;
  }
  toggleMarketPriceBuy() {
    this.init_data.is_market_price = !this.init_data.is_market_price;
  }
  toggleMarketPriceSell() {
    this.init_data.is_market_price_sell = !this.init_data.is_market_price_sell;
  }
  toggleStopLoss() {
    this.init_data.is_stop_loss = !this.init_data.is_stop_loss;
  }
  toggleTrailing() {
    this.init_data.trailing = !this.init_data.trailing;
  }
  toggleSkipReceipts() {
    this.init_data.skip = !this.init_data.skip;
  }
  toggleAutoMoonBag() {
    this.init_data.auto_moon_bag = !this.init_data.auto_moon_bag;
  }
  toggleAutoTimeOut() {
    this.init_data.auto_time_out = !this.init_data.auto_time_out;
  }
  toggleCheckKosherness() {
    this.init_data.is_kosher = !this.init_data.is_kosher;
  }
}
