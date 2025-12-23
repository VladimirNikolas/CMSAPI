import express from 'express';
import { error } from 'node:console';

const router = express.Router();

let wbsCodes =[
    {
        "id": "1",
        "wbsCode": "001-001-001-001-001-001-001-001-001-001-001"
    },

    {
        "id": "2",
        "wbsCode": "001-001-001-004-004-004-004-004-004-004-004"
    },

    {
        "id": "3",
        "wbsCode": "001-001-001-007-007-007-007-007-007-007-007"
    },

    {
        "id": "4",
        "wbsCode": "001-001-001-010-010-010-010-010-010-010-010"
    },

    {
        "id": "5",
        "wbsCode": "001-001-001-013-001-0131-013-001-001-001-001"
    },

    {
        "id": "6",
        "wbsCode": "001-001-001-016-004-0016-002-004-004-004-004"
    },

    {
        "id": "7",
        "wbsCode": "001-001-001-019-07-019-005-007-007-007-007"
    },

    {
        "id": "8",
        "wbsCode": "003-001-001-003-003-003-003-003-003-003-003"
    },

    {
        "id": "9",
        "wbsCode": "003-001-001-006-006-006-006-006-006-006-006"
    },

    {
        "id": "10",
        "wbsCode": "003-001-001-009-009-009-009-009-009-009-009"
    },

    {
        "id": "11",
        "wbsCode": "003-001-001-012-012-012-012-012-012-012-012"
    },

    {
        "id": "12",
        "wbsCode": "003-001-001-015-003-015-001-003-003-003-003"
    },

    {
        "id": "13",
        "wbsCode": "003-001-001-018-006-018-004-006-006-006-006"
    },

    {
        "id": "14",
        "wbsCode": "002-001-001-002-002-002-002-002-002-002-002"
    },

    {
        "id": "15",
        "wbsCode": "002-001-001-005-005-005-005-005-005-005-005"
    },

    {
        "id": "16",
        "wbsCode": "002-001-001-008-008-008-008-008-008-008-008"
    },

    {
        "id": "17",
        "wbsCode": "002-001-001-011-011-011-011-011-011-011-011"
    },

    {
        "id": "18",
        "wbsCode": "002-001-001-014-002-014-014-002-002-002-002"
    },

    {
        "id": "19",
        "wbsCode": "002-001-001-017-005-017-003-005-005-005-005"
    },

    {
        "id": "20",
        "wbsCode": "002-001-001-020-008-020-006-008-008-008-008"
    },
];

router.get('/', (req, res) => {
    res.send(wbsCodes);
});

//Get WbsCode by specifc id
router.get('/:id', (req, res) => {
    const {id} = req.params;

    const findWbs = wbsCodes.find((wbs) => wbs.id === id);

    if (!findWbs) return res.status(404).json({error: `There is no such wbsCode`})
    
    res.send(findWbs.wbsCode)
});

//Delete specific wbsCode based on its id
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    const findWbs = wbsCodes.find((wbs) => wbs.id === id)
    if (!findWbs) return res. status(404).json({error: `There is no such wbsCode`})
    
    wbsCodes = wbsCodes.filter((wbs) => wbs.id !== id)
    res.send(`The wbsCode '${findWbs.wbsCode}' was deleted successfuly from database`)
});

//Patching/Updating wbsCode
router.patch('/:id', (req, res) => {
    const {id} = req.params;

    const {wbsCode} = req.body;

    const findWbs = wbsCodes.find((wbs) => wbs.id === id)
    if (!findWbs) return res.status(404).json({error: `There is no such wbsCode`});

    if (!wbsCode) return res.status(404).json({error: `Was excpecting to get wbsCode to updated to but got nothing`});

    //Validate the format
    const dashFormatRegex = /^(\d{3}-)+\d{3}$/;

    if (!dashFormatRegex.test(wbsCode)) {
        return res.status(400).json({
            error: 'Invalid WBS format. Must use - and 3-digit segments (e.g. 001-001)'
        });
    }


    let parts = wbsCode.split('-');

    // 1️⃣ Must have exactly 11 parts
    if (parts.length !== 11) {
        return res.status(400).json({ error: 'WBS code must have exactly 11 parts' });
    }

    findWbs.wbsCode = wbsCode;
    res.send(`WbsCode at id '${id} was updated successfuly to '${wbsCode}'`)
});


//Postring/Creating new wbsCode
router.post('/', (req, res) => {
    const { wbsCode } = req.body;

    if (!wbsCode) {
        return res.status(400).json({ error: 'wbsCode is required' });
    }

    //Validate the format
    const dashFormatRegex = /^(\d{3}-)+\d{3}$/;

    if (!dashFormatRegex.test(wbsCode)) {
        return res.status(400).json({
            error: 'Invalid WBS format. Must use - and 3-digit segments (e.g. 001-001)'
        });
    }


    let parts = wbsCode.split('-');

    // 1️⃣ Must have exactly 11 parts
    if (parts.length !== 11) {
        return res.status(400).json({ error: 'WBS code must have exactly 11 parts' });
    }

    // Validation rules per index
    const rules = {
        3: [1, 24],
        4: [1, 12],
        5: [1, 24],
        6: [1, 14],
        7: [1, 12],
        8: [1, 12],
        9: [1, 12],
        10: [1, 12]
    };

    for (const [index, [min, max]] of Object.entries(rules)) {
        const value = parseInt(parts[index], 10);

        if (isNaN(value) || value < min || value > max) {
            return res.status(400).json({
                error: `Invalid WBS segment at index ${index}. Must be between ${String(min).padStart(3, '0')} and ${String(max).padStart(3, '0')}`
            });
        }

        // Ensure 3-digit formatting
        parts[index] = String(value).padStart(3, '0');
    }

    // Generate new ID (last id + 1)
    const maxId = wbsCodes.length > 0
        ? Math.max(...wbsCodes.map(w => parseInt(w.id)))
        : 0;

    const newWbs = {
        id: (maxId + 1).toString(),
        wbsCode: parts.join('-')
    };

    // Save
    wbsCodes.push(newWbs);

    res.send(`WbsCode created successfully`)
});


export default router