import React from "react";
import Lottie from "react-lottie";
import githubAnimationData from "../github.json"; // Path to the downloaded GitHub Lottie animation JSON

const GitHubLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, // Animation will play automatically
    animationData: githubAnimationData, // Lottie JSON for GitHub
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Ensures proper aspect ratio
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={50} width={50} />
    </div>
  );
};

export default GitHubLottie;
