function getDataFromServer (){}
async function doAsyncWork() {
    let result = await getDataFromServer();
    console.log(result);
}

console.log('Call')
