package com.userproject.fullstackapp.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
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

    @NotBlank
    private String username;

    @NotBlank
    private String name;

    @NotBlank
    private String email;

    @NotBlank
    private String password;

}