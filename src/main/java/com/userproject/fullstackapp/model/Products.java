package com.userproject.fullstackapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Table
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "products")
public class Products {

    @Id
    @GeneratedValue
    private Long productId;

    @NotBlank
    private String description;

    @NotBlank
    private String image;

    @NotNull
    private Long price;

    @NotNull
    private Long rating;

    @NotBlank
    private String title;
}
