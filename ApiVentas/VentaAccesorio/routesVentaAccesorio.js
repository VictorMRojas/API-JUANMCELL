const express = require('express')
const routesVentaAccesorio = express.Router()

routesVentaAccesorio.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM ventaAccesorio', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routesVentaAccesorio.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO ventaAccesorio set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('venta accesorio added!')
        })
    })
})

routesVentaAccesorio.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM ventaAccesorio WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('accesorio excluded!')
        })
    })
})

routesVentaAccesorio.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE ventaDisplay set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('venta accesorio updated!')
        })
    })
})

module.exports = routesVentaAccesorio