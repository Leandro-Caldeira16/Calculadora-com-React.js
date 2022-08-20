import React, { useState} from "react";




function App() {

  const[valorTela, setValorTela]=useState('')
  const[resultado, setResultado]=useState(0)
  const[acumulador, setACumulador]=useState(0)
  const[operado, setOperado]=useState(false)
  const [digito, setDigito]=useState(false)
  



// COMPONENTES:
const Tela=(valor,res)=>{
  return(
    <div style={cssTela}>
      <span style={cssTelaOper}>{valor}</span>    
      <div style={cssTelaRes}>{res}</div>    
    </div>
  )
}

const Btn=(label, onClick)=>{
  return(
  <button style={cssBtn} onClick={onClick}>{label}</button>
  )
}
  
// FUNÇÕES:
const AddDigitoTela=(d)=>{
  
  if ((d=='+' || d=='-' || d=='*' || d=='/' || d=='(' || d==')' || d=='.') && digito) {
    d =''
    return
  }else
  if((d=='+' || d=='-' || d=='*' || d=='/' || d=='(' || d==')' || d=='.' )&& !operado){
   
     const valorDigitadoTela = valorTela + d
     setValorTela(valorDigitadoTela)
      setDigito(true)
    return
  }else
  if((d=='+' || d=='-' || d=='*' || d=='/') && operado ){
    setDigito(true)
    console.log("+-*/")
    setOperado(false)
    setValorTela(resultado + d)
    return
  }
  if(operado){
    setValorTela(d)
    setOperado(false)
    return
  }else{

  const valorDigitadoTela = valorTela + d
  setValorTela(valorDigitadoTela)
  setDigito(false)
  }
}


const LimparMemoria=()=>{
  setOperado(false)
  setValorTela('')
  setResultado(0)
  setACumulador(0)
}

const operacao=(oper)=>{
  if(oper == 'bs'){
    setDigito(false)
    let vtela = valorTela
    vtela = vtela.substring(0,(vtela.length-1))
    setValorTela(vtela)
    setOperado(false)
    return
  }
  try{
    const r=eval(valorTela) //Calculo
    setACumulador(r)
    setResultado(r)
    setOperado(true)
  }catch{
    setResultado('ERRO')
  }

}


// ESTILOS:
const cssTitulo={
  textAlign:'center'
}

const cssConteiner={
  display:'flex',
  justifyContent:'center',
  alignItens:'center',
  flexDirection:'column',
  width:'300px',
  border:'1px solid #000',
  boxShadow: 'inset 0 0 , 0 0 1em  ' ,
}

const cssBotoes={
  flexDirection:'row',
  flexWrap:'wrap',
}
const cssTela={
  display:'flex',
  paddingLeft:'10px',
  paddinhRight:'20px',
  justifyContent:'center',
  alignItens:'Flex-start',
  backgroundColor:'#444',
  flexDirection:'column',
  width:'290px'
}

const cssTelaOper={
  overflow:'hidden',
  fontSize:'25px',
  color:'#fff',
  height:'25px',
}

const cssTelaRes={
  overflow:'hidden',
  fontSize:'50px',
  color:'#fff',
}

const cssBtn={
  fontSize:'30px',
  height:'75px',
  width:'75px',
  padding:'20px',
  backgroundColor:'#000',
  color:'#fff',
  borderColor:'#000',
  textAlign:'center',
  outline:'none',
}

return (
  <>
    <div style={cssConteiner}>
      <h3 style={cssTitulo}>Calculadora Matemática simples</h3>
      {Tela(valorTela, resultado)}
      <div style={cssBotoes}>
        {Btn('AC', LimparMemoria)}
        {Btn('C',()=>operacao('bs'))}
        {Btn('(', ()=>AddDigitoTela('('))}
        {Btn(')', ()=>AddDigitoTela(')'))}
        {Btn('7', ()=>AddDigitoTela('7'))}
        {Btn('8', ()=>AddDigitoTela('8'))}
        {Btn('9', ()=>AddDigitoTela('9'))}
        {Btn('*', ()=>AddDigitoTela('*'))}
        {Btn('4', ()=>AddDigitoTela('4'))}
        {Btn('5', ()=>AddDigitoTela('5'))}
        {Btn('6', ()=>AddDigitoTela('6'))}
        {Btn('-', ()=>AddDigitoTela('-'))}
        {Btn('1', ()=>AddDigitoTela('1'))}
        {Btn('2', ()=>AddDigitoTela('2'))}
        {Btn('3', ()=>AddDigitoTela('3'))}
        {Btn('+', ()=>AddDigitoTela('+'))}
        {Btn('0', ()=>AddDigitoTela('0'))}
        {Btn('.', ()=>AddDigitoTela('.'))}
        {Btn('/', ()=>AddDigitoTela('/'))}
        {Btn('=', ()=>operacao('='))}

      </div>
    </div>
  </>
)
    
}

export default App;
