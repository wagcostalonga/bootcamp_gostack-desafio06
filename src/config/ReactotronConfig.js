import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: '127.0.0.1',
  })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
