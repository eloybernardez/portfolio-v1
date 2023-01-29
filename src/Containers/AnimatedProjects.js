import React from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import { m } from "framer-motion";
import { Project } from "../Components/Project";

const PROJECTS = [
  {
    title: "Bankist",
    languages: "HTML / CSS / JS / React",
    preview: require("../images/bankist-v2-opt.webp"),
    alt: "Bankist App",
    description:
      "Bank webpage for transfering money to another account, requesting a loan and closing an account. It's possible to see the money balance and some statistics of the transactions. As any other bank app, there is a timer to logout the user and a button to sort the movements by date.",
    instructions:
      "username: eb - password: 1111 / username: jd - password: 2222",
    code: "https://github.com/eloybernardez/bankist-react-app",
    page: "https://bankist-react-app.vercel.app/",
    state: "finished",
  },
  {
    title: "React Yard Sale",
    languages: "HTML / CSS / JS / React",
    preview: require("../images/next-shop-opt.webp"),
    alt: "React Yard Sale",
    description:
      "E-commerce for adding / removing products, filtering products by categories, creating an account, and changing password. You need to log in to buy products, nevertheless, you can use the app normally.",
    instructions: "user: eloy@gmail.com - password:1234",
    code: "https://github.com/eloybernardez/react-yard-sale",
    page: "https://react-yard-sale.vercel.app/",
    state: "finished",
  },
  {
    title: "Todo Machine",
    languages: "HTML / CSS / JS / React",
    preview: require("../images/todos-v2-opt.webp"),
    alt: "Todo Machine",
    description:
      "A TODO machine to add / complete / remove TODOS. Also, for searching a specific TODO using the search bar.",
    code: "https://github.com/eloybernardez/todo-machine",
    page: "https://todo-machine-ecru.vercel.app/",
    state: "finished",
  },
  {
    title: "Interview Casino",
    languages: "HTML / CSS / JS / Material UI / React",
    preview: require("../images/casino.webp"),
    alt: "Interview Casino",
    description:
      "A Casino's bet register app to set bets, add players and calculate a sum of the bets since opening time of the previous day (7am) to opening time of the current day. There is only a login for crupiers and manager since players can see their current score directly.",
    instructions:
      "user: crupier - password: crupierpass / user: manager - password: managerpass",
    code: "https://github.com/eloybernardez/interview-casino",
    page: "https://interview-casino.vercel.app/",
    state: "finished",
  },
  {
    title: "Pokedux",
    languages: "HTML / CSS / JS / React / Redux",
    preview: require("../images/pokedux-v2.webp"),
    alt: "Pokedux",
    description:
      "Online 'pokedux' that every trainer needs to have if he/she wants to catch 'em all!",
    code: "https://github.com/eloybernardez/pokedux/tree/main",
    page: "http://pokedux-azure.vercel.app/",
    state: "finished",
  },
  {
    title: "Pig Game",
    languages: "HTML / CSS / JS",
    preview: require("../images/pig-game-opt.webp"),
    alt: "Pig Game",
    description:
      "A game in which two players throw a 6-sided dice repeteadly, adding the dice number to the player score, until one of them reaches a score of 100 or more.",
    code: "https://github.com/eloybernardez/pig-game",
    page: "https://eloybernardez.github.io/pig-game/",
    state: "finished",
  },
];

const AnimatedProjects = () => {
  const [loading, setLoading] = React.useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  const imageLoader = (img) => {
    if (loading) {
      setTimeout(handleLoading, 2000);
      return (
        <Spinner
          animation="border"
          variant="primary"
          role="status"
          className="justify-content-center align-items-center align-self-center"
        />
      );
    } else {
      return img;
    }
  };

  const RefProjects = React.forwardRef((props, ref) => (
    <Container
      id="container-projects"
      fluid
      ref={ref}
      className="fadeUpAnimation opacityAnimation hide show"
    >
      {PROJECTS.map((project, index) => (
        <Row key={`Project-${index}`} className="mb-3 bg-white border rounded ">
          {index % 2 === 0 ? (
            <>
              <Col
                className={`justify-content-center align-items-center align-self-center col-12 col-sm-6 `}
              >
                {imageLoader(
                  <Image
                    rounded
                    className="w-100 h-100 py-2"
                    fluid
                    src={project.preview}
                  />
                )}
              </Col>
              <Col
                className={`justify-content-center align-self-center align-items-center col-12 col-sm-6`}
              >
                <Project project={project} />
              </Col>
            </>
          ) : (
            <>
              <Col
                className={`justify-content-center align-self-center align-items-center col-12 col-sm-6 order-1 `}
              >
                <Project project={project} />
              </Col>
              <Col
                className={`justify-content-center align-self-center align-items-center col-12 col-sm-6 order-0 order-sm-1 py-2`}
              >
                {imageLoader(
                  <Image
                    rounded
                    fluid
                    className="w-100 h-100"
                    src={project.preview}
                    alt={project.alt}
                  />
                )}
              </Col>
            </>
          )}
        </Row>
      ))}
    </Container>
  ));

  const MotionProjects = m(RefProjects);

  return (
    <MotionProjects
      initial={{ y: -15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
    />
  );
};

export default AnimatedProjects;
