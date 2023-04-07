package etu.fdrg.R401.TP4;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class GrilleNonTrouve extends RuntimeException{
    public GrilleNonTrouve(String message) {
        super(message);
    }

    public GrilleNonTrouve() {
        super();
    }
}
