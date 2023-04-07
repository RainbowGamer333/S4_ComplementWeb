package etu.fdrg.R401.TP4;

import java.util.HashMap;
import java.util.Random;
import java.util.UUID;

public class StockageGrille {
    private HashMap<String, Grille> grilles;
    private Random  random;

    StockageGrille() {
        grilles = new HashMap<String, Grille>();
        random = new Random();
    }

    public String add(Grille grille) {
        UUID uuid;
        do {
            uuid = UUID.randomUUID();
        } while (grilles.containsKey(String.valueOf(uuid)));
        grilles.put(String.valueOf(uuid), grille);
        return uuid.toString();
    }

    public Grille obtenirGrille() {
        if(grilles.size()==0) {
            return new Grille(10,10);
        }else {
            return grilles.get(grilles.keySet().toArray()[random.nextInt(grilles.size())]);
        }
    }

    //3.c
    public Grille obtenirGrille(String uuid) {
        if(!grilles.containsKey(uuid)) {
            throw new GrilleNonTrouve("Grille non trouvée");
        }else{
            Grille grille = grilles.get(uuid);
            if(grille==null) {
                throw new GrillePasEncorePrete("Grille pas encore prête");
            }else{
                return grille;
            }
        }
    }

    public String reserver() {
        UUID uuid;
        do {
            uuid = UUID.randomUUID();
        } while (grilles.containsKey(String.valueOf(uuid)));
        grilles.put(String.valueOf(uuid), null);
        return uuid.toString();
    }

    public boolean mettreAJour(String uuid, Grille grille) {
        if(grilles.get(uuid)==null) {
            grilles.put(uuid, grille);
            return true;
        }
        return false;
    }

    public boolean liberer(String uuid) {
        if(grilles.keySet().contains(uuid) && grilles.get(uuid)==null) {
            grilles.remove(uuid);
            return true;
        }
        return false;
    }

}
