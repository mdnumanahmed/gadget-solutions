import React from "react";

const PageTitle = ({ title, subTitle, className, children }) => {
  return (
    <div className={`bg-purple-600 py-8 ${className}`}>
      <div className="space-y-5 container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-white">{subTitle}</p>
        {children}
      </div>
    </div>
  );
};

export default PageTitle;
