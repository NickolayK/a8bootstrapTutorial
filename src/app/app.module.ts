import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptorService} from './services/auth-interceptor.service'

import { AppComponent } from './app.component';

import { ShortenPipe } from './shorten.pipe'
import { LogginInterceptorService } from './services/loggin-interceptor.service';

@NgModule({
  declarations: [AppComponent , ShortenPipe],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ { provide : HTTP_INTERCEPTORS, useClass : LogginInterceptorService,
    multi :true
  }, { provide : HTTP_INTERCEPTORS, useClass : AuthInterceptorService,
    multi :true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule {}
