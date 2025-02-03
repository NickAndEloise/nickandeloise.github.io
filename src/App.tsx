import { AnimationProps, motion } from "framer-motion";
import React from "react";

const Header: React.FC = () => {
  return (
    <motion.header
      className="relative flex items-center justify-center py-24"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-serif"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Nick &amp; Eloise
        </motion.h1>
      </div>
    </motion.header>
  );
};

const NavBar: React.FC = () => {
  return (
    <motion.nav
      className="sticky top-0 bg-gray-100 bg-opacity-80 backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
    >
      <ul className="flex justify-center py-3 space-x-8">
        <li>
          <a
            href="#our-story"
            className="hover:text-green-800 transition-colors"
          >
            Our Story
          </a>
        </li>
        <li>
          <a
            href="#event-details"
            className="hover:text-green-800 transition-colors"
          >
            Event Details
          </a>
        </li>
        <li>
          <a
            href="#accommodations"
            className="hover:text-green-800 transition-colors"
          >
            Accommodations
          </a>
        </li>
        <li>
          <a href="#rsvp" className="hover:text-green-800 transition-colors">
            RSVP
          </a>
        </li>
        <li>
          <a href="#gallery" className="hover:text-green-800 transition-colors">
            Gallery
          </a>
        </li>
      </ul>
    </motion.nav>
  );
};

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  animation?: AnimationProps;
};

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  animation,
}) => {
  const defaultAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const anim = animation || defaultAnimation;

  return (
    <motion.section
      id={id}
      className="my-16 mx-auto max-w-3xl p-8 bg-white rounded-lg shadow-lg"
      initial={anim.initial}
      animate={anim.animate}
      transition={anim.transition}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-serif text-center text-gray-800 mb-4">
        {title}
      </h2>
      <div className="text-lg text-gray-700 text-center">{children}</div>
    </motion.section>
  );
};

// const Footer: React.FC = () => {
//   return (
//     <motion.footer
//       className="bg-green-950 text-white py-6 text-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.5, duration: 0.8 }}
//     >
//       <p>&copy; 2026 Nick &amp; Eloise</p>
//     </motion.footer>
//   );
// };

const App: React.FC = () => {
  return (
    <div className="size-full">
      <NavBar />
      <Header />
      <main>
        <Section id="event-details" title="Event Details">
          <p>
            <strong>Date:</strong> Coming soon
          </p>
          <p>
            <strong>Location:</strong> Coming soon
          </p>
        </Section>
      </main>
    </div>
  );
};

export default App;
