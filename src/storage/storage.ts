import { createMMKV } from 'react-native-mmkv';

export const reduxMMKV = createMMKV({
  id: 'redux-persist-storage',
});

// 🔥 Async wrapper to make MMKV compatible with redux-persist in New Architecture
export const reduxStorage = {
  setItem: (key: string, value: string): Promise<void> => {
    return new Promise(resolve => {
      reduxMMKV.set(key, value);
      resolve();
    });
  },

  getItem: (key: string): Promise<string | null> => {
    return new Promise(resolve => {
      const value = reduxMMKV.getString(key);
      resolve(value ?? null);
    });
  },

  removeItem: (key: string): Promise<void> => {
    return new Promise(resolve => {
      reduxMMKV.remove(key);
      resolve();
    });
  },
};

/* ===============================
   App Local Storage (Manual use)
================================== */
export const appMMKV = createMMKV({
  id: 'app-local-storage',
});

export const storageKeys = {
  fcm_token: 'fcm_token',
  userToken: 'user_token',
  userData: 'user_data',
};

export const localStorage = {
  setItem: (key: string, value: string): Promise<void> => {
    return new Promise(resolve => {
      appMMKV.set(key, value);
      resolve();
    });
  },

  getItem: (key: string): Promise<string | null> => {
    return new Promise(resolve => {
      const value = appMMKV.getString(key);
      resolve(value ?? null);
    });
  },

  removeItem: (key: string): Promise<void> => {
    return new Promise(resolve => {
      appMMKV.remove(key);
      resolve();
    });
  },

  // Add clearAll method
  clearAll: (): Promise<void> => {
    return new Promise(resolve => {
      // Get all keys first
      const keys = appMMKV.getAllKeys();
      // Remove each key
      keys.forEach(key => {
        appMMKV.remove(key);
      });
      resolve();
    });
  },
};

// import { createMMKV } from 'react-native-mmkv';
// import { STORAGE_KEYS } from './keys';

// /* ===============================
//    MMKV Instance
// ================================== */
// const mmkv = createMMKV();

// type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

// /* ===============================
//    Generic Storage (Single API)
// ================================== */
// export const storage = {
//   /**
//    * Set value (string or object)
//    */
//   set: <T>(key: StorageKey, value: T) => {
//     if (typeof value === 'string') {
//       mmkv.set(key, value);
//     } else {
//       mmkv.set(key, JSON.stringify(value));
//     }
//   },

//   /**
//    * Get value (auto parse if JSON)
//    */
//   get: <T>(key: StorageKey): T | null => {
//     const value = mmkv.getString(key);

//     if (!value) return null;

//     try {
//       return JSON.parse(value);
//     } catch {
//       return value as T; // plain string fallback
//     }
//   },

//   /**
//    * Remove value
//    */
//   remove: (key: StorageKey) => {
//     mmkv.remove(key);
//   },

//   /**
//    * Clear all storage
//    */
//   clearAll: () => {
//     mmkv.clearAll();
//   },
// };

// /* ===============================
//    Redux Persist Adapter (Optional)
// ================================== */
// export const reduxStorage = {
//   setItem: async (key: string, value: string) => {
//     mmkv.set(key, value);
//   },

//   getItem: async (key: string) => {
//     return mmkv.getString(key) ?? null;
//   },

//   removeItem: async (key: string) => {
//     mmkv.remove(key);
//   },
// };

// // // storage.ts
// // import { createMMKV } from 'react-native-mmkv';

// // export const mmkv = createMMKV({
// //   id: 'app-storage',
// // });

// // export const storage = {
// //   save: <T>(key: string, value: T) => {
// //     mmkv.set(key, JSON.stringify(value));
// //   },

// //   get: <T>(key: string): T | null => {
// //     const value = mmkv.getString(key);
// //     return value ? (JSON.parse(value) as T) : null;
// //   },

// //   remove: (key: string) => {
// //     mmkv.remove(key);
// //   },

// //   clearAll: () => {
// //     mmkv.clearAll();
// //   },
// // };
