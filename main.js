const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow(){
  const win = new BrowserWindow({width:1100,height:800,minWidth:800,minHeight:600,backgroundColor:'#f5f7fb',autoHideMenuBar:true,webPreferences:{contextIsolation:true,sandbox:true}});
  win.loadFile(path.join(__dirname,'index.html'));
}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});
