import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniformLinearMotionComponent } from './uniform-linear-motion/uniform-linear-motion.component';
import { UniformCircularMotionComponent } from './uniform-circular-motion/uniform-circular-motion.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

const appRoutes: Routes = [
  { path: 'ulm', component: UniformLinearMotionComponent },
  { path: 'ucm', component: UniformCircularMotionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UniformLinearMotionComponent,
    UniformCircularMotionComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
