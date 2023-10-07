import * as React from "react";
import { Drawer } from "react-native-paper";

const CustomDrawer = ({ navigation }) => {
  const [active, setActive] = React.useState("");

  return (
    <Drawer.Section title="App">
      <Drawer.Item
        icon="home"
        label="Home"
        active={active === "home"}
        onPress={() => {
          setActive("home");
          navigation.navigate("Home");
        }}
      />
      <Drawer.Item
        icon="account"
        label="Detail"
        active={active === "details"}
        onPress={() => {
          navigation.navigate("Detail");
          setActive("detail");
        }}
      />
    </Drawer.Section>
  );
};

export default CustomDrawer;
