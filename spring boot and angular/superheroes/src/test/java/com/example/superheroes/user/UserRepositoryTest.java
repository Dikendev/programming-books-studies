package com.example.superheroes.user;

import com.example.superheroes.user.entity.UserEntity;
import com.example.superheroes.user.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@DataJpaTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository repositoryTest;

    UserEntity userTest = new UserEntity();

    @BeforeEach
    public void setup() {
        //give
        userTest.setEmail("diken.dev@gmail.com");
        repositoryTest.save(userTest);
    }

    @BeforeEach
    void tearDown() {
        repositoryTest.deleteAll();
    }

     @Test
     void itShouldCheckWhenUserEmailExist() {

         //when
         boolean expected = repositoryTest.selectExistsEmail(userTest.getEmail());

         //then
         assertThat(expected).isTrue();
     }

    @Test
    void itShouldFindUserWhenEmailExist() {

        //when
        UserEntity expected = repositoryTest.findByEmail(userTest.getEmail());

        //then
        assertThat(expected).isEqualTo(userTest);
    }

    @Test
    void itShouldCheckWhenUserEmailDoesNotExist() {

    }
}
