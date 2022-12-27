import React from 'react';
import {
  Linking,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DrawerActions,
  NavigationContainer,
  NavigationContainerRefContext,
  useNavigation,
} from '@react-navigation/native';
import Groups from './src/components/Groups';
import Logo from './src/components/Logo';
import {DataProvider, useContextData} from './src/Context/ContextData';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Settings from './src/components/Settings';
import Add from './src/components/Add';
import RemoveChild from './src/components/RemoveChild';
import AllChildrenList from './src/components/AllChildrenList';
import {strings, screenNames} from './src/utils/Strings';
import DrawerContent from './src/components/DrawerContent';
import Icon from 'react-native-vector-icons/Ionicons';
import ScreensModal from './src/components/ScreensModal';
import navigationRef, {navigate} from './src/components/RootNavigation';
import AddGroup from './src/components/AddGroup';
import EditChild from './src/components/EditChild';
import EditGroup from './src/components/EditGroup';
import RemoveGroup from './src/components/RemoveGroup';
import ChildrenListForEdit from './src/components/ChildrenListForEdit';
import {styles} from './src/styles/style';
import {createNavigationContainerRef} from '@react-navigation/native';
import Header from './src/components/Header';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          initialRouteName={'groups'}
          drawerContent={props => <DrawerContent {...props} />}
          screenOptions={{
            drawerType: 'front',
            headerRight: () => <Header />,
            drawerPosition: 'right',
            headerLeft: () => (
              <View style={styles.centeredView}>
                <Logo style={styles.logoSize} />
              </View>
            ),
            headerStyle: {
              backgroundColor: '#F4F4F2',
              height: 130,
              shadowColor: '#000',
              shadowOffset: {width: 2, height: 5},
              shadowOpacity: 0.3,
              shadowRadius: 2,
            },
          }}>
          <Drawer.Screen
            name={screenNames.groups}
            component={Groups}
            options={{
              headerTitle: false,
            }}
          />
          <Drawer.Screen
            name={screenNames.settings}
            component={Settings}
            options={{
              headerTitle: false,
            }}
          />
          <Drawer.Screen
            name={screenNames.allChildrenList}
            component={AllChildrenList}
            options={{
              headerTitle: false,
            }}
          />
          <Drawer.Screen
            name={screenNames.addChild}
            component={Add}
            options={{
              headerTitle: false,
            }}
          />
          <Drawer.Screen
            name={screenNames.editChild}
            component={EditChild}
            options={{
              headerTitle: false,
            }}
          />
          <Drawer.Screen
            name={screenNames.removeChild}
            component={RemoveChild}
            options={{
              headerTitle: false,
            }}
          />
          <Drawer.Screen
            name={screenNames.addGroup}
            component={AddGroup}
            options={{
              headerTitle: false,
            }}
          />
          <Drawer.Screen
            name={screenNames.editGroup}
            component={EditGroup}
            options={{
              headerTitle: false,
            }}
          />
          <Drawer.Screen
            name={screenNames.removeGroup}
            component={RemoveGroup}
            options={{
              headerTitle: false,
            }}
          />
          <Drawer.Screen
            name={screenNames.childrenListForEdit}
            component={ChildrenListForEdit}
            options={{
              headerTitle: false,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;

