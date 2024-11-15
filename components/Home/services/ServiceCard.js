import React from "react";

function ServiceCard({ service }) {
  return (
    <div className="rounded-lg overflow-hidden text-center bg-gray-200 shadow-lg p-5 flex flex-col gap-5 h-full">
      <div className="text-black">{service.title}</div>
      <div className="text-black text-lg">{service.description}</div>
    </div>
  );
}

export default ServiceCard;
