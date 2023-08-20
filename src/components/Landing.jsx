import React from "react";

const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container ">
        <div className="element-center flex-col pt-[200px]">
          <div className="w-[750px] max-w-full ">
            <img
              className="w-full h-full"
              src="/src/assets/images/landing-img.png"
              alt="landing-image"
            />
          </div>
          <div className="text-white text-center mb-[30px] ">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location,
              <br />
              accessible anywhere.
            </h1>
            <p className="font-normal text-lg px-[15px] max-w-full md:w-[600px]  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              temporibus tempore, porro officia amet voluptatum nihil veritatis
              harum excepturi perferendis ratione molestiae impedit numquam
              eius, rerum tempora magni libero possimus.
            </p>
          </div>
          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium "
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="h-98 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
        >
          <path
            fill="#181e2a"
            fill-opacity="1"
            d="M0,320L30,293.3C60,267,120,213,180,197.3C240,181,300,203,360,176C420,149,480,75,540,53.3C600,32,660,64,720,96C780,128,840,160,900,170.7C960,181,1020,171,1080,160C1140,149,1200,139,1260,160C1320,181,1380,235,1410,261.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Landing;
