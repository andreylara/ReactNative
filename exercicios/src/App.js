import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import Mega from './components/mega/Mega'
{/*
    import FlexBoxV4 from './components/layout/FlexBoxV4'
    import FlexBoxV3 from './components/layout/FlexBoxV3'
    import FlexBoxV2 from './components/layout/FlexBoxV2'
    import FlexBox from './components/layout/FlexBox'
    import DigiteSeuNome from './components/DigiteSeuNome'
    import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
    import ListaProdutos from './components/produtos/ListaProdutos'
    import UsuarioLogado from './components/UsuarioLogado'
    import Familia from './components/relacao/Familia'
    import Membro from './components/relacao/Membro'
    import ParImpar from './components/ParImpar'
    import Diferenciar from './components/Diferenciar'
    import ContavorV2 from './components/contador/ContavorV2'
    import Pai from './components/indireta/Pai'
    import Pai from './components/direta/Pai'
    import Contador from './components/Contador'
    import Botao from './components/Botao'
    import Titulo from './components/Titulo'
    import Aleatorio from './components/Aleatorio'
    import MinMax from './components/MinMax'
    import Comp, { Comp1, Comp2 } from './components/Multi'
    import Primeiro from './components/Primeiro'
*/} 

export default () => (
    <SafeAreaView style={style.App}> 
        <Mega qtdeNumeros={6} />
        {/*
        <FlexBoxV4 /> 
        <FlexBoxV3 /> 
        <FlexBoxV2 />
        <FlexBox />
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={ null }/>
        <UsuarioLogado usuario={ {} }/>
        <UsuarioLogado usuario={ {nome: 'Ana'} }/>
        <UsuarioLogado usuario={ {email: 'carlos@gmail.com'} }/>
        <UsuarioLogado usuario={ {nome: 'Gui', email: 'gui@gmail.com'} }/>
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Julia" sobrenome="Silva" />
        </Familia>
        <ParImpar num={3}/>
        <Diferenciar />
        <ContavorV2 />
        <Pai />
        <Pai />
        <Contador inicial={100} passo={13} />
        <Contador />
        <Botao />
        <Titulo principal="Cadastro"
            secundario="Tela de Cadastro do Produto" />
        <Aleatorio min={1} max={60} />
        <MinMax min="3" max="20"/>
        <MinMax min={1} max={94}/>
        <Comp />
        <Comp1 />
        <Comp2 />
        <Primeiro />
        */} 
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    }
})