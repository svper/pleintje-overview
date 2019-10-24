import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-lineup',
  templateUrl: './lineup.component.html',
  styleUrls: ['./lineup.component.scss']
})
export class LineupComponent implements OnInit {

  @Input() lineup: any;
  constructor() { 
  }

  sortLineup = (lineup) => {
    return lineup.sort((n1, n2) => {
      return n1.shirt_number - n2.shirt_number;
    });
  }

  ngOnInit() {
  }

}
