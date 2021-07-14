  /**
 * @name Discord-CRS
 * @author DinoNuggyChan
 * @version 0.0.1
 * @website https://www.nuggy.space/
 * @source https://github.com/DinoNuggyChan/Discord-CRS
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
