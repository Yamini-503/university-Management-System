package com.uni.springboot.services;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.uni.springboot.DTO.StudentDTO;
import com.uni.springboot.entities.Course;
import com.uni.springboot.entities.Department;
import com.uni.springboot.entities.Students;
import com.uni.springboot.repositories.CourseRepository;
import com.uni.springboot.repositories.DepartmentRepository;
import com.uni.springboot.repositories.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private DepartmentRepository departmentRepository;

    // Method to create an student
    public StudentDTO createStudent(StudentDTO studentDTO) {
        Course course = courseRepository.findById(studentDTO.getCourse_id())
                .orElseThrow(() -> new RuntimeException("Course not found"));

        Department department = departmentRepository.findById(studentDTO.getDepartment_id())
                .orElseThrow(() -> new RuntimeException("Department not found"));

        Students student = new Students();
        student.setCourse(course);
        student.setDepartment(department);
        student.setDate(LocalDate.parse(studentDTO.getDate()));
        student.setTime(LocalTime.parse(studentDTO.getTime()));

        Students savedStudent = studentRepository.save(student);

        return new StudentDTO(savedStudent.getStudent_id(),
                                  savedStudent.getCourse().getCourse_id(),
                                  savedStudent.getDepartment().getDepartment_id(),
                                  savedStudent.getDate().toString(),
                                  savedStudent.getTime().toString());
    }

    // Method to update an student
    public StudentDTO updateStudent(int id, StudentDTO studentDTO) {
        Students student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        Course course = courseRepository.findById(studentDTO.getCourse_id())
                .orElseThrow(() -> new RuntimeException("Course not found"));

        Department department = departmentRepository.findById(studentDTO.getDepartment_id())
                .orElseThrow(() -> new RuntimeException("Department not found"));

        student.setCourse(course);
        student.setDepartment(department);
        student.setDate(LocalDate.parse(studentDTO.getDate()));
        student.setTime(LocalTime.parse(studentDTO.getTime()));

        Students updatedStudent = studentRepository.save(student);

        return new StudentDTO(updatedStudent.getStudent_id(),
                                  updatedStudent.getCourse().getCourse_id(),
                                  updatedStudent.getDepartment().getDepartment_id(),
                                  updatedStudent.getDate().toString(),
                                  updatedStudent.getTime().toString());
    }

    // Method to delete an student
    public void deleteStudent(int id) {
        Students student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
        studentRepository.delete(student);
    }

    // Method to fetch all students
    public List<StudentDTO> getAllStudents() {
        List<Students> students = studentRepository.findAll();
        return students.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    // Method to fetch student by ID
    public StudentDTO getStudentById(int id) {
        Students student = studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
        return convertToDTO(student);
    }

    // Utility method to convert Student entity to StudentDTO
    private StudentDTO convertToDTO(Students student) {
        return new StudentDTO(student.getStudent_id(),
                                  student.getCourse().getCourse_id(),
                                  student.getDepartment().getDepartment_id(),
                                  student.getDate().toString(),
                                  student.getTime().toString());
    }
}

