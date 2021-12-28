import React, { useEffect } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import Me from "../../public/img/azim.jpg";
import BG from "../../public/img/bg.jpg";
import Wallet from "../../public/img/wallet.svg";
import Particles from "react-tsparticles";
import AOS from "aos";
import "aos/dist/aos.css";
import Style from "./index.module.css";

function Login() {
  const { authenticate } = useMoralis();
  useEffect(() => {
    AOS.init({ duration: 1600 });
  });
  return (
    <div className="bg-black relative  ">
      <div className="flex  flex-col absolute items-center z-50 h-screen  space-y-4 justify-center w-full">
        <div
          className={`${Style.glitch} uppercase wrapper text-white`}
         
        >
          <p className="glitch ">
            <span aria-hidden="true">Welcome to Metaverse </span>
            Welcome to Metaverse
            <span aria-hidden="true">Welcome to Metaverse </span>
          </p>
        </div>
        <div data-aos="fade-up" className=" p-10">
          <button
            onClick={authenticate}
            className="bg-yellow-500 rounded-lg p-5 font-bold"
          >
            <div className="flex items-center">
              <div className="mr-5">
                <Image src={Wallet} height={40} width={40} />
              </div>
              <h1 className={`${Style.but_}`}>Connect your wallet</h1>
            </div>
          </button>
        </div>
      </div>

      <div className="w-full h-screen">
        <Image src={BG} layout="fill" objectFit="cover" />
        <div className="z-100">
          {" "}
          <Particles
            options={{
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "grab",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 100,
                    duration: 2,
                    opacity: 0.8,
                  },

                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },

              particles: {
                size: { value: 5 },
                color: {
                  value: "#ffffff",
                },

                links: {
                  enable: false,
                },
                collisions: {
                  enable: true,
                },

                move: {
                  direction: "up",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  fade: true,
                  straight: false,
                },
                number: {
                  value: 80,
                },
                opacity: {
                  value: 0.7,
                  random: {
                    enable: true,
                    minimumValue: 0.05,
                  },
                  animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.05,
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
