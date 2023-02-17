import { AbButton, AbInput } from "alurabooks-ds-fearinn";
import { useState } from "react";
import StyledRegistrationForm from "./StyledRegistrationForm";
import http from "../../http";

function RegistrationForm({onSubmit}: {onSubmit: () => void}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [complement, setComplement] = useState("");
  const [cep, setCep] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function registerUser(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user = {
      name,
      email,
      address,
      complement,
      cep,
      password,
      confirmPassword,
    };

    http
      .post("http://localhost:8000/public/registrar", user)
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        setName("");
        setEmail("");
        setAddress("");
        setComplement("");
        setCep("");
        setPassword("");
        setConfirmPassword("");
        onSubmit()
      })
      .catch(() => alert("Oops! Houve um erro ao cadastrar!"));
  }
  return (
    <StyledRegistrationForm onSubmit={registerUser}>
      <AbInput
        htmlId="login-input-name"
        label="Nome"
        value={name}
        placeholder="Seu nome completo"
        onChange={setName}
      />
      <AbInput
        htmlId="login-input-email"
        label="E-mail"
        value={email}
        type="email"
        placeholder="seuemail@maneiro.com.br"
        onChange={setEmail}
      />
      <AbInput
        htmlId="login-input-address"
        label="Endereço"
        value={address}
        placeholder="Sua rua e número"
        onChange={setAddress}
      />
      <AbInput
        htmlId="login-input-complement"
        label="Complemento"
        value={complement}
        placeholder="Apto/casa, bloco, referência"
        onChange={setComplement}
      />
      <AbInput
        htmlId="login-input-cep"
        label="CEP"
        value={cep}
        placeholder="00000-000"
        onChange={setCep}
      />
      <AbInput
        htmlId="login-input-confirm_password"
        label="Senha"
        value={password}
        placeholder="********"
        onChange={setPassword}
      />
      <AbInput
        htmlId="login-input-confirm_password"
        label="Confirmar senha"
        value={confirmPassword}
        placeholder="********"
        onChange={setConfirmPassword}
      />
      <AbButton text="Cadastrar" />
    </StyledRegistrationForm>
  );
}

export default RegistrationForm;
