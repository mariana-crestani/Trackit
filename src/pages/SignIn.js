import { useNavigate } from "react-router-dom";
import { React, useContext, useState } from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { URL } from "../constants/URL.js";
import axios from "axios";
import ContextLogin from "../constants/ContextLogin.js";
import { ThreeDots } from "react-loader-spinner";

export default function Login() {
  const { setUser } = useContext(ContextLogin);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  }

  function Logar(e) {
    e.preventDefault();
    setIsLoading(true);

    const body = {
      email: login.email,
      password: login.password,
    };

    console.log("body", body);
    axios
      .post(`${URL}/auth/login`, body)

      .then((res) => {
        setUser(res.data);
        setIsLoading(false);
        navigate("/habitos");
      })

      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data);
      });
  }

  return (
    <LoginContainer disabled={isLoading}>
      <img src={logo} alt="logo" />

      <form onSubmit={Logar}>
        <FormContainer>
          <input
            required
            name="email"
            value={login.name}
            onChange={handleForm}
            placeholder="email"
            type="email"
            disabled={isLoading}
          />
          <input
            required
            name="password"
            value={login.password}
            onChange={handleForm}
            placeholder="senha"
            type="password"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? <ThreeDots color="#FFFFFF" /> : "Entrar"}
          </button>
        </FormContainer>
      </form>
      <LinkCadastro>
        <p
          onClick={() => {
            navigate("/cadastro");
          }}
        >
          Não tem uma conta? Cadastre-se!
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
  margin-top: 20px;

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
const LinkCadastro = styled.div`
  margin-top: 25px;
  font-size: 14px;
  color: #52b6ff;
  text-decoration-line: underline;
  color: #586cc0;
  cursor: pointer;
`;
