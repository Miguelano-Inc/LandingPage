<div class="container">
  <!-- image container with overlay -->
  <div class="image-container">
    <img src="profile.jpg" alt="Profile picture" class="responsive">
    <div class="overlay">
      <!-- button 1: link to Linkedin page -->
      <a href="https://www.linkedin.com/in/your-name" class="button">Linkedin</a>
      <!-- button 2: open pdf document in overlay -->
      <a href="resume.pdf" class="button" target="overlay">Resume</a>
    </div>
  </div>
  <!-- iframe for pdf document -->
  <iframe name="overlay" class="overlay-frame"></iframe>
</div>
/* container style */
.container {
  width: 80%;
  margin: 0 auto;
}

/* image style */
.responsive {
  width: 100%;
  height: auto;
}

/* overlay style */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
}

/* overlay hover effect */
.image-container:hover .overlay {
  opacity: 1;
}

/* button style */
.button {
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  color: white;
  font-size: 20px;
  text-decoration: none;
  background: #0077b5;
  border-radius: 5px;
}

/* iframe style */
.overlay-frame {
  width: 80%;
  height: 80%;
  position: fixed;
  top: 10%;
  left: 10%;
  border: none;
  z-index: 10;
  display: none;
}

/* iframe show effect */
.overlay-frame:target {
  display: block;
}
