import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useMemo } from 'react';
import styles from '@styles/notices/Notice.module.scss';
import Container from '@components/layouts/Container';
import Main from '@components/layouts/Main';
import Section from '@components/layouts/Section';
import Contents from '@components/layouts/Contents';
import Header from '@components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import _notices from 'data/notice.json';
import { useRouter } from 'next/router';

interface props {
  data: number;
}

const Notices: NextPage = () => {
  const router = useRouter();
  const { id, title, created_datetime, content } = router.query;
  console.log('title >>>', title);
  return (
    <Container>
      <Head>
        <title>청년소스 공지사항</title>
      </Head>

      <Header></Header>

      <Main>
        <Section className={styles.section}>
          <Contents className={styles.content}>
            <Link href="/notices" passHref className={styles.text_main}>
              공지사항
            </Link>
            <div className={styles.title}>{title}</div>
            <div className={styles.date}>{created_datetime}</div>
            <div className={styles.text_content}>
              {
                /*content?.split("\n").map((line) => {
                return (
                  <>
                    {line}
                    <br />
                  </>
                );
              })*/
                content
              }
            </div>
          </Contents>
        </Section>
      </Main>
      <Footer />
    </Container>
  );
};

export default Notices;
