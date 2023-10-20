function workP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        },sec * 1000);
    });
}

workP(1).then((result) => {
    console.log('첫 번째 작업', result);
    return workP(1);
}).then((result) => {
    console.log('두 번째 작업', result);
});