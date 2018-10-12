import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ClassComponent } from './components/class/class.component';
import { BtnComponent } from './components/btn/btn.component';
import { Test2Component } from './test2/test2.component';
import { ComponentsComponent } from './components/components.component';
import { BindComponent } from './components/bind/bind.component';
import { ModelComponent } from './components/model/model.component';
import { ListviewComponent } from './components/listview/listview.component';
import { ChannelDetailComponent } from './components/channel-detail/channel-detail.component';
import { Listview02Component } from './components/listview02/listview02.component';
import { StickiesComponent } from './components/stickies/stickies.component';
import { HeaderComponent } from './components/header/header.component';
import { StickesDetailsComponent } from './components/stickes-details/stickes-details.component';

@NgModule({
  declarations: [
    AppComponent,ClassComponent,BtnComponent, Test2Component, ComponentsComponent, BindComponent, ModelComponent, ListviewComponent, ChannelDetailComponent, Listview02Component, StickiesComponent, HeaderComponent, StickesDetailsComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
