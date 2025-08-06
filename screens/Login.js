import { StyleSheet, Text, View,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Home} from './Home'



export const Login = ()=>{
    const navigation = useNavigation()
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Button
                title={'login'}
                onPress={()=>navigation.navigate("Home")}
            />
        </View>
    )
}
