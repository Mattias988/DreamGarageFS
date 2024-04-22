package com.userproject.fullstackapp.repository;


import com.userproject.fullstackapp.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductsRepository extends JpaRepository<Products, Long> {
}
