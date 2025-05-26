package com.uni.springboot.entities;

import java.time.LocalDate;
import java.time.LocalTime;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "students")
public class Students {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int student_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "department_id",nullable = false)
	private Department department;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "course_id",nullable = false)
	private Course course;
	
	@Column(nullable = false)
	private LocalDate date;
	
	@Column(nullable = false)
	private LocalTime time;
	
	 public Students() {}
	public Students(int student_id, Department department, Course course, LocalDate date, LocalTime time) {
		super();
		this.student_id = student_id;
		this.department = department;
		this.course = course;
		this.date = date;
		this.time = time;
	}
	public int getStudent_id() {
		return student_id;
	}
	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}
	public Department getDepartment() {
		return department;
	}
	public void setDepartment(Department department) {
		this.department = department;
	}
	public Course getCourse() {
		return course;
	}
	public void setCourse(Course course) {
		this.course = course;
	}
	public LocalDate getDate() {
		return date;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public LocalTime getTime() {
		return time;
	}
	public void setTime(LocalTime time) {
		this.time = time;
	}
	
	

}
