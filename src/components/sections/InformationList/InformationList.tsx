// Imports
import { IInformationListItemProps } from "./InformationList.types";
import { motion } from "framer-motion";
// import { useMediaQuery } from "react-responsive";

// Framer
const informationListVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const informationListItemVariants = {
  initial: {
    x: -25,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

// const mobileInformationListVariants = {
//   initial: {
//     opacity: 1,
//     x: 0,
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//   },
// };

// Functions
const InformationList = () => {
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section>
      <motion.ul
        variants={informationListVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col gap-8"
      >
        <InformationListItem title="Naam" value="Joeri Breedveld" />
        <InformationListItem
          title="E-mailadres"
          value="joeri.breedveld123@gmail.com"
        />
        <InformationListItem
          title="School e-mailadres"
          value="32653@ma-web.nl"
        />
        <InformationListItem title="Telefoonnummer" value="+31 6 80056004" />
        <InformationListItem title="Stagebegeleider" value="Milos Despotovic" />
        <InformationListItem title="Bedrijfsnaam" value="CanvasHeroes" />
        <InformationListItem title="Startdatum" value="21 november 2022" />
        <InformationListItem title="Einddatum" value="20 maart 2023" />
        <InformationListItem
          title="Beschrijving"
          value="Wij ontwikkelen custom apps en platformen voor bedrijven met een specifieke vraag waar geen standaard oplossing voor bestaat. Wij ademen digital en kunnen met ons team en partners vrijwel iedere uitdaging aan. Ons hart gaat echt sneller kloppen van uitdagingen binnen domeinen als gezondheid, energie, mobiliteit, non-profit, IoT, e-learning, e-commerce, custom interfaces en automatisering."
        />
      </motion.ul>
    </section>
  );
};

const InformationListItem = ({ title, value }: IInformationListItemProps) => {
  // const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <motion.li
      variants={informationListItemVariants}
      key={title}
      className="flex flex-col gap-4 border-b border-gray-200 pb-8 md:flex-row md:gap-16"
    >
      <section className="md:w-1/3">
        <p className="text-gray-500">{title}</p>
      </section>
      <section className="md:w-2/3">
        <p>{value}</p>
      </section>
    </motion.li>
  );
};

// Exports
export default InformationList;
