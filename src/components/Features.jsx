import React, { useState } from "react";
import FeatureBox from "./FeatureBox";

const Features = () => {
  const [items, setItems] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your files,anywhere",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit, fuga saepe doloremque quisquam dicta cumque sint esse tempore ex explicabo laudantium alias ut asperiores! Sunt consequuntur dolor quasi asperiores.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit, fuga saepe doloremque quisquam dicta cumque sint esse tempore ex explicabo laudantium alias ut asperiores! Sunt consequuntur dolor quasi asperiores.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real-time collaboration",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit, fuga saepe doloremque quisquam dicta cumque sint esse tempore ex explicabo laudantium alias ut asperiores! Sunt consequuntur dolor quasi asperiores.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit, fuga saepe doloremque quisquam dicta cumque sint esse tempore ex explicabo laudantium alias ut asperiores! Sunt consequuntur dolor quasi asperiores.",
    },
  ]);

  return (
    <section className="pb-[150px]" id="features">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px]  mx-auto mx-w-full">
          {items.map((item) => (
            <FeatureBox
              key={item.title}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
