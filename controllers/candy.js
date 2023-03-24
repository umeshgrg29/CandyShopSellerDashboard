const Candy = require('../models/candy')


const addCandy= async (req, res, next) => {
    try {
        console.log(req.body)
        const candyname = req.body.candyname;
        const description = req.body.description;
        const price = req.body.price;
        const quantity = req.body.quantity;
        const data = await Candy.create({ candyname: candyname, description: description,price: price ,quantity : quantity })
        res.status(201).json({ newCandyDetail: data })
    }
    catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

const getCandy = async (req, res, next) => {
    console.log('Inside get Candy')
    try {
        const candy = await Candy.findAll();
        res.status(200).json({ allCandys: candy })
    } catch (err) {
        res.status(500).json({ error: err })
    }
}


const editCandy = async (req,res, next) =>  {
    console.log('Inside edit todo')
    try {
        const candyId = req.params.id;
        const candy = await Candy.findOne({ where: { id: candyId } });
        if (!candy) {
          return res.status(404).json({ message: 'candy not found' });
        }
    
        const updatedQuantity = req.body.quantity;
    
        await Candy.update(
          { quantity: updatedQuantity},
          { where: { id: candyId } }
        );
    
        const updatedData = await Candy.findOne({ where: { id: candyId } });
        res.status(200).json({ updatedCandyDetail: updatedData });
      } catch (err) {
        res.status(500).json({ error: err });
      }
}

module.exports = {
    addCandy,
    getCandy,
    editCandy
}