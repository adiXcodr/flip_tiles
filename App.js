import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from "react-redux";
import GameScreen from './components/GameScreen';
import store from './redux/store';
import Header from './components/Header';


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#212858',
    accent: "#be4a6f",
  },
};


const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar style="light" backgroundColor='#212858' />
        <Header />
          <GameScreen />
      </PaperProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
});

export default App;
