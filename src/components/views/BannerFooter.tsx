import React from 'react';
import ImgFooter from '../../assets/imageFooter.png';

const BannerFooter = () => {
  return (
    <div className="flex flex-col ">
      <div className="w-full mt-8 sm:pl-0 md:pl-40">
        <img
          className="w-full h-auto max-w-[1800px] rounded-md"
          src={ImgFooter}
          alt="Footer Banner"
        />
      </div>
    </div>
  );
};

export default BannerFooter;
