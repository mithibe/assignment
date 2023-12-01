import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import SearchResults from "../../components/SearchResults";

const students = () => {

  const [students, setstudents] = useState([]);
  const [input, setInput] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchstudentData = async () => {
      try {
        const response = await axios.get("http://192.168.2.103:8000/students");
        setstudents(response.data);
      } catch (error) {
        console.log("error fetching student data", error);
      }
    };
    fetchstudentData();
  }, []);
  console.log(students);
  return (
    <View style={{ flex: 1, backgroundColor: "#eee" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          marginTop : '70%',
        }}
      >
        <Ionicons
          onPress={() => router.back()}
          style={{ marginLeft: 10 }}
          name="arrow-back"
          size={24}
          color="black"
        />
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 40,
            flex: 1,
          }}
        >
          <AntDesign
            style={{ marginLeft: 10 }}
            name="search1"
            size={20}
            color="black"
          />
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{ flex: 1 }}
            placeholder="Search"
          />

          {students.length > 0 && (
            <View>
              <Pressable onPress={() => router.push("/(home)/adddetails")}>
                <AntDesign name="pluscircle" size={30} color="#295" />
              </Pressable>
            </View>
          )}
        </Pressable>
      </View>

      {students.length > 0 ? (
        <SearchResults data={students} input={input} setInput={setInput} />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Data</Text>
          <Text>Press on the plus button and add your student</Text>
          <Pressable onPress={() => router.push("/(home)/adddetails")}>
            <AntDesign
              style={{ marginTop: 30 }}
              name="pluscircle"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default students;

const styles = StyleSheet.create({});
