import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AntiHero } from '../../models/anti-hero.interface';

@Component({
  selector: 'app-anti-hero-list',
  templateUrl: './anti-hero-list.component.html',
  styleUrls: ['./anti-hero-list.component.sass']
})
export class AntiHeroListComponent implements OnInit{
  @Input() headers: Array<{headerName: String, fieldName: keyof AntiHero}> [];
  @Input() antiHeroes: Array<AntiHero> = [];
  @Output() antiHero = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
    
  }
  selectAntiHero(antiHero: AntiHero) {
    this.antiHero.emit(antiHero);
  }
}
