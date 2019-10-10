import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  @Input() match: any;

  constructor() { }

  ngOnInit() {
    console.log(this.match);
  }

}
