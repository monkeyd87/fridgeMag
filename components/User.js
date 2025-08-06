import { StyleSheet,View,Text,Image } from "react-native"

export const User = ({username,id,dob,homeroom})=>{
    return(
        <View style={styles.body}>
           <View>
            <Image/>
           </View>
           <View>
            <Text>{id}</Text>
            <Text>{username}</Text>
            <Text>{dob}</Text>
            <Text>{homeroom}</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:'green',
        flex:1,
        height:400,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:16
    }
})