import { JSX } from 'react';

import style from './Hey.module.scss';

export function Hey(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.hey_container}>
        <div className={style.content}>
          <div className={style.description}>
            <span>Invite friends.</span>All their trading fees will be yours!
          </div>
          <div className={style.button}>
            <button>Learn more</button>
          </div>
        </div>

        <div className={style.right}>
          <img
            src="https://mint.club/static/media/referral@3x.a781509f.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
