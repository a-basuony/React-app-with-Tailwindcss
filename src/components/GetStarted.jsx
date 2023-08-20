import React from "react";

const GetStarted = () => {
  return (
    <section>
      <div className="container">
        <div className="relative">
          <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] text-center element-center flex-col w-[865px] max-w-full min-h-[275px] text-white p-[30px] ">
            <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">
              Get early access today
            </h3>
            <p className="w-[620px] max-w-full mx-auto mb-[30px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique velit facere deserunt sequi quis excepturi dicta, quod
              sapiente enim tempora obcaecati nemo quae ut omnis, odio
              perspiciatis repudiandae et doloremque!
            </p>
            <form className="flex justify-around items-center w-full flex-wrap md:px-[60px] gap-[30px]">
              <input
                type="email"
                placeholder="exaimple@google.com"
                className="w-full md:flex-1 max-w-full rounded-full h-[50px] max-h-full p-5 border-none outline-none text-sm font-medium text-black"
              />
              <button
                type="submit"
                className="bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 w-full md:w-[200px] h-[50px] rounded-full "
              >
                Get Started For Free
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
