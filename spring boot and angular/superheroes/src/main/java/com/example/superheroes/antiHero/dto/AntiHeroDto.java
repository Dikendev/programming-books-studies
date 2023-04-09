package com.example.superheroes.antiHero.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.UUID;

@Getter
@Setter
public class AntiHeroDto {

    private UUID id;

    @NotNull(message = "First name is required")
    private String firstName;

    private String lastName;
    private String house;
    private String knownAs;
}
