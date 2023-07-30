import React from "react";
import {AppNavigator} from "../App";
import {View} from "react-native";
import {commonStyles} from "./commonStyles";
import {TimerListView} from "./TimerListView";

export const MainView = () => {
    // TODO: Add code here

    return (
        <View style={commonStyles.appContainer}>
            <View style={commonStyles.timerViewContainer}>
                <button style={commonStyles.button} onClick={() => {
                    // TODO: create a new timer and navigate to EditTimerView
                    AppNavigator.push('EditTimer', null)
                }}>Add New Timer
                </button>
            </View>

            // TODO: Fill in elements to be displayed
            <TimerListView elements={[]}/>
        </View>
    )
}