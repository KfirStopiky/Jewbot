import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScanComponent } from './components/scan/scan.component';
import { SwapComponent } from './components/swap/swap.component';

const routes: Routes = [
  { path: '', component: SwapComponent },
  { path: 'scan', component: ScanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
