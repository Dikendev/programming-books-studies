package com.example.superheroes.antiHero.service;

import com.example.superheroes.antiHero.repository.AntiHeroRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

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

}
