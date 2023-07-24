package com.becoder.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.becoder.model.Feedback;
import com.becoder.repository.FeedbackRepo;


@Service
public class FeedbackService {
    @Autowired
    private FeedbackRepo feedbackRepository;

    public Feedback saveFeedback(Feedback feedback) {
        return feedbackRepository.save(feedback);
    }
}

