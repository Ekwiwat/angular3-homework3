import { Injectable } from '@angular/core';
import { Product } from '../app/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getProducts(): Product[] {
    return [
      {
        name: 'Build your own computer',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000020_build-your-own-computer_75.jpeg',
        SKU: 'COMP_CUST',
        price: 1200,
        quantity: 10000,
        publish: true
      },
      {
        name: 'Digital Storm VANQUISH 3 Custom Performance PC',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000022_digital-storm-vanquish-3-custom-performance-pc_75.jpeg',
        SKU: 'DS_VA3_PC',
        price: 1259,
        quantity: 10000,
        publish: true
      },
      {
        name: 'Lenovo IdeaCentre 600 All-in-One PC',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000023_lenovo-ideacentre-600-all-in-one-pc_75.jpeg',
        SKU: 'LE_IC_600',
        price: 500,
        quantity: 10000,
        publish: true
      },
      {
        name: 'Apple MacBook Pro 13-inch',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000024_apple-macbook-pro-13-inch_75.jpeg',
        SKU: 'AP_MBP_13',
        price: 1800,
        quantity: 10000,
        publish: true
      },
      {
        name: 'Asus N551JK-XO076H Laptop',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000026_asus-n551jk-xo076h-laptop_75.jpeg',
        SKU: 'AS_551_LP',
        price: 1500,
        quantity: 10000,
        publish: true
      },
      {
        name: 'Samsung Series 9 NP900X4C Premium Ultrabook',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000027_samsung-series-9-np900x4c-premium-ultrabook_75.jpeg',
        SKU: 'SM_900_PU',
        price: 1590,
        quantity: 10000,
        publish: true
      },
      {
        name: 'HP Spectre XT Pro UltraBook',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000028_hp-spectre-xt-pro-ultrabook_75.jpeg',
        SKU: 'HP_SPX_UB',
        price: 1350,
        quantity: 10000,
        publish: true
      },
      {
        name: 'HP Envy 6-1180ca 15.6-Inch Sleekbook',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000030_hp-envy-6-1180ca-156-inch-sleekbook_75.jpeg',
        SKU: 'HP_ESB_15',
        price: 1460,
        quantity: 10000,
        publish: true
      },
      {
        name: 'Lenovo Thinkpad X1 Carbon Laptop',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000031_lenovo-thinkpad-x1-carbon-laptop_75.jpeg',
        SKU: 'LE_TX1_CL',
        price: 1360,
        quantity: 10000,
        publish: true
      },
      {
        name: 'Adobe Photoshop CS4',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000032_adobe-photoshop-cs4_75.jpeg',
        SKU: 'AD_CS4_PH',
        price: 75,
        quantity: 10000,
        publish: true
      },
      {
        name: 'Windows 8 Pro',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000033_windows-8-pro_75.jpeg',
        SKU: 'MS_WIN_8P',
        price: 65,
        quantity: 10000,
        publish: true
      },
      {
        name: 'Sound Forge Pro 11 (recurring)',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000034_sound-forge-pro-11-recurring_75.jpeg',
        SKU: 'SF_PRO_11',
        price: 54.99,
        quantity: 10000,
        publish: true
      },
      {
        name: 'Nikon D5500 DSLR',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000035_nikon-d5500-dslr_75.jpeg',
        SKU: 'N5500DS_0',
        price: 0,
        quantity: 0,
        publish: true
      },
      {
        name: 'Nikon D5500 DSLR - Black',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000037_canon-digital-slr-camera-black_75.jpeg',
        SKU: 'N5500DS_B',
        price: 670,
        quantity: 10000,
        publish: true
      },
      {
        name: 'Nikon D5500 DSLR - Red',
        imgUrl: 'https://admin-demo.nopcommerce.com/images/thumbs/0000038_canon-digital-slr-camera-silver_75.jpeg',
        SKU: 'N5500DS_R',
        price: 630,
        quantity: 10000,
        publish: true
      }
    ];
  }
}
