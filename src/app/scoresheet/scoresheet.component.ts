import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-scoresheet',
  templateUrl: './scoresheet.component.html',
  styleUrls: ['./scoresheet.component.scss']
})
export class ScoresheetComponent implements OnInit {

  @Input() goals: any;
  constructor() { }

  ngOnInit() {
  }

}
