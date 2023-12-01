import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import React from "react";

const SearchResults = ({ data, input, setInput }) => {
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item?.studentName.toLowerCase().includes(input.toLowerCase())) {
            return (
             <Pressable>
               <View
                style={{ marginVertical: 10, gap: 10, flexDirection: "row" }}
              >
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: "#295",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{color:"white",fontSize:16}}>{item?.studentName?.charAt(0)}</Text>
                </View>
                <View>
                  <Text style={{fontSize:16,fontWeight:"bold"}}>{item?.studentName}</Text>
                  <Text style={{marginTop:5,color:"gray"}}>
                    {item?.designation} ({item?.studentId})
                  </Text>
                </View>
              </View>
             </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
