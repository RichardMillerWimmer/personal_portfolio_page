const workArr = require('./WorkArr');

module.exports = {

    getWorks: (req, res) => {
        console.log('get works');
        
        res.status(200).send(workArr);
    },
    getWork: (req, res) => {
        console.log('get work');

        const {id} = req.params;

        let work = workArr.filter(elem => {
            elem.id === +id
        });

        res.status(200).send(work);
    }
}