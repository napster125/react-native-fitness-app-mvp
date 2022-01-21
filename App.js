import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/store';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Routine from './src/screens/RoutineList';
import Exercise from './src/screens/Exercise';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import RoutinePlaylist from './src/screens/RoutinePlaylist';
import CompleteExercise from './src/screens/CompleteExercise';

import screenNames from './src/constants/navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from './src/constants/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider style={{flex: 1, height: 2}}>
            <NavigationContainer>
              <Tab.Navigator>
                <Tab.Screen
                  name={screenNames.HOMESTACK}
                  component={HomeStack}
                  options={{
                    tabBarLabel: '',
                    tabBarOptions: {
                      activeTintColor: colors.app_Tint,
                    },
                    tabBarIcon: (tabInfo) => {
                      return (
                        <Icon
                          name="home"
                          size={36}
                          color={
                            tabInfo.focused
                              ? colors.app_Tint
                              : colors.app_color_secondary
                          }
                          style={{top: 10}}
                        />
                      );
                    },
                  }}
                />
                <Tab.Screen
                  name={screenNames.SETTINGS}
                  component={Settings}
                  options={{
                    tabBarLabel: '',
                    tabBarOptions: {
                      activeTintColor: colors.app_Tint,
                    },
                    tabBarIcon: (tabInfo) => {
                      return (
                        <Icon
                          name="settings-sharp"
                          size={36}
                          color={
                            tabInfo.focused
                              ? colors.app_Tint
                              : colors.app_color_secondary
                          }
                          style={{top: 10}}
                        />
                      );
                    },
                  }}
                />
              </Tab.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.HOME} component={Home} />
      <Stack.Screen name={screenNames.ROUTINE} component={Routine} />
      <Stack.Screen name={screenNames.EXERCISE} component={Exercise} />
      <Stack.Screen
        name={screenNames.EXERCISE_COMPLETED}
        component={CompleteExercise}
      />
      <Stack.Screen
        name={screenNames.ROUTINEPLAYLIST}
        component={RoutinePlaylist}
      />
    </Stack.Navigator>
  );
}

export default App;
