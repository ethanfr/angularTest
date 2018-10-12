import { Component, OnInit, Input } from '@angular/core';
import { Channel } from '../../models/channel';

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.css']
})
export class ChannelDetailComponent  {
// expecting data from other component
  @Input() channel: Channel;
}
