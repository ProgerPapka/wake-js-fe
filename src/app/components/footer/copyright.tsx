import React from 'react';
import styles from './footer.scss';
import { Icon } from '../icon';

export const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <span>{`\u00A9 Wakeclub ${new Date().getFullYear()}`}</span>
      <Icon.Profile />
      <Icon.Notification />
      <Icon.Instagram />
      <Icon.Telegram />
      <Icon.Vk />
    </div>
  );
};
