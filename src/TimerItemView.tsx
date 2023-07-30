import {AppNavigator} from "../App";
import React, {useEffect} from "react";
import {Pressable, Text, View} from "react-native";
import {commonStyles, textStyles} from './commonStyles';

const TimerItemImpl = (props: { id: string }) => {

    // TODO: get timer object

    useEffect(() => {
        // If the timer is 0 or paused, we don't need to decrease it further
        // TODO: stop if the timer is paused or finished counting down
        if (true) return;

        const interval = setInterval(() => {
            // TODO: decrease the timer by 1 second
        }, 1000);
        return () => clearInterval(interval);
    }, [
        // TODO: monitor if the timer is paused
    ]);

    return (
        <View style={commonStyles.timerItemContainer}>

            <Pressable onPress={() => {
                AppNavigator.push('EditTimer', {id: props.id})
            }}>
                <View style={commonStyles.inline}>
                    <Text style={textStyles.heading2}>{
                        // TODO: get timer type
                    }</Text>
                    <Text
                        style={textStyles.heading3}>{
                            // TODO: format and display the timer countdown like {hour} : {minute} : {second}
                        }</Text>
                </View>
                <View style={commonStyles.inline}>
                    <Text style={textStyles.text}>{
                        // TODO: get timer name
                    } </Text>
                </View>
            </Pressable>
            {
                // TODO: check if the timer is paused
                true ?
                    <button style={commonStyles.button} onClick={() => {
                        // TODO: start the timer
                    }}>Start</button> :
                    <button style={commonStyles.button} onClick={() => {
                        // TODO: pause the timer
                    }}>Pause</button>
            }
        </View>

    );
};

// TODO: bind the timer object to the TimerItemView
export const TimerItemView =TimerItemImpl;
