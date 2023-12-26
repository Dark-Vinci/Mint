import { JSX } from 'react';

import style from './Body.module.scss';
import { Hey } from './Hey';

export function Body(): JSX.Element {
  return (
    <div className={style.container}>
      <Hey />
    </div>
  );
}
