import React, { useEffect, useState } from 'react';
import { useUser } from '@/context/UserContext';
import { Button } from '@/components/ui';

interface FollowButtonProps {
  userIdToFollow: string;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userIdToFollow }) => {
  const { currentUser, follow, unfollow } = useUser();
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (currentUser?.following.includes(userIdToFollow)) {
      setIsFollowing(true);
    }
  }, [currentUser, userIdToFollow]);

  const handleFollow = () => {
    if (isFollowing) {
      unfollow(userIdToFollow);
    } else {
      follow(userIdToFollow);
    }
    setIsFollowing(!isFollowing);
  };

  return (
    <Button type="button" onClick={handleFollow} className="shad-button_primary px-8">
      {isFollowing ? 'Unfollow' : 'Follow'}
    </Button>
  );
};

export default FollowButton;
