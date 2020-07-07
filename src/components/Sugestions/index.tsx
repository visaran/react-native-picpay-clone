import React, { useEffect } from 'react';
import { Container, Item, Img, Label } from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../api';

const items = [
  {
    id: String(Math.random()),
    color: 'blue',
    label: 'Doações',
  },
  {
    id: String(Math.random()),
    color: 'red',
    label: 'TV',
  },
  {
    id: String(Math.random()),
    color: 'yellow',
    label: 'Celular',
  },
  {
    id: String(Math.random()),
    color: 'pink',
    label: 'Cartãõ',
  },
  {
    id: String(Math.random()),
    color: 'orange',
    label: 'Conferir',
  },
];

export default function Sugestions() {
  return (
    <Container>
      {items.map((item) => (
        <Item key={item.id}>
          <Img style={{ backgroundColor: `${item.color}` }} />
          <Label>{item.label}</Label>
        </Item>
      ))}
    </Container>
  );
}
