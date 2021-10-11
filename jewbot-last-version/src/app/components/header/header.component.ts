import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwapService } from 'src/app/shared/swap/swap.service';
import { SwapComponent } from '../swap/swap.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public _Router: Router, public _SwapServicse: SwapService) {}

  ngOnInit(): void {}
}
