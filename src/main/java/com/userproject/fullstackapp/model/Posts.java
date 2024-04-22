package com.userproject.fullstackapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
@Entity(name = "posts")
public class Posts {

    @Id
    @GeneratedValue
    private Long postId;

    @NotBlank
    private String title;

    @NotBlank
    private String description;
}
