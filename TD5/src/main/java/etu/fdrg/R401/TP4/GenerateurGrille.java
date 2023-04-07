package etu.fdrg.R401.TP4;

import java.util.Random;

public class GenerateurGrille {

    private String langue;
    private int hauteur;
    private int longueur;

    private RequetesMots requetesMots;

    GenerateurGrille(String langue, int hauteur, int longueur) {
        this.langue = langue;
        this.hauteur = hauteur;
        this.longueur = longueur;
        requetesMots = new RequetesMots();
    }

    public Grille generer() {
        Grille grille = new Grille(hauteur, longueur);
        for (int i = 0; i < hauteur; i++) {
            String mot = requetesMots.obtenirUnMot(langue, longueur);
//            System.out.println(mot);
            grille.ajouterMot(i,mot);
            Random random = new Random();
            while(grille.lignes.get(i).length()<longueur) {
                grille.ajouterMot(i, String.valueOf((char)random.nextInt(97, 122)));
            }
        }
        return grille;
    }
}
