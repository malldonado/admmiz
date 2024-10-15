import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Table = () => {
  const data = [["Casa Alphaville"]];

  return (
    <ScrollView horizontal>
      <View style={{ margin: 20 }}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              padding: 10,
              width: '100%',
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Table;
