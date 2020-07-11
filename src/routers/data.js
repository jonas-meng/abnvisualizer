var Node = require('../db').Node;
var express = require('express');
var router = express.Router();

var data = null;

var fetchData = async () => {
    return await Node.find({}, { _id: 0, __v: 0 }).lean();
}

var findChildren = (current, data) => {
    if (!current) {
        return current;
    }
    var children = [];
    data.forEach(element => {
        if (element.parent === current.name) {
            children.push(element);
        }
    });
    children.sort((a, b) => a.name < b.name);
    current.children = children;
    current.children.forEach(element => {
        findChildren(element, data);
    });
    return current;
}

var DataHierarchy = (data) => {
    var root = null;
    for (let element of data) {
        if (element.parent === "") {
            root = element;
            break;
        }
    }
    return findChildren(root, data);
}

router.get('/', async (req, res) => {
    if (!data) {
        console.log('fetching data from mongodb');
        data = await fetchData();
    }
    res.json(DataHierarchy(data));
});

module.exports = router;