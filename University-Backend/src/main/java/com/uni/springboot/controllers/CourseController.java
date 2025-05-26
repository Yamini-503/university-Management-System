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

import com.uni.springboot.entities.Course;
import com.uni.springboot.services.CourseService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/Courses")
public class CourseController {
	
	@Autowired
	private CourseService ds;
	
	@PostMapping("/add")
	public String addCourse(@RequestBody Course d) {
		ds.saveCourse(d);
		return "new Course added successfully";
	}
	
	@GetMapping("/getAll")
	public List<Course> getAllCourses(){
		return ds.getAllCourses();
	}
	
	@GetMapping("{id}")
	public Optional<Course> getCourseById(@PathVariable int id){
		return ds.getCourseById(id);
	}
	
	@PutMapping("update/{id}")
	public String updateCourseById(@PathVariable int id,@RequestBody Course d) {
		Course updated=ds.updateCourse(id, d);
		if(updated!=null) {
			return "Course updated sucessfully";
		}
		else {
			return"Course not found";
		}
	}
	
	@DeleteMapping("delete/{id}")
	public String deleteCourseById(@PathVariable int id) {
	     boolean isDeleted=ds.deleteCourse(id);
		if(isDeleted) {
			return "deleted sucessfully";
		}
		else {
			return"Course not found";
		}
	}

}
