import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes: string[] = ['Monkey D. Luffy','Zoro Roronoa', 'Chopper'];

  public deletedHero?: string;


  deleteHero():void{
    this.deletedHero = this.heroes.pop();

  }
}
