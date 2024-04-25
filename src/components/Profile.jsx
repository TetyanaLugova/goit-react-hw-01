import clsx from 'clsx';
import css from './Profile.module.css';

export default function Profile({
  userData: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className={clsx(css.profileWrap)}>
      <div className={clsx(css.profileWrapImg)}>
        <img className={clsx(css.profileImg)} src={avatar} alt="User avatar" />
        <p className={clsx(css.profileName)}>{username}</p>
        <p className={clsx(css.profileText)}>@{tag}</p>
        <p className={clsx(css.profileText)}>{location}</p>
      </div>
      <ul className={clsx(css.profileList)}>
        <li className={clsx(css.profilItem)}>
          <span className={clsx(css.profileTitle)}>Followers</span>
          <span className={clsx(css.profileTitleValue)}>{followers}</span>
        </li>
        <li className={clsx(css.profilItem)}>
          <span className={clsx(css.profileTitle)}>Views</span>
          <span className={clsx(css.profileTitleValue)}>{views}</span>
        </li>

        <li className={clsx(css.profilItem)}>
          <span className={clsx(css.profileTitle)}>Likes</span>
          <span className={clsx(css.profileTitleValue)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
