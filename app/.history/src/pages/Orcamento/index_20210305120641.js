import React, { useState } from 'react';
import { Container, TitleInput, InputForm, BtnSubmitForm, TxtSubmitForm } from "./styles";
import { ScrollView } from 'react-native-gesture-handler';
import { Alert } from 'react-native';

export default function Orcamento() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [projeto, setProjeto] = useState('');

    const addOrcamento = async () => {
        Alert.alert("", name);

    };


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>
                <TitleInput>Nome</TitleInput>
                <InputForm placeholder="Nome Completo" autoCorrect={false} value={name} onChangeText={text => setName()}></InputForm>

                <TitleInput>E-mail</TitleInput>
                <InputForm placeholder="Seu Melhor E-mail" autoCorrect={false} value={email} onChangeText={text => setEmail()}></InputForm>

                <TitleInput>Telefone</TitleInput>
                <InputForm placeholder="(00) xxxx-xxxx" autoCorrect={false} value={telefone} onChangeText={text => setTelefone()}></InputForm>

                <TitleInput>Projeto</TitleInput>
                <InputForm placeholder="Conte sobre o projeto" autoCorrect={false} value={projeto} onChangeText={text => setProjeto()}></InputForm>

                <BtnSubmitForm onPress={addOrcamento}>
                    <TxtSubmitForm>Cadastrar</TxtSubmitForm>
                </BtnSubmitForm>
            </Container>
        </ScrollView>
    );
}
