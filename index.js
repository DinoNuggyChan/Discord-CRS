  
/**
 * @name Discord-CRS
 * @author Oni-Chan-inc
 * @version 0.0.1
 * @website https://waa.ai/nugget
 * @source https://github.com/Oni-Chan-inc/Discord-CRS
 */

var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })



client.on('ready', () => {

client.request('SET_ACTIVITY', {

pid: process.pid,
activity : {
details : `Details`,
assets : {
large_image : "Image",
large_text : "text" // this shows as "Playing <text>" from the outisde
},
buttons : [{label : "b1" , url : "link"},{label : "b2",url : "link"}]
}
})
})
client.login({ clientId : "CLientID" }).catch(console.error);
