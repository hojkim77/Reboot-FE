import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";
import Section from "@components/layouts/Section";
import Contents from "@components/layouts/Contents";

const Footer: NextPage = () => {
  return (
    <Section className={styles.footer}>
      <Contents className={styles.content}>
        <div className={styles.menu}>
          <Link href="/" passHref>
            이용약관
          </Link>
          <Link href="/" passHref>
            전자금융거래약관
          </Link>
          <Link href="/" passHref>
            개인정보처리방침
          </Link>
        </div>
        <div className={styles.info_container}>
          <div className={styles.info}>
            <div className={styles.business}>
              <div className={styles.company}>
                <span className={styles.highlight}>(주)청년소스</span>
                경기도 안산시 상록구 한양대학로 55 SW창업실2
              </div>

              <div className={styles.highlight}>
                <span>대표</span>
                <span>사업자등록번호</span>
                <span>통신판매업신고</span>
              </div>
              <div>
                <span>최승현</span>
                <span>2021-경기안산-0036-대부중개</span>
                <span> 안산시 상생경제과(031-481-2842)</span>
              </div>
            </div>

            <div className={styles.copyright}>
              Copyright Loniz Inc. All Rights Reserved
            </div>
          </div>
        </div>
      </Contents>
    </Section>
  );
};

export default Footer;
