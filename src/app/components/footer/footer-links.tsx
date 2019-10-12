import React from 'react';
import styles from './footer.scss';
import { Logo } from '../logo/logo';
import { Link } from '../link';

export const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.footerLinksLogo}>
        <Logo secondaryLogo={true} />
      </div>
      <div className={`${styles.footerLinksMap} ${styles.containerLinks}`}>
        <nav className={styles.containerLinksMap}>
          <div className={styles.groupLinks}>
            <Link pathTo={'/'} value={'Главная'} />
            <Link pathTo={'/price'} value={'Услуги'} />
            <Link pathTo={'/vacancies'} value={'Вакансии'} />
            <Link pathTo={'/contacts'} value={'Контакты'} />
          </div>
        </nav>
        <nav className={styles.containerLinksTechnical}>
          <div className={styles.groupLinks}>
            <Link pathTo={'/support'} value={'Обратиться в поддерку'} />
            <Link pathTo={'/wishes'} value={'Оставить пожелание'} />
          </div>
        </nav>
        <div className={styles.containerLinksUpstair}>
          <a className={styles.upstair}>Наверх</a>
        </div>
      </div>
    </div>
  );
};
