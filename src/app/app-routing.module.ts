import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';

// Rutas de la aplicación
const routes: Routes =  [

  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'grafica1', component: Grafica1Component },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'  }, // Redirección a dashboard cuando no se ingresa a otro sitio
  { path: '**', component: NotpagefoundComponent } // Redireccionar en cualquier otro caso que no coincida con los anteriores

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ) // para rutas principales definidas anteriormente
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
