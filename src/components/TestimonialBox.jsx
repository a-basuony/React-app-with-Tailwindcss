import React from "react";

const TestimonialBox = ({ name, desc, position, image }) => {
  return (
    <div className="text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]">
      <p className="text-sm font-normal tracking-[0.8px] mb-[30px]">{desc}</p>
      <div className="flex items-center gap-[15px]">
        <img
          src={`src/assets/images/${image}`}
          alt="testimonial"
          className="w-[50px] h-[50px] object-contain rounded-full"
        />
        <div>
          <strong className="text-left block mb-[5px]">{name},</strong>
          <p className="font-normal text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialBox;
