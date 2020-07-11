const Node = require('./db').Node;

var rawData = {
    "data": [
        {
            "name": "A",
            "description": "This is a description of A",
            "parentId": ""
        },
        {
            "name": "B",
            "description": "This is a description of B",
            "parent": "A"
        },
        {
            "name": "C",
            "description": "This is a description of C",
            "parent": "A"
        },
        {
            "name": "D",
            "description": "This is a description of D",
            "parent": "A"
        },
        {
            "name": "B-1",
            "description": "This is a description of B-1",
            "parent": "B"
        },
        {
            "name": "B-2",
            "description": "This is a description of B-2",
            "parent": "B"
        },
        {
            "name": "B-3",
            "description": "This is a description of B-3",
            "parent": "B"
        }
    ]
}

function preprocess(rawData) {
    var data = []
    rawData.data.forEach(element => {
        if (element.parentId === "") {
            data.push(
                new Node({
                    name: element.name,
                    description: element.description,
                    parent: ""
                })
            );
        } else {
            data.push(new Node(element));
        }
    });
    return data;
}

console.log('data migration starts');
var nodes = preprocess(rawData);
Node.insertMany(nodes, (err, result) => {
    if (err) {
        console.log('data migration failed!')
        console.log(err);
    } else {
        console.log('data migration succeeds');
    }
    process.exit();
});

