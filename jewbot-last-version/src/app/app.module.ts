import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwapComponent } from './components/swap/swap.component';
import { ScanComponent } from './components/scan/scan.component';
import { HeaderComponent } from './components/header/header.component';
import { TransactionSettingsComponent } from './components/modals/transaction-settings/transaction-settings.component';
import { TokenSelectComponent } from './components/modals/token-select/token-select.component';
import { HelpComponent } from './components/modals/help/help.component';
import { MenuComponent } from './components/modals/menu/menu.component';
import { TransactionsActiveComponent } from './components/modals/transactions-active/transactions-active.component';
import { TransactionCompletedComponent } from './components/modals/transaction-completed/transaction-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    SwapComponent,
    ScanComponent,
    HeaderComponent,
    TransactionSettingsComponent,
    TokenSelectComponent,
    HelpComponent,
    MenuComponent,
    TransactionsActiveComponent,
    TransactionCompletedComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
