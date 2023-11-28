import type { NextPage } from 'next';
import classNames from 'classnames';
import styles from './productCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  image?: string;
  title: string;
  price: string;
}

const ProductCard: NextPage<Props> = ({
  image,
  title,
  price,
  ...otherProps
}) => {
  return (
    <>
      <div className={styles.card_wrap}>
        <Link
          href={{
            pathname: '/products/[title]',
            query: {
              title: title,
              price: price,
            },
          }}
        >
          <Image
            src="/images/card_1.svg"
            alt="card"
            className={styles.image}
            width={0}
            height={0}
          />
        </Link>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link href="/detail" className={styles.title}>
            {title}
          </Link>
          <Link href="/detail" className={styles.price}>
            {price}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
