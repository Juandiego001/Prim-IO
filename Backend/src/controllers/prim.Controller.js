//Ivan necesito el ejemplo de un metodo o pon el metodo vacio y yo lo completo porfa
const primCtrl = {}

primCtrl.ejemplo = async(req,res) => {
    matriz = 
        [
            [23, 28, 62, 60],
            [07, 19, 09, 28],
            [20, 31, 42, 53],
            [11, 17, 24, 99]
        ]
    //const{susProductos,metodoPago,fecha,hora,idUsuario,estadoPedido} = req.body
    respuesta = await primCtrl.prim(matriz)

    res.json({
        //mensaje: "Bienvenido",
        //input: matriz,
        output: respuesta
    })
}

primCtrl.prim = async(m) =>{
    res = [{nodo:0,costo:0}]
    suma = 0

    for (var i = 0; i < m.length - 1; i++){
        msj = []
        var nodo = {}
        nodo.costo= 9007199254740992

        for (var j = 0; j < m.length;j++){
            msj.push([i,j])
            msj.push([nodo,m[i][j]])
            if(await primCtrl.esNodo(j,res)){
                msj.push("se encontró un nodo ya evaluado")
            } else if(parseInt(nodo.costo) > parseInt(m[i][j])){
                msj.push(["se evaluó: ", nodo,i,j])
                nodo.nodo = j
                nodo.costo = parseInt(m[i][j]) + parseInt(res[res.length -1].costo)
            }
        }      

        //res.push([nodo,msj])
        //suma = parseInt(nodo.costo) + suma
        res.push(nodo)
    }    
    //res.push({costoTotal: suma})
    return res
}

primCtrl.esNodo = async(j,m) =>{
    for (var i = 0; i < m.length; i++){
        if(parseInt(j) == parseInt(m[i].nodo))
            return true
    }
    return false
}

module.exports = primCtrl