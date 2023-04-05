package com.example.superheroes.antiHero.repository;

import com.example.superheroes.antiHero.entity.AntiHeroEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AntiHeroRepository extends JpaRepository<AntiHeroEntity, UUID> {
}
