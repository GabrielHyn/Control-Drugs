import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BemVindo from '../screens/BemVindo';
import Splash from '../screens/Splash';
import CadastrarRemedio from "../screens/CadastrarRemedio";
import RemedioCadastrado from "../screens/RemedioCadastrado";
import Login from "../screens/login";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BemVindo"
            component={BemVindo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CadastrarRemedio"
            component={CadastrarRemedio}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RemedioCadastrado"
            component={RemedioCadastrado}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Routes;
