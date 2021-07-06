package com.clinic.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "patients")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String phone;
    private String gender;
    private String dob;

    @ManyToOne
    @JoinColumn(name = "ward_id")
    private Ward ward;

    public Patient(String name, String phone, String gender, String dob, Ward ward) {
        this.name = name;
        this.phone = phone;
        this.gender = gender;
        this.dob = dob;
        this.ward = ward;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", gender='" + gender + '\'' +
                ", dob='" + dob + '\'' +
                ", ward=" + ward +
                '}';
    }
}
