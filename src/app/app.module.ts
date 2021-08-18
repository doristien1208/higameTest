import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { CreateteamComponent } from './game/pages/createteam/createteam.component';
import { MaingameComponent } from './game/pages/maingame/maingame.component';
import { StartpageComponent } from './game/pages/startpage/startpage.component';
import { GamebgComponent } from './game/pages/maingame/interface/gamebg/gamebg.component';
import { InventoryComponent } from './game/pages/maingame/interface/inventory/inventory.component';
import { PlayinfoComponent } from './game/pages/maingame/interface/playinfo/playinfo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    CreateteamComponent,
    MaingameComponent,
    StartpageComponent,
    GamebgComponent,
    InventoryComponent,
    PlayinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
