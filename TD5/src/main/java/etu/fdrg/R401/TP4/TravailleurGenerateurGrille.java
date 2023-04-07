package etu.fdrg.R401.TP4;

import java.util.Arrays;
import java.util.Random;
import java.util.UUID;

public class TravailleurGenerateurGrille implements Runnable {

    private StockageGrille stockageGrille;
    private String langue;
    private int hauteur;
    private int largeur;
    private RequetesMots requetesMots;
    private String uuid;

    public TravailleurGenerateurGrille(StockageGrille stockageGrille, String langue, int hauteur, int largeur) {
        this.stockageGrille = stockageGrille;
        this.langue = langue;
        this.hauteur = hauteur;
        this.largeur = largeur;
        requetesMots = new RequetesMots();
    }

    @Override
    public void run() {
        String[] langues = requetesMots.languesDisponibles();
        if (Arrays.toString(langues).contains(langue)) {
            Grille grille = new Grille(hauteur, largeur);
            for (int i = 0; i < hauteur; i++) {
                String mot = requetesMots.obtenirUnMot(langue, largeur);
                grille.ajouterMot(i, mot);
                Random random = new Random();
                /*
                while (grille.lignes.get(i).length() < largeur) {
                    grille.ajouterMot(i, String.valueOf((char) random.nextInt(97, 122)));
                }*/
            }
            this.stockageGrille.mettreAJour(uuid, grille);
        } else {
            this.stockageGrille.liberer(uuid);
        }
    }

    public String genereTacheDeFond(String langue, int hauteur, int largeur) {
        this.uuid = stockageGrille.reserver();
        new Thread(this).start();
        return this.uuid;
    }
}
