import { JSX } from 'react';

import style from './HomePage.module.scss';
import { Nav } from '@components';

export function HomePage(): JSX.Element {
    return (
        <div className={ style.container }>
            <nav>
                <Nav />
            </nav>
        </div>
    );
}
