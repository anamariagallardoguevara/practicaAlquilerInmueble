const router = require('express').Router();

const Inmueble = require('../../models/inmueble.model')

router.get('/', async (req, res) =>{
    try {
        const inmuebles = await Inmueble.find();
        res.json(inmuebles);
    } catch (error) {
        res.json({Ups: error.message});
    }
});

router.post('/', async (req, res) => {
    try {
        const result = await Inmueble.create(req.body);
        res.json(result);
    } catch (error) {
        res.json({Ups: error.message});
    }
});

router.put('/:inmuebleId', async (req, res) => {
    const {inmuebleId} = req.params;

    try {
        const result = await Inmueble.findByIdAndUpdate(inmuebleId, req.body, {new: true});
        res.json(result);
    } catch (error) {
        res.json({Ups: error.message});
    }
});

router.delete('/:inmuebleId', async (req, res) => {
    const {inmuebleId} = req.params;

    try {
        const result = await Inmueble.findByIdAndDelete(inmuebleId);

        if (!result){
            return res.json({ Ups: 'El inmueble que quieres eliminar no existe'})
        }else{
            res.json(result);
        }
        
    } catch (error) {
        res.json({Ups: error.message});
    }
});

module.exports = router;