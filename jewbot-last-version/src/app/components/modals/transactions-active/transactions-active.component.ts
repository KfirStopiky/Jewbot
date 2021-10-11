import { Component, OnInit } from '@angular/core';
import { SwapService } from 'src/app/shared/swap/swap.service';

@Component({
  selector: 'app-transactions-active',
  templateUrl: './transactions-active.component.html',
  styleUrls: ['./transactions-active.component.css'],
})
export class TransactionsActiveComponent implements OnInit {
  constructor(public _SwapService: SwapService) {}

  ngOnInit(): void {}
}
