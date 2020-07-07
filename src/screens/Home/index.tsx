import React from 'react';
import { Wrapper } from './styles';
import Header from '../../components/Header';
import { ScrollView } from 'react-native';
import Sugestions from '../../components/Sugestions';

export default function Home() {
  return (
    <Wrapper>
      <ScrollView>
        <Header />

        <Sugestions />
      </ScrollView>
    </Wrapper>
  );
}
