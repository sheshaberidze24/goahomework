// "გადავიდეთ თუ არა ტესტში"
function shouldPassTest(grades, writers) {
    return grades.some(grade => grade >= 50) || writers.some(writer => writer.passed);
}

// "შეგვიძლია თუ არა გასვლა გარეთ"
function canGoOutside(isWeatherGood, isTimeEnough, isReady) {
    return isWeatherGood || isTimeEnough && isReady;
}

// "გადავდგათ თუ არა ნაბიჯი"
function shouldTakeStep(isBarrier, isSpaceAvailable, isSignalComing) {
    return !isBarrier && isSpaceAvailable || isSignalComing;
}

// "უნდა ავიღოთ თუ არა ნივთი"
function shouldPickItem(isItemAvailable, isTakingAllowed, doesSomeoneElseWantIt) {
    return (isItemAvailable && isTakingAllowed) || !doesSomeoneElseWantIt;
}

// "უნდა გავიხსენოთ თუ არა ინფორმაცია"
function shouldRecallInfo(isTaskRelevant, isInfoNeeded, hasTime) {
    return (isTaskRelevant || isInfoNeeded) && hasTime;
}

// "უნდა დავიძინოთ თუ არა"
function shouldGoToSleep(isLate, isTired, isNextMorningEarly, isLightOff) {
    return (isLate && isTired) || (isNextMorningEarly && isLightOff);
}

// "უნდა წავიდეთ თუ არა წვეულებაზე"
function shouldGoToParty(areFriendsGoing, isNextDayWorkFree, isPartyNearby) {
    return (areFriendsGoing && isNextDayWorkFree) || isPartyNearby;
}

// "უნდა დავრჩეთ თუ არა სახლში"
function shouldStayHome(isRainy, isSnowy, hasNoPlansOutside) {
    return (isRainy || isSnowy) && hasNoPlansOutside;
}
// "უნდა გავიდეთ სირბილზე თუ არა"
function shouldGoRunning(isWeatherDry, areRunningShoesAvailable, isFriendReady) {
    return (isWeatherDry && areRunningShoesAvailable) || isFriendReady;
}

// "უნდა ვუყუროთ თუ არა ფეხბურთს"
function shouldWatchFootball(isSaturday, isSunday, hasNoOtherTasks, isFavoriteTeamPlaying) {
    return ((isSaturday || isSunday) && hasNoOtherTasks) || isFavoriteTeamPlaying;
}