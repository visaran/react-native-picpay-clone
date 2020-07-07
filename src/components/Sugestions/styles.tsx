import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  contentContainerStyle: {
    alignItems: 'center',
    paddingLeft: 16,
  },
}))`
  height: 130px;
  background-color: #1e222b;
`;

export const Item = styled.TouchableOpacity`
  align-items: center;
  margin-right: 16px;
`;

export const Img = styled.View`
  width: 60px;
  height: 60px;
  background: blue;
  border-radius: 30px;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 12px;
`;
