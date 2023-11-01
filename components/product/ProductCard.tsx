import type { NextPage } from 'next';
import classNames from 'classnames';
import styles from './productCard.module.scss';
import Link from 'next/link';

interface Props {
  image?: string;
  title: string;
  price: string;
  mb?: number;
}

const ProductCard: NextPage<Props> = ({
  image,
  title,
  price,
  mb,
  ...otherProps
}) => {
  return (
    <>
      <div className={styles.card_wrap} style={{ marginBottom: mb }}>
        <object data="/images/card_1.svg" />

        <div className={styles.title}>{title}</div>
        <div className={styles.price}>{price}</div>
      </div>
    </>
  );
};

export default ProductCard;
