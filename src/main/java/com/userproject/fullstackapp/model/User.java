package com.userproject.fullstackapp.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Table
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "fullstack")
public class User {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;
    private String username;
    private String name;
    private String email;
}
