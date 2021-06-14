const workArr = require('./WorkArr');

module.exports = {

    getWorks: (req, res) => {
        // console.log('get works');
        
        res.status(200).send(workArr);
    },
    getWork: (req, res) => {
        // console.log('get work');
        // console.log(workArr)

        const {id} = req.params;
        // console.log(id)

        let work = workArr.filter((elem) => {
            return elem.id === +id
            // console.log(elem)
        });
        // console.log(work)

        res.status(200).send(work);
    }
}