import React from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

/** Local backgrounds — developer uses the GIF from Downloads. */
const profileBackgrounds: Record<ProfileType, string | null> = {
  recruiter: null, // CSS cinematic
  developer: '/gifs/developer.gif',
  stalker: null, // CSS cinematic
  adventure: '/gifs/adventure.gif',
};

const ProfilePage: React.FC = () => {
  const { profileName } = useParams<{ profileName: string }>();

  const normalizedName =
    profileName === 'adventurer' ? 'adventure' : profileName;

  const profile = (['recruiter', 'developer', 'stalker', 'adventure'] as const).includes(
    normalizedName as ProfileType
  )
    ? (normalizedName as ProfileType)
    : 'recruiter';

  const backgroundGif = profileBackgrounds[profile];

  return (
    <>
      <div className={`profile-page profile-${profile}`}>
        <div className="profile-bg" aria-hidden="true">
          {backgroundGif ? (
            <img
              src={`${backgroundGif}?v=4`}
              alt=""
              className="profile-bg-media"
            />
          ) : (
            <div className={`profile-bg-cinematic profile-bg-${profile}`} />
          )}
          <div className="profile-bg-vignette" />
        </div>
        <ProfileBanner />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
