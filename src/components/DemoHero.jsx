"use client"

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { motion } from "framer-motion"
import Image from "next/image"
import { Merriweather, Inter } from "next/font/google"

const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"] })
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] })

const slides = [
  {
    title: "Your Legal Partner for Every Step",
    subtitle: "Advocate • Legal Counsel",
    description:
      "Offering reliable representation and guidance for individuals and businesses. Together, we build strategies that protect your future.",
    btn1: "Book Consultation",
    btn2: "Explore Services",
    image: "/blinndfolded.jpg",
  },
  {
    title: "Justice Made Accessible",
    subtitle: "Trusted Advocate",
    description:
      "Clear communication, honest advice, and effective legal solutions — simplifying complex cases for your peace of mind.",
    btn1: "Schedule a Call",
    btn2: "View Practice Areas",
    image: "/zz.jpg",
  },
  {
    title: "Guiding You With Integrity",
    subtitle: "Your Legal Guide",
    description:
      "Combining years of experience with a client-first approach, ensuring personalized solutions for every legal challenge.",
    btn1: "Get Started",
    btn2: "Learn More",
    image: "/hn.jpg",
  },
]

const DemoHero = () => {
  return (
    <div className="w-full relative">
      <Carousel plugins={[Autoplay({ delay: 3500 })]}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <section className="bg-gradient-to-b from-[#0B1C2A] via-[#0D2436] to-[#102A3F] text-[#F5F5F5]">
                <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center gap-12">

                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 text-center lg:text-left"
                  >
                    <p
                      className={`${inter.className} text-[#C5A25A] uppercase tracking-wider text-sm mb-3`}
                    >
                      {slide.subtitle}
                    </p>

                    <h1
                      className={`${merriweather.className} text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-[#E5C071] via-[#C5A25A] to-[#B08B3F] text-transparent bg-clip-text leading-tight`}
                    >
                      {slide.title}
                    </h1>

                    <p
                      className={`${inter.className} text-[#DADADA] mb-10 max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed`}
                    >
                      {slide.description}
                    </p>

                    <div className="flex gap-4 justify-center lg:justify-start">
                      <a
                        href="/contact"
                        className={`${inter.className} inline-flex items-center justify-center px-7 py-3 bg-[#C5A25A] text-[#0B1C2A] font-semibold rounded-none shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] hover:scale-102 transition duration-300`}
                      >
                        {slide.btn1}
                      </a>
                      <a
                        href="/service"
                        className={`${inter.className} inline-flex items-center justify-center px-7 py-3 border border-[#C5A25A] text-[#C5A25A] rounded-none font-medium hover:bg-[#C5A25A] hover:text-[#0B1C2A] transition duration-300`}
                      >
                        {slide.btn2}
                      </a>
                    </div>
                  </motion.div>


                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                  >
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="relative w-80 h-80 sm:w-96 sm:h-[460px] lg:w-[460px] overflow-hidden shadow-[0_8px_30px_rgba(2,6,23,0.45)] border border-[#0f1724]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2A]/40 to-transparent z-10"></div>
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </section>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-[#C5A25A] hover:text-white transition" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-[#C5A25A] hover:text-white transition" />
      </Carousel>
    </div>
  )
}

export default DemoHero
