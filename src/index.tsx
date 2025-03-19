import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Thing: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <div>{children || `the snozzberries taste like snozzberries`}</div>;
};

export * from './components/AbBotao';
export * from './components/Card';
export * from './components/Tag';
export * from './components/AbGrupoOpcoes';
export * from './components/AbCampoTexto';
export * from './components/AbInputQuantidade';
export * from './components/AbModal';
