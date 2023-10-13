import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Duty } from '../types/Duty';

const useGetDutyService = () => {
  const [result, setResult] = useState<Service<Duty[]>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('http://localhost:3001/duties')
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  console.log(result)
  return result;
};

export default useGetDutyService;