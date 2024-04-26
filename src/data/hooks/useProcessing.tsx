'use-client';

import { useState } from 'react';

export const useProcessing = () => {
  const [processing, setProcessing] = useState<boolean>(false);

  const startProcessing = () => {
    setProcessing(true);
    console.log('aqui');
  };

  const finishProcessing = () => {
    setProcessing(false);
    console.log('aquijaera');
  };

  return {
    processing,
    startProcessing,
    finishProcessing
  };
};
