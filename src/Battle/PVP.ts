import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
//   private _fighterTwo: Fighter;

  constructor(fighterOne: Fighter, private _fighterTwo: Fighter) {
    super(fighterOne);
  }

  fight(): number {
    // Pensei em utilizar o for mas vendo a documentação do JS no W3Schools acabei
    // utilizando o while por ser mais prático para essa resolução.
    while (this.player.lifePoints > 0 && this._fighterTwo.lifePoints > 0) {
      this.player.attack(this._fighterTwo);
      this._fighterTwo.attack(this.player);
    }

    return super.fight();
  }
}

export default PVP;