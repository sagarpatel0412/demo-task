import { useAuthStore } from "../../store/app.store";
import { Button, TextInput, Card } from "@mantine/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "test@user.com" && password === "password") {
      login("dummy_token");
      navigate("/resources"); // Redirect after login
    }
  };

  return (
    <Card shadow="sm" padding="lg">
      <TextInput
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} mt="sm">
        Login
      </Button>
    </Card>
  );
}
