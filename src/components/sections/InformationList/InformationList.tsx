// Imports
import { IInformationListItemProps } from "./InformationList.types";

// Functions
const InformationList = () => {
  return (
    <section>
      <ul className="flex flex-col gap-8">
        <InformationListItem title="Naam" value="Joeri Breedveld" />
        <InformationListItem
          title="E-mailadres"
          value="joeri.breedveld123@gmail.com"
        />
        <InformationListItem title="Telefoonnummer" value="+31 6 80056004" />
        <InformationListItem title="Bedrijfsnaam" value="CanvasHeroes" />
      </ul>
    </section>
  );
};

const InformationListItem = ({ title, value }: IInformationListItemProps) => {
  return (
    <li className="flex flex-col gap-4 border-b border-gray-200 pb-8 md:flex-row md:gap-16">
      <section className="md:w-1/3">
        <p className="text-gray-500">{title}</p>
      </section>
      <section className="md:w-2/3">
        <p>{value}</p>
      </section>
    </li>
  );
};

// Exports
export default InformationList;
