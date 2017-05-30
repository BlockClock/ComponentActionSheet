import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.text = "尚未操作"
  }

  clickEvent() {
    console.log('上拉菜单事件被触发!');
    let actionSheet = this.actionSheetCtrl.create({
      title: '上拉菜单',
      buttons: [
        {
          text: '操作A',
          role: 'destructive',
          handler: () => {
            console.log('操作A');
            this.text = "操作A"
          }
        },{
          text: '操作B',
          handler: () => {
            console.log('操作B');
            this.text = "操作B"
          }
        },{
          text: '操作C',
          handler: () => {
            console.log('操作C');
            this.text = "操作C"
          }
        },{
          text: '取消操作',
          role: 'cancel',
          handler: () => {
            console.log('取消操作');
            this.text = "取消操作"
          }
        }
      ]});
    actionSheet.present();
  }
}
