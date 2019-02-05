import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes:any[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router ) {

  }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
    //console.log(idx);
  }
}