import { CanActivateFn, Router } from '@angular/router';
import { HomeService } from './service/home.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const es = inject(HomeService)
    const rt = inject(Router)
    if(es.isValidUser){
      console.log("valid user");
      return true;

    }else{
      console.log("Invalid user");
      rt.navigate(['/home']);
      
      return false;
    }
};
