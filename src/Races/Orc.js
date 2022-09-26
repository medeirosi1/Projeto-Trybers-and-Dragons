"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Orc extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 74;
        Orc.countOrcInstances += 1;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
    static createdRacesInstances() {
        return Orc.countOrcInstances;
    }
}
Orc.countOrcInstances = 0;
exports.default = Orc;
