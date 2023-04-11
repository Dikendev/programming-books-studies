package com.example.superheroes.antiHero;

import com.example.superheroes.antiHero.entity.AntiHeroEntity;
import com.example.superheroes.antiHero.repository.AntiHeroRepository;
import com.example.superheroes.antiHero.service.AntiHeroService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

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

    @Test
    public void shouldFindAllAntiHeroes() {
        service.addAntiHero(antiHero);

        Iterable<AntiHeroEntity> antiHeroEntitiesList = service.findAllAntiHeroes();

        AntiHeroEntity savedAntiHero = antiHeroEntitiesList.iterator().next();

        assertThat(savedAntiHero).isNotNull();
    }

    @Test
    public void shouldAddAntiHero() {
        service.addAntiHero(antiHero);

        Iterable<AntiHeroEntity> antiHeroEntitiesList = service.findAllAntiHeroes();
        AntiHeroEntity savedAntiHero = antiHeroEntitiesList.iterator().next();

        assertThat(antiHero).isEqualTo(savedAntiHero);
    }

    @Test
    public void shouldUpdateAntiHero() {
        AntiHeroEntity savedAntiHero = service.addAntiHero(antiHero);
        savedAntiHero.setHouse("Blumenau");

        service.updateAntiHero(savedAntiHero.getId(), savedAntiHero);
        AntiHeroEntity foundAntiHero = service.findAntiHeroById(savedAntiHero.getId());

        assertThat(foundAntiHero.getHouse()).isEqualTo("San Francisco");
    }

}
