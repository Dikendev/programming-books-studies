package com.example.superheroes.user;

import com.example.superheroes.user.entity.UserEntity;
import com.example.superheroes.user.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository repositoryTest;

    UserEntity userTest = new UserEntity();

    @BeforeEach
    public void setup() {
        userTest.setEmail("");
        userTest.setMobileNumber("222");
    }

}
