import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import Axios from '../../axios.js';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Home({ type }) {
  const [videos, setVideos] = useState();

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await Axios.get(`/videos/${type}`);
      setVideos(res.data);
      console.log(res, 'adasdas');
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos?.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
}
