import { JSX } from 'react';
import { IoMdGlobe } from 'react-icons/io';
import { FaThumbsUp } from 'react-icons/fa6';
import { GrBlog } from 'react-icons/gr';
import { PiChatsCircleDuotone } from 'react-icons/pi';
import { GoKebabHorizontal } from 'react-icons/go';

import style from './Abc.module.scss';

const links = [
  {
    title: 'website',
    icon: <IoMdGlobe size={'50px'} color="#838383" />,
  },

  {
    title: 'social',
    icon: <FaThumbsUp size={'50px'} color="#838383" />,
  },

  {
    title: 'blog',
    icon: <GrBlog size={'50px'} color="#838383" />,
  },

  {
    title: 'chat',
    icon: <PiChatsCircleDuotone size={'50px'} color="#838383" />,
  },
];

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
