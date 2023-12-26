import { JSX } from 'react';

import style from './Header.module.scss';
import { TokenCard } from './TokenCard';
import { tokenCard } from '@constants';

export function Header(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.header_container}>
        <div className={style.left}>
          <p>Tokenize anything effortlessly.</p>

          <div className={style.description}>
            <p>
              A smart token building platform WITHOUT the need for coding or
              providing liquidity on the Binance Smart Chain.
            </p>
          </div>

          <div className={style.buttons}>
            <div className={style.bot}>
              <button>Buy Mints</button>
              <button>Create Token</button>
            </div>
            <div>
              <a href=".">
                How to buy mints <span className={style.icon}>aab</span>
              </a>
            </div>
          </div>
        </div>

        <div className={style.right}>
          <div className={style.right_container}>
            <div className={style.title}>
              <p>Trending tokens</p>
            </div>

            <div className={style.cards}>
              <p>
                <span>Market Cap</span> <span>Prices</span>
              </p>

              <div className={style.the_card}>
                {tokenCard.map(
                  ({ url, name, tokenName, marketCap, price }, i) => {
                    return (
                      <div className={style.c} key={i}>
                        <TokenCard
                          url={url}
                          name={name}
                          tokenName={tokenName}
                          marketCap={marketCap}
                          price={price}
                        />
                      </div>
                    );
                  },
                )}
              </div>

              <div className={style.explore}>
                <a href=".">Explore Tokens...</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
