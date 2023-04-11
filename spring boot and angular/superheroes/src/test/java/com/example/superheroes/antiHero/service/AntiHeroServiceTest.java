package com.example.superheroes.antiHero.service;

import com.example.superheroes.antiHero.entity.AntiHeroEntity;
import com.example.superheroes.antiHero.repository.AntiHeroRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class AntiHeroServiceTest {

    @Mock
    private AntiHeroRepository antiHeroRepository;

    @InjectMocks
    private AntiHeroService antiHeroServiceTest;

    @Test
    void canFindAllAntiHeroes() {
        //when
        antiHeroServiceTest.findAllAntiHeroes();
        //then
        verify(antiHeroRepository).findAll();
    }

    @Test
    void canAddAntiHero() {
        //give
        AntiHeroEntity antiHeroEntity = new AntiHeroEntity(
                UUID.randomUUID(),
                "Diego",
                "Kennedy",
                "BNU",
                "Diken",
                new SimpleDateFormat("dd-MM-yyyy HH:mm:ss z").format(new Date())
        );

        //when
        antiHeroServiceTest.addAntiHero(antiHeroEntity);

        //then
        ArgumentCaptor<AntiHeroEntity> antiHeroEntityArgumentCaptor = ArgumentCaptor
                .forClass(AntiHeroEntity.class);

        verify(antiHeroRepository).save(antiHeroEntityArgumentCaptor.capture());
        AntiHeroEntity captureAntiHero = antiHeroEntityArgumentCaptor.getValue();

        assertThat(captureAntiHero).isEqualTo(antiHeroEntity);
    }
}
