import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})

export class OnepieceService {

  public characters: Character[] = [{
    id:uuid(),
    name: 'Monkey D. Luffy',
    power: 9000
  },
  {
    id:uuid(),
    name: 'Zoro Roronoa',
    power: 8000
  },
  {
    id:uuid(),
    name: 'Zanji',
    power:7000
  }];

  addCharacter(character: Character):void{
    console.log(character)

    const newCharacter: Character = { ...character, id: uuid() };

    this.characters.push(newCharacter);

  }

  /*
  onDeleteCharacter( index: number){
    this.characters.splice(index,1)
  }
  */

  deleteCharacterById(id : string ){
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
