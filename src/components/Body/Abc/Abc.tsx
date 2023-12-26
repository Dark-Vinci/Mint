import { JSX } from 'react';
import { IoMdGlobe } from 'react-icons/io';
import { FaThumbsUp } from 'react-icons/fa6';
import { GrBlog } from 'react-icons/gr';
import { PiChatsCircleDuotone } from 'react-icons/pi';
import { GoKebabHorizontal } from 'react-icons/go';

import style from './Abc.module.scss';

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
          <div className={style.website}>
            <IoMdGlobe size={'30px'} />
          </div>
          <div className={style.socials}>
            <FaThumbsUp />
          </div>
          <div className={style.blogs}>
            <GrBlog />
          </div>
          <div className={style.chats}>
            <PiChatsCircleDuotone />
          </div>
        </div>

        <div className={style.menu}>
          <GoKebabHorizontal />
        </div>
      </div>
    </div>
  );
}
