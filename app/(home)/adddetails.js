import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const adddetails = () => {
  const [name, setName] = useState("");
  const [studentId, setstudentId] = useState("");
  const [dob, setDob] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const handleRegister = () => {
    const studentData = {
      studentName: name,
      studentId: studentId,
      designation: designation,
      phoneNumber: mobileNo,
      dateOfBirth: dob,
      joiningDate: joiningDate,
      // activestudent: true,
      // salary: salary,
      address: address,
    };

    axios
      .post("http://localhost:5000/addstudent", studentData)
      .then((response) => {
        Alert.alert(
          "Registration Successful",
          "You have been registered successfully"
        );
        setName("");
        setstudentId("");
        setDob("");
        setMobileNo("");
        // setSalary("");
        setAddress("");
        setJoiningDate("");
        setDesignation("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Fail",
          "An error occurred during registration"
        );
        console.log("register failed", error);
      });
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", marginTop: '70%' }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          Add a New Student
        </Text>

        {/* <TextInput
          style={{
            padding: 10,
            borderColor: "#aaa",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
          placeholder="India"
          placeholderTextColor={"#999"}
        /> */}

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            First Name
          </Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            style={{
              padding: 10,
              borderColor: "#aaa",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="enter your name"
            placeholderTextColor={"#999"}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Admission Number</Text>
          <TextInput
            value={studentId}
            onChangeText={(text) => setstudentId(text)}
            style={{
              padding: 10,
              borderColor: "#aaa",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="student Id"
            placeholderTextColor={"#999"}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Course</Text>
          <TextInput
            value={designation}
            onChangeText={(text) => setDesignation(text)}
            style={{
              padding: 10,
              borderColor: "#aaa",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Course"
            placeholderTextColor={"#999"}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Mobile Number
          </Text>
          <TextInput
            value={mobileNo}
            onChangeText={(text) => setMobileNo(text)}
            style={{
              padding: 10,
              borderColor: "#aaa",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Mobile No"
            placeholderTextColor={"#999"}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            Date of Birth
          </Text>
          <TextInput
            value={dob}
            onChangeText={(text) => setDob(text)}
            style={{
              padding: 10,
              borderColor: "#aaa",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Date of Birth"
            placeholderTextColor={"#999"}
          />
        </View>

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Joining Date</Text>
          <TextInput
            value={joiningDate}
            onChangeText={(text) => setJoiningDate(text)}
            style={{
              padding: 10,
              borderColor: "#aaa",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Joining Date"
            placeholderTextColor={"#999"}
          />
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text>Active student</Text>
          <Text>True</Text>
        </View> */}
        {/* <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Salary</Text>
          <TextInput
            value={salary}
            onChangeText={(text) => setSalary(text)}
            style={{
              padding: 10,
              borderColor: "#aaa",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Salary"
            placeholderTextColor={"#999"}
          />
        </View> */}

        <View>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
          <TextInput
            value={address}
            onChangeText={(text) => setAddress(text)}
            style={{
              padding: 10,
              borderColor: "#aaa",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
            placeholder="Enter Address"
            placeholderTextColor={"#999"}
          />
        </View>

        <Pressable
          onPress={handleRegister}
          style={{
            backgroundColor: "#295",
            padding: 10,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white" }}>
            Add student
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default adddetails;

const styles = StyleSheet.create({});
