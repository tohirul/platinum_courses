import React from "react";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ thumb, shareUrl }) => {
  return (
    <Helmet>
      <meta property="og:title" content="Discount Coupon" />
      <meta property="og:description" content="Discount coupon code" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={shareUrl} />
      {/* <meta property="og:image" content="https://metatags.io/images/meta-tags.png" /> */}
      <meta property="og:image" content={thumb} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={shareUrl} />
    </Helmet>
  );
};

export default MetaDecorator;
