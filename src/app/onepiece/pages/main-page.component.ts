import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { OnepieceService } from '../services/onepiece.service'

@Component({
  selector: 'app-onepiece-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private onepieceService: OnepieceService ){}

  get characters(): Character[]{
    return [...this.onepieceService.characters]
  }

  onDeleteCharacter( id: string ):void{
    this.onepieceService.deleteCharacterById(id)
  }

  onNewCharacter( character: Character){
    this.onepieceService.addCharacter( character );
  }

}
