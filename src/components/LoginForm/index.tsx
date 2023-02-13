import { AbButton, AbInput } from "alurabooks-ds-fearinn";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useGetToken, useSaveToken } from "../../utils/hooks";
import StyledRegistrationForm from "../RegistrationForm/StyledRegistrationForm";

function LoginForm({ onSubmit }: { onSubmit: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const saveToken = useSaveToken();

  function loginUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user = {
      email,
      senha: password,
    };

    console.log(user);

    axios
      .post("http://localhost:8000/public/login", user)
      .then((response) => {
        saveToken(response.data.access_token);
        setEmail("");
        setPassword("");
        onSubmit();
      })
      .catch((error) => {
        if (error && error.response?.data?.message) {
          alert(error.response.data.message);
        } else {
          alert("Houve um erro ao logar. Entre em contato com o suporte");
        }
      });
  }

  return (
    <StyledRegistrationForm onSubmit={loginUser}>
      <AbInput
        htmlId="login-input-email"
        label="E-mail"
        value={email}
        type="email"
        placeholder="seuemail@maneiro.com.br"
        onChange={setEmail}
      />
      <AbInput
        htmlId="login-input-confirm_password"
        label="Senha"
        value={password}
        placeholder="********"
        onChange={setPassword}
      />
      <AbButton text="Logar" />
    </StyledRegistrationForm>
  );
}

export default LoginForm;
