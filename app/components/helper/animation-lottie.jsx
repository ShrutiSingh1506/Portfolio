"use client";

import dynamic from "next/dynamic";

// Disable SSR for Lottie (prevents "document is not defined" during build)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  if (!animationPath) return null;

  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;
