import {
  createNavigationContainerRef,
  DrawerActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export const openDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.openDrawer());
  }
};

export const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};
export const goToInit = initialRoute => {
  if (initialRoute) {
    navigate(initialRoute);
  }
};
