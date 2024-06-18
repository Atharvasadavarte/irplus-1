import React, { useState } from 'react';
import { View, Button, Modal, StyleSheet } from 'react-native';


const ModalScreenLogOut = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            {/* Bottom sheet and other components */}
            <Button title="Logout" onPress={openModal} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <Screen3 closeModal={closeModal} />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ModalScreenLogOut;
