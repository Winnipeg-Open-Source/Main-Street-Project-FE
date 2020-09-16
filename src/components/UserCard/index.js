import WithSkeleton from 'hocs/WithSkeleton';
import UserCard from './UserCard';
import UserCardSkeleton from './UserCardSkeleton';

export default WithSkeleton(UserCardSkeleton, UserCard);
