import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Awesome App</Text>
      <Text style={styles.subtitle}>The best place to start your journey.</Text>

      <CustomButton title="Login" onPress={() => router.push("/login")} />

      <CustomButton
        title="Register"
        onPress={() => router.push("/register")}
        color="#34C759" // Different color for register
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: { fontSize: 32, fontWeight: "bold", color: "#333" },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 40 },
});
