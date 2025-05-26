package com.uni.springboot.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uni.springboot.entities.Faculty;
import com.uni.springboot.repositories.FacultyRepository;

@Service
public class FacultyService {

	@Autowired
	private FacultyRepository rr;
	
	//add
	
	public Faculty saveFaculty(Faculty r) {
		return rr.save(r);
	}
	
	//getAll
	
	public List<Faculty> getAll(){
		return rr.findAll();
				
	}
	
	//get by id
	
	public Optional<Faculty> getById(int id){
		if(rr.existsById(id)) {
			return rr.findById(id);
		}
		else {
			return null;
		}
	}
	
	//update
	
	public Faculty update(int id,Faculty r) {
		if(rr.existsById(id)) {
			r.setFaculty_id(id);
			return rr.save(r);
		}
		else {
			return null;
		}
	}
	
	//delete
	
	public boolean delete(int id) {
		if(rr.existsById(id)) {
			rr.deleteById(id);
			return true;
		}
		else {
			return false;
		}
	}
	
	
}
