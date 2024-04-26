import clsx from 'clsx';
import css from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendsName}>{name}</p>
      <p className={clsx(isOnline ? css.online : css.offline)}>
        {isOnline ? 'online' : 'offline'}
      </p>
    </>
  );
}
