import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Home } from './Home'
import { Profile } from './Profile'
import { Settings } from './Settings'
import { Search } from './Search'
import { ScannerScreen } from './ScannerScreen'

const Tab = createBottomTabNavigator()

export const HomeTabs = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name={'Home'} component={Home}/>
            <Tab.Screen name={'Search'} component={Search}/>
            <Tab.Screen name={'Scanner'} component={ScannerScreen}/>
        </Tab.Navigator>
    )


}