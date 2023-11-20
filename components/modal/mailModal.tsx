import type { NextPage } from 'next';
import classNames from 'classnames';
import styles from './mailModal.module.scss';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import { Dispatch, SetStateAction, useRef } from 'react';

interface props {
  productName: any;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const MailModal: NextPage<props> = ({
  productName,
  openModal,
  setOpenModal,
}) => {
  // send mail
  const onSubmitForm = (event: any) => {
    event.preventDefault();

    console.log(event);
    try {
      emailjs.sendForm(
        'service_2grrndr',
        'template_ci8aqdt',
        event.target,
        'LGFNXBpjo1tTzEFHb'
      );
    } catch (error) {
      alert('error!');
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.background} onClick={() => setOpenModal(false)}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.title}>[주문서] {productName}</div>
          <form className={styles.form_wrap} onSubmit={onSubmitForm}>
            <label className={styles.form_label}>구매자명 *</label>
            <input
              className={styles.form_input}
              type="text"
              name="name"
              required
            />

            <div style={{ width: '100%', display: 'flex' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <label className={styles.form_label}>이메일 *</label>
                <input
                  className={styles.form_input}
                  style={{ marginRight: '16px' }}
                  type="email"
                  name="email"
                  required
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <label className={styles.form_label}>연락처 *</label>
                <input
                  className={styles.form_input}
                  type="text"
                  name="phoneNumber"
                  required
                />
              </div>
            </div>

            <label className={styles.form_label}>구매수량 *</label>
            <input
              className={styles.form_input}
              type="text"
              name="productNumber"
              required
            />

            <label className={styles.form_label}>
              기타(배송/판매자) 요구사항
            </label>
            <input
              className={styles.form_input}
              style={{ marginBottom: '24px' }}
              type="text"
              name="descripton"
            />

            <div className={styles.check_box}>
              <input type="checkbox" required />
              주문서 작성을 위한 개인정보 수집 동의
            </div>

            <input
              className={styles.submit_btn}
              type="submit"
              value="주문 요청"
              required
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default MailModal;
