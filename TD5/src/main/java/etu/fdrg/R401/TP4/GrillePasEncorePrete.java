package etu.fdrg.R401.TP4;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.PARTIAL_CONTENT)
public class GrillePasEncorePrete extends RuntimeException{
    public GrillePasEncorePrete(String message) {
        super(message);
    }
}
