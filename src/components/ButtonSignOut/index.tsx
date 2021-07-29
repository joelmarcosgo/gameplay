import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, Image, View } from 'react-native';
import { styles } from './styles';
import { Background } from "../Background";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
    title: string;
    isActive?: boolean;
}

export function ButtonSignOut({ title, isActive = false, ...rest } : Props){
    return(
        <RectButton 
            style={[styles.container, isActive ? {backgroundColor: theme.colors.primary} : {borderColor: theme.colors.secondary50, borderWidth: 2}]} 
            { ...rest }
        >
            <Text style={styles.title}>
                { title }
            </Text>
        </RectButton>
    );
}