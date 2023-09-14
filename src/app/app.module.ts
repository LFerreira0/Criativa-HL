import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ServicosComponent } from './servicos/servicos.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from 'src/shared/directives/swipper-directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


register();

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ServicosComponent,
    PortifolioComponent,
    ContatoComponent,
    FooterComponent,
    SwiperDirective,
  //Add if needed
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,//Add if needed 
    FormsModule,   
  ],
  exports: [
    SwiperDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
