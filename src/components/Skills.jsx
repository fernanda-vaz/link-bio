import '../styles/Skills.scss';
import { motion } from 'framer-motion';

const transition = {
  duration: 0.5,
  delay: 0.3,
  ease: [0, 0.71, 0.2, 1.01],
};

const Skills = () => {
  const technologies = [
    { name: 'HTML', icon: './icons/html.svg', hoverIcon: './icons/html-hover.svg' },
    { name: 'CSS', icon: './icons/css.svg', hoverIcon: './icons/css-hover.svg' },
    { name: 'JavaScript', icon: './icons/js.svg', hoverIcon: './icons/js-hover.svg' },
    { name: 'React', icon: './icons/react.svg', hoverIcon: './icons/react-hover.svg' },
    { name: 'Sass', icon: './icons/sass.svg', hoverIcon: './icons/sass-hover.svg' },
    { name: 'Styled Components', icon: './icons/styled-components.svg', hoverIcon: './icons/styled-components-hover.svg' },
    { name: 'TailwindCSS', icon: './icons/tailwind.svg', hoverIcon: './icons/tailwindcss-hover.svg' },
    { name: 'Node.js', icon: './icons/node.svg', hoverIcon: './icons/node-hover.svg' },
    { name: 'Figma', icon: './icons/figma.svg', hoverIcon: './icons/figma-hover.svg' },
    { name: 'Git', icon: './icons/git.svg', hoverIcon: './icons/git-hover.svg' },
    { name: 'GitHub', icon: './icons/github.svg', hoverIcon: './icons/github-hover.svg' },
  ];

  return (
    <motion.div
      className='cards-container skills'
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={transition}
    >
      <h3>Tecnologias</h3>
      <div className='skills-icons'>
        {technologies.map((tech, index) => (
          <div className='icon-container' key={index}>
            <span className='caption'>{tech.name}</span>
            <img
              className='icon'
              src={tech.icon}
              alt={tech.name}
              data-hover={tech.hoverIcon} // Armazena o ícone de hover
              onMouseOver={(e) => (e.currentTarget.src = tech.hoverIcon)} // Troca o ícone no hover
              onMouseOut={(e) => (e.currentTarget.src = tech.icon)} // Volta ao ícone normal
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;