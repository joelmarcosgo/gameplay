import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { ButtonSignOut } from "../ButtonSignOut";
import { ModalSignOut } from "../ModalSignOut";

import { styles } from "./styles";

export function Profile() {
    const { user, signOut } = useAuth();

    const frases = [
    //     {
    //         id: 1,
    //         value: 'Hoje é dia de vitória'
    //     },
    //     {
    //         id: 2,
    //         value: 'Sem jogos, sem comentários'
    //     },
    //     {
    //         id: 3,
    //         value: 'Experimente Vencer, você vai gostar'
    //     },
    //     {
    //         id: 4,
    //         value: 'Quanto mais vitória, melhor'
    //     },
    //     {
    //         id: 5,
    //         value: 'Compartilhe momentos, compartilhe vitória'
    //     }
    ];

    const [openSignOutModal, setOpenSignOutModal] = useState(false);

    function handleSignOut() {
        setOpenSignOutModal(true);
        // Alert.alert('Logout', 'Deseja sair do App?',
        //     [
        //         {
        //             text: 'Não',
        //             style: 'cancel'
        //         },
        //         {
        //             text: 'Sim',
        //             onPress: () => signOut()
        //         }
        //     ]
        // );
    }

    function handleCloseSignOut() {
        setOpenSignOutModal(false);
    }

    return (
        <View style={styles.container}>
            <RectButton onPress={handleSignOut}>
                <Avatar urlImage={'https://github.com/joelmarcosgo.png'} />
            </RectButton>

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>

                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>

            <ModalSignOut visible={openSignOutModal} closeModal={handleCloseSignOut} />
        </View>
    );
}