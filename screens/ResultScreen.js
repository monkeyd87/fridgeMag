import { View,Text } from "react-native";
import { useRoute } from '@react-navigation/native';


 export const ResultScreen = ()=>{
    const route = useRoute()
    const {product} = route.params
    return(
        <View>
            <Text>
                {product.product_name}
            </Text>
        </View>
    )
}