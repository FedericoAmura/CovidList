# Covid Cases

This repository is a React Native App that displays the confirmed cases each country had historically.
The goal can be found on the [REQUIREMENTS.md](REQUIREMENTS.md) file.

As said, it is an [React Native](https://reactnative.dev/) app. It can compile to both Android and iOS, other systems have not been considered.
- written in [Typescript](https://www.typescriptlang.org/)
- tested with [Jest](https://jestjs.io/) and React utilities from [Testing library](https://testing-library.com/)
- uses [Redux](https://redux.js.org/) for state management
- and consults [Covid19API](https://covid19api.com/) about countries covid data

## Structure

Apart from the common React Native files, the structure is as follows:
- `coverage` directory to contain a report of coverage statistics
- `src` directory contains the application code
    - `actions` contains the actions that can be dispatched to the store
    - `assets` includes the media files the app uses such as icons
    - `components` directory is where the multiple components are located
    - `constants` includes some constants such as styles of test ids
    - `hooks` contains the custom hooks
    - `navigators` files define how [React Navigation](https://reactnavigation.org/docs/5.x/getting-started/) will move between screens
    - `reducers` has the reducers used to mutate the store
    - `screens` are the different screens that the app can navigate
    - `services` include the external providers connectors such as covid19 API
    - `App.tsx` is the actual entry point of the App itself
    - `configureStore.ts` the file that sets the Redux store
- `tests` contains the application tests. The structure here mimics the `src` directory and each file tests over their corresponding one
- `.env` file sets some environment variables used in the application
- `wdyr.ts` setups the why did you render library, used to see why are components rendering
- `covidList.postman_collection.json` this file can be imported in Postman to test the covid api endpoints without needing to run the app

## Installation & running

Check the [React Native environment setup guide](https://reactnative.dev/docs/environment-setup), that should be enough for this application too.

After that setup, you can run the application as a normal React Native application running

```bash
npm run start # this will start metro server

# to run android
npm run android:clean # Optional but encouraged, this will clean gradle files
npm run android # build and install

# to run ios
npm run ios
```

## Testing

To run test you can run `npm run test`.
This will also update the coverage report and validate the minimum coverage thresholds.

## Debugging

To debug the application, you can install [Flipper](https://fbflipper.com/docs/features/react-native/) which will provide insight into the network traffic, component tree, redux state, etc.

## Storybook

In order to develop components in isolation, you can run the app in [Storybook](https://storybook.js.org/) mode. 
Components and Screens can have their stories in their own directories.

To run in this mode:
- Add `LOAD_STORYBOOK=true` in `.env`
- Run `npm npm storybook` which will start Storybook server in your browser. This will also previously update with the new stories that it finds.
- Run the app in the device/emulator you want to test

### CI/CD

[Github actions](https://github.com/features/actions) continuously runs the complete set of tests on every commit.

If you want to run github actions locally, you can install [act](https://github.com/nektos/act) and then run `npm run github-actions`
