import { useRef } from "react";
import type { NextPage, InferGetStaticPropsType } from "next";
import Head from "next/head";
import fs from "fs";
import path from "path";
import styles from "@styles/About.module.scss";
import Container from "@components/layouts/Container";
import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Contents from "@components/layouts/Contents";
import Header from "@components/layouts/Header";
//import Footer from "@components/layouts/Footer";
//import Counter from "@components/Counter";
//import ArticleList from "@components/about/ArticleList";
import { useOnScreen } from "@hooks/responsive";
//import { Dict } from "@utils/data";
import dayjs from "dayjs";

export interface Dict {
  [key: string]: any;
}

const About: NextPage = () => {
  const statisticsRef = useRef(null);
  const statisticsOnScreen = useOnScreen(statisticsRef);

  return (
    <Container>
      <Head>
        <title>청년소스 회사소개</title>
      </Head>

      <Header white></Header>

      <Main>
        <Section
          className={styles.section_1}
          style={{ backgroundImage: "url(/images/bgimg.svg)" }}
        >
          <Contents className={styles.content}>
            <div className={styles.text_main}>
              맛집 레시피를 쉽게 따라할 수 있도록,
              <br />
              청년소스와 함께 맛있는 요리를 만들어보세요
            </div>
            <div className={styles.text_sub}>
              청년소스는 청년들이 직접 개발하고 만든 소스로서, 맛과 열정이 담겨
              있습니다.
              <br />
              개인의 입맛을 만족시키는 맛있는 소스를 제공하며,
              <br />
              항상 최선을 다해 제품을 개발하고 개선해 나가고 있습니다.
            </div>
          </Contents>
        </Section>

        <Section className={styles.section_2}>
          <Contents className={styles.content}>
            <div className={styles.text_main}>
              청년소스는 전국 모든 자영업자 사장님들과 함께합니다.
            </div>
            <div className={styles.statistics} ref={statisticsRef}>
              <div className={styles.item}>
                <div className={styles.item_name}>제휴 납품업체</div>
                <div className={styles.item_value}>개</div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_name}>누적 판매건수</div>
                <div className={styles.item_value}>회</div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_name}>누적 판매액수</div>
                <div className={styles.item_value}>억 원</div>
              </div>
              <div className={styles.item}>
                <div className={styles.item_name}>누적 방문자</div>
                <div className={styles.item_value}>명</div>
              </div>
            </div>
            <div className={styles.text_tiny}>
              {dayjs(new Date()).format("YYYY년 M월")} 기준
            </div>
          </Contents>
        </Section>

        <Section className={styles.section_3}>
          <Contents className={styles.content}>
            <div></div>
          </Contents>
        </Section>
      </Main>
    </Container>
  );
};

export default About;
