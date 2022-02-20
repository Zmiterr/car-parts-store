import { useTypedSelector } from './useTypedSelector';
import { UserProfileDataInterface } from '../store/user/types';

export const useCurrentUser = (): UserProfileDataInterface | null => {
  const currentUser = useTypedSelector((state) => state.user.user?.[0]);
  return currentUser || null;
};
