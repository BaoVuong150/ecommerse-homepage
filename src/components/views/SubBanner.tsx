import React from 'react'
import SubBannerImage from '../../assets/subImageMain.png';
import Products2 from '../products/Products2';
import Products3 from '../products/Products3';

const SubBanner = () => {
  return (
    <div>
      <div className="flex flex-col">
      {/* Banner */}
      <div className="w-full mt-8 sm:pl-0 md:pl-40">
        <img
          className="w-full h-auto max-w-[1800px] rounded-md"
          src={SubBannerImage}
          alt="Sub Banner"
        />
      </div>

      {/* Products */}
      <div className="w-full mt-8">
        <Products2 />
      </div>
      <div className="w-full mt-8">
        <Products3 />
      </div>
    </div>
    </div>
  )
}

export default SubBanner
