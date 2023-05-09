package com.example.superheroes;

import com.example.superheroes.antiHero.controller.AntiHeroController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class SuperheroesApplication {
	private static final Logger LOGGER = LoggerFactory.getLogger(AntiHeroController.class);
	public static void main(String[] args) {

		SpringApplication.run(SuperheroesApplication.class, args);
		LOGGER.info("Using SLF4J: Getting anti-hero list - getAntiHeroes()");
		//LOMBOK SLF4j

	}


}
