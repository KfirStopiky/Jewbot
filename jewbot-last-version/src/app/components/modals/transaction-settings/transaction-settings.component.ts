import { Component, Input, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { SwapService } from 'src/app/shared/swap/swap.service';

@Component({
  selector: 'app-transaction-settings',
  templateUrl: './transaction-settings.component.html',
  styleUrls: ['./transaction-settings.component.css'],
})
export class TransactionSettingsComponent implements OnInit {
  constructor(public _SwapService: SwapService) {}

  ngOnInit(): void {}
}
