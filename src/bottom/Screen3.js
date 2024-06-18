

import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { IconPngImages } from "../asset/images/map";
import { FontFamilyName } from "../styles/Customfonts";

const Screen3 = ({ closeModal }) => {

    const handleConfirm = () => {
        // Implement your logout logic here
        console.log('Logged out');
        closeModal(); // Close modal after logout
        // Navigate to login screen or perform other actions after logout
    };

    return (
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.logoutText}>Log Out?</Text>
                <Image
                    source={IconPngImages.LOGOUTICON} // Replace with your logout icon image
                    style={styles.logoutImage}
                />
                <Text style={styles.confirmationText}>Are you sure you want to Log Out?</Text>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={closeModal}>
                        <Text style={styles.CanclebuttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={handleConfirm}>
                        <Text style={styles.ConfirmbuttonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
    },
    logoutText: {
        fontSize: 17,
        color: '#0B5290',
        fontWeight: '600',
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
        marginBottom: 20,
    },
    logoutImage: {
        width: 84, // Adjust size as needed
        height: 85, // Adjust size as needed
        marginBottom: 20,
    },
    confirmationText: {
        fontSize: 19,
        color: '#808080',
        fontWeight: '400',
        fontFamily: FontFamilyName.POPPINSREGULAR,
        textAlign: 'center',
        marginBottom: 30,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#DFF2FE',



    },
    confirmButton: {
        backgroundColor: '#0B5290',
    },
    CanclebuttonText: {
        color: '#0B5290',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
    },
    ConfirmbuttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        fontFamily: FontFamilyName.INTERSEMIBOLDS,
    },
});

export default Screen3;
