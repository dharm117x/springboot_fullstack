package com.example.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.example.entity.User;
import com.example.repository.UserRepository;

import java.util.List;

@Service
@Transactional
public class UserService {
	private final UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User getUserById(Long id) {
		return userRepository.findById(id).orElse(null);
	}

	@Transactional(propagation = Propagation.REQUIRES_NEW)
	public User createUser(User user) {
		System.out.println("Creating user: " + user.getName() + ", email: " + user.getEmail());
		return userRepository.save(user);
	}

	@Transactional(propagation = Propagation.REQUIRES_NEW)
	public User updateUser(Long id, User userDetails) {
		User user = userRepository.findById(id).orElse(null);
		if (user != null) {
			user.setName(userDetails.getName());
			user.setEmail(userDetails.getEmail());
			user.setPhone(userDetails.getPhone());
			return userRepository.save(user);
		}
		return null;
	}

	@Transactional(propagation = Propagation.REQUIRES_NEW)
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}
}