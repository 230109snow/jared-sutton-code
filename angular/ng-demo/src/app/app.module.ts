import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TwoComponent } from './two/two.component';
import { FooComponent } from './two/foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    TwoComponent,
    FooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    FooComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
