import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { SwapService } from 'src/app/shared/swap/swap.service';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css'],
})
export class SwapComponent implements OnInit {
  init_data_object = {};

  constructor(
    public _Router: Router,
    public _SwapService: SwapService,
    public _FormBuilder: FormBuilder
  ) {}

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
      number_of_targets: 1,
      targets_array: this._FormBuilder.array([]),
      targets: '',
      targets_precets: '',
      strainer: this._FormBuilder.array([]),
    };
    for (var i in init_data) {
      this.init_data_object[i] = new FormControl(init_data[i]);
    }

    this._SwapService.trnsactionSettingsForm = this._FormBuilder.group(
      this.init_data_object
    );
  }
  // addTargetFormGroup(): FormGroup {
  //   return this._FormBuilder.group({
  //     targets: [''],
  //     targets_percent: [''],
  //   });
  // }

  // targets: this._FormBuilder.array([]),
  // targets_percent: this._FormBuilder.array([]),
  //   this._FormBuilder.group({
  //     targets: new FormControl(''),
  //     targets_percent: new FormControl(''),
  //   }),
  // ]),
  // kosher_mode: 'jew',
  // gas: 0,
  // gas_limit: 0,
  // fees: 0,
  // total_supply: 0,
  // price: 0,
  // pair: null,
  // MTA: 0,
  // MWA: 0,
  // transfet_limit: 10,
  // tx_transfer_limit: 25,
  // auto_slippage: false,
  // auto_gas: false,
  // is_kosher: false,
  // is_kosher_settings: false,
  // auto_moon_bag: false,
  // auto_time_out: false,
  // is_market_price: false,
  // is_market_price_sell: false,
  // is_stop_loss: false,
  // trailing: false,
  // defender: false,
  // skip: true,
}
