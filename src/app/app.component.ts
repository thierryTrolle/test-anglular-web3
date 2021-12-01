import { Component } from '@angular/core';
import Web3 from 'web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAnglularWeb3';
  private web3: Web3;

  constructor() {
    this.web3 = new Web3("web3-provider-url");
  }
}
