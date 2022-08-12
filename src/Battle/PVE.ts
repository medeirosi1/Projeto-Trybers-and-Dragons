import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(fighterOne: Fighter, private _monster: SimpleFighter[]) {
    super(fighterOne);
  }

  fight(): number {   
    this._monster.forEach((monster) => {
      if (this.player.lifePoints !== -1 && monster.lifePoints !== -1) {
        this.player.attack(monster);
        monster.attack(this.player);
      }
    });

    return super.fight();
  }
}

export default PVE;