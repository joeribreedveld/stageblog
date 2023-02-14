// Imports

// Functions
const InformationList = () => {
  return (
    <section>
      <ul>
        <InformationListItem
          title="Information list item title"
          value="Information list item value"
        />
        <InformationListItem
          title="Informaawdawdawdtion list item title"
          value="Informationawd list item value"
        />
        <InformationListItem
          title="Informatioawdawdawdn list item title"
          value="Information list item value"
        />
        <InformationListItem
          title="Information list item title"
          value="Information lisawdawdwat item value"
        />
      </ul>
    </section>
  );
};

const InformationListItem = ({ title, value }: IInformationListItemProps) => {
  return (
    <li className="flex gap-16 border-b border-gray-200 py-8">
      <section className="w-1/3">
        <p className="text-gray-500">{title}</p>
      </section>
      <section className="w-2/3">
        <p>{value}</p>
      </section>
    </li>
  );
};

// Exports
export default InformationList;
