# SuperMetro Frontend

Welcome to the **SuperMetro Frontend**, a modern, scalable, and production-ready React application built to complement the SuperMetro backend system. This frontend is designed with collaboration, maintainability, and scalability in mind, following best practices used by senior developers in enterprise-grade applications.

## Overview

SuperMetro is a transportation and logistics platform. This frontend provides a clean, responsive user interface for users to register, log in, view services, book buses, and track their activities. The architecture is designed to handle high traffic, with support for over 10,000 users.

Key features of this frontend include:

- **React + TypeScript:** Ensures type safety and reduces runtime errors.  
- **Tailwind CSS:** Provides a utility-first approach to building responsive and maintainable UI components.  
- **Redux Toolkit:** Manages global state, including authentication, user data, and app settings.  
- **Axios with JWT:** Handles API calls with access token support for secure authentication.  
- **React Router DOM:** Implements dynamic and protected routing.  
- **Feature-based folder structure:** Supports separation of concerns, making the codebase easy to navigate and extend.  
- **Reusability and DRY principles:** Common UI components and utilities are centralized for consistent use.  

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- Access to the SuperMetro backend API

### Installation

```bash
git clone <your-repo-url>
cd supermetro-frontend
npm install
npm run dev



The app should now be running at http://localhost:5173.

Collaboration


This repository is open for collaboration. We follow a feature-based branching workflow:

      (1) Create a new branch for your feature: git checkout -b feature/<feature-name>

      (2) Commit changes with meaningful messages.

      (3) Open a Pull Request for review before merging into main(push to your working branch).

Future Roadmap


Complete authentication flows (login, logout, refresh token)

Implement booking, payment, and dashboard features

Enhance accessibility and responsive design

Prepare for production deployment with CI/CD

We welcome contributors to help make SuperMetro a fully functional, user-friendly platform.
