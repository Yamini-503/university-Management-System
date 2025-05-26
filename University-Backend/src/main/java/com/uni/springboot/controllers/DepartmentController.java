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

import com.uni.springboot.entities.Department;
import com.uni.springboot.services.DepartmentService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/departments")
public class DepartmentController {
	@Autowired
	private DepartmentService ps;
	
	@PostMapping("/add")
	public String addDepartment(@RequestBody Department p) {
		ps.saveDepartment(p);
		return "Department added successfully";
	}
	
	@GetMapping("/getAll")
	public List<Department> getAllDepartments(){
		return ps.getAllDepartments();
	}
	
	@GetMapping("/{id}")
	public Optional<Department> getDepartmentById(@PathVariable int id){
		return ps.getDepartmentById(id);
	}
	
	@PutMapping("/update/{id}")
	public String updateDepartmentById(@PathVariable int id,@RequestBody Department p) {
		Department updated=ps.updateDepartment(id, p);
		if(updated!=null) {
			return "Department updated sucessfully";
		}
		else {
			return"department not found";
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public String deleteDepartmentByID(@PathVariable int id) {
		boolean isdeleted=ps.deleteDepartment(id);
		if(isdeleted) {
			return"department delted sucessfully";
		}
		else {
			return"department not found";
		}
	}

}
