import { View, Text, StyleSheet, Image } from "react-native";

export default function ProductCard() {
  return (
    <View style={styles.box}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.avatar}
            source={{ uri: "https://picsum.photos/200" }}
          />
          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.produkTex}>City</Text>
            <Text style={styles.produkPrice}>Rp.999.000.000.000.000</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.avatar}
            source={{ uri: "https://picsum.photos/id/237/200/300" }}
          />
          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.produkTex}>Blackie</Text>
            <Text style={styles.produkPrice}>Rp.5.000.000</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.avatar}
            source={{ uri: "https://picsum.photos/200/300?grayscale" }}
          />
          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.produkTex}>Origamies</Text>
            <Text style={styles.produkPrice}>Rp.5.000.000</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.avatar}
            source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
          />
          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.produkTex}>Cloudes</Text>
            <Text style={styles.produkPrice}>Rp.5.000.000</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.avatar}
            source={{ uri: "https://picsum.photos/200/300/?blur=2" }}
          />
          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.produkTex}>Desert</Text>
            <Text style={styles.produkPrice}>Rp.5.000.000</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.avatar}
            source={{ uri: "https://picsum.photos/200/300.jpg" }}
          />
          <View style={{ alignItems: "flex-start" }}>
            <Text style={styles.produkTex}>Shadows</Text>
            <Text style={styles.produkPrice}>Rp.5.000.000</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    rowGap: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    marginTop: 10,
    backgroundColor: "#fff",
    width: 140,
    height: 150,
    elevation: 8,
    borderRadius: 10,
    alignItems: "center",
  },
  avatar: {
    marginTop: 8,
    width: 120,
    height: 90,
    borderRadius: 8,
  },
  produkTex: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 14,
  },
  produkPrice: {
    marginTop: 1,
    color: "dodgerblue",
    fontSize: 11,
  },
});
