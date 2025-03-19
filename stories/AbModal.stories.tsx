import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbModal, AbModalProps } from '../src';

export default {
  title: 'componentes/AbModal',
  component: AbModal,
} as ComponentMeta<typeof AbModal>;

const Template: ComponentStory<typeof AbModal> = (args) => (
  <AbModal {...args} />
);

export const AbModalComponent = Template.bind({});
AbModalComponent.args = {
  titulo: 'Um título interessante',
  aberta: true,
  aoFechar: () => {},
  children: 'Conteúdo do modal',
} as AbModalProps;
