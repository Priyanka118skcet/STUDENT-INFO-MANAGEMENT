package com.becoder.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="p2")
public class RModel {
private String firstname;

private String lastname;
@Id
private String email;
private String address;
private Long phoneno;
private String college;
private String course;

public String getFirstname() {
return firstname;
}
public void setFirstname(String firstname) {
this.firstname = firstname;
}
public String getLastname() {
return lastname;
}
public void setLastname(String lastname) {
this.lastname = lastname;
}
public String getEmail() {
return email;
}
public void setEmail(String email) {
this.email = email;
}
public String getAddress() {
return address;
}
public void setAddress(String address) {
this.address = address;
}
public Long getPhoneno() {
return phoneno;
}
public void setPhoneno(Long phoneno) {
this.phoneno = phoneno;
}
public String getCollege() {
return college;
}

public void setCollege(String college) {
this.college = college;
}
public String getCourse() {
return course;
}
public void setCourse(String course) {
this.course = course;
}
}