import React from 'react';
import {Linking, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DrawerActions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import Groups from './src/components/Groups';
import Logo from './src/components/Logo';
import {DataProvider} from './src/Context/ContextData';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Settings from './src/components/Settings';
import Add from './src/components/Add';
import RemoveChild from './src/components/RemoveChild';
import AllChildrenList from './src/components/AllChildrenList';
import {strings} from './src/utils/Strings';
import DrawerContent from './src/components/DrawerContent';
// import hamburger from './src/utils/icon.png';
import Icon from 'react-native-vector-icons/Ionicons';
import ScreensModal from './src/components/ScreensModal';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  const navigation = useNavigation();
  return (
    <Drawer.Navigator
      initialRouteName="GroupsScreen"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        drawerType: 'front',
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image
              style={{width: 100, height: 100}}
              source={{
                uri: '../assets/images/icon.png',
              }}
            />
          </TouchableOpacity>
        ),
        drawerPosition: 'right',
        headerTitle: () => (
          <Logo
            onPress={() => navigation.dispatch(StackActions.popToTop())}
            style={styles.logoSize} //
          />
        ),
        headerStyle: {
          backgroundColor: '#F4F4F2',
          height: 130,
          shadowColor: '#000',
          shadowOffset: {width: 2, height: 5},
          shadowOpacity: 0.3,
          shadowRadius: 2,
        },
        activeTintColor: 'red',
        drawerBackgroundColor: 'red',
        itemsContainerStyle: {
          marginVertical: 0,
        },
        iconContainerStyle: {
          opacity: 1,
          width: 150,
          height: 150,
        },
      }}>
      <Drawer.Screen
        name={strings.childrenGroups}
        component={Groups}
        options={{
          drawerType: 'front',
          headerTintColor: 'black',
          headerLeft: false,
          drawerItemStyle: {},
        }}
      />
      <Drawer.Screen name={strings.settings} component={Settings} />
    </Drawer.Navigator>
  );
}

const App = ({navigation}) => {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator
          cardStyle={{backgroundColor: 'transparent'}}
          initialRouteName={'GroupsScreen'}>
          <Stack.Screen
            name="Groups"
            component={MyDrawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AllChildrenList"
            component={AllChildrenList}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="ScreensModal"
            component={ScreensModal}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="RemoveChild"
            component={RemoveChild}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: false,
              
            }}
          />

          {/* <Stack.Screen name="UpdateChild" component={UpdateChild} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  logoSize: {
    width: 230,
    height: 100,
    marginLeft: 5,
    marginBottom: 15,
  },
});
