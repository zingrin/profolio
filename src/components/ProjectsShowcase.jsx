import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Project 1 images (SummerBox)
import project1Img from "../assets/project1Img.png";
import project2Img from "../assets/project2Img.png";
import project3Img from "../assets/project31Img.png";

// Project 2 images (HubbyHub)
import projectImg11 from "../assets/projectImg11.png";
import projectImg112 from "../assets/projectImg112.png";
import projectImg113 from "../assets/projectImg113.png";

// Project 3 images (SpeakStack)
import project31Img from "../assets/project31Img.png";
import project32Img from "../assets/project32Img.png";
import project33Img from "../assets/project33Img.png";

const projects = [
  {
    title: "SpeakStack",
    description:
      "SpeakStack is a real-time language learning and conversation platform that connects learners with native speakers. It features live chat, vocabulary tracking, and AI-powered suggestions to help users improve their speaking skills effectively.",
    challenges: [
      "Integrating WebSocket for real-time messaging",
      "Building an AI-powered suggestion system",
      "Ensuring responsive design across all devices",
    ],
    clientLink: "https://github.com/zingrin/speakstack-client",
    liveLink: "https://speakstack-a1b8a.web.app/",
    images: [project31Img, project32Img, project33Img],
  },
  {
    title: "SummerBox",
    description:
      "SummerBox is a full-stack room and item-sharing platform featuring search, filtering, protected routes using Firebase, and a dynamic dashboard with nested routes.",
    challenges: [
      "Implementing search, sort, and filter functionality",
      "Handling protected routes using Firebase",
      "Creating a dynamic dashboard with nested routes",
    ],
    clientLink: "https://github.com/zingrin/Summer-Box",
    liveLink: "https://summer-box.web.app/",
    images: [project1Img, project2Img, project3Img],
  },
  {
    title: "HubbyHub",
    description:
      "HubbyHub is a community-driven platform where hobby enthusiasts can showcase their creations, join groups, and connect with like-minded people. It supports posting, commenting, and exploring trending hobbies worldwide.",
    challenges: [
      "Implementing secure authentication and authorization",
      "Creating a dynamic dashboard with hobby category filters",
      "Building real-time update functionality for posts and comments",
    ],
    clientLink: "https://github.com/zingrin/hobby-hub-client-side",
    liveLink: "https://hobby-hub-88270.web.app/",
    images: [projectImg11, projectImg112, projectImg113],
  },
];

const ProjectsShowcase = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="max-w-7xl mx-auto my-20 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-cyan-500">
        My Featured Projects
      </h2>
      <p className="text-center mb-12 text-gray-400 max-w-xl mx-auto">
        Here's a showcase of some of my full-stack projects with key challenges.
      </p>

      <div className="space-y-12">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 1; 

          return (
            <div
              key={idx}
              className={`bg-gray-900 rounded-xl p-6 flex flex-col md:flex-row ${
                isEven ? "md:flex-row-reverse" : ""
              } md:items-center gap-6 shadow-lg`}
            >
              {/* Image Slider */}
              <div className="md:flex-1 max-w-md">
                <Slider {...sliderSettings}>
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="rounded-lg shadow-lg"
                    />
                  ))}
                </Slider>
              </div>

              {/* Text Section */}
              <div className="md:flex-1 text-gray-300">
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                  {project.title}
                </h3>
                <p className="mb-4">{project.description}</p>
                <h4 className="text-purple-500 font-semibold mb-2">
                  Challenges I Faced:
                </h4>
                <ul className="list-disc list-inside mb-4 space-y-1">
                  {project.challenges.map((challenge, i) => (
                    <li key={i}>{challenge}</li>
                  ))}
                </ul>

                <div className="flex space-x-3">
                  <a
                    href={project.clientLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline btn-info"
                  >
                    Client
                  </a>
                  
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline btn-info"
                  >
                    Live
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
