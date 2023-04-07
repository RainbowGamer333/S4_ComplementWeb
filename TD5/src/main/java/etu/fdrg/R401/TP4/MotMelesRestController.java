package etu.fdrg.R401.TP4;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MotMelesRestController {
    private StockageGrille stockageGrille;

    MotMelesRestController() {
        GenerateurGrille generateurGrille = new GenerateurGrille("fr", 10, 10);
        Grille grille = generateurGrille.generer();
        stockageGrille = new StockageGrille();
        String a = stockageGrille.add(grille);
    }

    @GetMapping("/unegrille")
    public Grille getGrille() {
        return this.getGrilleSolution1();
    }

    private Grille getGrilleSolution1(){
        return this.stockageGrille.obtenirGrille();
    }

    /**
     * Il faut exécuter cette requete pour lancer la génération d'une grille et récupérer l'UUID
     * @param langue
     * @param hauteur
     * @param largeur
     * @return
     */
    @GetMapping("/grilles/nouvelle")
    public String getGrilleNouvelle(@RequestParam(value = "langue", defaultValue = "fr") String langue,
                                    @RequestParam(value = "hauteur", defaultValue = "10") int hauteur,
                                    @RequestParam(value = "largeur", defaultValue = "10") int largeur){
        if(hauteur>5 || largeur>5) {
            TravailleurGenerateurGrille worker = new TravailleurGenerateurGrille(stockageGrille, langue, hauteur, largeur);
            return worker.genereTacheDeFond(langue, hauteur, largeur);
        }else{ //error
            return "Error : hauteur ou largeur trop petite";
        }
    }

    /**
     *On peut récupérer la grille dont la génération a été lancé en fonction de son UUID
     * @param uuid
     * @return
     */
    @GetMapping("/grilles/{uuid}")
    public Grille getGrilleUUID(@PathVariable("uuid") String uuid){
        return this.stockageGrille.obtenirGrille(uuid);
    }
}
