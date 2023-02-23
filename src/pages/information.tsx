// Imports
import { NextPage } from "next";
import InformationList from "../components/sections/InformationList/InformationList";

// Functions
const Information: NextPage = () => {
  return (
    <section className="flex flex-col gap-16">
      <h2>Informatie</h2>
      <InformationList />
    </section>
  );
};

export default Information;
