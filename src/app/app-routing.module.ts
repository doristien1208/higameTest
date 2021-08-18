import { PlayinfoComponent } from './game/pages/maingame/interface/playinfo/playinfo.component';
import { InventoryComponent } from './game/pages/maingame/interface/inventory/inventory.component';
import { GamebgComponent } from './game/pages/maingame/interface/gamebg/gamebg.component';
import { CreateteamComponent } from './game/pages/createteam/createteam.component';
import { GameComponent } from './game/game.component';
import { MaingameComponent } from './game/pages/maingame/maingame.component';
import { StartpageComponent } from './game/pages/startpage/startpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {path:'',component:GameComponent},
  {path:'game/startpage',component:StartpageComponent},
  {path:'game/maingame',component:MaingameComponent},
  {path:'game/createteam',component:CreateteamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
