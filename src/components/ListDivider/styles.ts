import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '78%',
        height: 1,
        backgroundColor: theme.colors.secondary40,
        alignSelf: 'flex-end'
    }
});