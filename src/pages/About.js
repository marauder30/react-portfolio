import React from "react";
import photo from "../photo.JPG";

const About = () => (
<div class="container">
  <div class="row justify-content-center">
    <div class="col-sm-10 clearfix">
      <h2>About Me</h2>
      <img alt="Nick Koch" src={photo} id="photo" />
        <p>
          Hello! I'm Nick Koch. I'm a lifelong Colorado resident and father to a beautiful four year old girl. I was born in Nebraska, but I was raised in Colorado Springs, where I spent most of my life. I moved to Denver to make a career change and start a new chapter in my life, and I love the city. I'm definitely not planning on leaving anytime soon! My favorite hobbies include most of the outdoor activities Colorado has to offer, including snowboarding and camping. I also enjoy playing games online, and spending time with my daughter.
        </p>
        <p>I chose to be a developer because I have worked in many various roles that have all left me unfulfilled. Computers have been a lifelong passion for me, and it's such a shockingly natural fit for me that I wish that I had made the obvious connection sooner. But, as the saying goes, "better late than never!" I'm truly excited to bring a fresh perspective to the world of web development.</p>

        <div id="links">
          <a href="https://github.com/marauder30" target="_blank rel=noreferrer">Github</a>
          <a href="https://www.linkedin.com/in/nick-koch-072675197/" target="_blank rel=noreferrer" id="centerLink">LinkedIn</a>
          <a href="Resume.html" target="_blank rel=noreferrer">Resume</a>
        </div>
    </div>
  </div>
</div>
);

export default About;
