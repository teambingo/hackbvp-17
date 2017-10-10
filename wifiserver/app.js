const express = require('express')
const exec = require('exec') 
const users = /192.168.137.\d{2,3}\s{7,8}\w{2}-\w{2}-\w{2}-\w{2}-\w{2}-\w{2}/g
const ips = /192.168.137.\d{2,3}/g
const app = express()
const port = 4000
app.use(express.static('public'))
exec(['arp', '-a'], function (err, out, code) {
  if (err instanceof Error) throw err
  process.stderr.write(err)
  let usersData = out.match(users)
  usersData.pop()
  data = usersData.map((dat) => {
    return {
      ip: dat.match(ips)[0],
      mac: dat.slice(-17)
    }
  })
})
