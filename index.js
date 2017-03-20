const {app, electron, BrowserWindow, ipcMain} = require('electron')
const settings = require('electron-settings')
const path = require('path')
const url = require('url')

function createWindow() {
  let win = new BrowserWindow({
    width:600,
    height:600, //52,
    useContentSize:true,
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true,
  }))

  win.on('closed', ()=> {
    win.removeAllListeners('close');
    win = null
    app.quit()
  })

  // var child
  // var map = settings.getSync('list')
  //
  // function buildURL(dict, word){
  //   return dict.url + word.trim().replace('/\s/', dict.escape)
  // }
  //
  // ipcMain.on('asynchronous-message', (event, arg) => {
  //   if(!child || child.isDestroyed()) {
  //     child = new BrowserWindow({
  //       parent: win,
  //       show: false,
  //       focusable:false,
  //       frame:false,
  //     })
  //
  //     var rect = win.getBounds()
  //     rect.y = 50
  //     win.setBounds(rect)
  //
  //     rect.y = rect.y + rect.height
  //     rect.height = 600
  //     child.setBounds(rect)
  //
  //     child.on('closed', ()=> {
  //       child = null
  //     })
  //   }
  //
  //   let dict = map[arg.dict]
  //   child.loadURL(buildURL(dict, arg.word))
  //   child.webContents.on('dom-ready', ()=>{
  //     dict.css && child.webContents.insertCSS(dict.css)
  //     dict.code && child.webContents.executeJavaScript(dict.code)
  //   })
  //   child.show()
  //   win.focus()
  // })
}

app.on('ready', createWindow);
app.on('window-all-closed', (event) => {
  if (process.platform !== 'darwin' ){
    app.quit()
  }
})
