package etu.fdrg.R401.TP4;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
public class Tp4Application {

	public static void main(String[] args) {
		SpringApplication.run(Tp4Application.class, args);
//		new SpringApplicationBuilder(Tp4Application.class)
//				.web(WebApplicationType.NONE)
//				.run(args);

	}
//	@Bean
//	public CommandLineRunner testlanguesQuery() {
//		return args -> {
//			GenerateurGrille generateurGrille = new GenerateurGrille("fr", Integer.parseInt(args[0]), Integer.parseInt(args[1]));
//			Grille grille = generateurGrille.generer();
//			System.out.println(grille);
//		};
//	}
}
