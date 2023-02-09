import React from 'react';
import styled from 'styled-components/native';

const EmartTabIcon = styled.Image`
  width: 25px;
  height: 25px;
`;

const TabIcon = ({name, size, color, focused}) => {
  return (
    <EmartTabIcon source = {name} />
  );
}

export default TabIcon;