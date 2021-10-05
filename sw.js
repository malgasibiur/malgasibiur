// Solo tenemos listeners, no es recomendable tener funciones, variables, etc

// self es muy parecido a lo que veniamos usando this.

self.addEventListener('install', e=>{
    console.log('sw install')
})


self.addEventListener('activate', e =>{
    console.log('sw activate')
})

self.addEventListener('fetch', e =>{
    console.log('sw fetch')
})
