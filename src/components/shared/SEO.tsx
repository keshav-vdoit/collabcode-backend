import React from "react";
import { Helmet } from "react-helmet-async";

const SEO: React.FC<{ titile: string; description: string }> = ({
  titile,
  description,
}) => {
  return (
    <Helmet>
      <title>{titile}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default SEO;
