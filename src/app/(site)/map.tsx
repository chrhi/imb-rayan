import { type FC } from "react";

interface GoogleReviewsAbdullahProps {}

const Map: FC = ({}) => {
  return (
    <>
      <div className="w-full h-[150px] flex items-center justify-center ">
        <h2 className="text-5xl font-bold">Où peux-tu nous trouver ?</h2>
      </div>
      <div className="w-full relative h-fit">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12792.660335441573!2d3.2048084!3d36.7185963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e51c781f04881%3A0x51f80d4ad4b66221!2simb%20Industrie!5e0!3m2!1sen!2sdz!4v1721362817242!5m2!1sen!2sdz"
          loading="lazy"
          className=" w-full  h-[700px] "
        ></iframe>
      </div>
    </>
  );
};

export default Map;
