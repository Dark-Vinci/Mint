import { JSX } from 'react';

import style from './HomePage.module.scss';
import { Footer, Nav } from '@components';

export function HomePage(): JSX.Element {
  return (
    <div className={style.container}>
      <nav>
        <Nav />
      </nav>
      <div>
        <Footer />
      </div>
    </div>
  );
}
