package com.example.superheroes.antiHero.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.redis.core.RedisHash;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@Data
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@RedisHash("AntiHero")
public class AntiHeroEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO,
            generator = "UUID")
    @Column(nullable = false, updatable = false)
    private UUID id;

    @NotNull(message = "Fist name is required")
    private String firstName;
    private String lastName;
    private String house;
    private String knownAs;
    private String createAt = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss z"  ).format(new Date());
}
