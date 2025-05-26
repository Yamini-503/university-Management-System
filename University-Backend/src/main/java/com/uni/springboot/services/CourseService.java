package com.uni.springboot.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uni.springboot.entities.Course;
import com.uni.springboot.repositories.CourseRepository;

@Service
public class CourseService {
	
	@Autowired
	private CourseRepository dr;
	
	//add course
	public Course saveCourse(Course d) {
		return dr.save(d);
	}
	
	//get All courses
	public List<Course> getAllCourses(){
		return dr.findAll();
	}
	
	//get course by id
	public Optional<Course>getCourseById(int id){
		if(dr.existsById(id)) {
			return dr.findById(id);
		}
		else {
			return null;
		}
	}
	
	//update course by id
	public Course updateCourse(int id,Course d) {
		if(dr.existsById(id)) {
		     d.setCourse_id(id);
			return dr.save(d);
		}
		return null;
	}
	
	//delete course by id
	public boolean deleteCourse(int id) {
		if(dr.existsById(id)) {
			dr.deleteById(id);
			return true;
		}
		else {
			return false;
		}
		
	}

}
