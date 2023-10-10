import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { OAuthService } from "angular-oauth2-oidc";
import { NgxUiLoaderService } from "ngx-ui-loader";
@Injectable({
  providedIn: 'root'
})

export class AlwaysAuthGuard implements CanActivate {

  constructor(private oauthService: OAuthService,
    private spinner: NgxUiLoaderService) {
  }

  canActivate() {
    if(window.location.href.includes('localhost')) {
      return true;
    } else {
      return this.login(window.location.hash.replace('#/',''));
    }
  }

  public login(url: string) {
    if ((url.includes('broker') || url.includes('admin')) && !this.checkUserLogin(url)) {
      this.spinner.start();
      sessionStorage.clear();
      sessionStorage.setItem('currentRedirectPath', url);
      this.oauthService.initImplicitFlow();
      return false;
    }
    return true;
  }

  checkUserLogin(url: any) {
    if (sessionStorage.getItem('successRedirectPath') == url) {
      return true;
    }
    return false;
  }
}