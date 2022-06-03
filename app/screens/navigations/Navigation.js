import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantStack from "./TopRestaurantsStack";
import AccountStack from "./AccountStack";
import SearchStack from "./SearchStack";
import { Icon } from "@rneui/base";

//import Restaurants from "../Restaurants";
//import TopRestaurants from "../TopRestaurants";
//import Favorites from "../Favorites"
//import Account from "../Account";
//import Search from "../Search";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions= {({ route }) => ({
                tabBarActiveTintColor: "#00a680",
                tabBarInactiveTintColor: "#646464",
                tabBarIcon: ({ color }) => screenOption( route, color ),
               
            })}      
            > 
                <Tab.Screen 
                name="restaurants-stack" 
                component={RestaurantsStack}
                options={{
                    title: "Restaurantes",
                    headerShown: false,
                    tabBarBadge: 11

                     }}
                />
                <Tab.Screen 
                name="favorites-stack" 
                component={FavoritesStack}
                options={{
                    title: "Favoritos",
                    headerShown: false
                }}
                />
                <Tab.Screen 
                name="TopRestaurants-stack" 
                component={TopRestaurantStack}
                options={{
                    title: "Top 5",
                    headerShown: false
                }}/>
                <Tab.Screen 
                name="Account-stack" 
                component={AccountStack}
                options={{
                    title: "Cuenta",
                    headerShown: false
                }}/>
                <Tab.Screen 
                name="Search-stack" 
                component={SearchStack}
                options={{
                    title: "Buscar",
                    headerShown: false
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOption(route, color) {
    let iconName;

    switch (route.name) {
        case "restaurants-stack":
            iconName = "compass-outline";
            break;
        case "favorites-stack":
            iconName= "heart";
            break;
        case "TopRestaurants-stack":
            iconName = "star";
            break;
        case "Account-stack":
            iconName = "account-circle";
            break;
        case "Search-stack":
            iconName = "magnify";
            break;
        default:
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={30} color={color} />
    );

}

