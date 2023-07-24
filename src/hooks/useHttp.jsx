import { useCallback } from 'react';

// DOMAIN
const API_URL = 'https://moreoncustomhooks-default-rtdb.firebaseio.com/';

// ALL PRE DEFINED APIs
const PREDEFINED_APIS = {
  getAllExpenses: 'expenses.json',
  addExpense: 'expenses.json',
};

// CUSTOM HTTP HOOK
const useHttp = () => {
  const sendReq = useCallback(
    async (
      { api, params, method, rawData, imageUpload = false },
      setIsLoading,
      isLoading
    ) => {
      //  Restricting Request
      if (isLoading) return;

      // Request URL
      let url = API_URL + PREDEFINED_APIS?.[api || ''];
      if (params) url = url + '/' + params;

      // Preparing Raw Data
      const data = !imageUpload ? JSON.stringify(rawData || {}) : rawData;

      // Finalising CONFIG OBJECT
      const reqConfig = {
        method: method || 'GET',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (method === 'POST' || method === 'PUT') reqConfig.body = data;

      // Sending REQUEST
      if (setIsLoading) setIsLoading(true);
      try {
        const res = await fetch(url, reqConfig);
        const decodedData = await res.json();
        if (setIsLoading) setIsLoading(false);
        return decodedData;
      } catch (error) {
        if (setIsLoading) setIsLoading(false);
        return error;
      }
    },
    []
  );

  // HTTP FUNCTION
  return { sendReq };
};

export default useHttp;
