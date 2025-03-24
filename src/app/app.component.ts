import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";
  imgUrl: string = "https://media.licdn.com/dms/image/v2/C510BAQEYyeT3P0H_mw/company-logo_200_200/company-logo_200_200/0/1630611149363/bridgelabz_com_logo?e=2147483647&v=beta&t=TFgRiaA55f57NqQFnUbnsKu3mQo7c-LOfD8_iNSgtNM";
  bridgeLabzUrl: string = "https://www.bridgelabz.com";

  launchBridgeLabz() {
    window.open(this.bridgeLabzUrl, "_blank"); // Opens URL in a new tab
  }
}
