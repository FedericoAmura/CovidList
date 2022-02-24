const mockEncryptedStorage: Record<string, string | undefined> = {};

jest.mock('react-native-encrypted-storage', () => ({
  __esModule: true,
  default: {
    getItem: async (key: string) => mockEncryptedStorage[key],
    setItem: async (key: string, value: string) => mockEncryptedStorage[key] = value,
    removeItem: async (key: string) => mockEncryptedStorage[key] = undefined,
  },
}));

export {};
