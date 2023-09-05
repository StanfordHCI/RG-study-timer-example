import {AppNavigator} from '../App';
import React from 'react';
import {commonStyles, textStyles} from './commonStyles';
import {useGenieSelector, GenieClassInterface} from "reactgenie-lib";
import {Timer} from "../genie/Timer";

const EditTimerViewImpl = (props: { id?: string }) => {
    // TODO: get the timer
    const timer =  useGenieSelector(() => {//get counter by id
        return Timer.GetObject(props);
    });

    return (
        <div style={commonStyles.appContainer}>
            <div style={commonStyles.timerFormContainer}>

                <div style={commonStyles.numericInputContainer}>
                    <input style={commonStyles.numericInput} type='number' min={0} max={60} value={
                        timer.delta.hour
                    }
                           onChange={(e) => {
                               timer.delta.hour = parseInt(e.target.value);
                           }
                    }/>
                    <label style={textStyles.heading}> : </label>
                    <input style={commonStyles.numericInput} type='number' min={0} max={60} value={
                        timer.delta.minute
                    }
                           onChange={(e) => {
                               timer.delta.minute = parseInt(e.target.value)
                           }
                    }/>
                    <label style={textStyles.heading}> : </label>
                    <input style={commonStyles.numericInput} type='number' min={0} max={60} value={
                        timer.delta.second
                    }
                           onChange={(e) =>
                               timer.delta.second = parseInt(e.target.value)
                    }/>
                </div>

                <div style={commonStyles.sectionContainer}>
                    <label style={textStyles.label}>Title </label>
                    <input style={commonStyles.textInput} type='text' size={20} value={
                        timer.name
                    }
                           onChange={(e) => {
                               timer.name = e.target.value
                           }
                    }></input>
                    <label style={textStyles.label}>Description </label>
                    <input style={commonStyles.textInput} type='text' size={20} value={
                        timer.type
                    }
                           onChange={(e) =>
                               timer.type = e.target.value
                           }></input>
                </div>

                {
                    // TODO: Replace the below block with dataload condition
                    // TODO: get the timer created
                    !timer.created ?
                        <div style={commonStyles.sectionContainer}>
                            <button style={commonStyles.button} onClick={() => {
                                timer.created = true;
                                AppNavigator.pop();
                            }}>Add Timer
                            </button>
                            <button style={commonStyles.button} onClick={() => {
                                timer.deleteTimer();
                                AppNavigator.pop();
                            }}>Cancel
                            </button>
                        </div>
                        :
                        <div style={commonStyles.sectionContainer}>
                            <button style={commonStyles.button} onClick={() => {
                            AppNavigator.pop();
                            }}>Save Timer
                            </button>
                            <button style={commonStyles.button} onClick={() => {
                                timer.deleteTimer();
                                AppNavigator.pop();
                            }}>Delete Timer
                            </button>
                        </div>
                }

            </div>
        </div>
    );
};

export const EditTimerView = GenieClassInterface(
    "Timer",
    "Create a Timer",
    (target: Timer) => target.created ? -1 : 1
)(EditTimerViewImpl);