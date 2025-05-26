package com.uni.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uni.springboot.entities.Faculty;

@Repository
public interface FacultyRepository extends JpaRepository<Faculty, Integer> {

}
