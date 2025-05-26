package com.uni.springboot.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uni.springboot.entities.Faculty;
import com.uni.springboot.services.FacultyService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/facultys")
public class FacultyController {
	
	@Autowired
	private FacultyService rs;
	
	@PostMapping("/add")
	public String addFaculty(@RequestBody Faculty r) {
		rs.saveFaculty(r);
		return "new faculty added successfully";
	}
	
	@GetMapping("/getAll")
	public List<Faculty> getAllFacultys(){
		return rs.getAll();
	}
	
	@GetMapping("{id}")
	public Optional<Faculty> getFacultyById(@PathVariable int id){
		return rs.getById(id);
	}
	
	@PutMapping("/update/{id}")
	public String updateFaculty(@PathVariable int id,@RequestBody Faculty r) {
		Faculty updated=rs.update(id, r);
		if(updated!=null) {
			return"faculty updated sucessfully";
		}
		else {
			return"no faculty found";
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteaculty(@PathVariable int id) {
		boolean deleted=rs.delete(id);
		if(deleted) {
			return "deleted sucessfully";
		}
		else {
			return"no faculty found";
		}
	}

}
