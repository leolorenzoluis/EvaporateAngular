import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import 'evaporate';
// import 'evaporate';
// import 'crypto-js';
// import * as Evaporate from 'evaporate';

// import * as cryptojs from '@types/cryptojs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {
  title = 'app works!';
  evaporate: any;
  upload() {

    const config = {
      signerUrl: '',
      aws_key: '<AWS_KEY>',
      bucket: '<AWS_BUCKET>',
      cloudfront: true,
      computeContentMd5: true,
      cryptoMd5Method: function (data) { return CryptoJS.MD5('md5'); }
    };

    let a = this.evaporate(config);
    // let evaporate = new Evaporate.Evaporate(config);
    //  console.log(evaporate);
    console.log(CryptoJS.MD5('md5'));
  }
}
