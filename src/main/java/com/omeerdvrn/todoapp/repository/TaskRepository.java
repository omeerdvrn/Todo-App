package com.omeerdvrn.todoapp.repository;

import com.omeerdvrn.todoapp.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TaskRepository extends MongoRepository<Task, String> {
}
