import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(public _Router:Router) {}

  ngOnInit(): void {}
}
