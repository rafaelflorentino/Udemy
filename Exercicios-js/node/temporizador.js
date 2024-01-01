const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function(){// */5 * 11 * * 5'  '/5 * * * * *'
    console.log('Executando Tarefa 1!', new Date().getSeconds())
    
})

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelamento Tarefa 1 !')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

 