import { Button, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import { router } from "expo-router";

export default function Home() {
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Logout"
        onPress={async () => {
          await logout();
          router.replace("/login");
        }}
      />
    </View>
  );
}
