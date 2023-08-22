import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      const authUser = localStorage.getItem('authUser');
      
      if (authUser) {
        // Converte o JSON de volta para um objeto
        const user = JSON.parse(authUser);
        
        if(user.role == 2){
          return true;
        }else {
          // Redirecione para uma rota de acesso negado ou faça algo apropriado
          // this.router.navigate(['/acesso-negado']);
          alert("Sem permissão");
          this.router.navigate(['/home']);
          return false; // Acesso negado
        }
      }else {
        // Redirecione para uma rota de acesso negado ou faça algo apropriado
        // this.router.navigate(['/acesso-negado']);
        alert("Sem permissão");
        this.router.navigate(['/home']);
        return false; // Acesso negado
      }
      // return false;
  }
}