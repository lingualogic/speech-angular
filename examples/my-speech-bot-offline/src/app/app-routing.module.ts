import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BotComponent } from './bot/bot.component';

const routes: Routes = [
    { path: '',    component: HomeComponent },
    { path: 'bot', component: BotComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
