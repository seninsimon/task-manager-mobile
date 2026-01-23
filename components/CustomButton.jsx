import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CustomButton({ title, onPress, color = "#007AFF" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  text: { color: "white", fontWeight: "bold", fontSize: 16 },
});
