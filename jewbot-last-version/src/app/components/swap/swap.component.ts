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

  constructor(public _FormBuilder: FormBuilder) {}

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
      moonbag: 0,
      is_kosher: false,
      targets: [],
      targets_percent: [],
      auto_slippage: false,
      auto_gas: false,
      is_market_price: false,
      is_market_price_sell: false,
      is_stop_loss: false,
      trailing: false,
      defender: false,
      kosher_mode: 'jew',
      gas: 0,
      gas_limit: 0,
      fees: 0,
      total_supply: 0,
      price: 0,
      pair: null,
      MTA: 0,
      MWA: 0,
      skip: true,
      tx_transfer_limit: 25,
      strainer: [],
    };

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
}
