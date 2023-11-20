import type { NextPage } from 'next';
import classNames from 'classnames';
import styles from './smartStoreButton.module.scss';
import Link from 'next/link';

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
    <>
      <div
        onClick={onClick}
        style={{ width: width }}
        className={newClassName}
        {...otherProps}
      >
        <button>{text}</button>
        {isArrow && (
          <object
            data="/images/arrow_right_large.svg"
            className={styles.arrow}
          />
        )}
      </div>
    </>
  );
};

export default SmartStoreBtn;
