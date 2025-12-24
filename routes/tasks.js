import express from 'express';

const router = express.Router();

let tasks = [
  {
    "id": "1",
    "wbsCode": "001-001-001-015-011-0003-002-001-0003-0001",
    "StartDate": "2025-12-30T08:00:00Z",
    "EndDate": "2026-01-02T18:00:00Z",
    "ActualStartDate": null,
    "Status": "NotStarted",
    "payload": {
      "coordinateReferenceSystem": "EPSG:32633",
      "dumpType": "Edge Dump",
      "initialTruckFactor": 1.1,
      "materialCharacteristics": [
        { "name": "Glass Panel A", "density": "2.4 g/cm³", "color": "Clear" }
      ],
      "materialTypes": [
        { "type": "Polygon_A", "area": "900 sqm", "priority": "High" }
      ],
      "operationalPolygons": [[[1,2,3],[4,5,6],[7,8,9]]],
      "roads": [[[3,3,3],[4,4,4],[5,5,5]]],
      "exclusions": [[[6,6,6],[7,7,7],[8,8,8]]],
      "designSurface": [[[2,2,2],[3,3,3],[4,4,4]]],
      "existingSurface": [[[1,1,1],[2,2,2],[3,3,3]]],
      "acceptableMargin": 3,
      "equipmentPlanned": "6 → 5",
      "estimatedStartEpoch": 1735560001,
      "estimatedCompletionHours": 40,
      "feedbackIntervalMinutes": 30,
      "parentWbsCode": "001-001-001-015-011-0003",
      "state": "Active",
      "timestamp": "2025-12-30T04:00:00Z",
      "location": { "name": "Zone 1", "coordinates": [31.21, 121.46] }
    },
    "TrackedTimeSpans": ["00:45:00"],
    "CurrentSegmentStart": "2025-12-17T08:00:00Z",
    "EstimatedTimeToComplete": 40
  },

  {
    "id": "2",
    "wbsCode": "001-001-001-015-011-0003-002-001-0003-0101",
    "StartDate": "2026-01-01T08:00:00Z",
    "EndDate": "2026-01-04T18:00:00Z",
    "ActualStartDate": "2026-01-01T08:05:00Z",
    "Status": "InProgress",
    "payload": {
      "coordinateReferenceSystem": "EPSG:32633",
      "dumpType": "Bottom Dump",
      "initialTruckFactor": 1.4,
      "materialCharacteristics": [
        { "name": "Steel Beam X", "density": "7.8 g/cm³", "color": "Grey" }
      ],
      "materialTypes": [
        { "type": "Polygon_X", "area": "1200 sqm", "priority": "Medium" }
      ],
      "operationalPolygons": [[[10,11,12],[13,14,15],[16,17,18]]],
      "roads": [[[6,7,8],[9,10,11],[12,13,14]]],
      "exclusions": [[[1,3,5],[7,9,11],[13,15,17]]],
      "designSurface": [[[8,8,8],[9,9,9],[10,10,10]]],
      "existingSurface": [[[7,7,7],[8,8,8],[9,9,9]]],
      "acceptableMargin": 4,
      "equipmentPlanned": "8 → 6",
      "estimatedStartEpoch": 1735560102,
      "estimatedCompletionHours": 48,
      "feedbackIntervalMinutes": 35,
      "parentWbsCode": "001-001-001-015-011-0003",
      "state": "Active",
      "timestamp": "2026-01-01T04:15:00Z",
      "location": { "name": "Zone X", "coordinates": [31.22, 121.47] }
    },
    "TrackedTimeSpans": ["01:20:00"],
    "CurrentSegmentStart": "2026-01-01T08:05:00Z",
    "EstimatedTimeToComplete": 48
  },

  {
    "id": "3",
    "wbsCode": "001-001-001-015-011-0003-002-001-0003-0102",
    "StartDate": "2026-01-02T08:00:00Z",
    "EndDate": "2026-01-05T18:00:00Z",
    "ActualStartDate": "2026-01-02T08:10:00Z",
    "Status": "InProgress",
    "payload": {
      "coordinateReferenceSystem": "EPSG:32633",
      "dumpType": "Side Dump",
      "initialTruckFactor": 1.5,
      "materialCharacteristics": [
        { "name": "Aluminum Frame Y", "density": "2.7 g/cm³", "color": "Silver" }
      ],
      "materialTypes": [
        { "type": "Polygon_Y", "area": "1350 sqm", "priority": "High" }
      ],
      "operationalPolygons": [[[2,4,6],[8,10,12],[14,16,18]]],
      "roads": [[[5,6,7],[8,9,10],[11,12,13]]],
      "exclusions": [[[0,2,4],[6,8,10],[12,14,16]]],
      "designSurface": [[[12,12,12],[11,11,11],[10,10,10]]],
      "existingSurface": [[[9,9,9],[8,8,8],[7,7,7]]],
      "acceptableMargin": 5,
      "equipmentPlanned": "9 → 7",
      "estimatedStartEpoch": 1735560203,
      "estimatedCompletionHours": 56,
      "feedbackIntervalMinutes": 40,
      "parentWbsCode": "001-001-001-015-011-0003",
      "state": "Active",
      "timestamp": "2026-01-02T04:30:00Z",
      "location": { "name": "Zone Y", "coordinates": [31.23, 121.48] }
    },
    "TrackedTimeSpans": ["01:10:00"],
    "CurrentSegmentStart": "2026-01-02T08:10:00Z",
    "EstimatedTimeToComplete": 56
  },

  {
    "id": "4",
    "wbsCode": "001-001-001-015-011-0003-002-001-0003-0103",
    "StartDate": "2025-12-20T08:00:00Z",
    "EndDate": "2025-12-23T18:00:00Z",
    "ActualStartDate": "2025-12-20T08:00:00Z",
    "Status": "Completed",
    "payload": {
      "coordinateReferenceSystem": "EPSG:32633",
      "dumpType": "Edge Dump",
      "initialTruckFactor": 1.3,
      "materialCharacteristics": [
        { "name": "Concrete Panel Z", "density": "2.3 g/cm³", "color": "Light Grey" }
      ],
      "materialTypes": [
        { "type": "Polygon_Z", "area": "1400 sqm", "priority": "High" }
      ],
      "operationalPolygons": [[[3,6,9],[12,15,18],[21,24,27]]],
      "roads": [[[10,11,12],[13,14,15],[16,17,18]]],
      "exclusions": [[[2,3,4],[5,6,7],[8,9,10]]],
      "designSurface": [[[15,15,15],[14,14,14],[13,13,13]]],
      "existingSurface": [[[12,12,12],[11,11,11],[10,10,10]]],
      "acceptableMargin": 3,
      "equipmentPlanned": "7 → 6",
      "estimatedStartEpoch": 1735560304,
      "estimatedCompletionHours": 60,
      "feedbackIntervalMinutes": 45,
      "parentWbsCode": "001-001-001-015-011-0003",
      "state": "Closed",
      "timestamp": "2025-12-23T18:00:00Z",
      "location": { "name": "Zone Z", "coordinates": [31.24, 121.49] }
    },
    "TrackedTimeSpans": ["02:30:00"],
    "CurrentSegmentStart": null,
    "EstimatedTimeToComplete": 0
  },

  {
    "id": "5",
    "wbsCode": "001-001-001-015-011-0003-002-001-0003-0104",
    "StartDate": "2025-12-22T08:00:00Z",
    "EndDate": "2025-12-25T18:00:00Z",
    "ActualStartDate": "2025-12-22T08:00:00Z",
    "Status": "Completed",
    "payload": {
      "coordinateReferenceSystem": "EPSG:32633",
      "dumpType": "Bottom Dump",
      "initialTruckFactor": 1.6,
      "materialCharacteristics": [
        { "name": "Facade Bracket AA", "density": "7.5 g/cm³", "color": "Black" }
      ],
      "materialTypes": [
        { "type": "Polygon_AA", "area": "1600 sqm", "priority": "Medium" }
      ],
      "operationalPolygons": [[[5,10,15],[20,25,30],[35,40,45]]],
      "roads": [[[11,12,13],[14,15,16],[17,18,19]]],
      "exclusions": [[[3,6,9],[12,15,18],[21,24,27]]],
      "designSurface": [[[18,18,18],[17,17,17],[16,16,16]]],
      "existingSurface": [[[15,15,15],[14,14,14],[13,13,13]]],
      "acceptableMargin": 4,
      "equipmentPlanned": "10 → 8",
      "estimatedStartEpoch": 1735560405,
      "estimatedCompletionHours": 72,
      "feedbackIntervalMinutes": 50,
      "parentWbsCode": "001-001-001-015-011-0003",
      "state": "Closed",
      "timestamp": "2025-12-25T18:00:00Z",
      "location": { "name": "Zone AA", "coordinates": [31.25, 121.50] }
    },
    "TrackedTimeSpans": ["02:45:00"],
    "CurrentSegmentStart": null,
    "EstimatedTimeToComplete": 0
  },

  {
    "id": "6",
    "wbsCode": "001-001-001-015-011-0003-002-001-0003-0105",
    "StartDate": "2025-12-24T08:00:00Z",
    "EndDate": "2025-12-27T18:00:00Z",
    "ActualStartDate": "2025-12-24T08:00:00Z",
    "Status": "Completed",
    "payload": {
      "coordinateReferenceSystem": "EPSG:32633",
      "dumpType": "Side Dump",
      "initialTruckFactor": 1.7,
      "materialCharacteristics": [
        { "name": "Insulation Panel BB", "density": "0.9 g/cm³", "color": "White" }
      ],
      "materialTypes": [
        { "type": "Polygon_BB", "area": "1700 sqm", "priority": "High" }
      ],
      "operationalPolygons": [[[6,12,18],[24,30,36],[42,48,54]]],
      "roads": [[[20,21,22],[23,24,25],[26,27,28]]],
      "exclusions": [[[4,8,12],[16,20,24],[28,32,36]]],
      "designSurface": [[[21,21,21],[20,20,20],[19,19,19]]],
      "existingSurface": [[[18,18,18],[17,17,17],[16,16,16]]],
      "acceptableMargin": 5,
      "equipmentPlanned": "11 → 9",
      "estimatedStartEpoch": 1735560506,
      "estimatedCompletionHours": 76,
      "feedbackIntervalMinutes": 55,
      "parentWbsCode": "001-001-001-015-011-0003",
      "state": "Closed",
      "timestamp": "2025-12-27T18:00:00Z",
      "location": { "name": "Zone BB", "coordinates": [31.26, 121.51] }
    },
    "TrackedTimeSpans": ["03:00:00"],
    "CurrentSegmentStart": null,
    "EstimatedTimeToComplete": 0
  },

  {
    "id": "7",
    "wbsCode": "001-001-001-015-011-0003-002-001-0003-0106",
    "StartDate": "2025-12-26T08:00:00Z",
    "EndDate": "2025-12-29T18:00:00Z",
    "ActualStartDate": "2025-12-26T08:00:00Z",
    "Status": "Failed",
    "payload": {
      "coordinateReferenceSystem": "EPSG:32633",
      "dumpType": "Edge Dump",
      "initialTruckFactor": 1.8,
      "materialCharacteristics": [
        { "name": "Sealant Compound CC", "density": "1.2 g/cm³", "color": "Black" }
      ],
      "materialTypes": [
        { "type": "Polygon_CC", "area": "1750 sqm", "priority": "Medium" }
      ],
      "operationalPolygons": [[[7,14,21],[28,35,42],[49,56,63]]],
      "roads": [[[22,23,24],[25,26,27],[28,29,30]]],
      "exclusions": [[[5,10,15],[20,25,30],[35,40,45]]],
      "designSurface": [[[24,24,24],[23,23,23],[22,22,22]]],
      "existingSurface": [[[21,21,21],[20,20,20],[19,19,19]]],
      "acceptableMargin": 4,
      "equipmentPlanned": "12 → 10",
      "estimatedStartEpoch": 1735560607,
      "estimatedCompletionHours": 84,
      "feedbackIntervalMinutes": 60,
      "parentWbsCode": "001-001-001-015-011-0003",
      "state": "Aborted",
      "timestamp": "2025-12-29T18:00:00Z",
      "location": { "name": "Zone CC", "coordinates": [31.27, 121.52] }
    },
    "TrackedTimeSpans": ["01:15:00"],
    "CurrentSegmentStart": null,
    "EstimatedTimeToComplete": null
  }
]


