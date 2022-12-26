import React from 'react';
import {Linking, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  DrawerActions,
  NavigationContainer,
  NavigationContainerRefContext,
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
import {strings, screenNames} from './src/utils/Strings';
import DrawerContent from './src/components/DrawerContent';
// import hamburger from './src/utils/icon.png';
import Icon from 'react-native-vector-icons/Ionicons';
import ScreensModal from './src/components/ScreensModal';
import navigationRef from './src/components/RootNavigation';
import AddGroup from './src/components/AddGroup';
import EditChild from './src/components/EditChild';
import EditGroup from './src/components/EditGroup';
import RemoveGroup from './src/components/RemoveGroup';
import ChildrenListForEdit from './src/components/ChildrenListForEdit';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer ref={navigationRef}>
        <Drawer.Navigator
          initialRouteName="Groups"
          drawerContent={props => <DrawerContent {...props} />}
          screenOptions={{
            drawerType: 'front',
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigationRef.dispatch(DrawerActions.openDrawer())
                }>
                <Image
                  style={{width: 100, height: 100}}
                  source={{
                    uri: '../assets/images/icon.png',
                  }}
                />
              </TouchableOpacity>
            ),
            drawerPosition: 'left',
            headerTitle: () => (
              <Logo
                onPress={() => navigationRef.dispatch(StackActions.popToTop())}
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
            // activeTintColor: 'red',
            // drawerBackgroundColor: 'red',
            // itemsContainerStyle: {
            //   marginVertical: 0,
            // },
            // iconContainerStyle: {
            //   opacity: 1,
            //   width: 150,
            //   height: 150,
            // },
          }}>
          <Drawer.Screen name={screenNames.groups} component={Groups} />
          <Drawer.Screen name={screenNames.settings} component={Settings} />
          <Drawer.Screen
            name={screenNames.allChildrenList}
            component={AllChildrenList}
          />
          <Drawer.Screen name={screenNames.addChild} component={Add} />
          <Drawer.Screen name={screenNames.editChild} component={EditChild} />
          <Drawer.Screen
            name={screenNames.removeChild}
            component={RemoveChild}
          />
          <Drawer.Screen name={screenNames.addGroup} component={AddGroup} />
          <Drawer.Screen name={screenNames.editGroup} component={EditGroup} />
          <Drawer.Screen
            name={screenNames.removeGroup}
            component={RemoveGroup}
          />
          <Drawer.Screen
            name={screenNames.childrenListForEdit}
            component={ChildrenListForEdit}
          />
        </Drawer.Navigator>
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
  headerStyle: {
    backgroundColor: '#F4F4F2',
    height: 130,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
