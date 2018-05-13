import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Color } from "color";
import { View } from "ui/core/view";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import bluetooth = require('nativescript-bluetooth');

import { Peripheral } from 'nativescript-bluetooth';

@Component({
  selector: "mainscreen",
  providers: [UserService],
  templateUrl: "./pages/mainscreen/mainscreen.html",
  styleUrls: ["./pages/mainscreen/mainscreen-common.css", "./pages/mainscreen/mainscreen.css"],
})
export class MainscreenComponent {
  userche: User;
  isBluetoothConnected = false;


  onButtonTap(): void {
    console.log("Button was pressed");
    this.isConnected = !this.isConnected;

    let BlueToothStatusBar = <View>this.BlueToothStatusBar.nativeElement;
    BlueToothStatusBar.animate({
        backgroundColor: this.isConnected ? new Color("green") : new Color("red"),
        duration: 1000
    });
   
  //   bluetooth.isBluetoothEnabled().then(enabled => {
  //     if (!enabled) {
  //         console.log("disabled")
  //     } else {
  //       console.log("georgi")
  //     }
  // });

  //   debugger;

  // bluetooth.isBluetoothEnabled().then(
  //   enabled => enabled ? alert("Evala") : alert("please enable")
  // );

  bluetooth.startScanning({
    serviceUUIDs: [],
    seconds: 5,
    onDiscovered: function (peripheral) {
      alert("Periperhal found with UUID: " + peripheral.UUID);

      bluetooth.connect({
        UUID: peripheral.UUID,
        onConnected: (peripheral: Peripheral) => {
          alert('Connected');
          //here you can navigate to the controller view
        },
        onDisconnected: (peripheral: Peripheral) => {
          alert('Device Disconnected');
          //here you can navigate to the scan view
        }
      })

      
      //if success
      //change to successful

      //esle

      // Problem connecting to the device. Try again


    },
    skipPermissionCheck: false
  }).then(function() {
    alert("No device found. Make sure you are in your car and try again");
  }, function (err) {
    alert("error while scanning: " + err);
  });

}

connect(UUID: string) {
  bluetooth.connect({
    UUID: UUID,
    onConnected: (peripheral: Peripheral) => {
      alert('Connected');
      //here you can navigate to the controller view
    },
    onDisconnected: (peripheral: Peripheral) => {
      alert('Device Disconnected');
      //here you can navigate to the scan view
    }
  })
}


@ViewChild("BlueToothStatusBar") BlueToothStatusBar: ElementRef;
isConnected = false;
  

  constructor(private router: Router, private userService: UserService) {
    
  }
}
