// alurapic/client/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { HttpModule } from '@angular/http';

import { CadastroComponent } from './cadastro/cadastro.component'; // importou
import { ListagemComponent } from './listagem/listagem.component'; // importou
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotaoModule } from './botao/botao.module';
import { PaginationComponent } from './pagination/pagination.component';




@NgModule({
    imports: [BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        BotaoModule
        ],
    declarations: [AppComponent, CadastroComponent, ListagemComponent,PaginationComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }