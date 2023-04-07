package etu.fdrg.R401.TP4;

import java.text.Normalizer;
import java.util.ArrayList;

public class Grille {
    private int hauteur;
    private int longueur;
    public ArrayList<String> lignes;
    private ArrayList<String> mots;

    Grille(){
        this(10,10);
    }


    Grille(int hauteur, int longueur) {
        this.hauteur = hauteur;
        this.longueur = longueur;
        lignes = new ArrayList<>();
        for(int i=0; i<hauteur; i++) {
            lignes.add("");
        }
        mots = new ArrayList<>();
    }

    public void ajouterMot(int i, String mot) {
        if(lignes.get(i).length()+mot.length()<=longueur){
            if(mot.length()>1) {
                mots.add(mot);
            }
            mot = normalize(mot);
            lignes.set(i, lignes.get(i) + mot);
        }
    }

    public ArrayList<String> listeDesMots () {
        ArrayList<String> result = new ArrayList<String>();
        for(String mot : mots) {
            if(mot.length()>=2){
                result.add(mot);
            }
        }
        return result;
    }

    public String toString() {
        StringBuilder result = new StringBuilder();
        result.append("Grille : \n");
        result.append("--------------\n| ");
        for(String ligne : lignes) {
            result.append(ligne);
            if(ligne.length()<longueur) {
                for(int i=0; i<longueur-ligne.length(); i++) {
                    result.append("_");
                }
            }
            result.append(" | \n| ");
        }
        result.append("--------------\n\n");
        result.append("Mots à trouver : \n");
        for (String mot : this.listeDesMots()) {
            result.append(mot);
            result.append("\n");
        }
        return result.toString();
    }

    public ArrayList<String> getLignes() {
        return lignes;
    }

    public void setLignes(ArrayList<String> lignes) {
        this.lignes = lignes;
    }

    public int getHauteur() {
        return hauteur;
    }

    public void setHauteur(int hauteur) {
        this.hauteur = hauteur;
    }

    public int getLongueur() {
        return longueur;
    }

    public void setLongueur(int longueur) {
        this.longueur = longueur;
    }

    public ArrayList<String> getMots() {
        return mots;
    }

    public void setMots(ArrayList<String> mots) {
        this.mots = mots;
    }

    private String normalize(String word) {
        String result =  word.toLowerCase();

        // les ligatures sont wꝡ
        result = result.replaceAll("ꜳ", "aa");
        result = result.replaceAll("ꜳ", "ae");
        result = result.replaceAll("ꜵ", "ao");
        result = result.replaceAll("ꜷ", "au");
        result = result.replaceAll("ꜹ", "av");
        result = result.replaceAll("ꜻ", "av");
        result = result.replaceAll("ꜽ", "ay");
        result = result.replaceAll("\uD83D\uDE70", "et");
        result = result.replaceAll("ﬀ", "ff");
        result = result.replaceAll("ﬃ", "ffi");
        result = result.replaceAll("ﬄ", "ffl");
        result = result.replaceAll("ﬁ", "fi");
        result = result.replaceAll("ﬂ", "fl");
        result = result.replaceAll("ƕ", "hv");
        result = result.replaceAll("℔", "lb");
        result = result.replaceAll("ỻ", "ll");
        result = result.replaceAll("œ", "oe");
        result = result.replaceAll("ꝏ", "oo");
        result = result.replaceAll("ꭢ", "ɔe");
        result = result.replaceAll("ß", "ſs");
        result = result.replaceAll("ﬆ", "st");
        result = result.replaceAll("ﬅ", "ft");
        result = result.replaceAll("ꜩ", "tz");
        result = result.replaceAll("ᵫ", "ue");
        result = result.replaceAll("ꭣ", "uo");
        result = result.replaceAll("ꝡ", "vy");
        result = result.replaceAll(" ", "");

        result = Normalizer.normalize(result, Normalizer.Form.NFKD);
        result = result.replaceAll("\\p{M}", "");
        return result;
    }
}
