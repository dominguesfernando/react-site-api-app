import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, TitleInput, InputForm, BtnSubmitForm, TxtSubmitForm } from "./styles";

export default function Orcamento() {
    const navigation = useNavigation();
    return (
        <Container>
            <TitleInput>Nome</TitleInput>
            <InputForm placeholder="Nome Completo" autoCorrect={false}></InputForm>

            <TitleInput>E-mail</TitleInput>
            <InputForm placeholder="Seu Melhor E-mail" autoCorrect={false}></InputForm>

            <TitleInput>Telefone</TitleInput>
            <InputForm placeholder="(00) xxxx-xxxx" autoCorrect={false}></InputForm>

            <TitleInput>Projeto</TitleInput>
            <InputForm placeholder="Conte sobre o projeto" autoCorrect={false}></InputForm>

            <BtnSubmit>Cadastrar</BtnSubmit>
        </Container>

    );
}
