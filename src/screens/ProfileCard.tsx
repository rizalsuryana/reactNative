import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.avatar}
          source={require("../../assets/cevans.jpg")}
        />
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={[styles.fontBold, { fontSize: 18 }]}>Hj. Jamal</Text>
          <Text>Ketua Avenger</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <View style={styles.box}>
            <Text style={styles.fontBold}>7.7B</Text>
            <Text>Followers</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold" }}>88</Text>
            <Text>Folling</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    borderRadius: 16,

    // shadow android
    elevation: 5,

    //! untuk iphong
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 50,
  },
  box: {
    alignItems: "center",
  },
  fontBold: {
    fontWeight: "bold",
  },
});
