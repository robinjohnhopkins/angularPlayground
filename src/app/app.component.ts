import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  // ...
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // This removes btn on click
    trigger('removeMe', [
      state('out', style({
        transform: 'scal(0)',
        opacity: '0'
      })),
      transition('* => out', [
        animate(500, keyframes([
          style({opacity: '1', transform: 'translateY(-8px)', offset: 0}),        
          style({opacity: '1', transform: 'translateY(0px)', offset: .3}),        
          style({opacity: '0', transform: 'translateY(50px)', offset: 1})
        ]))
      ])
    ]),
    // this is a fade in;vertical move in of new items in list
    trigger('myTrigger', [
      state('fadeIn', style({
        opacity: '1'
      })),
      transition('void => *', [
        animate(500, keyframes([
          style({opacity: '0', transform: 'translateY(-30px)', offset: 0}),        
          style({opacity: '1', transform: 'translateY(5px)', offset: .3}),        
          style({opacity: '1', transform: 'translateY(0)', offset: 1})
        ]))
      ])
    ]),
    // trigger('myTriggerOrig', [
    //   state('fadeIn', style({
    //     opacity: '1'
    //   })),
    //   transition('void => *', [
    //     style({opacity: '0', transform: 'translateY(20px)'}),        
    //     animate('500ms 0.5s ease-out')
    //   ]),
    // ]),
    trigger('openClose', [
      // ...
      state('open', style({
        transform: 'scale(1)',
        // height: '200px',
        // width: '200px',
        opacity: 1,
        backgroundColor: 'blue'
      })),
      state('closed', style({
        transform: 'scale(1.4)',
        // height: '100px',
        // width: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      state('fadeIn', style({
        opacity: '1'
      })),
    ]),
  ],
})
export class AppComponent {
  title = 'myanims';
  isOpen = true;
  state = 'fadeIn';
  btnState :string = 'in';
  leadLine = 'My lead line';
  // items = ['item1', 'item2', 'item3'];
  items = new Array();
  toggle() {
    this.isOpen = !this.isOpen;
    this.items.push('another item');
    this.btnState = 'out';
  }
  animStart(event : any){
    console.log(event);
  }
  animComplete(event : any){
    console.log('fini');
    this.leadLine = 'It took me ' + event.totalTime + ' ms to complete';
    // NB if this doesn't work depending on version of angular
    // import ChangeDetectorRef
    // add ctor declaration
    // constructor (private cdRef:ChangeDetectorRef){}
    // then in this function add :
    // this.cdRef.detectChanges();

  }
  
}
