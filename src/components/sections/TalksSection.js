// src/components/sections/TalksSection.js
import React from "react";

export const TalksSection = ({ talks }) => {
  return (
    <div className="space-y-6">
      {talks.map((talk) => (
        <div
          key={talk.id}
          className="border-b border-gray-200 pb-6 last:border-b-0"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {talk.title}
          </h3>
          {/* <div className="text-gray-600 mb-2">
            <span className="font-medium">{talk.venue}</span>
            {talk.location && <span> • {talk.location}</span>}
            <span> • {talk.date}</span>
          </div>
          <div className="text-sm text-gray-500 mb-3">{talk.type}</div>
          <div className="flex gap-3">
            {talk.links.slides && (
              <a
                href={talk.links.slides}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                [ Slides ]
              </a>
            )}
            {talk.links.video && (
              <a
                href={talk.links.video}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                [ Video ]
              </a>
            )}
          </div> */}
        </div>
      ))}
    </div>
  );
};
