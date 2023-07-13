import React, { useState } from "react";

const useMultiStepForm = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((index) => {
      if (index >= steps.length - 1) return index;
      return index + 1;
    });
  };

  const back = () => {
    setCurrentStepIndex((index) => {
      if (index <= 0) return index;
      return index - 1;
    });
  };

  const goTo = (index) => {
    setCurrentStepIndex(index);
  };
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    back,
    next,
    goTo,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    totalPage: steps.length,
    activePage: currentStepIndex + 1,
  };
};

export default useMultiStepForm;
