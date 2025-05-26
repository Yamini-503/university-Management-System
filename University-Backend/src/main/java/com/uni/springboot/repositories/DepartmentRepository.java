package com.uni.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uni.springboot.entities.Department;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Integer> {

}
