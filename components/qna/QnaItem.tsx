import type { NextPage } from "next";
import classNames from "classnames";
import styles from "./QnaList.module.scss";
import Image from "next/image";
import { useCallback, useState } from "react";

interface NoticeItem {
  id: number;
  title: string;
}

interface ItemProps {
  data: NoticeItem;
}

const QnaItem: NextPage<ItemProps> = ({ data }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const newClassName = classNames(styles.item, {
    [styles.active]: menuOpen,
  });
  const menuToggle = useCallback(() => {
    setMenuOpen((curr: boolean) => !curr);
  }, []);
  return (
    <>
      <div className={newClassName} onClick={menuToggle}>
        {data.title}
        <Image
          className={styles.image}
          src="/images/down_arrow.svg"
          alt="menu"
          width={0} //default
          height={0} //default
        />
      </div>
      {menuOpen && <div className={styles.open_text}>메뉴 오픈</div>}
    </>
  );
};

export default QnaItem;
