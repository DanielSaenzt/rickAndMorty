import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { RickMortyService } from 'src/app/service/rick-morty.service';
import { HttpClientModule } from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    ToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ToastModule,

    

    
  ],
  providers: [RickMortyService, MessageService]
})
export class CharacterModule { }
