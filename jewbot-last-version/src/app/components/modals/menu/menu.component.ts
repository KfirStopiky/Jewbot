import { Component, OnInit } from '@angular/core';
import { SwapService } from 'src/app/shared/swap/swap.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(public _SwapService: SwapService) {}

  ngOnInit(): void {}
}
