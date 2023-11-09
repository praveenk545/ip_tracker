import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivComponent } from './reactiv/reactiv.component';

const routes: Routes = [{ path: 'hi', component: ReactivComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
