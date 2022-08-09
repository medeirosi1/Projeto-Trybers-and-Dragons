import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static countElffInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.countElffInstances += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Elf.countElffInstances;
  }
}

export default Elf;