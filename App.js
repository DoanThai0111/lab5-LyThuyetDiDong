import 'react-native-gesture-handler';

import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./Screen/CustomDrawer";
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from "./Screen/Home";
import Detail from "./Screen/Detail";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Detail" component={Detail} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
