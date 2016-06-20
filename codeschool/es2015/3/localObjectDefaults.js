"use strict";

function countdownTimer(target, timeleft, options={}){
    let defaults = {
        container : ".timer-display",
        timeUnit : "seconds",
        cloneDataAttribute : "cloned",
        timeoutClass : ".is-timeout",
        timeoutSoonTime : 10
    };

    let settings = Object.assign({}, defaults, options);

    console.log(settings);
}

countdownTimer("target", "timeLeft", {container:"overriden-container", bespoke: "new setting"})