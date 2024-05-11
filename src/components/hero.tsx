'use client'

import ReactDOM from 'react-dom';
import * as animationData from '../../public/robot.json'
import dynamic from 'next/dynamic';
import Lottie from "lottie-react"

export default function Hero() {
  return <Lottie
    animationData={animationData}
    className="flex justify-center items-center"
    loop={true}
    style={
      {
        width: "auto",
        maxHeight: "80vh",
      }
    }
  />
}