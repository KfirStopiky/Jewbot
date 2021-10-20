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
  init_transactions_settings_form: FormGroup;
  testForm: FormGroup;
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
      targets_array: [],
      strainer: [],
    };

    this.init_transactions_settings_form = this._FormBuilder.group({
      token: new FormControl(init_data.amount),
      amount: new FormControl(init_data.token),
      stop_loss: new FormControl(init_data.stop_loss),
      stop_loss_percent: new FormControl(init_data.stop_loss_percent),
      slippage_buy: new FormControl(init_data.slippage_buy),
      slippage_sell: new FormControl(init_data.slippage_sell),
      buy_at: new FormControl(init_data.buy_at),
      sell_at: new FormControl(init_data.sell_at),
      moonbag: new FormControl(init_data.moonbag),
      time_out: new FormControl(init_data.time_out),
      number_of_targets: new FormControl(init_data.number_of_targets),
      kosher_mode: new FormControl(init_data.kosher_mode),
      gas: new FormControl(init_data.gas),
      gas_limit: new FormControl(init_data.gas_limit),
      fees: new FormControl(init_data.fees),
      total_supply: new FormControl(init_data.total_supply),
      price: new FormControl(init_data.price),
      pair: new FormControl(init_data.pair),
      MTA: new FormControl(init_data.MTA),
      MWA: new FormControl(init_data.MWA),
      transfet_limit: new FormControl(init_data.transfet_limit),
      tx_transfer_limit: new FormControl(init_data.transfet_limit),
      auto_slippage: new FormControl(init_data.auto_slippage),
      auto_gas: new FormControl(init_data.auto_gas),
      is_kosher: new FormControl(init_data.is_kosher),
      is_kosher_settings: new FormControl(init_data.is_kosher_settings),
      auto_moon_bag: new FormControl(init_data.auto_moon_bag),
      auto_time_out: new FormControl(init_data.auto_time_out),
      is_market_price: new FormControl(init_data.is_market_price),
      is_market_price_sell: new FormControl(init_data.is_market_price_sell),
      is_stop_loss: new FormControl(init_data.is_stop_loss),
      trailing: new FormControl(init_data.trailing),
      defender: new FormControl(init_data.defender),
      skip: new FormControl(init_data.skip),
      targets_array: this._FormBuilder.array([]),
      strainer: this._FormBuilder.array([]),
    });
    this._SwapService.trnsactionSettingsForm =
      this.init_transactions_settings_form;

    // for (var i in init_data) {
    //   this.init_data_object[i] = new FormControl(init_data[i]);
    // }

    // this._SwapService.trnsactionSettingsForm = this._FormBuilder.group(
    //   this.init_data_object
    // );
    this._SwapService.serviceTestForm = this.testForm;
  }
}
