import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ClientListViewComponent} from "./client-list-view/client-list-view.component";
import {ClientDetailViewComponent} from "./client-detail-view/client-detail-view.component";
import {AddClientComponent} from "./add-client/add-client.component";
import {ListViewComponent} from "./list-view/list-view.component";
import {DetailViewComponent} from "./detail-view/detail-view.component";
import {ViewAfterPaymentComponent} from "./view-after-payment/view-after-payment.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'clients', component: ClientListViewComponent},
  {path: 'clients/add', component: AddClientComponent},
  {path: 'clients/:id/add', component: AddClientComponent},
  {path: 'clients/:id', component: ClientDetailViewComponent},
  {path: 'games', component: ListViewComponent},
  {path: 'games/:id', component: DetailViewComponent},
  {path: 'gamedetail/:id', component: ViewAfterPaymentComponent}


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
