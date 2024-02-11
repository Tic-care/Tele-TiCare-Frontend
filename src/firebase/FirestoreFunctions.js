import { getDatabase, ref, get } from 'firebase/database';

export const getUserData = async (userId) => {
  const db = getDatabase();
  const userRef = ref(db, `users/${userId}`);
  const snapshot = await get(userRef);

  if (snapshot.exists()) {
    return snapshot.val();
  }

  return null;
};
