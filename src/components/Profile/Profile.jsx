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
    <div className={css.profileWrap}>
      <div className={css.profileWrapImg}>
        <img className={css.profileImg} src={avatar} alt="User avatar" />
        <p className={css.profileName}>{username}</p>
        <p className={css.profileText}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.profilItem}>
          <span className={css.profileTitle}>Followers</span>
          <span className={css.profileTitleValue}>{followers}</span>
        </li>
        <li className={css.profilItem}>
          <span className={css.profileTitle}>Views</span>
          <span className={css.profileTitleValue}>{views}</span>
        </li>

        <li className={css.profilItem}>
          <span className={css.profileTitle}>Likes</span>
          <span className={css.profileTitleValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
