import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapComponent } from './components/swap/swap.component';
import { ScanComponent } from './components/scan/scan.component';
import { HeaderComponent } from './components/header/header.component';
import { TransactionSettingsComponent } from './components/transaction-settings/transaction-settings.component';

@NgModule({
  declarations: [AppComponent, SwapComponent, ScanComponent, HeaderComponent, TransactionSettingsComponent],
  imports: [BrowserModule, AppRoutingModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
