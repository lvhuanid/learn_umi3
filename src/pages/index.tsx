import { useRequest } from 'umi';
import { useEffect } from 'react';
import axios from 'axios';
import services from '@/services';

export default function IndexPage() {
  function getUsername() {
    const myPromise = new Promise((resolve, reject) => {
      resolve(axios.get('http://jsonplaceholder.typicode.com/users'));
    });
    return myPromise;
  }
  const { data, error, loading } = useRequest(getUsername);

  useEffect(() => {}, []);
  if (error) {
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      {data?.map((item: any) => (
        <div key={item.id}>
          {item.id} <br />
          {item.name} <br />
          {item.username} <br />
        </div>
      ))}
    </>
  );
}
