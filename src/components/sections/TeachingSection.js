// src/components/sections/TeachingSection.js
export const TeachingSection = ({ teaching }) => {
  return (
    <div className="space-y-6">
      {teaching.map((item) => (
        <div
          key={item.id}
          className="border-b border-gray-200 pb-0 last:border-b-0"
        >
          <h3 className="text-lg font-bold text-gray-800">
            {item.role}
          </h3>
          <div className="text-gray-500">
            <span className="font-large text-gray-600 italic">{item.course}</span> {" "}
            {item.institution}
          </div>
          <div className="text-sm text-gray-500 mb-3">{item.term}</div>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
};
