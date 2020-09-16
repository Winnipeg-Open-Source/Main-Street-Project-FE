import WithSkeleton from 'hocs/WithSkeleton';
import UsersList from './UsersList';
import UsersListSkeleton from './UsersListSkeleton';

export default WithSkeleton(UsersListSkeleton, UsersList);
