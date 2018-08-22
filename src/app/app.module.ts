import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { YogaComponent } from './yoga/yoga.component';
import { HomeComponent } from './home/home.component';
import { HeaderYogaComponent } from './header/header-yoga/header-yoga.component';
import { ZajeciaYogaComponent } from './yoga/zajecia-yoga/zajecia-yoga.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { PotyComponent } from './poty/poty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    YogaComponent,
    HomeComponent,
    HeaderYogaComponent,
    ZajeciaYogaComponent,
    FooterComponent,
    PotyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
