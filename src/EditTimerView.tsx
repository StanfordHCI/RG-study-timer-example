import {AppNavigator} from '../App';
import React from 'react';
import {commonStyles, textStyles} from './commonStyles';

//TODO: Remove all the TODOs after you have completed the task
const EditTimerViewImpl = (props: { id?: string }) => {
    // TODO: get the timer

    return (
        <div style={commonStyles.appContainer}>
            <div style={commonStyles.timerFormContainer}>

                <div style={commonStyles.numericInputContainer}>
                    <input style={commonStyles.numericInput} type='number' min={0} max={60} value={
                        // TODO: get the hour
                        0
                    }
                           onChange={(e) =>
                               null // TODO: set the hour = parseInt(e.target.value)
                    }/>
                    <label style={textStyles.heading}> : </label>
                    <input style={commonStyles.numericInput} type='number' min={0} max={60} value={
                        // TODO: get the timer delta minute
                        0
                    }
                           onChange={(e) =>
                               null // TODO: set the timer delta minute = parseInt(e.target.value)
                    }/>
                    <label style={textStyles.heading}> : </label>
                    <input style={commonStyles.numericInput} type='number' min={0} max={60} value={
                        // TODO: get the timer delta second
                        0
                    }
                           onChange={(e) =>
                               null // TODO: set the timer delta second = parseInt(e.target.value)
                    }/>
                </div>

                <div style={commonStyles.sectionContainer}>
                    <label style={textStyles.label}>Title </label>
                    <input style={commonStyles.textInput} type='text' size={20} value={
                        // TODO: get the timer name
                        ''
                    }
                           onChange={(e) =>
                            null // TODO: set the timer name = e.target.value
                    }></input>
                    <label style={textStyles.label}>Description </label>
                    <input style={commonStyles.textInput} type='text' size={20} value={
                        // TODO: get the timer type
                        ''
                    }
                           onChange={(e) =>
                               null // TODO: set the timer type = e.target.value
                           }></input>
                </div>

                {
                    // TODO: Replace the below block with dataload condition
                    // TODO: get the timer created
                    false ?
                        <div style={commonStyles.sectionContainer}>
                            <button style={commonStyles.button} onClick={() => {
                                // TODO: set the timer created = true
                                AppNavigator.pop();
                            }}>Add Timer
                            </button>
                            <button style={commonStyles.button} onClick={() => {
                                null // TODO: Add code to delete the timer
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
                                AppNavigator.pop();
                                null // TODO: Add code to delete the timer
                            }}>Delete Timer
                            </button>
                        </div>
                }

            </div>
        </div>
    );
};

// TODO: bind object to view
export const EditTimerView = EditTimerViewImpl;

