package etu.fdrg.R401.TP4;

import org.springframework.web.reactive.function.client.WebClient;

public class RequetesMots {
    WebClient client;

    RequetesMots() {
        client = WebClient.create("http://localhost:8080");
    }

    public String[] languesDisponibles() {
        return client.get().uri("/langues").retrieve().bodyToMono(String[].class).block();
    }

    public String obtenirUnMot(String langue, int longueur) {
        return client.get().uri("/" + langue + "/unmot/longueur/" + longueur).retrieve().bodyToMono(String.class).block();
    }
}
