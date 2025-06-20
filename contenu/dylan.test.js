import { expect } from "chai";
import { describe, it } from "mocha";
import { subsequence } from "./kata3.js";



describe("Test de l'exercice 3 : subsequence", function(){
    it("doit retourner 'NOK 0' si aucune lettre ne correspond", function(){
        expect(subsequence("fgh", "klm")).to.equal("NOK 0");
    });
    it("doit retourner 'NOK 1' pour subsquence('qwx', 'qx')", function(){
        expect(subsequence("qwx", "qx")).to.equal('NOK 1');
    });
    it("doit retourner 'NOK 2' pour subsquence('acc', 'abca')", function(){
        expect(subsequence("acc", "abca")).to.equal("NOK 2");
    });
    it("doit retourner 'OK' pour subsequence('bihfd', 'buzaqilmnhoqswafcvxdask' ) ", function(){
        expect(subsequence("bihfd", "buzaqilmnhoqswafcvxdask")).to.equal("OK");
    });
    it("doit retourner 'OK' pour un message égal au parchemin", function(){
        expect(subsequence("klm", "klm")).to.equal("OK");
    });
    it("doit retourner 'undefined' si X est vide ", function(){
        expect(subsequence("", "hnklmpityfazqdswxbear")).to.equal(undefined);
    });
    it("doit retourner 'undefined' si Y est vide ", function(){
        expect(subsequence("", "hnklmpityfazqdswxbear")).to.equal(undefined);
    });
}); 