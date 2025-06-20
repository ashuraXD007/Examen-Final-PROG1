import { expect } from "chai";
import { describe, it } from "mocha";
import { Clan } from "./kata1";

describe("Test de l'exercice 1 : Clan", function(){
    it("doit retourner le clan qui est en tête", function(){
        expect(Clan(["LuneNoire 12 13 15", "SoleilBrulant 20 12 13", "OmbreLointaine 13 9 10", "FerEclatant 12 13 8", "VentLibre 16 26 22"])).to.equal("SoleilBrulant");
    });
    it("si le nombre de médaille d'or sont égaux, on doit comparer la médaille d'argent ensuite", function(){
        expect(Clan(["LuneNoire 2 1 0", "SoleilBrulant 20 12 13", "OmbreLointaine 20 9 10", "FerEclatant 12 13 8", "VentLibre 16 26 22"])).to.equal("SoleilBrulant");
    });
    it("doit retourner undefined si groupementClan est vide", function(){
        expect(Clan([])).to.equal(undefined);
    });
});