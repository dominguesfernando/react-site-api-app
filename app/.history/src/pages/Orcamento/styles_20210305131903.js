import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex:1;
padding:15px;
justify-content: flex-start;
background-color:#efefef;
`;

export const TitleInput = styled.Text`
padding-top:1px;
color: #111;
font-size: 18px;
`;

export const InputForm = styled.TextInput`
padding:10px;
font-size:18px;
color: #222;
width:100%;
margin-bottom:15px;
background-color:#fff;
border-color:#171941;
border-width:1px;
border-radius:7px;
`;

export const BtnSubmitForm = styled.TouchableOpacity`
background-color:#28AE60;
width:100%;
height:45px;
border-radius:7px;
align-items:center;
justify-content:center;
`;

export const TxtSubmitForm = styled.Text`
color:#fff;
font-size: 22px;
`;


export const LoadingArea = styled.View`
position:absolute;
left:0;
top:0;
right:0;
bottom:0;
background-color: rgbd(0,0,0,0.6);
align-items:center;
justify-content: center;
`;
