import {Pressable,Image,Text,View} from 'react-native'
import { estilos } from './Estilos'

export const Boton=({Texto,Logo,ColorA='#005522',ColorB='#2055ff',accion})=>{
    return(
      <Pressable 
      style={({pressed})=>[{
        backgroundColor:pressed?ColorA:ColorB,
        margin:pressed?3:2
      },estilos.boton]} 
      onPress={accion}
      >
        <Image style={estilos.imagenB} source={Logo} />
        <Text style={estilos.textoB}>{Texto}</Text>
      </Pressable>
    )
  }

export const Caja=({valor})=>{
    return(
        <View style={estilos.caja}> 
            <Text style= {estilos.textBox}>{valor}</Text>
        </View>
    )
}