import React, { useState } from "react";
import TestimonialBox from "./TestimonialBox";

const Testimonials = () => {
  const [testData, setTestData] = useState([
    {
      id: "1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla velit distinctio possimus aspernatur magni cum corrupti magnam molestias ducimus. Harum porro quidem eaque!",
      image: "profile-1.jpg",
      position: "founder & CEO, Huddle",
      name: "Ahmed Basuoney",
    },
    {
      id: "1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla velit distinctio possimus aspernatur magni cum corrupti magnam molestias ducimus. Harum porro quidem eaque!",
      image: "profile-2.jpg",
      position: "founder & CEO, Huddle",
      name: "Mohamed gamal",
    },
    {
      id: "1",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla velit distinctio possimus aspernatur magni cum corrupti magnam molestias ducimus. Harum porro quidem eaque!",
      image: "profile-3.jpg",
      position: "founder & CEO, Huddle",
      name: "Eman sad",
    },
  ]);
  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px] ">
          <img src="/src/assets/images/bg-quotes.png" alt="quotes" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
          {testData.map((item) => (
            <TestimonialBox
              key={item.id}
              desc={item.desc}
              image={item.image}
              position={item.position}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
