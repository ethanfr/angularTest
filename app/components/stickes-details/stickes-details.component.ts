import { Component, OnInit, Input } from '@angular/core';
import { Sticker } from '../../models/sticker';

@Component({
  selector: 'app-stickes-details',
  templateUrl: './stickes-details.component.html',
  styleUrls: ['./stickes-details.component.css']
})
export class StickesDetailsComponent{ 
  @Input() sticker:Sticker;
}
