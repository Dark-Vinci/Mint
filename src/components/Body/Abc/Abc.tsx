import { JSX } from 'react';
import { GoKebabHorizontal } from 'react-icons/go';

import style from './Abc.module.scss';
import { links } from '@constants';

export function Abc(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.abc_container}>
        <div className={style.title}>
          <p>
            mint.club<span>/ABC</span>
          </p>
        </div>

        <div className={style.description}>
          <p>
            <span>1-click shareable link.</span>
            <span>Adaptable for any place.</span>
          </p>
        </div>

        <div className={style.icons}>
          {links.map(({ icon, title }, i) => {
            return (
              <div key={i}>
                <div className={style.icon}>{icon}</div>
                <div>
                  <p>{title}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={style.menu}>
          <GoKebabHorizontal size={'50px'} color="white" />
        </div>
      </div>
    </div>
  );
}
