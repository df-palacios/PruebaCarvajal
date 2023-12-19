//controladores

import { Request,Response } from "express";
import Usuario from '../models/usuario';


export const getUsuarios = async(req:Request, res:Response) =>{
    const usuarios = await Usuario.findAll();
    //res.json({ usuarios });
    res.json(usuarios);
}

export const getUsuario = async(req:Request, res:Response) =>{
    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );

    if(usuario){
        res.json(usuario);
    }
    else{
        res.status(404).json({
            msg: 'el ID especificado no existe'
        })
    }

    
}

export const postUsuario = async(req:Request, res:Response) =>{
    const { body } = req;

    try {
        const usuario = Usuario.build(body);
        await usuario.save();
        res.json( usuario )
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'hable con el admnistrador'
        })
    }

}

export const putUsuario = async(req:Request, res:Response) =>{
    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk( id );

        if(!usuario){
            return res.status(404).json({
                msg:'no existe el ID especificado'
            })
        }
        await usuario.update(body);
        res.json( usuario )
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'hable con el admnistrador'
        })
    }

}

export const deleteUsuario = async(req:Request, res:Response) =>{
    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );

    if(!usuario){
        return res.status(404).json({
            msg:'no existe el ID especificado'
        })
    }

    await usuario.destroy();

    res.json({
        msg:'usuario eliminado',
        
    })
}