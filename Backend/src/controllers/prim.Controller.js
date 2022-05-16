//Ivan necesito el ejemplo de un metodo o pon el metodo vacio y yo lo completo porfa
const primCtrl = {}

primCtrl.ejemplo = async(req,res) => {
    //const{susProductos,metodoPago,fecha,hora,idUsuario,estadoPedido} = req.body

    res.json({
        mensaje: "Bienvenido",
    })
}

module.exports = primCtrl