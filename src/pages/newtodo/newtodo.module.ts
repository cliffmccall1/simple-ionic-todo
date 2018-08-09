import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewtodoPage } from './newtodo';

@NgModule({
  declarations: [
    NewtodoPage,
  ],
  imports: [
    IonicPageModule.forChild(NewtodoPage),
  ],
})
export class NewtodoPageModule {}
