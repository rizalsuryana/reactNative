import { useState } from "react";
import {
  Button,
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function ModalExample() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Open Popup" onPress={() => setVisible(true)} />

      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        quaerat odio omnis accusamus sapiente, esse, doloribus labore in fugiat
        libero, repellat asperiores perspiciatis corporis. Voluptates atque
        accusamus id ut amet?
      </Text>

      <Modal transparent visible={visible} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Hi, I am a Modal </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  paragraph: {
    marginTop: 20,
    fontSize: 16,
    lineHeight: 22,
    color: "#333",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCard: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeText: {
    color: "white",
    fontWeight: "500",
  },
});
