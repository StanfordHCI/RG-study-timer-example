import React from "react";
import {View} from "react-native";
import {commonStyles} from "./commonStyles";
import {TimerItemView} from "./TimerItemView";
import {GenieClassInterface} from "reactgenie-lib";

export const TimerListViewImpl = (props: { elements: { id: string }[] }) => {
    return (
        <View style={commonStyles.appContainer}>
            <View>
                {
                    props.elements.map((element) => {
                        return <TimerItemView id={element.id} key={element.id}/>
                    })
                }
            </View>
        </View>
    )
}

export const TimerListView = GenieClassInterface("Timer[]", "Timer List")(TimerListViewImpl)
