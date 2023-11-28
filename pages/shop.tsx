import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@styles/Shop.module.scss';
import Container from '@components/layouts/Container';
import Main from '@components/layouts/Main';
import Section from '@components/layouts/Section';
import Contents from '@components/layouts/Contents';
import Header from '@components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import ProductCard from '@/components/product/ProductCard';

export interface Dict {
  [key: string]: any;
}

const Shop: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>청년소스몰</title>
      </Head>

      <Header white></Header>

      <Main>
        <Section className={styles.section_1}>
          <Contents className={styles.content_1}>
            <object data="/images/banner.svg" className={styles.banner} />
          </Contents>
          <Contents className={styles.content_2}>
            <div className={styles.title}>이번주 사랑받은 BEST 상품</div>
            <div className={styles.card_wrap}>
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
            </div>
          </Contents>
          <Contents className={styles.content_3}>
            <div className={styles.title}>청년소스가 직접 만든 소스</div>
            <div className={styles.card_wrap}>
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
              <ProductCard title="맛있는 떡볶이 소스" price="13,200~" />
            </div>
          </Contents>
        </Section>
      </Main>
      <Footer />
    </Container>
  );
};

export default Shop;