router.get('/', (req, res) => {
    res.send(tasks);
});

//Getting specific task by its id
router.get('/:id', (req, res) => {
    const {id} = req.params;

    const findTask = tasks.find((task) => task.id === id);

    if (!findTask) return res.status(404).json({error: `The task with id '${id}' does not exist`})
    
    res.send(findTask);
});

//Deleting specific task based on its id
router.delete('/:id', (req, res) => {
    const {id} = req.params;

    const findTask = tasks.find((task) => task.id === id);
    if (!findTask) return res.status(404).json({error: `The task with id '${id}' does not exist`})
    
    //delete task
    tasks = tasks.filter((task) => task.id !== id);
    res.send(`Task with id '${id}' was deleted successfuly from database`);
});


//Creating a new task (posting)
// Creating a new task (posting)
router.post('/', (req, res) => {
    const task = req.body;

    // Find the maximum existing id in tasks
    const maxId = tasks.length > 0 
        ? Math.max(...tasks.map(t => parseInt(t.id))) 
        : 0;

    // Assign a new id
    const newId = (maxId + 1).toString(); // keep it as string if your JSON has string ids
    task.id = newId;

    // Add the new task
    tasks.push({ ...task });

    res.send(`The Task with id '${task.id}' has been added to the database`);
});


//Patchin/Updating a specific task based on its id
router.patch('/:id', (req, res) => {
    const { id } = req.params;

    // Find the task
    const task = tasks.find(task => task.id === id);
    if (!task) {
        return res.status(404).json({ error: `Task with id '${id}' not found` });
    }

    // Update the task with fields from req.body
    // This only updates the provided fields
    Object.keys(req.body).forEach(key => {
        // Nested objects like payload need special handling
        if (typeof req.body[key] === 'object' && req.body[key] !== null && !Array.isArray(req.body[key])) {
            task[key] = { ...task[key], ...req.body[key] };
        } else {
            task[key] = req.body[key];
        }
    });

    res.send(`Task with is '${id}' was updated successfuly`);
});


export default router