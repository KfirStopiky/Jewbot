import { Component, OnInit } from '@angular/core';
import { SwapService } from 'src/app/shared/swap/swap.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css'],
})
export class HelpComponent implements OnInit {
  constructor(public _SwapService: SwapService) {}

  ngOnInit(): void {}
}
