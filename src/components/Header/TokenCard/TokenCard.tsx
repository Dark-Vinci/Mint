import { JSX } from 'react';

import style from './TokenCard.module.scss';

interface TokenCardProps {
  readonly url: string;
  readonly name: string;
  readonly tokenName: string;
  readonly marketCap: string;
  readonly price: string;
}

export function TokenCard({
  url,
  name,
  tokenName,
  marketCap,
  price,
}: TokenCardProps): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={url} alt={'url'} />
      </div>

      <div className={style.mid}>
        <p className={style.name}>{name}</p>
        <p className={style.token_name}>{tokenName}</p>
      </div>

      <div className={style.right}>
        <p className={style.market_cap}>{marketCap}</p>
        <p className={style.price}>{price}</p>
      </div>
    </div>
  );
}
