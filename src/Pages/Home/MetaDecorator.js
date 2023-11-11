import React from "react";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ absoluteImageUrl, shareUrl }) => {
  return (
    <Helmet>
      <meta
        property="og:title"
        content="Discount Coupon"
        data-react-helmet={true}
      />
      <meta
        property="og:description"
        content="Discount coupon code"
        data-react-helmet={true}
      />
      <meta property="og:type" content="website" data-react-helmet={true} />
      <meta property="og:url" content={shareUrl} data-react-helmet={true} />
      <meta
        property="fb:app_id"
        content="1255815975094440"
        data-react-helmet={true}
      />
      <meta
        property="og:image"
        content={absoluteImageUrl}
        data-react-helmet={true}
      />
      <meta
        property="og:image:type"
        content="image/png"
        data-react-helmet={true}
      />
      <meta property="og:image:width" content="1200" data-react-helmet={true} />
      <meta property="og:image:height" content="630" data-react-helmet={true} />
    </Helmet>
  );
};

export default MetaDecorator;
