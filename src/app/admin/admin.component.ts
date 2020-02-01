import { Component, OnInit } from '@angular/core';
import { PhpService } from '../php.service';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  matches: any[];
  players: any[];
  lineupForm: FormGroup;
  linedupPlayers: FormArray;



  constructor(public _php: PhpService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    //this.matches = this._php.getLocalMatches().reverse();
    this._php.getMatches().subscribe(data => {
      this.matches = data as any;
      this.matches.reverse();
    });

    //this.players = this._php.getLocalPlayers();
    this._php.getPlayers().subscribe(data => {
      this.players = data as any;
    });


    this.lineupForm = this.formBuilder.group({
      match: [''],
      linedupPlayers: this.formBuilder.array([this.createPlayerLinedup()])
    });
  }

  addPlayer(): void {
    this.linedupPlayers = this.lineupForm.get('linedupPlayers') as FormArray;
    this.linedupPlayers.push(this.createPlayerLinedup());
  }

  createPlayerLinedup(): FormGroup {
    return this.formBuilder.group({
      id: '',
      number: '',
      isKeeper: ''
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.lineupForm.value))
    this._php.saveLineup(this.lineupForm.value);
  }

}
