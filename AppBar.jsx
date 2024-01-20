function AppBar

  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Work Within Queue</title>

  <style>
    /* Reset default style and set padding and margin to zero */
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    /* White text throughout */
    body {
      background: linear-gradient(to left, #6600cc 0%, #0099cc 100%);
      font-family: 'Arial', sans-serif;
      color: white; /* Set text color to white */
       text-align: center;
    }

    /* Header Styles */
    {
      height: 100%;
      weight: 100px;
      background-color: black;
      color: white;
      text-align: center;
      display: flex;
      justify-content: space-between;
      padding-top: 16px;
      padding-left: 32px;
      padding-right: 32px;
       padding-bottom: 16px
     for larger screens */
    @media only screen and (min-width: 600px) {
      #main {
        flex-direction: row;

      .nav-list {
        text-align: left;
      }
    
Button Styles */
    :root {
      --primary-color: #3498db; /* Define a variable for the primary color */
    }


        <style>
    /* Common styles for all buttons */
    .btn {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    /* Primary button style */
    .btn-primary {
      background-color: #3498db;
      color: #fff;
      border: 2px solid #3498db;
    }

    /* Secondary button style */
    .btn-secondary {
      background-color: #2ecc71;
      color: #fff;
      border: 2px solid #2ecc71;
    }

    /* Danger button style */
    .btn-danger {
      background-color: #e74c3c;
      color: #fff;
      border: 2px solid #e74c3c;
    }

    /* Hover effect for all buttons */
    .btn:hover {
      background-color: #333;
      color: #fff;
    }
      
  </style>
    button {
      background-color: Blue;
      color: white; /* Set text color to white */
      padding: 8px 16px;
      height: 40px;
      width: 100px;
      border: none;
      border-radius: 50px;
      font-size: 20px;
      margin: 10px;
      cursor: pointer;
      transition: background-color 0.10s, color 0.30s;
    }

    .login-btn,
    button {
      background-color: green;
      border-radius: 5px; /* Keep it consistent */
    }
  </style>

  <header>
    <img src="./QueueLogo" class="w3-circle" alt="Weblogo">
    <div class="w3-top">
      <div class="w3-bar w3-black">
        <a href="#home" class="w3-bar-item w3-button">Home</a>
        <a href="#about" class="w3-bar-item w3-button">About</a>
        <a href="#contact" class="w3-bar-item w3-button">Contact</a>
      </div>
    </div>
    <button class="login-btn" onclick="redirectToGoogleAuthentication()">Login</button>
  </header>
  <div class="main-container">

</html>
