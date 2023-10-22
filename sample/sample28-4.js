async function myAsyncFunc() {
    console.log(new Date());
    const result = await wait(2).catch(e => {
        console.error(e);
    });
    console.log(new Date());
}

try { myAsyncFunc(); } catch (e) {}
myAsyncFunc().catch(e);