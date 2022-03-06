import { StyleSheet } from 'react-native';

export const dimensions = {
  SPACING: {
    X1: 8,
    X2: 16,
    X3: 24,
    X4: 32,
    X5: 40,
    X6: 48,
  },
};

export const colors = {
  BRAND: {
    LEMON: '#86ff2e',
    BLACK: 'black',
    WHITE: 'white',
    GRAY: 'lightgray',
    BLUE: 'blue',
    LIGHTBLUE: 'lightblue',
    RED: 'red',
  },
  PROVIDERS: {
    GOOGLE: '#4285F4',
  },
};

export const styles = {
  TEXT: StyleSheet.create({
    COMMON: {
      color: colors.BRAND.BLACK,
    },
    OVER: {
      color: colors.BRAND.WHITE,
    },
    INTRO: {
      textAlign: 'center',
      color: colors.BRAND.BLACK,
      fontSize: 60,
    },
  }),
  BUTTON: StyleSheet.create({
    PRIMARY: {
      backgroundColor: colors.BRAND.BLUE,
      borderRadius: 50,
      padding: dimensions.SPACING.X2,
    },
    DANGER: {
      backgroundColor: colors.BRAND.RED,
      borderRadius: 50,
      padding: dimensions.SPACING.X2,
    },
  }),
};
