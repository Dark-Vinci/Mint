import { JSX } from 'react';

import style from './HomePage.module.scss';
import { Body, Footer, Header, Nav } from '@components';

export function HomePage(): JSX.Element {
  return (
    <div className={style.container}>
      <body>
        <nav>
          <Nav />
        </nav>

        <header>
          <Header />
        </header>

        <section>
          <Body />
        </section>

        <footer>
          <Footer />
        </footer>
      </body>
    </div>
  );
}
