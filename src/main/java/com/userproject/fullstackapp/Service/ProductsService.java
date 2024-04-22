package com.userproject.fullstackapp.Service;


import com.userproject.fullstackapp.DTO.ProductDTO;
import com.userproject.fullstackapp.model.Products;
import com.userproject.fullstackapp.repository.ProductsRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProductsService {

    @Autowired
    private ProductsRepository productsRepository;

    public Products updateProducts(Long productId, ProductDTO productDTO){
        Products existingProducts = productsRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Ten produkt nie istnieje"));
        existingProducts.setDescription(productDTO.getNewDescription());
        existingProducts.setImage(productDTO.getNewImage());
        existingProducts.setPrice(productDTO.getNewPrice());
        existingProducts.setRating(productDTO.getNewRating());
        existingProducts.setTitle(productDTO.getNewTitle());

        return productsRepository.save(existingProducts);
    }
    public ResponseEntity<Products> deleteProduct(Long productId){
        Products existingProducts = productsRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("Ten użytkownik nie istnieje"));
        productsRepository.delete(existingProducts);
        return null;
    }
}
