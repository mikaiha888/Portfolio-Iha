"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

import Link from "next/link";

const services = [
  {
    num: "01",
    href: "",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
  },
  {
    num: "02",
    href: "",
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
  },
  {
    num: "03",
    href: "",
    title: "Logo Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
  },
  {
    num: "04",
    href: "",
    title: "SEO",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur.",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex flex-col justify-center flex-1 gap-6 group">
              <div className="flex items-center justify-between w-full">
                <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-3xl text-primary" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all furation-500">{service.title}</h2>
              <p className="text-white/60">{service.description}</p>
              <div className="w-full border-b border-white/20"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
