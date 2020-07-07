import styled from 'styled-components/native';

export const Wrapper = styled.View`
  height: 50px;
  background: #000;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Balance = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  align-items: center;
  margin: auto;
`;

export const BalanceTitle = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const BalanceValue = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
`;
