import React from "react";
import { Accordion } from "react-bootstrap";
import {
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiRedux,
  SiMaterialui,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import { ImHtmlFive, ImCss3, ImGit } from 'react-icons/im';

const techs = [
  {
    title: 'HTML5',
    text: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation.',
    icon: (
      <ImHtmlFive
        size={50}
        color='rgb(229,76,33)'
      />
    ),
  },
  {
    title: 'CSS3',
    text: 'CSS3 is a style sheet language used for describing the presentation of a document written in a markup language. It is a cornerstone technology of the World Wide Web.',
    icon: (
      <ImCss3
        size={50}
        color='rgb(33,76,229)'
      />
    ),
  },
  {
    title: 'JavaScript',
    text: 'JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, it is one of the three core technologies of the World Wide Web.',
    icon: (
      <SiJavascript
        size={50}
        color='rgb(252,220,0)'
        className='bg-black'
      />
    ),
  },

  {
    title: 'React',
    text: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.',
    icon: (
      <SiReact
        size={50}
        color='rgb(65,224,253)'
      />
    ),
  },

  {
    title: 'Redux',
    text: "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
    icon: (
      <SiRedux
        size={50}
        color='rgb(175,135,239)'
      />
    ),
  },

  {
    title: 'Next.js',
    text: 'Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.',
    icon: (
      <SiNextdotjs
        size={50}
        color='rgb(0,0,0)'
      />
    ),
  },

  {
    title: 'Bootstrap',
    text: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
    icon: (
      <SiBootstrap
        size={50}
        color={'rgb(117, 50, 249)'}
      />
    ),
  },

  {
    title: 'Material UI',
    text: "Material-UI is an open-source project that features React components that implement Google's Material Design. It is a collection of CSS and React components that implement Google's Material Design specification with the development of responsive web design in mind.",
    icon: (
      <SiMaterialui
        size={50}
        color={'rgb(0,127,255)'}
      />
    ),
  },

  {
    title: 'Tailwind CSS',
    text: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
    icon: (
      <SiTailwindcss
        size={50}
        color='rgb(56,189,248)'
      />
    ),
  },

  {
    title: 'Styled Components',
    text: 'Styled Components is a library for React that allows you to write CSS in JS.',
    icon: (
      <>
        <FaLessThan
          size={15}
          color='#000'
        />
        <h4 className='fs-3'>💅</h4>
        <FaGreaterThan
          size={15}
          color='#000'
        />
      </>
    ),
  },

  {
    title: 'Git',
    text: 'Git is free and open source software for distributed version control: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.',
    icon: (
      <ImGit
        size={50}
        color='rgb(240,80,48)'
      />
    ),
  },
];

const TechCarousel = () => {
  return (
    <Accordion className="px-4 ">
      {techs.map((tech, index) => (
        <Accordion.Item key={`Tech-${index}`} eventKey={`${index}`}>
          <Accordion.Header className="d-flex align-items-center">
            {tech.icon}
            <p className="my-0 mx-2 fw-bold">{tech.title}</p>
          </Accordion.Header>
          <Accordion.Body className="fw-regular">{tech.text}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default TechCarousel;
