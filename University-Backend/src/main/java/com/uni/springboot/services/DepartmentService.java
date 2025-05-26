package com.uni.springboot.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uni.springboot.entities.Department;
import com.uni.springboot.repositories.DepartmentRepository;

@Service
public class DepartmentService {

	@Autowired
	private DepartmentRepository pr;
	
	//add
	
	public Department saveDepartment(Department p) {
		return pr.save(p);
	}
	
	//get all
	
	public List<Department> getAllDepartments(){
		return pr.findAll();
	}
	
	//get by id
	
	public Optional<Department> getDepartmentById(int id){
		if(pr.existsById(id)) {
			return pr.findById(id);
		}
		else {
			return null;
		}
	}
	
	//update
	
	public Department updateDepartment(int id,Department p) {
		if(pr.existsById(id)) {
			p.setDepartment_id(id);
			return pr.save(p);
		}
		else {
			return null;
		}
	}
	
	//delete
	
	public boolean deleteDepartment(int id) {
		if(pr.existsById(id)) {
			pr.deleteById(id);
			return true;
		}
		else {
			return false;
		}
	}
}
