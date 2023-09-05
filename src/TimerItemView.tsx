import {AppNavigator} from "../App";
import React, {useEffect} from "react";
import {Pressable, Text, View} from "react-native";
import {commonStyles, textStyles} from './commonStyles';
import { Timer } from "../genie/Timer";
import { useGenieSelector, GenieClassInterface} from "reactgenie-lib";

const TimerItemImpl = (props: { id: string }) => {

    const timer =  useGenieSelector(() => {
        return Timer.GetObject(props);
    });

    useEffect(() => {
        // If the timer is 0 or paused, we don't need to decrease it further
        if (timer.paused || timer.isFinished()) return;

        const interval = setInterval(() => {
            timer.countDown();
        }, 1000);
        return () => clearInterval(interval);
    }, [
        timer.paused
    ]);

    return (
        <View style={commonStyles.timerItemContainer}>

            <Pressable onPress={() => {
                AppNavigator.push('EditTimer', {id: props.id})
            }}>
                <View style={commonStyles.inline}>
                    <Text style={textStyles.heading2}>{
                        timer.type
                    }</Text>
                    <Text
                        style={textStyles.heading3}>{
                            timer.delta.toString()
                        }</Text>
                </View>
                <View style={commonStyles.inline}>
                    <Text style={textStyles.text}>{
                        timer.name
                    } </Text>
                </View>
            </Pressable>
            {
                timer.paused ?
                    <button style={commonStyles.button} onClick={() => {
                        timer.pause = false;
                    }}>Start</button> :
                    <button style={commonStyles.button} onClick={() => {
                        timer.pause = true;
                    }}>Pause</button>
            }
        </View>

    );
};

export const TimerItemView = GenieClassInterface(
    "Timer",
    (timer: Timer) => `${timer.id} Timer`,
    (timer: Timer) => timer.created ? 1 : -1
)(TimerItemImpl);
