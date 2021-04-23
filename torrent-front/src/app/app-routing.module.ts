import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameComponent } from './game/game.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/main-page',pathMatch:'full'},
  {path: 'main-page', component: MainPageComponent, children: [
    {path: ':id', component: GameComponent}
  ]},
  {path: 'games/:id', component: GameDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
