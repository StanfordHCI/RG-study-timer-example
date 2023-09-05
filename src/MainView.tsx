import React from "react";
import {AppNavigator} from "../App";
import {View} from "react-native";
import {commonStyles} from "./commonStyles";
import {TimerListView} from "./TimerListView";
import {TimeDelta, useGenieSelector} from "reactgenie-lib";
import {Timer} from "../genie/Timer";

export const MainView = () => {
    const allTimers =  useGenieSelector(() => {
        return Timer.All(); //get all counters
    });

    return (
        <View style={commonStyles.appContainer}>
            <View style={commonStyles.timerViewContainer}>
                <button style={commonStyles.button} onClick={() => {
                    const timer = Timer.CreateTimer({
                        name: "NewTimer",
                        type: "Random",
                        delta: TimeDelta.CreateTimeDelta({}),
                        created: false,
                        paused: false
                    });
                    AppNavigator.push('EditTimer', timer)
                }}>Add New Timer
                </button>
            </View>

            <TimerListView elements={allTimers}/>
        </View>
    )
}