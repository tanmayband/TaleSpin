export function printLog(logString)
{
    let currTime = new Date();
    if(typeof logString === "object")
    {
        console.log(`${currTime}:`);
        console.log(logString);
    }
    else
    {
        console.log(`${currTime}: ${logString}`);
    }
}