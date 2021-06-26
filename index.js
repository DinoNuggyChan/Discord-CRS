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
 details : "details text", //text under activity name example: https://i.imgur.com/3cpsKjm.png
 assets : {
 large_image : "image name", //make sure its all in lower case
 large_text : "image text" // text when you hover over image
 },
 buttons : [{label : "First Button Name" , url : "first button link"},{label : "Second Button Name" , url : "Second Button Link"}]
 }
 })
 })
client.login({ clientId : "ClientID" }).catch(console.error); 
