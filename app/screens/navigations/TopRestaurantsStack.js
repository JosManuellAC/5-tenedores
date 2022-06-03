import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopRestaurants from "../TopRestaurants";

const Stack = createStackNavigator();

export default function TopRestaurantStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="topRestaurants"
            component={TopRestaurants}
            options={{ title:"Top Restaurantes"}}
            />
        </Stack.Navigator>
    );
}