package com.example.superheroes.antiHero.controller;

import com.example.superheroes.antiHero.dto.AntiHeroDto;
import com.example.superheroes.antiHero.entity.AntiHeroEntity;
import com.example.superheroes.antiHero.service.AntiHeroService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@AllArgsConstructor
@RestController
@RequestMapping("api/v1/anti-heroes")
public class AntiHeroController {

    private final AntiHeroService heroService;
    private final ModelMapper modelMapper;

    @GetMapping("/{id}")
    public AntiHeroDto getAntiHeroById(@PathVariable("id") UUID id) {
        return convertToDto(heroService.findAntiHeroById(id));
    }

    @GetMapping
    public List<AntiHeroDto> getAntiHeroes(Pageable pageable) {
        int toSkip =
                pageable.getPageSize() *
                pageable.getPageNumber();

        var antiHeroList = StreamSupport
                .stream(heroService.findAllAntiHeroes().spliterator(), false)
                .collect(Collectors.toList());

        return antiHeroList
                .stream()
                .map(this::convertToDto)
                .collect(Collectors.toList()
                );
    }

    @PostMapping
    public AntiHeroDto postAntiHero(@Valid @RequestBody AntiHeroDto antiHeroDto) {
        var entity = convertToEntity(antiHeroDto);
        var antiHero = heroService.addAntiHero(entity);

        return convertToDto(antiHero);
    }

    @PutMapping("/{id}")
    public void putAntiHero(@PathVariable("id") UUID id,
                            @Valid @RequestBody AntiHeroDto antiHeroDto) {
        if (!id.equals(antiHeroDto.getId())) throw new
                ResponseStatusException(
                HttpStatus.BAD_REQUEST,
                "id does not match."
        );

        var antiHeroEntity = convertToEntity(antiHeroDto);
        heroService.updateAntiHero(id, antiHeroEntity);
    }

    @DeleteMapping("/{id}")
    public void deleteAntiHeroById(@PathVariable("id") UUID id) {
        heroService.removeAntiHeroById(id);
    }

    private AntiHeroDto convertToDto(AntiHeroEntity entity) {
        return modelMapper.map(entity, AntiHeroDto.class);
    }

    private AntiHeroEntity convertToEntity(AntiHeroDto dto) {
        return modelMapper.map(dto, AntiHeroEntity.class);
    }
}
