import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  @ViewChild("loginId") loginId: ElementRef | undefined;
  @ViewChild("signupId") signupId: ElementRef | undefined;
  @ViewChild("btn") btn: ElementRef | undefined;
  
  public signup(): void {
    this.loginId!.nativeElement.style.left = "-400px";
    this.signupId!.nativeElement.style.left = "50px";
    this.btn!.nativeElement.style.left = "110px";
  }
  public login(): void {
    this.loginId!.nativeElement.style.left = "50px";
    this.signupId!.nativeElement.style.left = "450px";
    this.btn!.nativeElement.style.left = "0";
  }
}
