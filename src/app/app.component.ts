import { Component } from '@angular/core';
import { Address } from 'cluster';
import { EHOSTUNREACH } from 'constants';
import Web3 from 'web3';

declare let window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testAnglularWeb3';
  private web3: Web3;
  private currentAccount: string = '';

  constructor() {
    // debugger
    this.web3 = new Web3("http://localhost:7545");
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      // Use Mist/MetaMask's provider
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(() => {
        console.log("Usi Mist/MetaMask's provider");
        this.web3 = new Web3(window.ethereum);

        window.ethereum.on("accountsChanged", (accounts: string | any[]) => {
          if (accounts.length > 0) {
            this.currentAccount = accounts[0];
            console.log(`Account connected: ${accounts[0]}`);
          } else {
            console.log("Account disconnected");
            window.location.reload();
          }
        });

        //catch chainChanged
        window.ethereum.on('chainChanged', (chainId: string) => {
          console.log("chainChanged" + chainId);
        });
        window.ethereum.on('connect', () => console.log("event connect"));

        window.ethereum.on('message', () => console.log("event message"));

        window.ethereum.on('disconnect', () => console.log("event disconnect"));

        window.ethereum.on('accountsChanged', () => console.log("event accountsChanged"));
      }).catch((err: any) => {
        if (err.code === 4001) { // EIP 1193 userRejectedRequest error
          console.log('Please connect to MetaMask.')
        } else {
          console.error(err)
        }
      });
    }
  }
}