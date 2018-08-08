import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Coordinats } from "../../model/coordinats";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lat: any;
  lng: any;
  listOfCordinats: Coordinats[] = [];

  // fahrten: Fahrt[];

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }

  ionViewDidLoad() {
    this.geolocation.getCurrentPosition().then( pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
    }).catch( err => console.log(err));
  }

  getGeo() {
    // this.geolocation.getCurrentPosition().then( pos => {
      this.geolocation.getCurrentPosition({ enableHighAccuracy: true, timeout: 30000 }).then( pos => {
      this.lat = pos.coords.latitude;
      this.lng = pos.coords.longitude;
      // latAndLngStr = "lat: " + this.lat + ", lng: " + this.lng + ".";
      this.listOfCordinats.push(new Coordinats(this.lat, this.lng));
      console.log("getGeolocation was exicuted");
      console.log("gelocation: " + this.listOfCordinats);
      alert("you location ist now: lat: " + this.lat+ ", long: " + this.lng);
    }).catch( err => console.log(err));
  }

}
