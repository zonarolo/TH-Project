# **TH-Human**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [https://localhost:3000](https://localhost:3000) to view it in the browser.

## **Junior developer test project**

Web application requirements
Technologies

- SPA in React using Create React App
- Auth0 for authentication
- Formik for forms
- Bootstrap for layout

## Authentication

The authentication must be implemented using Auth0, an authentication service provider. You can create a free account to use to implement the application. Auth0 documentation shows complete code to implement the authorization flow you can use adapting it to the requirements.

- Choose the correct type of Auth0 application and authentication flow for the type of web application being developed
- Use an Auth0 database connection with username / password authentication methods
- Use the Universal Login page. (you will use the Auth0 login page to authenticate users)
- You won’t need to connect to an API so no Auth0 API will be used.

## Main site

The main site must be a SPA with this elements:

- Header: with a title, a logout button and a navigation menu with 2 options (“User profile” and “Hello world!”).
- Main content page that shows the navigation option selected

## User profile page

This is the default page when the site is loaded.

- Shows information about the user profile loaded from the authentication service: username, email, number of logins and any other relevant info.
- Information should be presented in non editable form controls.

## Hello world page

This page contains a very simple form:

- A text box where the user can fill his name.
- A button to submit the form. It must be disabled if the text box is empty or if the content has not changed from the previous submit.
- A text that changes when the form is submitted. When the text box is empty it must show “Who are you?”, when the text box has some content it must show the message “Hello, TEXT_BOX_CONTENT!. Now it is CURRENT_DATE”.

- A cancel button: pressing this button cleans the text box and returns to the User profile page. The button must be disabled if the text button is empty or has not changed from the last submit.
- An exit button: pressing this button cleans the text box and returns to the User profile page. The button must be disabled when the cancel button is enabled..

## **Screenshots**

![screen1](/public/screen1.jpg)
![screen2](/public/screen2.jpg)
![screen3](/public/screen3.jpg)
![screen4](/public/screen4.jpg)
![screen5](/public/screen5.jpg)
![screen6](/public/screen6.jpg)
