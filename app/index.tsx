import { useEffect } from "react";
import { router } from "expo-router";
import { useAuth } from "../context/AuthContext";
import { View, ActivityIndicator } from "react-native";

export default function Index() {
  const { token, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (token) {
      router.replace("/home");
    } else {
      router.replace("/login");
    }
  }, [token, loading]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator />
    </View>
  );
}
