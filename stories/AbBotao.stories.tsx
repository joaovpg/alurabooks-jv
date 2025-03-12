import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AbBotao, AbBotaoProps } from '../src';

export default {
  title: 'Componentes/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbBotao> = (props) => (
  <AbBotao {...props} />
);

export const Primario = Template.bind({});

Primario.args = {
  texto: 'Botão Primário',
  tipo: 'primario',
} as AbBotaoProps;

export const Secundario = Template.bind({});

Secundario.args = {
  texto: 'Botão Secundário',
  tipo: 'secundario',
} as AbBotaoProps;
