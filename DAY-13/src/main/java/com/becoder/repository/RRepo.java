package com.becoder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.becoder.model.RModel;

import jakarta.transaction.Transactional;



@Repository
public interface RRepo extends JpaRepository<RModel,Integer>{
         @Modifying
         @Query(value= "insert into p2(firstname,lastname,email,address,phoneno,college,course) values(?,?,?,?,?,?,?)",nativeQuery =true)
         @Transactional
       
         public void save(String fname, String lname,String email, String address,  Long phoneno,
        String college,String course);
          @Modifying
          @Query(value="delete from p2 where email=:firstname",nativeQuery=true)
          @Transactional
          public void delete(String firstname);


}
