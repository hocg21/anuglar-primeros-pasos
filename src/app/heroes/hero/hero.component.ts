import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'monkey D. Luffy';
  public age: number = 17;

  get capitalizedName():string{
    return this.name.toUpperCase()

  }

  public getHeroDescription():string{
    return `${this.capitalizedName} - ${this.age} `
  }

  changeName():void{
    this.name = "Rey de los piratas";

  }

  changeAge():void{
    this.age = 25
  }

  reset():void{
    this.name = 'monkey D. Luffy';
    this.age = 17;
  }
}
