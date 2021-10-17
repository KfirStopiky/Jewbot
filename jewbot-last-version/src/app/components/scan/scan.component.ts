import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwapService } from 'src/app/shared/swap/swap.service';
import { SwapComponent } from '../swap/swap.component';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css'],
})
export class ScanComponent implements OnInit {
  modals = {
    scanner_settings: false,
    scanner_columns: false,
    top_performers: false,
  };
  constructor(public _Router: Router, public _SwapService: SwapService) {}

  ngOnInit(): void {}
}
