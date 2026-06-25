# 🏥 Real-Time Medical Triage System

A full-stack hospital management and triage platform that enables real-time patient assessment, priority-based queue management, doctor assignment, treatment tracking, and live notifications.

## 📌 Project Overview

Hospitals often struggle with patient queue management, emergency prioritization, and real-time communication between staff members. This project aims to digitize the triage process by providing a centralized platform where receptionists, doctors, and administrators can collaborate efficiently.

The system ensures that critical patients receive immediate attention while maintaining transparency in patient tracking and treatment workflows.

---

## 🎯 Objectives

* Reduce patient waiting times
* Prioritize critical cases effectively
* Provide real-time updates using WebSockets
* Improve doctor-patient workflow management
* Track treatments and hospital performance metrics
* Enable role-based access control

---

## 👥 User Roles

### Receptionist

* Register new patients
* View patient queues
* Update patient information
* Monitor assessment status

### Triage Doctor

* Assess newly registered patients
* Assign priority levels
* Route patients to appropriate departments

### Doctor

* View assigned patients
* Start treatments
* Complete treatments
* Update patient status

### Admin

* Manage users
* Monitor hospital statistics
* View analytics dashboard
* Track doctor availability

### Patient

* Track queue position
* View estimated waiting time
* Receive real-time notifications

---

## 🔄 System Workflow

### Step 1: Patient Registration

Receptionist registers patient details:

* Name
* Age
* Gender
* Symptoms
* Contact Information

Patient status:

```text
Pending Assessment
```

---

### Step 2: Assessment Queue

The patient is added to the assessment queue.

Triage doctors receive real-time notifications about newly registered patients.

---

### Step 3: Patient Assessment

The triage doctor evaluates the patient and assigns a priority:

```text
Critical
High
Medium
Low
```

---

### Step 4: Treatment Queue

Patients are automatically placed into a priority-based queue.

Example:

```text
Critical
Critical
High
Medium
Low
```

Priority takes precedence over arrival time.

---

### Step 5: Doctor Assignment

Patients are assigned to doctors based on:

* Specialization
* Availability
* Current workload

---

### Step 6: Treatment

Doctor actions:

```text
Start Treatment
Update Status
Complete Treatment
```

---

### Step 7: Patient Tracking

Patients can monitor:

* Queue position
* Assigned doctor
* Current status
* Estimated waiting time

---

### Step 8: Analytics

Administrators can monitor:

* Daily patient count
* Critical cases
* Average waiting time
* Treatment statistics
* Doctor availability

---

## ⚙️ Core Features

### Authentication & Authorization

* JWT Authentication
* Role-Based Access Control (RBAC)
* Protected Routes

### Patient Management

* Patient Registration
* Patient Tracking
* Medical Assessment Workflow

### Real-Time Communication

* Live Queue Updates
* Emergency Alerts
* Doctor Availability Tracking
* Notifications

### Treatment Management

* Treatment Tracking
* Treatment Duration Monitoring
* Patient Status Updates

### Hospital Analytics

* Performance Metrics
* Waiting Time Analysis
* Daily Statistics Dashboard

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Tailwind CSS
* Socket.io Client

### Backend

* Node.js
* Express.js
* Socket.io
* JWT Authentication
* bcrypt

### Database

* MongoDB
* Mongoose

### Development Tools

* Git
* GitHub
* Postman
* VS Code

---


## 🚀 Development Roadmap

### Phase 1

* Project Setup
* MongoDB Connection
* Express Server
* React Frontend

### Phase 2

* JWT Authentication
* Role Management

### Phase 3

* Patient Registration
* Patient Management APIs

### Phase 4

* Assessment Workflow
* Priority Assignment

### Phase 5

* Priority Queue System

### Phase 6

* Socket.io Integration
* Real-Time Queue Updates

### Phase 7

* Doctor Assignment System

### Phase 8

* Treatment Management

### Phase 9

* Emergency Alerts

### Phase 10

* Patient Tracking Portal

### Phase 11

* Analytics Dashboard

---

## 🔮 Future Enhancements

* AI-Assisted Triage Suggestions
* QR Code Patient Check-In
* SMS Notifications
* Multi-Hospital Support
* Electronic Medical Records Integration
* Bed Allocation System
* Mobile Application

---

## 📖 Learning Outcomes

This project demonstrates:

* REST API Development
* JWT Authentication
* MongoDB Schema Design
* WebSocket Communication
* Role-Based Access Control
* Real-Time Systems
* Queue Management Algorithms
* Full-Stack Application Development
* System Design Principles

---

## 📜 License

This project is being developed for learning, portfolio building, and system design practice.
