// // src/components/sections/PublicationsSection.js
// import React from "react";

// const PublicationsSection = ({ publications, personal }) => {
//   return (
//     <div className="space-y-8">
//       {publications.map((pub, index) => (
//         <div
//           key={pub.id}
//           className="border-b border-gray-200 pb-8 last:border-b-0"
//         >
//           <div className="flex gap-6">
//             {/* Visual representation - only show if visual data exists */}
//             {pub.visual && (
//               <div className="flex-shrink-0">
//                 <div className="space-y-3">
//                   <div className="bg-white border-2 border-black p-3 rounded text-sm max-w-32">
//                     <div className="text-center">
//                       "What does a{" "}
//                       <span className="text-orange-500 font-semibold">
//                         {pub.visual.highlightWord}
//                       </span>{" "}
//                       look like?"
//                     </div>
//                     <div className="text-center mt-2 text-2xl">↓</div>
//                   </div>
//                   <div className="bg-white border border-gray-300 p-3 rounded text-center">
//                     <div className="text-4xl mb-2">{pub.visual.image}</div>
//                   </div>
//                   <div className="bg-purple-300 p-2 rounded text-center text-sm font-semibold">
//                     {pub.visual.modelName}
//                   </div>
//                   <div className="bg-white border-2 border-black p-3 rounded text-xs max-w-40">
//                     "A{" "}
//                     <span className="text-orange-500 font-semibold">
//                       {pub.visual.highlightWord}
//                     </span>{" "}
//                     {pub.visual.response.split(pub.visual.highlightWord)[1]}"
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Publication details */}
//             <div className="flex-1">
//               <h3 className="text-xl font-bold text-gray-800 mb-3 tracking-wide">
//                 {pub.title}
//               </h3>

//               <div className="flex items-center gap-4 mb-3">
//                 <span className="text-gray-600 font-semibold">{pub.year}</span>
//                 <div className="flex gap-3">
//                   {pub.links.pdf && (
//                     <a
//                       href={pub.links.pdf}
//                       className="text-gray-500 hover:text-blue-600 font-medium"
//                     >
//                       [ PDF ]
//                     </a>
//                   )}
//                   {pub.links.arxiv && (
//                     <a
//                       href={pub.links.arxiv}
//                       className="text-gray-500 hover:text-blue-600 font-medium"
//                     >
//                       [ ARXIV ]
//                     </a>
//                   )}
//                   {/* {pub.links.code && (
//                     <a
//                       href={pub.links.code}
//                       className="text-gray-500 hover:text-blue-600 font-medium"
//                     >
//                       [ CODE ]
//                     </a>
//                   )} */}
//                   {pub.links.website && (
//                     <a
//                       href={pub.links.website}
//                       className="text-gray-500 hover:text-blue-600 font-medium"
//                     >
//                       [ WEBSITE ]
//                     </a>
//                   )}
//                 </div>
//               </div>

//               <p className="text-gray-600 mb-3">
//                 {pub.authors.map((author, idx) => (
//                   <span
//                     key={idx}
//                     className={
//                       author === `${personal.firstName} ${personal.lastName}`
//                         ? "font-semibold"
//                         : ""
//                     }
//                   >
//                     {author}
//                     {idx < pub.authors.length - 1 ? ", " : ""}
//                   </span>
//                 ))}
//               </p>

//               {pub.venue && (
//                 <p className="text-gray-800 mb-3 italic">{pub.venue}</p>
//               )}

//               {/* <p className="text-gray-700 leading-relaxed text-sm">
//                 {pub.description}
//               </p> */}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PublicationsSection;


// src/components/sections/PublicationsSection.js
import React from "react";

const PublicationsSection = ({ publications, personal }) => {
  return (
    <div className="space-y-8">
      {publications.map((pub) => (
        <div
          key={pub.id}
          className="border-b border-gray-200 pb-8 last:border-b-0"
        >
          <div className="flex gap-6">
            {/* Visual representation - only show if visual data exists */}
            {pub.visual && (
              <div className="flex-shrink-0">
                <div className="space-y-3">
                  <div className="bg-white border-2 border-black p-3 rounded text-sm max-w-32">
                    <div className="text-center">
                      "What does a{" "}
                      <span className="text-orange-500 font-semibold">
                        {pub.visual.highlightWord}
                      </span>{" "}
                      look like?"
                    </div>
                    <div className="text-center mt-2 text-2xl">↓</div>
                  </div>
                  <div className="bg-white border border-gray-300 p-3 rounded text-center">
                    <div className="text-4xl mb-2">{pub.visual.image}</div>
                  </div>
                  <div className="bg-purple-300 p-2 rounded text-center text-sm font-semibold">
                    {pub.visual.modelName}
                  </div>
                  <div className="bg-white border-2 border-black p-3 rounded text-xs max-w-40">
                    "A{" "}
                    <span className="text-orange-500 font-semibold">
                      {pub.visual.highlightWord}
                    </span>{" "}
                    {pub.visual.response.split(pub.visual.highlightWord)[1]} "
                  </div>
                </div>
              </div>
            )}

            {/* APA Format Publication details */}
            <div className="flex-1">
              <p className="text-gray-800 text-md leading-relaxed">
                {pub.authors.map((author, idx) => (
                  <span
                    key={idx}
                    className={
                      author === `${personal.firstName} ${personal.lastName}`
                        ? "font-semibold"
                        : ""
                    }
                  >
                    {author}
                    {idx < pub.authors.length - 1 ? ", " : ""}
                  </span>
                ))}{" "}
                ({pub.year}). <span className="font-semibold">{pub.title}</span>
                {pub.venue && <span>. <i>{pub.venue}</i></span>}.
                <span className="ml-3">
                  {pub.links.pdf && (
                    <a
                      href={pub.links.pdf}
                      className="text-gray-500 hover:text-blue-600 font-medium ml-2"
                    >
                      [PDF]
                    </a>
                  )}
                  {/* {pub.links.code && (
                    <a
                      href={pub.links.code}
                      className="text-gray-500 hover:text-blue-600 font-medium ml-2"
                    >
                      [CODE]
                    </a>
                  )} */}
                  {pub.links.arxiv && (
                    <a
                      href={pub.links.arxiv}
                      className="text-gray-500 hover:text-blue-600 font-medium ml-2"
                    >
                      [ARXIV]
                    </a>
                  )}
                  {pub.links.website && (
                    <a
                      href={pub.links.website}
                      className="text-gray-500 hover:text-blue-600 font-medium ml-2"
                    >
                      [WEBSITE]
                    </a>
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PublicationsSection;
