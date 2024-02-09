
import React from 'react';
import { SiEthereum } from 'react-icons/si';
import Image from 'next/image';

const Card = ({ image }) => {
  return (
    <div className="nftCard flex flex-col w-5/12 text-[#7A797D] mt-2">
      {/* Next.js Image component for optimized image loading */}
      <div className="relative h-60 rounded-2xl overflow-hidden">
        <Image src={image} alt="nft" layout="fill" objectFit="cover" />
      </div>
      
      <div className="nftInfo flex justify-between items-center w-full mt-3">
        <h1 className="font-bold text-xl text-black">Ape In Love</h1>
        <p className="text-base">21.5 Likes</p>
      </div>

      <div className="nftUserInfo flex items-center mt-3">
        <Image
          src="https://www.shutterstock.com/image-vector/black-woman-smiling-portrait-vector-600nw-2281497689.jpg"
          alt="userAvatar"
          width={32}
          height={32}
          
          className="rounded-full"
        />
        <p className="ml-3 text-sm">@johnita</p>
      </div>

      <div className="nftProductInfo mt-3 flex items-center justify-between">
        <p className="font-bold text-base">Current Bid</p>
        <div className="ethPrice flex items-center">
          <SiEthereum className="text-black text-lg" />
          <p className="ml-1 text-black font-semibold text-lg">9.10</p>
          <p className="ml-1 text-lg">ETH</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
