import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {createStackNavigator} from '@react-navigation/stack';

import ENV from "./config";
import {EditTimerView} from "./src/EditTimerView";
import {MainView} from "./src/MainView";
import {cardStyle, modalStyle} from "./src/commonStyles";
import {Provider} from "react-redux";
import {reactGenieStore} from "./timeStore";
import { ModalityProvider } from "reactgenie-lib";


export let AppNavigator: any = null;

type Props = NativeStackScreenProps<any, any>

const TimerTab = ({route, navigation}: Props) => {
    AppNavigator = navigation
    return (
        <MainView {...route.params}/>
    )
}

const EditTimerTab = ({route, navigation}: Props) => {
    AppNavigator = navigation
    return (
        <EditTimerView {...route.params}/>
    )
}

const App = () => {
    let TimerStack = () => {
        let TimerNavigator = createStackNavigator();
        return (
            <TimerNavigator.Navigator screenOptions={{
                headerShown: true
            }}>
                <TimerNavigator.Screen name="Timers" component={TimerTab} options={cardStyle}/>
                <TimerNavigator.Screen name="EditTimer" component={EditTimerTab} options={modalStyle}/>

            </TimerNavigator.Navigator>
        );
    }

    return (
        <Provider store={reactGenieStore}>
            <ModalityProvider
                displayTranscript={true}
                codexApiKey={ENV.OPENAI_API_KEY!}
                codexApiBaseUrl={ENV.OPENAI_API_BASE_URL!}
                azureSpeechRegion={ENV.AZURE_SPEECH_REGION!}
                azureSpeechKey={ENV.AZURE_SPEECH_KEY!}
                extraPrompt={
                    '// we are using voice recognition. so there may be errors. Try to think about words with similar sounds. For example "address" can actually be "add this".'
                }
            >
                <TimerStack/>
            </ModalityProvider>
        </Provider>
    );
};

export default App;
