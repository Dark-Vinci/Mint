import { JSX } from 'react';

import style from './Body.module.scss';
import { Hey } from './Hey';
import { Abc } from './Abc';

export function Body(): JSX.Element {
  return (
    <div className={style.container}>
      <Hey />
      <Abc />
    </div>
  );
}
