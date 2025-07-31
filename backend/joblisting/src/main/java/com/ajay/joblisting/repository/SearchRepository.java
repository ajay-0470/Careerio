package com.ajay.joblisting.repository;

import com.ajay.joblisting.model.Post;

import java.util.List;

public interface SearchRepository {
    List<Post> findByText(String Text);
}
