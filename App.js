import React from 'react';
import {Linking, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import Groups from './src/components/Groups';
import Logo from './src/components/Logo';
import {DataProvider} from './src/Context/ContextData';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Settings from './src/components/Settings';
import Add from './src/components/Add';
import RemoveChild from './src/components/RemoveChild';
import AllChildrenList from './src/components/AllChildrenList';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="GroupsScreen">
      <Drawer.Screen name="GroupsScreen" component={Groups} />
      <Drawer.Screen name="SettingsScreen" component={Settings} />
      {/* <Drawer.Screen name="AllChildrenDetails" component={AllChildrenDetails} /> */}
      <Drawer.Screen name="AllChildrenList" component={AllChildrenList} />
    </Drawer.Navigator>
  );
}

const App = ({navigation}) => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator
          cardStyle={{backgroundColor: 'transparent'}}
          initialRouteName={'GroupsScreen'}
          screenOptions={{
            drawerPosition: 'top',
            headerTitle: () => (
              <Logo
                onPress={() => navigation.dispatch(StackActions.popToTop())} //??
              />
            ),
            headerStyle: {
              backgroundColor: '#F4F4F2',
              height: 40,
              shadowColor: '#000',
              shadowOffset: {width: 2, height: 5},
              shadowOpacity: 0.2,
              shadowRadius: 2,
              padding: 5,
            },
          }}>
          <Stack.Screen
            name="Groups"
            component={MyDrawer}
            // options={{drawerLabel: 'Tamar'}}
          />
          <Stack.Screen name="AllChildrenList" component={AllChildrenList} />
          <Stack.Screen name="Add" component={Add} />
          <Stack.Screen name="RemoveChild" component={RemoveChild} />
          {/* <Stack.Screen name="UpdateChild" component={UpdateChild} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
