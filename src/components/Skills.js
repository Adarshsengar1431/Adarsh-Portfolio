import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import meter4 from '../assets/img/meter4.svg';
import meter5 from '../assets/img/meter5.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Full Stack Developer | React Native Developer | Cloud Enthusiast</p>

              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                className="skill-slider"
              >
                {/* Languages */}
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>JavaScript (ES6+)</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Python</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Java</h5>
                </div>

                {/* Frontend */}
                <div className="item">
                  <img src={meter4} alt="" />
                  <h5>React.js</h5>
                </div>

                <div className="item">
                  <img src={meter4} alt="" />
                  <h5>React Native</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>HTML5 / CSS3</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Material UI</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>Tailwind CSS</h5>
                </div>

                {/* Backend */}
                <div className="item">
                  <img src={meter5} alt="" />
                  <h5>FastAPI</h5>
                </div>

                <div className="item">
                  <img src={meter5} alt="" />
                  <h5>Node.js</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>REST API Development</h5>
                </div>

                {/* Database */}
                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>PostgreSQL</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>MongoDB</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="" />
                  <h5>MySQL</h5>
                </div>

                {/* Cloud / DevOps */}
                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>AWS (S3, EC2, Lambda)</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>Docker</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="" />
                  <h5>CI/CD Pipelines</h5>
                </div>

                {/* Tools */}
                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Git & GitHub</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Jira</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Postman</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>Figma</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="" />
                  <h5>VS Code</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
