
let { people } = require("../data")

const getPeople = (req, res) =>{
    res.status(200).json({success:true, data:people})
}

const updatePeople = (req, res)=>{
    const {name} = req.body
    if(!name){
        res.status(404).json({success: false, msg:"please provide name value"})
    }
    res.status(201).send({success:true, person:name})
}

const putPeople = (req, res)=>{
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => person.id === Number(id))

    if(!person){
        res.status(404).json({success:false, msg: `No person with id ${id}`})
    }

    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data:newPeople})
}

module.exports = {
    getPeople,
    updatePeople,
    putPeople
}