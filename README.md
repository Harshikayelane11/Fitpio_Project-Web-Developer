# Getting Started with Create React App

This project was bootstrapped with [Create React App]

##Step 1: Set Up React Project
First, set up a new React project if you don't already have one. You can use Create React App to do this.

bash
Copy code
link:- npx create-react-app dashboard
       cd dashboard


##Step 2: Install Necessary Libraries
Install the libraries you will need for the dashboard.

bash
Copy code
link:- npm install react-icons react-chartjs-2 chart.js
Next copy code

link:- npm install @mui/material @emotion/react @emotion/styled @mui/icons-material chart.js react-chartjs-2 styled-components


##Step 3: Create the Dashboard Structure
Now, let's create the basic structure of the dashboard.
src/
├── components/
│   ├── Header/
│   │   ├── Header.js
│   │   └── Header.module.css
│   ├── Gallery/
│   │   ├── Gallery.js
│   │   └── Gallery.module.css
│   ├── Footer/
│   │   ├── Footer.js
│   │   └── Footer.module.css
├── assets/
│   ├── image1.jpg
│   ├── image2.jpg
│   └── image3.jpg
├── App.js
├── App.module.css
└── index.js


Step 4: Implement Components with Responsive Images

Step 5: Add Global Styles for Responsiveness
Create a global.css file for global styles: Import this global CSS file in your index.js:

Step 6: Run the Project
Finally, start your project: npm start

![Screenshot (135)](https://github.com/user-attachments/assets/0ca41a97-cb6d-4b08-9288-654ca0f7bf48)
![Screenshot (136)](https://github.com/user-attachments/assets/2f52acf4-4d68-414e-83a9-e02bd6e3f046)
