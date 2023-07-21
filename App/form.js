import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const InputForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [dependents, setDependents] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [emailId, setEmailId] = useState("");

  const handleFirstNameChange = (text) => {
    setFirstName(text);
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
  };

  const handleAgeChange = (text) => {
    setAge(text);
  };

  const handleCityChange = (text) => {
    setCity(text);
  };

  const handleDependentsChange = (text) => {
    setDependents(text);
  };

  const handleMobileNoChange = (text) => {
    setMobileNo(text);
  };

  const handleEmailIdChange = (text) => {
    setEmailId(text);
  };

  const handleSubmit = () => {
    console.log("First name:", firstName);
    console.log("Last name:", lastName);
    console.log("Age:", age);
    console.log("City:", city);
    console.log("Dependents:", dependents);
    console.log("Mobile number:", mobileNo);
    console.log("Email ID:", emailId);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={handleFirstNameChange}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={handleLastNameChange}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={handleAgeChange}
        keyboardType="number-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="City"
        value={city}
        onChangeText={handleCityChange}
        style={styles.input}
      />
      <TextInput
        placeholder="Dependents"
        value={dependents}
        onChangeText={handleDependentsChange}
        keyboardType="number-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Mobile Number"
        value={mobileNo}
        onChangeText={handleMobileNoChange}
        keyboardType="number-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Email ID"
        value={emailId}
        onChangeText={handleEmailIdChange}
        style={styles.input}
      />
      <Button title="Submit" onPress={handleSubmit} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 4,
    fontWeight: "bold",
  },
});

export default InputForm;
