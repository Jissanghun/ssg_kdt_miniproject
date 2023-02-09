import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import RecommendProducts from './main/RecommendProducts';

const Container = styled.ScrollView`
  background-color: #f3f3f3;
  padding: 14px;
  margin: auto;
`;

const Title = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
`;

const TitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const TitleButton = styled.Button`
  width: 50px;
  padding: 5px;
  border: 1px solid #333;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const Main = ({navigation, route}) => {
  
  useEffect(() => {
    console.log(navigation, route)
  })

  return (
    <Container>
      <Title>
        <TitleText>추천 상품</TitleText>
        <TitleButton title="더보기" onPress={() => navigation.navigate('Products')} />
      </Title>
      <RecommendProducts navigation = {navigation} route = {route}/>
    </Container>
  )
}

export default Main;