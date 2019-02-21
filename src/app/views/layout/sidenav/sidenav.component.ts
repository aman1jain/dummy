import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

 
  sidenavToggle(){
    console.log('clicked sideNav');
    $('body').toggleClass('nav-close');
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });


  ngOnInit() {
    (function (window, document, undefined) {
      'use strict';

      // Initialize the media query
      const mediaQuery = window.matchMedia('(max-width: 768px)');

      // Add a listen event
      mediaQuery.addListener(doSomething);

      // Function to do something with the media query
      function doSomething(mediaQuery: any) {
        if (mediaQuery.matches) {
          $("body").addClass("nav-close");
        } else {
          //
          $("body").removeClass("nav-close");
        }
      }

      // On load
      // doSomething(mediaQuery);

      // Modernizr
      // window.addEventListener('resize', function() {
      //  if (Modernizr.mq('(min-width: 560px)')) {
      //    document.body.style.backgroundColor = 'CornflowerBlue';
      //  } else {
      //    document.body.style.backgroundColor = 'FireBrick';
      //  }
      // }, false);

    })(window, document);
  }

}
