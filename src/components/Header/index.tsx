import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Wrapper,
  Balance,
  BalanceTitle,
  BalanceValue,
  Actions,
} from './styles';
import { TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <Wrapper>
      <TouchableOpacity>
        <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10c86e' />
      </TouchableOpacity>

      <Balance>
        <BalanceTitle>Meu saldo:</BalanceTitle>
        <BalanceValue>00,00</BalanceValue>
      </Balance>

      <Actions>
        <AntDesign name='gift' size={30} color='#10c86e' />
        <AntDesign name='gift' size={30} color='#10c86e' />
      </Actions>
    </Wrapper>
  );
}
