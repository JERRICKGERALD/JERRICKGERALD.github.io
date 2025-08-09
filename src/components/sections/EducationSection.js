// src/components/sections/EducationSection.js
export const EducationSection = ({ education }) => {
  return (
    <div className="space-y-6">
      {education.map((edu) => (
        <div
          key={edu.id}
          className="border-b border-gray-200 pb-6 last:border-b-0"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {edu.degree} in {edu.field}
          </h3>
          <div className="text-gray-600 mb-2">
            <span className="font-medium">{edu.institution}</span>
            {edu.location && <span> • {edu.location}</span>}
          </div>
          <div className="text-sm text-gray-500 mb-2">
            {edu.startDate} - {edu.endDate}
          </div>
          {edu.advisor && (
            <div className="text-sm text-gray-600">
              Advisor: <span className="text-blue-600">{edu.advisor}</span>
            </div>
          )}
          {edu.focus && (
            <div className="text-sm text-gray-600 mt-1">Focus: {edu.focus}</div>
          )}
        </div>
      ))}
    </div>
  );
};
