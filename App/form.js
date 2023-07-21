import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const InputForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  const [dependents, setDependents] = useState(0);
  const [mobileNo, setMobileNo] = useState("");
  const [emailId, setEmailId] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "age":
        setAge(parseInt(value));
        break;
      case "city":
        setCity(value);
        break;
      case "dependents":
        setDependents(parseInt(value));
        break;
      case "mobileNo":
        setMobileNo(value);
        break;
      case "emailId":
        setEmailId(value);
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChange={handleChange}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChange={handleChange}
        style={styles.input}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChange={handleChange}
        keyboardType="number-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="City"
        value={city}
        onChange={handleChange}
        style={styles.input}
      />
      <TextInput
        placeholder="Dependents"
        value={dependents}
        onChange={handleChange}
        keyboardType="number-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Mobile Number"
        value={mobileNo}
        onChange={handleChange}
        keyboardType="number-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Email ID"
        value={emailId}
        onChange={handleChange}
        style={styles.input}
      />
      <Button
        title="Submit"
        onPress={() => {
          console.log("First name:", firstName);
          console.log("Last name:", lastName);
          console.log("Age:", age);
          console.log("City:", city);
          console.log("Dependents:", dependents);
          console.log("Mobile number:", mobileNo);
          console.log("Email ID:", emailId);
        }}
        style={styles.button}
      />
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