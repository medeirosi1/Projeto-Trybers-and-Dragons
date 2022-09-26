"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    //   private _fighterTwo: Fighter;
    constructor(fighterOne, _fighterTwo) {
        super(fighterOne);
        this._fighterTwo = _fighterTwo;
    }
    fight() {
        // Pensei em utilizar o for mas vendo a documentação do JS no W3Schools acabei
        // utilizando o while por ser mais prático para essa resolução.
        while (this.player.lifePoints > 0 && this._fighterTwo.lifePoints > 0) {
            this.player.attack(this._fighterTwo);
            this._fighterTwo.attack(this.player);
        }
        return super.fight();
    }
}
exports.default = PVP;
