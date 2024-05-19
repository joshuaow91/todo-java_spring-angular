# Todo Application

This is a simple Todo application built with Angular 17 (standalone components) on the front end and Spring Boot on the back end. It allows users to manage tasks with different priorities and statuses.

## Table of Contents

- [Entity Definition](#entity-definition)
- [API Design](#api-design)
- [Front-End Components](#front-end-components)
- [Setup and Installation](#setup-and-installation)

## Entity Definition

### TaskEntity

- Represents a task in the application.
- Fields:
    - `id` (Long): Unique identifier for the task.
    - `title` (String): Title of the task.
    - `description` (String): Description of the task.
    - `status` (Enum): Status of the task (COMPLETED, PENDING, IN_PROGRESS, CANCELLED).
    - `priority` (Enum): Priority of the task (HIGH, MEDIUM, LOW).
    - `dueDate` (String): Due date of the task.

## API Design

### Endpoints

#### GET /tasks

- Fetch all tasks with optional filtering and sorting.
- Parameters:
    - `priority` (optional): Filter by priority.
    - `status` (optional): Filter by status.
    - `dueDate` (optional): Filter by due date.
    - `sortBy` (default: `id`): Sort by field.
    - `direction` (default: `asc`): Sort direction.

#### GET /tasks/{id}

- Fetch a single task by ID.

#### POST /tasks

- Create a new task.

#### PUT /tasks/{id}

- Update an existing task by ID.

#### DELETE /tasks/{id}

- Delete a task by ID.

## Front-End Components

### Task Model

- Defines the structure of a task in the application.
- Fields:
    - `id` (number): Unique identifier for the task.
    - `title` (string): Title of the task.
    - `description` (string): Description of the task.
    - `status` (Status): Status of the task.
    - `priority` (Priority): Priority of the task.
    - `dueDate` (string): Due date of the task.

### Enums

#### Priority Enum

- Defines the priority levels for tasks.
    - HIGH
    - MEDIUM
    - LOW

#### Status Enum

- Defines the status options for tasks.
    - COMPLETED
    - PENDING
    - IN_PROGRESS
    - CANCELLED

### Components

#### Edit Task Component

- Provides a form for editing tasks.
- Uses dropdowns for the `status` and `priority` fields to ensure consistency with the enums.
- Emits events to save or cancel the task editing.

#### Todo List Component

- Displays a list of tasks.
- Provides options to filter tasks, and buttons to edit or delete each task.
- Uses the Edit Task Component for editing tasks.


