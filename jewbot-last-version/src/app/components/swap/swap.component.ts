import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css'],
})
export class SwapComponent implements OnInit {
  tokenSelection: boolean = false;
  modal_transactions_settings: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  closeTokenSelection() {
    this.tokenSelection != this.tokenSelection;
  }
  openTransactionsSettingsModal() {
    this.modal_transactions_settings = true;
  }
  closeTransactionsSettingsModal() {
    this.modal_transactions_settings = false;
  }
}
