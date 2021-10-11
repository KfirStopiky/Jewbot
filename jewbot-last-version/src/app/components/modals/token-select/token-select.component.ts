import { Component, OnInit } from '@angular/core';
import { SwapService } from 'src/app/shared/swap/swap.service';

@Component({
  selector: 'app-token-select',
  templateUrl: './token-select.component.html',
  styleUrls: ['./token-select.component.css'],
})
export class TokenSelectComponent implements OnInit {
  constructor(public _SwapService: SwapService) {}

  ngOnInit(): void {}
}
