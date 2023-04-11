package com.example.superheroes.antiHero;

import com.example.superheroes.antiHero.entity.AntiHeroEntity;
import com.example.superheroes.antiHero.repository.AntiHeroRepository;
import com.example.superheroes.antiHero.service.AntiHeroService;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;


@DataJpaTest
public class AntiHeroH2ServiceTest {

    @Autowired
    private AntiHeroRepository repository;
    private AntiHeroService service;

    AntiHeroEntity antiHero = new AntiHeroEntity();

    @BeforeEach
    public void setup() {
        antiHero.setFirstName("Diego");
        antiHero.setLastName("Kennedy");
        antiHero.setHouse("MCU");

        service = new AntiHeroService(repository);
    }

}
