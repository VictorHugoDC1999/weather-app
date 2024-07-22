'use-client';

import { useCallback, useState } from 'react';

export const useProcessing = () => {
  const [processing, setProcessing] = useState<boolean>(false);

  const startProcessing = useCallback(() => {
    setProcessing(true);
    // console.log('aqui');
  }, []);

  const finishProcessing = useCallback(() => {
    setProcessing(false);
    // console.log('aquijaera');
  }, []);

  return {
    processing,
    startProcessing,
    finishProcessing
  };
};
