import { StatusBar, Text } from "react-native";
import BottomNavigation from "../components/bottomNavigation";
import { IDefaultScreenProps } from "../types/screen";

export default function ScreenMenu({ navigation }: IDefaultScreenProps) {
    return (
        <>
        <Text>Menu</Text>
        <BottomNavigation pageName="Menu" navigation={navigation} />
		<StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
        </>
    )
}