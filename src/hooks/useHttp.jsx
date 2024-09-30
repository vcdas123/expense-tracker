import { useCallback } from 'react';
const API_URL = 'https://expense-tracker-67b69-default-rtdb.firebaseio.com/';
const PREDEFINED_APIS = {
  getAllExpenses: 'expenses.json',
  addExpense: 'expenses.json',
  deleteExpense: 'expenses.json',
  editExpense: 'expenses.json',
};

const useHttp = () => {
  const sendReq = useCallback(
    async (
      { api, params, method, rawData, imageUpload = false },
      setIsLoading,
      isLoading
    ) => {
      if (isLoading) return;

      let url = API_URL + PREDEFINED_APIS?.[api || ''];
      if (params) url = url + '/' + params;

      const data = !imageUpload ? JSON.stringify(rawData || {}) : rawData;

      const reqConfig = {
        method: method || 'GET',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      if (method === 'POST' || method === 'PUT') reqConfig.body = data;

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

  return { sendReq };
};

export default useHttp;
