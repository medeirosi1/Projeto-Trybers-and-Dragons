"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(fighterOne, _monster) {
        super(fighterOne);
        this._monster = _monster;
    }
    fight() {
        this._monster.forEach((monster) => {
            if (this.player.lifePoints !== -1 && monster.lifePoints !== -1) {
                this.player.attack(monster);
                monster.attack(this.player);
            }
        });
        return super.fight();
    }
}
exports.default = PVE;
