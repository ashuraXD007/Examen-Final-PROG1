import { expect } from "chai";
import { describe, it } from "mocha";
import { maxPassengers } from "./kata2.js";

describe("Test de l'exercice 2 : maxPassengers", function(){
    it("doit retourner le nombre de guerriers qui monte et qui descendent à chaque arrêt ", function(){
        expect(maxPassengers([0, 2, 4, 4],[3, 5, 2, 0])).to.equal("6");
    });
    it("doit retourner 0 si exiting et entering ont le même contenu", function(){
        expect(maxPassengers([0, 2, 4, 4],[0, 2, 4, 4])).to.equal("0");
    });
    it("doit retourner undefined si exiting est vide", function(){
        expect(maxPassengers([],[3, 0, 2, 0])).to.equal(undefined);
    });
    it("doit retourner undefined si entering est vide", function(){
        expect(maxPassengers([1, 0, 3, 0],  [])).to.equal(undefined);
    });
    it("doit retourner undefined si entering et exiting sont vide", function(){
        expect(maxPassengers([],  [])).to.equal(undefined);
    });
  
});