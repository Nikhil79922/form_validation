# Company Login Form

This is a simple login form built with React, utilizing the `react-hook-form` library for form validation. It allows users to input their username and password, with validations for both fields, and displays a success message upon successful submission.

## Features

- **Username and Password Input**: Fields to capture the username and password from the user.
- **Password Visibility Toggle**: Allows users to toggle the visibility of their password using a clickable icon.
- **Form Validation**: Validates the username and password with the following rules:
  - Username: Required, minimum length of 3, and maximum length of 10.
  - Password: Required, minimum length of 6, maximum length of 12, and must contain at least one uppercase letter, one lowercase letter, one number, and one special character.
- **Success Message**: Displays a success popup when the form is submitted successfully.

## Prerequisites

To run this project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/form_validation.git
