import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { ViewAfterPaymentComponent } from './view-after-payment/view-after-payment.component';
import { ClientListViewComponent } from './client-list-view/client-list-view.component';
import { ClientDetailViewComponent } from './client-detail-view/client-detail-view.component';
import { AddClientComponent } from './add-client/add-client.component';
import {ClientsService} from "./clients.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing-module";
import {DatePipe} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {GameService} from "./game.service";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    DetailViewComponent,
    ViewAfterPaymentComponent,
    ClientListViewComponent,
    ClientDetailViewComponent,
    AddClientComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterOutlet,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [
    ClientsService,
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
