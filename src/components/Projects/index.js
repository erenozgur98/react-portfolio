import { React } from 'react'
import { Fade } from 'react-reveal'
import Card from '../Card';
import './style.css';

import data from '../../mydata';

const Projects = () => {
    return (
      <>
      </>
      //   <div className="section" id="work">
      //   <div className="container">
      //     <div className="work-wrapper">
      //       <Fade bottom>
      //         <h1>Projects</h1>
      //       </Fade>
  
      //       <div className="grid">
      //         <Fade bottom cascade>
      //           {data.projects.map((project, i) => (
      //             <Card
      //               key={i}
      //               heading={project.title}
      //               paragraph={project.para}
      //               imgUrl={project.imageSrc}
      //               projectLink={project.url}
      //             ></Card>
      //           ))}
      //         </Fade>
      //       </div>
      //     </div>
      //   </div>
      // </div>
        // <div className="main-content">
        //     <Carousel className="main-content" fade>
        //         <Carousel.Item interval={5000} className="d-block w-100 d-flex justify-content-center">
        //             <a
        //                 href="https://dylanjacobb.github.io/fresh-air-finder/"
        //                 target="_blank"
        //                 rel="noreferrer"
        //             >
        //                 <img
        //                     className="image"
        //                     src={freshairfinder}
        //                     alt="Fresh Air Finder"x
        //                 />
        //             </a>
        //             <Carousel.Caption>
        //                 <h3>Fresh Air Finder</h3>
        //                 <p>National Park Locator which shows all the parks in the state you choose.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item interval={5000} className="d-block w-100 d-flex justify-content-center">
        //             <a
        //                 href="https://ancient-dawn-51222.herokuapp.com/"
        //                 target="_blank"
        //                 rel="noreferrer"
        //             >
        //                 <img
        //                     className="image"
        //                     src={cupets}
        //                     alt="Cupets"
        //                 />
        //             </a>
        //             <Carousel.Caption>
        //                 <h3>cuPets</h3>
        //                 <p>An app for you and your pet to make new friends!!</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item interval={5000} className="d-block w-100 d-flex justify-content-center">
        //             <a
        //                 href="https://erenozgur98.github.io/avengers-quiz/"
        //                 target="_blank"
        //                 rel="noreferrer"
        //             >
        //                 <img
        //                     className="image"
        //                     src={avengers}
        //                     alt="Avengers"
        //                 />
        //             </a>
        //             <Carousel.Caption>
        //                 <h3>Avengers Quiz</h3>
        //                 <p>Avengers Quiz is to test your knowledge on how much you actually know on Avengers! You can save your score and compete with others as well.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //         <Carousel.Item interval={5000} className="d-block w-100 d-flex justify-content-center">
        //             <a
        //                 href="https://memento-multiverse.herokuapp.com/"
        //                 target="_blank"
        //                 rel="noreferrer"
        //             >
        //                 <img
        //                     className="image"
        //                     src={memento}
        //                     alt="Memento Multiverse"
        //                 />
        //             </a>
        //             <Carousel.Caption>
        //                 <h3>Memento Multiverse</h3>
        //                 <p>Do you love collecting TV merch? Then you need a fun and funny web store for merch that appreciates your favorite shows, their inside jokes, and transports you into their worlds.</p>
        //             </Carousel.Caption>
        //         </Carousel.Item>
        //     </Carousel>
        //     </div>
    )
}

export default Projects;
