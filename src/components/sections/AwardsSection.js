// src/components/sections/AwardsSection.js
export const AwardsSection = ({ awards }) => {
  return (
    <div className="mb-1">
      {awards.map((award) => (
        <div key={award.id} className="pb-4">
          <h3 className="text-lg mb-2">
            <span className="font-bold text-gray-700">{award.title}</span> – 
            <span className="italic text-gray-800"> {award.issuer}</span>, {award.date}
          </h3>
        </div>
      ))}
    </div>
  );
};
