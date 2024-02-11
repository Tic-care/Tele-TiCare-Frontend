import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const checkLoginStatus = (callback) => {
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user); // Pass the user object to the callback function
    } else {
      callback(null); // No user is logged in
    }
  });

  // Return the unsubscribe function to stop listening when needed
  return unsubscribe;
};
