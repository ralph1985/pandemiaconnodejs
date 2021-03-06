const redis = require('redis')
const uuid = require('uuid');

const client = redis.createClient({
    host: "138.68.65.86",
    port : 6379
})

client.on('error', (error)=>{ console.log(error) })

const NOMBRE_USUARIO = '123456789'

const dataUsu = {
    token: uuid.v4(),
    usuario: NOMBRE_USUARIO
}

let objAsText = JSON.stringify(dataUsu)

client.set(NOMBRE_USUARIO, objAsText, () => {
    console.log('key seteada exitosamente')
    console.log(objAsText)
    client.expire(NOMBRE_USUARIO, 20, (err)=>{
        if (err) {
            console.log(err)
            return
        }
        client.quit(()=>{})
    })
})
