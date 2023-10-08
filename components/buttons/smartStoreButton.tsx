import type { NextPage } from "next";
import classNames from "classnames";
import styles from "./smartStoreButton.module.scss";
import Link from "next/link";

interface Props {
  className?: string;
  text: string;
}

const SmartStoreBtn: NextPage<Props> = ({ className, text, ...otherProps }) => {
  const newClassName = classNames(styles.button_wrap, className);

  return (
    <>
      <div className={newClassName} {...otherProps}>
        <button>{text}</button>
        <object data="/images/arrow_right_large.svg" />
      </div>
    </>
  );
};

export default SmartStoreBtn;
