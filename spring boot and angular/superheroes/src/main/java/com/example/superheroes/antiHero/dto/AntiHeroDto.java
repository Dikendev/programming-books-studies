package com.example.superheroes.antiHero.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

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
