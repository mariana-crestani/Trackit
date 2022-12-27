import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import axios from "axios";
import { URL } from "../constants/URL.js";
import { ThreeDots } from "react-loader-spinner";

export default function Register() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function NewRegister(e) {
    e.preventDefault();
    setIsLoading(true);

    const body = {
      email: form.email,
      name: form.name,
      image: form.image,
      password: form.password,
    };

    axios
      .post(`${URL}/auth/sign-up`, body)

      .then((res) => {
        setIsLoading(false);
        navigate("/");
      })

      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data);
      });
  }

  return (
    <LoginContainer disabled={isLoading}>
      <img src={logo} alt="logo" />

      <form onSubmit={NewRegister}>
        <FormContainer>
          <input
            name="email"
            value={form.email}
            onChange={handleForm}
            placeholder="email"
            type="email"
            disabled={isLoading}
          />
          <input
            name="password"
            value={form.password}
            onChange={handleForm}
            placeholder="senha"
            type="password"
            disabled={isLoading}
          />
          <input
            name="name"
            value={form.name}
            onChange={handleForm}
            placeholder="nome"
            type="text"
            disabled={isLoading}
          />
          <input
            name="image"
            value={form.image}
            onChange={handleForm}
            placeholder="foto"
            type="url"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? <ThreeDots color="#FFFFFF" /> : "Cadastrar"}
          </button>
        </FormContainer>
      </form>
      <LinkCadastro>
        <p
          onClick={() => {
            navigate("/");
          }}
        >
          Já tem uma conta? Faça login!
        </p>
      </LinkCadastro>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100%;
  margin-top: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 10px;
    width: 400px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    padding-left: 11px;
    box-sizing: border-box;
    margin-top: 6px;
    width: 303px;
    height: 45px;
    background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
    color: ${(props) => (props.disabled ? "#AFAFAF" : "#666666")};
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: Lexend Deca;
    font-weight: 400px;
    font-size: 20px;

    &::placeholder {
      color: #dbdbdb;
    }
  }

  button {
    width: 303px;
    height: 45px;
    background-color: #91a0e2;
    color: #ffffff;
    font-size: 21px;
    border-radius: 5px;
    border: 0px;
    margin-top: 6px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const LinkCadastro = styled.text`
  margin-top: 25px;
  font-size: 14px;
  text-decoration-line: underline;
  color: #586cc0;
  cursor: pointer;
`;
