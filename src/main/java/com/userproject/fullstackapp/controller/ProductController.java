package com.userproject.fullstackapp.controller;

import com.userproject.fullstackapp.DTO.ProductDTO;
import com.userproject.fullstackapp.Service.ProductsService;
import com.userproject.fullstackapp.model.Products;
import com.userproject.fullstackapp.repository.ProductsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    private ProductsRepository productsRepository;

    @Autowired
    private ProductsService productsService;

    @GetMapping("/products")
    public ResponseEntity<List<Products>> getAllProducts() {
        List<Products> productsList = productsRepository.findAll();
        return new ResponseEntity<>(productsList, HttpStatus.OK);
    }

    @PostMapping("/products")
    public Products products(@RequestBody Products newProduct){
        return productsRepository.save(newProduct);
    }

    @PutMapping("/products/{productId}")
    public Products updateProducts(@PathVariable Long productId, @RequestBody ProductDTO productDTO){
        return productsService.updateProducts(productId, productDTO);
    }

    @DeleteMapping("/products/{productId}")
    public ResponseEntity<Products> deleteProduct(@PathVariable Long productId){
        return productsService.deleteProduct(productId);
    }
}
