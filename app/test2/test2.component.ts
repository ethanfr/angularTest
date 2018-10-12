import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component  {

  myClick(val: string) {console.log('i/p val: ', val); }

  myMouseover(evt: MouseEvent, val: string) {
                 console.log('val_2: ', val);

              }

}
