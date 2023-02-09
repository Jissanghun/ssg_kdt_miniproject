import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import HomeStackNavigation from '../navigations/HomeStackNavigation';

const Container = styled.View`
  flex: 1;
  background-color: #f3f3f3;
  align-items: center;
  justify-content: center;
`;

const Home = (props) => {

  useEffect(() => {
    console.log(props)
  },[])
  return (
    <HomeStackNavigation />
  );
}

export default Home;