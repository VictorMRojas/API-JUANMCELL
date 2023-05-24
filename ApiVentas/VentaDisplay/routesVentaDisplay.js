const express = require('express')
const routesVentaDisplay = express.Router()

routesVentaDisplay.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM ventaDisplay', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routesVentaDisplay.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO ventaDisplay set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('venta del display added!')
        })
    })
})

routesVentaDisplay.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM ventaDisplay WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('venta del display excluded!')
        })
    })
})

routesVentaDisplay.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE ventaDisplay set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('venta del display updated!')
        })
    })
})

module.exports = routesVentaDisplay