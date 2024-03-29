import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenHome from "./screens/home";
import ScreenArticle from "./screens/article";
import ScreenCompetitionList from "./screens/competition";
import ScreenArticleList from "./screens/articleList";
import ScreenMenu from "./screens/menu";
import ScreenWelcome from "./screens/welcome";
import ScreenCredit from "./screens/credit";
import * as SplashScreen from "expo-splash-screen";
import ScreenLoading from "./screens/loading";
import ScreenFood from "./screens/food";
import ScreenWeather from "./screens/weather";
import { RootSiblingParent } from 'react-native-root-siblings';

const Stack = createNativeStackNavigator();

function App() {
	SplashScreen.hideAsync();

    return (
        <RootSiblingParent>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Loading">
                    <Stack.Screen name="Home" component={ScreenHome} />
                    <Stack.Screen name="Article" component={ScreenArticle} />
                    <Stack.Screen name="ArticleList" component={ScreenArticleList} />
                    <Stack.Screen name="Menu" component={ScreenMenu} />
                    <Stack.Screen name="Competition" component={ScreenCompetitionList} />
                    <Stack.Screen name="Welcome" component={ScreenWelcome} />
                    <Stack.Screen name="Credit" component={ScreenCredit} />
                    <Stack.Screen name="Loading" component={ScreenLoading} />
                    <Stack.Screen name="Food" component={ScreenFood} />
                    <Stack.Screen name="Weather" component={ScreenWeather} />
                </Stack.Navigator>
            </NavigationContainer>
        </RootSiblingParent>
    );
}

export default App;