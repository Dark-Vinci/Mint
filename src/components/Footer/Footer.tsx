import { JSX } from 'react';

import style from './Footer.module.scss';

export function Footer(): JSX.Element {
  return (
    <div className={style.container}>
      <div className={style.footer_container}>
        <div className={style.left}>
          <div className={style.left_container}>
            <div className={style.logo}>
              <img
                src="https://mint.club/static/media/mint-footer.ed4b60cb.svg"
                alt="logo"
              />
            </div>

            <div className={style.content}>
              <p>
                Mint.club is a web user interface using a smart contract
                protocol. Even though the smart contract is thoroughly unit
                tested, you may still encounter an unexpected issue. Please do
                your own research before you interact with the protocol and use
                it at your own risk. We are not liable for any financial loss.
              </p>
            </div>
          </div>
        </div>

        <div className={style.right}>
          <div className={style.right_container}>
            <div className={style.socials}>
              <ul>
                <li>
                  <a href=".">Twitter</a>
                </li>

                <li>
                  <a href=".">GitHub</a>
                </li>

                <li>
                  <a href=".">Telegram</a>
                </li>

                <li>
                  <a href=".">Email</a>
                </li>

                <li>
                  <a href=".">CoinMarketCap</a>
                </li>

                <li>
                  <a href=".">CoinGecko</a>
                </li>

                <li>
                  <a href=".">News</a>
                </li>
              </ul>
            </div>

            <div className="info">
              <ul>
                <li>
                  <a href=".">Docs</a>
                </li>

                <li>
                  <a href=".">User Guide</a>
                </li>

                <li>
                  <a href=".">Widget</a>
                </li>

                <li>
                  <a href=".">
                    SDK <span>new</span>
                  </a>
                </li>

                <li>
                  <a href=".">Terms</a>
                </li>

                <li>
                  <a href=".">Disclaimer</a>
                </li>

                <li>
                  <a href=".">Security Audit</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
