import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {

  @Input() lineup: any;
  constructor() { }

  ngOnInit() {
  }

}
