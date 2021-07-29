import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: getStatusBarHeight() + 638
    },
    overlay: {
        flex: 1,
        backgroundColor: theme.colors.overlay
    },
    title: {
        flex: 1,
        marginTop: 31,
        color: theme.colors.heading,
        fontFamily: theme.fonts.title500,
        fontSize: 24,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    subtitle: {
        fontFamily: theme.fonts.title700
    },
    play: {
        color: theme.colors.primary 
    },
    alignButtons: {
        // width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginBottom: 40
    }
    // bar: {
    //     width: 39,
    //     height: 2,
    //     borderRadius: 2,
    //     backgroundColor: theme.colors.secondary30,
    //     alignSelf: 'center',
    //     marginTop: 13
    // },
});