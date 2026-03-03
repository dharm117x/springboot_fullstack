package com.example.service;

import com.example.entity.User;
import com.example.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetAllUsers() {
        List<User> users = Arrays.asList(new User(), new User());
        when(userRepository.findAll()).thenReturn(users);

        List<User> result = userService.getAllUsers();
        assertEquals(2, result.size());
        verify(userRepository).findAll();
    }

    @Test
    void testGetUserById() {
        User user = new User();
        user.setId(1L);
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));

        User result = userService.getUserById(1L);
        assertNotNull(result);
        assertEquals(1L, result.getId());
        verify(userRepository).findById(1L);
    }

    @Test
    void testCreateUser() {
        User user = new User();
        user.setName("Test");
        user.setEmail("test@example.com");
        when(userRepository.save(user)).thenReturn(user);

        User result = userService.createUser(user);
        assertEquals("Test", result.getName());
        verify(userRepository).save(user);
    }

    @Test
    void testUpdateUser() {
        User existing = new User();
        existing.setId(1L);
        existing.setName("Old");
        existing.setEmail("old@example.com");
        existing.setPhone("123");

        User details = new User();
        details.setName("New");
        details.setEmail("new@example.com");
        details.setPhone("456");

        when(userRepository.findById(1L)).thenReturn(Optional.of(existing));
        when(userRepository.save(existing)).thenReturn(existing);

        User result = userService.updateUser(1L, details);
        assertEquals("New", result.getName());
        assertEquals("new@example.com", result.getEmail());
        assertEquals("456", result.getPhone());
        verify(userRepository).findById(1L);
        verify(userRepository).save(existing);
    }

    @Test
    void testDeleteUser() {
        doNothing().when(userRepository).deleteById(1L);
        userService.deleteUser(1L);
        verify(userRepository).deleteById(1L);
    }
}
