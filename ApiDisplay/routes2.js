const express = require('express')
const routes2 = express.Router()

routes2.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM display', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes2.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO display set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('display added!')
        })
    })
})

routes2.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM display WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('display excluded!')
        })
    })
})

routes2.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE display set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('display updated!')
        })
    })
})

module.exports = routes2