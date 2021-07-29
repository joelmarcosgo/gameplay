import React, { ReactNode } from "react";
import { Modal, ModalProps, View, TouchableWithoutFeedback, Text } from "react-native";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";
import { Background } from "../Background";
import { ButtonSignOut } from "../ButtonSignOut";

import { styles } from './styles';

type Props = ModalProps & {
    closeModal: () => void;

}

export function ModalSignOut({ closeModal, ...rest }: Props) {
    const { user, signOut } = useAuth();

    function handleLogout() {
        signOut();
    }

    return (
        <Modal
            transparent
            animationType="slide"
            statusBarTranslucent
            { ...rest }
        >
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <Background>

                        <Text style={styles.title}>
                            Deseja sair do <Text style={styles.subtitle}>Game<Text style={styles.play}>Play</Text>?</Text>
                        </Text>
                        
                        <View style={styles.alignButtons}>
                            <ButtonSignOut
                                title="Não"
                                onPress={closeModal}
                            />
                            <ButtonSignOut
                                title="Sim"
                                isActive
                                onPress={handleLogout}
                            />
                        </View>

                    </Background>
                </View>
            </View>
        </Modal>
    );
}