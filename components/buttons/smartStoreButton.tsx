import type { NextPage } from 'next';
import classNames from 'classnames';
import styles from './smartStoreButton.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  className?: string;
  text: string;
  width?: number;
  isArrow?: boolean;
  onClick?: () => void;
}

const SmartStoreBtn: NextPage<Props> = ({
  className,
  text,
  width,
  isArrow,
  onClick,
  ...otherProps
}) => {
  const newClassName = classNames(styles.button_wrap, className);

  return (
    <div
      onClick={onClick}
      style={{ width: width }}
      className={newClassName}
      {...otherProps}
    >
      <div className={styles.button_text}>{text}</div>
      {isArrow && (
        <Image
          src="/images/arrow_right_large.svg"
          alt="img"
          className={styles.arrow}
          width={0}
          height={0}
        />
      )}
    </div>
  );
};

export default SmartStoreBtn;
