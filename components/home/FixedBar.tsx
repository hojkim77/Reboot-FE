import type { NextPage } from 'next';
import classNames from 'classnames';
import styles from './FixedBar.module.scss';
import SmartStoreBtn from '@/components/buttons/smartStoreButton';
import Section from '@components/layouts/Section';
import Contents from '@components/layouts/Contents';
import Link from 'next/link';

interface Props {
  className?: string;
  trigger?: boolean;
}

const FixedBar: NextPage<Props> = ({ className, trigger, ...otherProps }) => {
  console.log(trigger);
  const newClassName = classNames(
    styles.fixed_bar,
    { [styles.active]: trigger },
    className
  );

  return (
    <Section className={newClassName} {...otherProps}>
      <Contents className={styles.content}>
        <div className={styles.btn_compare}>
          <Link href="/shop">
            <SmartStoreBtn
              width={311}
              isArrow={true}
              text="청년소스몰 바로가기"
            />
          </Link>
        </div>
      </Contents>
    </Section>
  );
};

export default FixedBar;
