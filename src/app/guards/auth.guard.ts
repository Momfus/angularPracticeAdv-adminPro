import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  // Usado para la carga peresoza
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.usuarioService.validarToken()
    .pipe(
      tap( estaAutenticado => {

        // Si no está autenticado, se envia de nuevo al login
        if( !estaAutenticado ) {
          this.router.navigateByUrl('/login');
        }

      })
    );

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      return this.usuarioService.validarToken()
              .pipe(
                tap( estaAutenticado => {

                  // Si no está autenticado, se envia de nuevo al login
                  if( !estaAutenticado ) {
                    this.router.navigateByUrl('/login');
                  }

                })
              );

  }

}
