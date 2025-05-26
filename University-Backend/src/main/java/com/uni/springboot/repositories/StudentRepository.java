package com.uni.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.uni.springboot.entities.Students;


@Repository
public interface StudentRepository  extends JpaRepository<Students, Integer>{

}
