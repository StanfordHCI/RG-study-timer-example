import "reflect-metadata";
import {GenieClass, DataClass, int, GenieProperty, GenieKey, GenieFunction, TimeDelta} from "reactgenie-lib";

// you need to implement the logic behind the timer

@GenieClass("A Timer example")
export class Timer extends DataClass{
    @GenieKey
    public id: string;
    @GenieProperty("Object to hold the time data of the timer")
    public delta: TimeDelta;
    @GenieProperty("The name of timer to count")
    public name: string;
    @GenieProperty("The type of the timer")
    public type: string;
    @GenieProperty("Whether the timer is created or not")
    public created: boolean;
    @GenieProperty("Whether the timer is paused or not")
    public paused: boolean;

    constructor({id, name, type, delta, created, paused}: {id: string, name: string, type: string, delta: TimeDelta, created: boolean, paused: boolean}) {
        super({})
        this.id = id;
        this.name = name;
        this.type = type;
        this.created = created;
        this.delta = delta;
        this.paused = paused;
    }

    @GenieFunction()
    static CreateTimer({name, type, delta, created, paused}:
                               {name: string, type: string, delta: TimeDelta, created: boolean, paused: boolean}): Timer {
        const id = Timer.All().length.toString(); // automatically generate a unique id
        return Timer.CreateObject({id: id, name: name, type: type, created: created, delta: delta, paused: paused});
    }

    static setup() {
        Timer.CreateTimer({
            name:"Pushups",
            type:"Exercise",
            created: true,
            delta: TimeDelta.CreateTimeDelta({
                hour: 12,
                minute: 30,
                second: 30
            }),
            paused: false
        });

        Timer.CreateTimer({
            name:"Pullups",
            type:"Exercise",
            created: true,
            delta: TimeDelta.CreateTimeDelta({
                hour: 13,
                minute: 30,
                second: 30
            }),
            paused: false
        });

        Timer.CreateTimer({
            name:"Ramen",
            type:"Cooking",
            created: true,
            delta: TimeDelta.CreateTimeDelta({
                hour: 14,
                minute: 30,
                second: 30
            }),
            paused: false
        });
    }

    // @GenieFunction()
    // delete(): void {
    //     Timer.DeleteObject({id: this.id});
    // }

    @GenieFunction()
    deleteTimer(): void {
        Timer.DeleteObject({id: this.id});
    }

    @GenieFunction()
    pauseTimer(): void {
        this.paused = true;
    }

    @GenieFunction()
    startTimer(): void {
        this.paused = false;
    }

    @GenieFunction()
    isFinished(): boolean {
        return this.delta.getLeftSecond() === 0;
    }

    @GenieFunction()
    countDown(): void {
        if (!this.paused) {
            this.delta.addOffset({
                hour: 0,
                minute: 0,
                second: -1
            });
        }
    }

    static Examples = [
        {
            user_utterance: "Increase this timer by an hour",
            example_parsed: "Timer.Current().delta.addOffset(hour: 1, minute: 0, second: 0)"
        },
        // {
        //     user_utterance: "Increase this timer by a minute",
        //     example_parsed: "Timer.Current().delta.addOffset(hour: 0, minute: 1, second: 0)"
        // },
        {
            user_utterance: "show me all timers",
            example_parsed: 'Timer.All()',
        },
        {
            user_utterance: "Delete this timer",
            example_parsed: 'Timer.Current().deleteTimer()',
        }
    ]
}
