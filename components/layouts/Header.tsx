import type { NextPage } from "next";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import Section from "@components/layouts/Section";
import Contents from "@components/layouts/Contents";
import { useCallback, useEffect, useMemo, useState } from "react";

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
  { name: "회사 소개", target: "/" },
  { name: "공지사항", target: "/" },
  { name: "문의하기", target: "/" },
  { name: "자주 묻는 질문", target: "/" },
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
              <Link
                href={x.target}
                passHref
                className={styles.menu_item_text}
                style={{ color: "black" }}
              >
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
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <Section id="header" className={newClassName}>
      <Contents className={styles.content}>
        <Link href="/" passHref className={styles.logo}>
          <object data="/images/logo.svg" />
        </Link>

        <div className={styles.menu_icon} onClick={menuToggle}>
          {menuOpen ? (
            <Image src="/images/close.svg" alt="menu" width={20} height={20} />
          ) : (
            <Image src="/images/menu.svg" alt="menu" width={20} height={20} />
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
