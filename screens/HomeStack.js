import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from './Home'
import {Login} from './Login'
import {Profile} from './Profile'
import { HomeTabs } from './HomeTabs';
import { ResultScreen } from './ResultScreen';

const Stack = createNativeStackNavigator()

export const HomeStack = ()=>{
    return(
        <Stack.Navigator >
            <Stack.Screen name={'Login'} component={Login}/>
            <Stack.Screen name={"Home"} component={HomeTabs} options={{headerShown:false}}/>
            <Stack.Screen name={"Results"} component={ResultScreen}/>
        </Stack.Navigator>
    )
}