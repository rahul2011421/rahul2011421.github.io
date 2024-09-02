import logo from './assets/images/logo.png';
import prof from './assets/images/wave.png';
import mid from './assets/images/middle.jpeg';


import res from './assets/rahul_yadav_RESUME.pdf';

import css from './assets/skills/css.svg';
import docker from './assets/skills/docker.svg';
import ex from './assets/skills/ex.png';
import flask from './assets/skills/flask.svg';
import git from './assets/skills/git.svg';
import github from './assets/skills/github.svg';
import heroku from './assets/skills/heroku.svg';
import html from './assets/skills/html.svg';
import js from './assets/skills/js.svg';
import node from './assets/skills/node.svg';
import postgresql from './assets/skills/postgresql.svg';
import py from './assets/skills/py.svg';
import reacts from './assets/skills/react.svg';
import redux from './assets/skills/redux.svg';
import java from './assets/skills/java.svg';
import springboot from './assets/skills/springboot.svg';
import postman from './assets/skills/postman.svg'




import tsp from './assets/images/tsp.png'
import hotel from './assets/images/hotel.jpg'


import './App.css';
import './media.css';
import './status.css';
import './experience.css';

import reveal from './scroll';
import hide from './scrollSmallerScreen';
import { useState, useEffect } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (!showMenu) setShowMenu(showMenu);
    setShowMenu(!showMenu);
  }

  return (
    <div className="App">
      <header className="App-header">
        <a href='#'>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <div id='hamburger' onClick={openMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 24 24"><path d="M5.75 5.25h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 0 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5zm0 6h12.5a.75.75 0 1 1 0 1.5H5.75a.75.75 0 1 1 0-1.5z"></path></svg>
        </div>
        {showMenu && (
            <section className='hamburger-section'>
              <ul>
                <li><a href='#about-me'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#contact-info'>Contact</a></li>
                {/* <li><a href={res} target="_blank" rel="noopener noreferrer"><span class="label" id='resume'>Resume</span></a></li> */}
              </ul>
            </section>
        )}
        <section className='menu-show'>
          <ul>
            <li><a href='#about-me'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#contact-info'>Contact</a></li>
            <li><a href={res} target="_blank" rel="noopener noreferrer"><span class="label" id='resume'>Resume</span></a></li>
          </ul>
        </section>
        <section className='menu-show'>
          <ul class="icons alt">
            <li><a href="https://github.com/rahul2011421" target="_blank" rel="noopener noreferrer" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
            <li><a href="https://www.linkedin.com/in/rahul2011421/" target="_blank" rel="noopener noreferrer" class="icon brands fa-linkedin-in"><span class="label">LinkedIn</span></a></li>

          </ul>
        </section>
      </header>
      <body className="App-body">

        <div className='intro' id='intro'>
          <section>
            <p id='intro-sent'>Hi, my name is</p>
            <h1>Rahul Yadav.</h1>
            <p id='intro-p'>Hey, hii I’m a Software Developer with a strong passion for backend development. I find joy in bridging the gap between creativity and technology, turning innovative ideas into powerful software solutions. Thanks for visiting!!</p>
          

            <a class="status" href={res} target="_blank">
            <div class="status__light">
            <div class="status__light__ring"></div>
            <div class="status__light__led"></div>
            </div>
            <div class="status__message">Seeking new opportunities to apply my backend skills!</div>
            </a>



          </section>
          <section>
            <img src={prof} className='prof' alt='prof-pic' />
          </section>
        </div>

        <div className='about-me reveal' id='about-me'>
          <section>
            <img src={mid} className='mid' alt='prof-pic' />
          </section>
          <section id='text'>
            <h2>About Me</h2>
            <p>
            I ❤️ Coding.
            <br/>
            <br/>
            I'm a passionate software engineer with over 1 year of experience in backend development using Java and Spring Boot in a test-driven environment. I enjoy building scalable, robust applications that enhance user engagement and system performance. Currently, I'm expanding my expertise in frontend technologies to become a versatile full-stack developer.
              <br />
              <br />
              I build efficient and scalable solutions with a focus on microservices architecture, clean code, and optimized performance.
              <br/>
              <br/>
              I believe that technology should simplify life and bring value to users, and I am committed to building solutions that are impactful.
              <br/>
              <br/>
              I am currently employed as a Graduate Software Developer Engineer at <a class="underline-link" href="https://maveric-systems.com/" target="_blank">Maveric Systems Limited</a>.
              <br/>
              <br/>
              When I'm not coding, I enjoy playing badminton, swimming, talking about cricket or learning something new.
            </p>
          </section>
        </div>

  


        <div id="experience">
    <section id="exp-container">
        <h2>Experience</h2>
        <ul class="timeline">
            <li class="timeline-item">
                <div class="timeline-icon">1</div>
                <div class="timeline-content">
                    <div class="job__time">Aug 2023 - Present</div>
                    <div class="job__company">
                        <a href="https://maveric-systems.com" target="_blank" rel="noopener noreferrer">Maveric Systems Limited</a>
                    </div>
                    <div class="job__position">Graduate Software Development Engineer</div>
                    <div class="job__details">
                        <p>• Designed and implemented a mail notification system using the Graph API, enabling real-time email alerts for improved user engagement.</p>
                        <p>• Implemented an ELK Stack to monitor system logs and enhance system stability. This helped reduce the mean time to resolution by 30% and resulted in a 15% increase in application performance.</p>
                        <p>• Designed and implemented REST APIs using Java & Spring Boot, facilitating seamless communication between the application components.</p>
                        <p>• Improved code quality and coverage analysis by implementing SonarQube.</p>
                        <p>• Developed comprehensive unit test cases with JUnit and Mockito, achieving over 85% code coverage</p>
                    </div>
                </div>
            </li>
            <li class="timeline-item">
                <div class="timeline-icon">2</div>
                <div class="timeline-content">
                    <div class="job__time">May 2022 - April 2023</div>
                    <div class="job__company">
                        <a href="https://www.linkedin.com/company/quanti-%CF%87/" target="_blank" rel="noopener noreferrer">Quantiχ (Mathematics and Statistics) Club </a>
                    </div>
                    <div class="job__position">Vice President</div>
                    <div class="job__details">
                        <p> Organized a week-long World Statistics Day event and led educational activities for over 150 students at Alliance
                        University through the Quantix Club.</p>
                    </div>
                </div>
            </li>
        </ul>
    </section>
</div>






        <div className='projects reveal' id='projects'>
          <section id='proj-container'>
            <h2>Projects</h2>
            <div className='proj-div'>
              <section>
               
                  <img src={tsp} alt='tsp' className='proj-photo' />
                
                <div className='proj-text' id='tsp'>
                  <h3 id='proj-title'>Talent Share Portal(TSP)</h3>
                  <p id='proj-desc'>
                  TSP is a mentorship platform that supports continuous learning and skill advancement. It offers profiles for mentors and mentees, where mentors guide learners through tech stacks and comprehensive training.
                  Collaborated with my team and took the initiative to design microservices and APIs, improving communication and aligning with our project's core objectives.
                  </p>
                  <p id='proj-tech'>
                  <span class="tech-item">Java</span>
                  <span class="tech-item">Springboot</span>
                  <span class="tech-item">Microservices</span>
                  <span class="tech-item">REST-API's</span>
                  <span class="tech-item">MYSQL</span>
                  <span class="tech-item">HTML</span>
                  <span class="tech-item">CSS</span>
                  <span class="tech-item">JavaScript</span>
                  <span class="tech-item">TypeScript</span>
                  <span class="tech-item">React.js</span>
                  </p>

                  <div>
                    <a href='https://github.com/rahul2011421/Talent-share-Portal-Application' id='proj-icons' className='icon brands fa-github' target="_blank" rel="noopener noreferrer"></a>
                    {/* <a href='https://project_name.herokuapp.com/' id='proj-icons' className="fa-solid fa-arrow-up-right-from-square" target="_blank" rel="noopener noreferrer"></a> */}
                  </div>
                </div>
              </section>
              <section>
                {/* <a href='https://project_name.herokuapp.com/' className='proj-photo'> */}
                  <img src={hotel} alt='behrbnb' className='proj-photo' />
                {/* </a> */}
                <div className='proj-text' id='hotel'>
                  <h3 id='proj-title'>Hotel Ratings Application</h3>
                  <p id='proj-desc'>
                  Developed a backend Hotel Rating Application that enables users to rate and review registered hotels. Implemented key features such as user, rating, and hotel services using Eureka service, API Gateway, Feign Client, Config Server, Circuit Breaker, Retry, Rate Limiter with Resilience4J, and OAuth.
                    
                  </p>
                  <p id='proj-tech'>
                  <span class="tech-item">Java</span>
                  <span class="tech-item">Springboot</span>
                  <span class="tech-item">Microservices</span>
                  <span class="tech-item">MYSQL</span>
                  <span class="tech-item">Postman</span>
                  </p>
                  <div>
                    <a href='https://github.com/rahul2011421/Hotel-Ratings-Application-with-Microservices' id='proj-icons' className='icon brands fa-github' target="_blank" rel="noopener noreferrer"></a>
                    {/* <a href='https://project_name.herokuapp.com/' id='proj-icons' className="fa-solid fa-arrow-up-right-from-square" target="_blank" rel="noopener noreferrer"></a> */}
                  </div>
                </div>
              </section>
        
            </div>
          </section>
        </div>

       

             
       


<div className='skills reveal' id='skills'>
  <section>
    <h2>Skills</h2>
  </section>
  
  
  <div class="skill-details">
  <div class="skill-category">
    <h3>PROGRAMMING</h3>
    <ul>
      <li>Data Structures</li>
      <li>Algorithms</li>
      <li>OOPS</li>
      <li>RESTful APIs</li>
      <li>Microservices</li>
    </ul>
  </div>


  <div class="skill-category">
    <h3>LANGUAGES</h3>
    <ul>
      <li>Java</li>
      <li>MYSQL</li>
    </ul>
  </div>

  <div class="skill-category">
    <h3>TOOLS</h3>
    <ul>
      <li>GitHub</li>
      <li>Postman</li>
      <li>Swagger</li>
      <li>Docker</li>
      <li>Jenkins</li>
    </ul>
  </div>

  <div class="skill-category">
    <h3>FRAMEWORKS</h3>
    <ul>
      <li>Spring Boot</li>
    </ul>
  </div>
 
</div>


  
  <section className='skills-icons'>
    <div id='skillsdiv'>
      <img id='skill' src={js} alt='skills' />
      <img id='skill-1' src={py} alt='skills' />
      <img id='skill' src={css} alt='skills' />
      <img id='skill-1' src={java} alt='skills'/>
      <img id='skill-1' src={html} alt='skills' />
      <img id='skill' src={reacts} alt='skills' />
      <img id='skill-1' src={redux} alt='skills' />
      <img id='skill' src={ex} alt='skills' />
      <img id='skill-1' src={node} alt='skills' />
      <img id='skill' src={flask} alt='skills' />
      <img id='skill' src={springboot} alt='skills' />
      <img id='skill-1' src={postgresql} alt='skills' />
      <img id='skill-1' src={git} alt='skills' />
      <img id='skill-1' src={heroku} alt='skills' />
      <img id='skill' src={docker} alt='skills' />
      <img id='skill-1' src={postman} alt='skills' />
      <img id='skill' src={github} alt='skills' />
      
      
    </div>
  </section>
</div>



<div className='contact-info reveal' id='contact-info'>
  <section>
    <h2>Get in Touch</h2>
  </section>
  <section className='contact-info-text'>
    <p>
      I'm currently looking for a <span>backend software developer</span> role, and would love to continue my journey with you!
    </p>
  </section>
  <section className='socials'>
    <a href="mailto: rahuuly65@gmail.com" target="_blank" rel="noopener noreferrer" id='contact-icons' className="fa-solid fa-envelope"></a>
    <a href="https://www.linkedin.com/in/rahul2011421/" target="_blank" rel="noopener noreferrer" id='contact-icons' className="icon brands fa-linkedin-in"></a>
    <a href="https://github.com/rahul2011421" target="_blank" rel="noopener noreferrer" id='contact-icons' className="icon brands fa-github"></a>
    <a href="https://www.instagram.com/rahuul_65/" target="_blank" rel="noopener noreferrer" id='contact-icons' className="icon brands fa-instagram"></a>
  </section>
  <section className='res-container'>
    <a href={res} target="_blank" rel="noopener noreferrer" className="resume-link">
      <span id='resume-bottom'>Resume</span>
    </a>
  </section>
</div>
<a className="back-up" href="#top">
  <i className="fas fa-arrow-up"></i>
</a>
      </body>
    </div>
  );
}
export default App;
