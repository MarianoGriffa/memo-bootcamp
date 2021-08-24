import './App.css';
import Description from './Description.js';
 
const Mensaje = () => {
  return  <h2>El titulo de mi App</h2>  
   
} 
const Footer = (props) => {
  return (
  <footer>
  Hecho con mucho cariño por   
  <i style={{color: props.color, textDecoration: props.textDecoration}}>  @marianogriffa</i> 
  </footer>  
  )
} 
 
const  App = () => {
  return (
    <div className="App">
      <Mensaje />
      <p>Reactivando</p>
      <i>Esto se esta poniendo interesante</i>
      <br/>
      <strong><small>React JS se basa en</small> componentes!</strong>
      <Description color='red'  message="Estamos trabajando en"/>
      <Description color='blue'  message="un curso de React JS"/>
      <Footer color='darkmagenta' textDecoration= 'underline'/>  
    </div>   
  );    
}
 
export default App;
