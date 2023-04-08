package com.example.superheroes.antiHero.repository;

import com.example.superheroes.antiHero.entity.AntiHeroEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface AntiHeroRepository extends JpaRepository<AntiHeroEntity, UUID> {
}
