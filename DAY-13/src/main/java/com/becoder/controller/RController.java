package com.becoder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.becoder.model.RModel;
import com.becoder.service.RService;


@RestController
@CrossOrigin
public class RController {
    @Autowired
    RService service;

@PutMapping("/update")
public RModel updateInfo(@RequestBody RModel e2)
{
return service.updatedetails(e2);
}

@DeleteMapping("/delete/{Sid}")
public String deleteInfo(@PathVariable("Sid") String Sid)
{
service.deleteDetails(Sid);
return "Details Deleted";
}
   
    @PostMapping("/post")
    public String book(@RequestBody RModel mod) {
    service.booking(mod);
    return "Details Added";
    }
   
    @GetMapping("/get")
    public List<RModel> get(){
    return service.getdet();
    }
}
