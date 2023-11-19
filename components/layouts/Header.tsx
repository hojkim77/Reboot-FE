import type { NextPage } from 'next';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import Section from '@components/layouts/Section';
import Contents from '@components/layouts/Contents';
import { useCallback, useEffect, useMemo, useState } from 'react';

export interface MenuItem {
  name: string;
  target: string;
}

interface Props {
  className?: string;
  white?: boolean;
  menu?: MenuItem[];
}

const MENU: MenuItem[] = [
  { name: '회사 소개', target: '/about' },
  { name: '공지사항', target: '/notices' },
  { name: '자주 묻는 질문', target: '/qna' },
  { name: '청년소스몰', target: '/shop' },
];

const Header: NextPage<Props> = ({ white, menu, className }) => {
  menu = menu || MENU;
  const [showBorder, setShowBorder] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const newClassName = classNames(
    styles.header,
    {
      [styles.white]: white,
      [styles.show_border]: showBorder,
    },
    className
  );

  const menuToggle = useCallback(() => {
    setMenuOpen((curr) => !curr);
  }, []);

  const menuItems = useMemo(
    () =>
      menu
        ? menu.map((x, i) => (
            <div key={i} className={styles.menu_item}>
              <Link href={x.target} passHref className={styles.menu_item_text}>
                {x.name}
              </Link>
            </div>
          ))
        : [],
    [menu]
  );

  useEffect(() => {
    const listener = () => {
      if (document.documentElement.scrollTop === 0) {
        setShowBorder(false);
      } else {
        setShowBorder(true);
      }
    };
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  return (
    <Section id="header" className={newClassName}>
      <Contents className={styles.content}>
        <Link href="/" passHref>
          <Image
            src="/images/logo.svg"
            alt="logo"
            className={styles.logo}
            width={0} // default
            height={0} // default
          />
        </Link>

        <div className={styles.menu_icon} onClick={menuToggle}>
          {menuOpen ? (
            <Image
              src="/images/x-close.svg"
              alt="menu"
              width={24}
              height={24}
            />
          ) : (
            <Image src="/images/menu.svg" alt="menu" width={24} height={24} />
          )}
        </div>
        <div className={classNames(styles.menu, { [styles.open]: menuOpen })}>
          {menuItems}
        </div>
      </Contents>
    </Section>
  );
};

export default Header;
