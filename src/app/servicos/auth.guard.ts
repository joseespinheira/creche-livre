import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { UserRole } from '../shared/roleEnum';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const authUser = localStorage.getItem('authUser');
    if (authUser) {
      // Converte o JSON de volta para um objeto
      console.log('aqui' + authUser);
      const user = JSON.parse(authUser);
      console.log('aqui' + user.id);

      let isAuthenticated = false;

      if (user.id > 0) {
        isAuthenticated = true;
      }

      if (isAuthenticated) {
        return true;
      } else {
        // Redireciona para a página de login se não estiver autenticado ou não tiver perfil adequado
        return this.router.createUrlTree(['/login']);
      }
    }
    return this.router.createUrlTree(['/login']);
  }

  canAccessAdmin(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const authUser = localStorage.getItem('authUser');

    if (authUser) {
      // Converte o JSON de volta para um objeto
      const user = JSON.parse(authUser);

      if (user.role == UserRole.Admin) {
        return true;
      }
      return this.router.createUrlTree(['/sem-permissao']);
    }
    return this.router.createUrlTree(['/login']);
  }

  logout() {
    // Remova o token do localStorage (ou de qualquer outra forma de armazenamento)
    localStorage.removeItem('authUser');
    
    // Opicionalmente, você pode redirecionar o usuário para a página de login
    this.router.navigate(['/login']);
  }
}
