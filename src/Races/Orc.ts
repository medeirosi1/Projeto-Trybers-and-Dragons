import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static countOrcInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.countOrcInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc.countOrcInstances;
  }
}

export default Orc;