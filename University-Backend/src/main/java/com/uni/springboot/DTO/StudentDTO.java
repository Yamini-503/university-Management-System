package com.uni.springboot.DTO;

public class StudentDTO {

	private int student_id;
    private int course_id;
    private int department_id;
    private String date;  
    private String time;
    
    public StudentDTO() {
    	
    }
    
	public StudentDTO(int student_id, int course_id, int department_id, String date, String time) {
		super();
		this.student_id = student_id;
		this.course_id = course_id;
		this.department_id = department_id;
		this.date = date;
		this.time = time;
	}
	public int getStudent_id() {
		return student_id;
	}
	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}
	public int getCourse_id() {
		return course_id;
	}
	public void setCourse_id(int course_id) {
		this.course_id = course_id;
	}
	public int getDepartment_id() {
		return department_id;
	}
	public void setDepartment_id(int department_id) {
		this.department_id = department_id;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	} 
    
    
}
