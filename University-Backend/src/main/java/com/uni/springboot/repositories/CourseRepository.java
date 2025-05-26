package com.uni.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uni.springboot.entities.Course;
@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

}
