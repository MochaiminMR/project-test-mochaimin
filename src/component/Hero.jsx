import React, { useEffect, useState } from "react";
import "./../App.css";

export const Hero = ({ imageSrc = "/images/hero.jpg" }) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
      <div className="h-[500px]">
        <div className="hero-parallax">
          <div className="c-items" id="c1">
            <img
              className="hero-image"
              style={{ transform: `translateY(-${scrollY * 0.7}px)` }}
              src={imageSrc}
              alt="Hero"
            />
            <div className="overlay"></div>
            <div className="centered-text mt-24">
              <h1 className="text-[72px] fw-[500] text-white">Ideas</h1>
              <h1 className="text-[24px] text-white">
                Where all our great things begin
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
};
