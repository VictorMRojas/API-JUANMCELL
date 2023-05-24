const express = require('express')
const routesVenta = express.Router()

routesVenta.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM contabilidad', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routesVenta.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO contabilidad set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('venta accesorio added!')
        })
    })
})

routesVenta.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM contabilidad WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('accesorio excluded!')
        })
    })
})

routesVenta.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE contabilidad set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('venta accesorio updated!')
        })
    })
})

module.exports = routesVenta