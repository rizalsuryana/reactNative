import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  const addHandler = () => setCount(count + 1);

  const decreaseHandler = () => {
    if (count > 0) setCount(count - 1);
  };

  const resetHandler = () => setCount(0);

  return (
    <View style={{ alignItems: "center", marginTop: 50 }}>
      <Text style={{ marginBottom: 20, fontSize: 20 }}>{count}</Text>

      <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <Pressable
          onPress={addHandler}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "gray" : "green",
              padding: 10,
              borderRadius: 6,
            },
          ]}
        >
          <Text style={{ color: "white" }}>Plus</Text>
        </Pressable>

        <Pressable
          onPress={decreaseHandler}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "gray" : "red",
              padding: 10,
              borderRadius: 6,
            },
          ]}
        >
          <Text style={{ color: "white" }}>Minus</Text>
        </Pressable>

        <Pressable
          onPress={resetHandler}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#555" : "gray",
              padding: 10,
              borderRadius: 6,
            },
          ]}
        >
          <Text style={{ color: "white" }}>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}
