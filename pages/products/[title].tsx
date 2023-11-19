import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@styles/products/Product.module.scss';
import Container from '@components/layouts/Container';
import Main from '@components/layouts/Main';
import Section from '@components/layouts/Section';
import Contents from '@components/layouts/Contents';
import Header from '@components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import ProductCard from '@/components/product/ProductCard';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SmartStoreBtn from '@/components/buttons/smartStoreButton';

export interface Dict {
  [key: string]: any;
}

const Products: NextPage = () => {
  const router = useRouter();
  const { title, price } = router.query;
  return (
    <Container>
      <Head>
        <title>청년소스몰</title>
      </Head>

      <Header white></Header>

      <Main>
        <Section className={styles.section_1}>
          <Contents className={styles.content_1}>
            <Image
              src="/images/card_1.svg"
              alt="image"
              className={styles.image}
              height={0}
              width={0}
            />
            <div className={styles.info_wrap}>
              <div className={styles.title_wrap}>
                <div className={styles.title}>{title}</div>
                <div className={styles.price}>{price}</div>
              </div>
              <div className={styles.tag_wrap}>
                <span
                  style={{ backgroundColor: '#FF7777', color: 'white' }}
                  className={styles.rounded_box}
                >
                  BEST
                </span>
                <span
                  style={{
                    backgroundColor: '#A5A5A5',
                    color: 'white',
                    marginLeft: 10,
                  }}
                  className={styles.rounded_box}
                >
                  무료배송
                </span>
              </div>
              <div className={styles.discription}>
                신선한 파, 마늘, 양파 등의 채소와 건강한 양념을 사용하여 만든
                <br />
                맛있는 떡볶이 소스입니다. 우리 가족이 먹는다는 생각으로 깨끗한
                <br />
                시설에서 믿을 수 있는 방법으로 만들었습니다.
              </div>
              <SmartStoreBtn
                className={styles.button}
                isArrow={false}
                text="구매하기"
              />
            </div>
          </Contents>
        </Section>

        <div className={styles.division_line}>상세정보</div>

        <Section>
          <Contents className={styles.content_2}>
            <div className={styles.detail}>
              <object data="/images/detail_1.svg" />
            </div>
          </Contents>
        </Section>
      </Main>
      <Footer />
    </Container>
  );
};

export default Products;
