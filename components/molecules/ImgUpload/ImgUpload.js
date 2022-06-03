import React from "react";
import Image from "next/image";

const ImgUpload = ({ src }) => {
  return (
    <div className="h-40 w-40 flex justify-center items-center border-dashed border-2 border-muted relative object-cover">
      <Image src={src} alt="product-pict" objectFit="cover" layout="fill" />
    </div>
  );
};

export default ImgUpload;
