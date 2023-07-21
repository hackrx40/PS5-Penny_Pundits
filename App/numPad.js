import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const NumberPad = ({ value, onValueChange }) => {
    const [amount, setAmount] = useState("");

    const handleChange = (key) => {
        const newAmount = amount + key;

        if (key === "." && amount.length === 0) {
            return;
        }

        if (key === "/" && amount.length === 0) {
            return;
        }

        if (newAmount.length <= 10) {
            setAmount(newAmount);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.numberPad}>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountLabel}>Amount:</Text>
                    <Text style={styles.amount}>{amount}</Text>
                </View>
                <Button
                    onPress={() => handleChange("1")}
                    title="1"
                    style={styles.numberButton}
                />
                <Button
                    onPress={() => handleChange("2")}
                    title="2"
                    style={styles.numberButton}
                />
                <Button
                    onPress={() => handleChange("3")}
                    title="3"
                    style={styles.numberButton}
                />
                <Button
                    onPress={() => handleChange("4")}
                    title="4"
                    style={styles.numberButton}
                />
                <Button
                    onPress={() => handleChange("5")}
                    title="5"
                    style={styles.numberButton}
                />
                <Button
                    onPress={() => handleChange("6")}
                    title="6"
                    style={styles.numberButton}
                />
                <Button
                    onPress={() => handleChange("7")}
                    title="7"
                    style={styles.numberButton}
                />
                <Button
                    onPress={() => handleChange("8")}
                    title="8"
                    style={styles.numberButton}
                />
                <Button
                    onPress={() => handleChange("9")}
                    title="9"
                    style={styles.numberButton}
                />
            </View>
            {/* <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>Amount:</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View> */}
            <View style={styles.actionButtons}>
                <Button
                    onPress={() => setAmount("")}
                    title="Clear"
                    style={styles.actionButton}
                />
                <Button
                    onPress={() => onValueChange(amount)}
                    title="Enter"
                    style={styles.actionButton}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    numberPad: {
        // flexDirection: "row",
        width: "100%",
    },
    numberButton: {
        // width: "50%",
        // height: "50%",
        borderRadius: 4,
        backgroundColor: "#fff",
        color: "#000",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    amountContainer: {
        alignItems: "center",
    },
    amountLabel: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
    },
    amount: {
        fontSize: 20,
        fontWeight: "bold",
    },
    actionButtons: {
        flexDirection: "row",
        // width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
    },
    actionButton: {
        // width: "50%",
        // height: "50%",
        borderRadius: 4,
        backgroundColor: "#000",
        color: "#fff",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default NumberPad;