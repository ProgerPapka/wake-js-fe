import React from 'react';
import styles from './footer.scss';
import { Icon } from '../icon';

//todo: ссылки на группы инстаграм итд вынести как параметры которые модно будет задать
export const Copyright = () => (
  <div className={styles.footerLegal}>
    <span className={styles.copyright}>{`\u00A9 Wakeclub ${new Date().getFullYear()}`}</span>
    <div className={styles.socialLinks}>
      <a href={'https://www.instagram.com/wake_63'} target={'_blank'}>
        <Icon.Instagram />
      </a>
      <a href={'https://www.instagram.com/wake_63'} target={'_blank'}>
        <Icon.Telegram />
      </a>
      <a href={'https://vk.com/wake63'} target={'_blank'}>
        <Icon.Vk />
      </a>
    </div>
  </div>
);
