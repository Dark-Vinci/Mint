import { JSX } from 'react';

import style from './Nav.module.scss';

export function Nav(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.nav_container}>
        <div className={style.logo}>
          <img
            src="https://mint.club/static/media/logo-full-white.b4bb4883.svg"
            alt="logo"
          />
        </div>

        <div className={style.mid}>
          <div className={style.mid_container}>
            <a href=".">Explorer</a>
            <a href=".">Live Feed</a>
            <a href=".">Referal</a>
            <a href=".">MINT</a>
            <a href=".">Liquidity</a>
          </div>
        </div>

        <div className={style.right}>
          <div className={style.button_container}>
            <button>Create</button>
            <button>Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
}
