import express from 'express';
import { error } from 'node:console';

const router = express.Router();

let projectCodes = [
    {
        "id": "1",
        "code": "001",
        "name": "Helix",
        "category": "ProjectType"
    },
    {
        "id": "2",
        "code": "002",
        "name": "Titan",
        "category": "ProjectType"
    },
    {
        "id": "3",
        "code": "003",
        "name": "SB Energy",
        "category": "ProjectType"
    },
    {
        "id": "4",
        "code": "001",
        "name": "Texas",
        "category": "Jurisdiction"
    },
    {
        "id": "5",
        "code": "002",
        "name": "Nevada",
        "category": "Jurisdiction"
    },
    {
        "id": "6",
        "code": "003",
        "name": "California",
        "category": "Jurisdiction"
    },
    {
        "id": "7",
        "code": "001",
        "name": "Juno",
        "category": "ProjectName"
    },
    {
        "id": "8",
        "code": "002",
        "name": "BridgePort",
        "category": "ProjectName"
    },
    {
        "id": "9",
        "code": "001",
        "name": "Access Control Building",
        "category": "PhysicalAsset"
    },
    {
        "id": "10",
        "code": "002",
        "name": "Datacentre",
        "category": "PhysicalAsset"
    },
    {
        "id": "11",
        "code": "003",
        "name": "Fencing",
        "category": "PhysicalAsset"
    },
    {
        "id": "12",
        "code": "004",
        "name": "Hazardous Waste Storage",
        "category": "PhysicalAsset"
    },
    {
        "id": "13",
        "code": "005",
        "name": "Laydown Yard",
        "category": "PhysicalAsset"
    },
    {
        "id": "14",
        "code": "006",
        "name": "Loading Yard",
        "category": "PhysicalAsset"
    },
    {
        "id": "15",
        "code": "007",
        "name": "Maintenance Facility",
        "category": "PhysicalAsset"
    },
    {
        "id": "16",
        "code": "008",
        "name": "Office Block",
        "category": "PhysicalAsset"
    },
    {
        "id": "17",
        "code": "009",
        "name": "Portable Water Storage",
        "category": "PhysicalAsset"
    },
    {
        "id": "18",
        "code": "010",
        "name": "Salvage Yard",
        "category": "PhysicalAsset"
    },
    {
        "id": "19",
        "code": "011",
        "name": "Security Room",
        "category": "PhysicalAsset"
    },
    {
        "id": "20",
        "code": "012",
        "name": "Recycling Yard",
        "category": "PhysicalAsset"
    },
    {
        "id": "21",
        "code": "013",
        "name": "Service Water Storage",
        "category": "PhysicalAsset"
    },
    {
        "id": "22",
        "code": "014",
        "name": "Solid Waste Storage",
        "category": "PhysicalAsset"
    },
    {
        "id": "23",
        "code": "015",
        "name": "Station",
        "category": "PhysicalAsset"
    },
    {
        "id": "24",
        "code": "016",
        "name": "Stores",
        "category": "PhysicalAsset"
    },
    {
        "id": "25",
        "code": "017",
        "name": "Sub-Station (incl switchgear yard)",
        "category": "PhysicalAsset"
    },
    {
        "id": "26",
        "code": "018",
        "name": "Uninterruptible Power Supply (UPS) rooms",
        "category": "PhysicalAsset"
    },
    {
        "id": "27",
        "code": "019",
        "name": "Weighbridge",
        "category": "PhysicalAsset"
    },
    {
        "id": "28",
        "code": "020",
        "name": "Chilled Water Complex",
        "category": "PhysicalAsset"
    },
    {
        "id": "29",
        "code": "021",
        "name": "Condenser Towers",
        "category": "PhysicalAsset"
    },
    {
        "id": "30",
        "code": "022",
        "name": "Firewater Attenuation Pond",
        "category": "PhysicalAsset"
    },
    {
        "id": "31",
        "code": "023",
        "name": "Cooling Water Ponds",
        "category": "PhysicalAsset"
    },
    {
        "id": "32",
        "code": "024",
        "name": "Energy Recovery Complex",
        "category": "PhysicalAsset"
    },
    {
        "id": "33",
        "code": "001",
        "name": "Commissioning and Start-up",
        "category": "ResponsibleEntity"
    },
    {
        "id": "34",
        "code": "002",
        "name": "Construction",
        "category": "ResponsibleEntity"
    },
    {
        "id": "35",
        "code": "003",
        "name": "Contract Administration",
        "category": "ResponsibleEntity"
    },
    {
        "id": "36",
        "code": "004",
        "name": "Contract Management",
        "category": "ResponsibleEntity"
    },
    {
        "id": "37",
        "code": "005",
        "name": "Cost Control and Budget Management",
        "category": "ResponsibleEntity"
    },
    {
        "id": "38",
        "code": "006",
        "name": "Design and Engineering",
        "category": "ResponsibleEntity"
    },
    {
        "id": "39",
        "code": "007",
        "name": "Health, Safety, and Environmental (HSE) Management",
        "category": "ResponsibleEntity"
    },
    {
        "id": "40",
        "code": "008",
        "name": "Procurement",
        "category": "ResponsibleEntity"
    },
    {
        "id": "41",
        "code": "009",
        "name": "Project Management",
        "category": "ResponsibleEntity"
    },
    {
        "id": "42",
        "code": "010",
        "name": "Quality Assurance and Compliance",
        "category": "ResponsibleEntity"
    },
    {
        "id": "43",
        "code": "011",
        "name": "Rehabilitation and Remediation",
        "category": "ResponsibleEntity"
    },
    {
        "id": "44",
        "code": "012",
        "name": "Risk Management",
        "category": "ResponsibleEntity"
    },
    {
        "id": "45",
        "code": "001",
        "name": "A1:-2",
        "category": "SiteGridLocation"
    },
    {
        "id": "46",
        "code": "002",
        "name": "A1:-1",
        "category": "SiteGridLocation"
    },
    {
        "id": "47",
        "code": "003",
        "name": "A1:0",
        "category": "SiteGridLocation"
    },
    {
        "id": 48,
        "code": "001",
        "name": "Bulk Earthworks",
        "category": "Discipline"
    },
    {
        "id": 49,
        "code": "002",
        "name": "Piling and Ground Improvements",
        "category": "Discipline"
    },
    {
        "id": 50,
        "code": "003",
        "name": "Restricted Earthworks",
        "category": "Discipline"
    },
    {
        "id": 51,
        "code": "004",
        "name": "Civils",
        "category": "Discipline"
    },
    {
        "id": 52,
        "code": "005",
        "name": "Structural Steelwork",
        "category": "Discipline"
    },
    {
        "id": 53,
        "code": "006",
        "name": "Architectural / Buildings",
        "category": "Discipline"
    },
    {
        "id": 54,
        "code": "007",
        "name": "Containers",
        "category": "Discipline"
    },
    {
        "id": 55,
        "code": "008",
        "name": "Controls and Instrumentation",
        "category": "Discipline"
    },
    {
        "id": 56,
        "code": "009",
        "name": "Electrical",
        "category": "Discipline"
    },
    {
        "id": 57,
        "code": "010",
        "name": "Mechanical",
        "category": "Discipline"
    },
    {
        "id": 58,
        "code": "011",
        "name": "Piping",
        "category": "Discipline"
    },
    {
        "id": 59,
        "code": "012",
        "name": "Waterproofing",
        "category": "Discipline"
    },
    {
        "id": 60,
        "code": "013",
        "name": "Software (Operation and Maintenance)",
        "category": "Discipline"
    },
    {
        "id": 61,
        "code": "014",
        "name": "Project Execution",
        "category": "Discipline"
    },
    {
        "id": 62,
        "code": "001",
        "name": "Clear and Grub",
        "category": "Activity"
    },
    {
        "id": 63,
        "code": "002",
        "name": "Backfilling",
        "category": "Activity"
    },
    {
        "id": 64,
        "code": "003",
        "name": "Compacting",
        "category": "Activity"
    },
    {
        "id": 65,
        "code": "004",
        "name": "Blinding Layer",
        "category": "Activity"
    },
    {
        "id": 66,
        "code": "005",
        "name": "Buried Load Break Disconnect to Invertor Skid",
        "category": "Activity"
    },
    {
        "id": 67,
        "code": "006",
        "name": "Commissioning - Cold",
        "category": "Activity"
    },
    {
        "id": 68,
        "code": "007",
        "name": "Commissioning - Hot",
        "category": "Activity"
    },
    {
        "id": 69,
        "code": "008",
        "name": "Diamond Mech Fencing",
        "category": "Activity"
    },
    {
        "id": 70,
        "code": "009",
        "name": "Earthing",
        "category": "Activity"
    },
    {
        "id": 71,
        "code": "010",
        "name": "Fence Foundation Type 1",
        "category": "Activity"
    },
    {
        "id": 72,
        "code": "011",
        "name": "Fence Post Type 1",
        "category": "Activity"
    },
    {
        "id": 73,
        "code": "012",
        "name": "Fire Modules",
        "category": "Activity"
    },
    {
        "id": 74,
        "code": "001",
        "name": "Backfill",
        "category": "ActivityDetailL1"
    },
    {
        "id": 75,
        "code": "002",
        "name": "Carting Away",
        "category": "ActivityDetailL1"
    },
    {
        "id": 76,
        "code": "003",
        "name": "Clear Site",
        "category": "ActivityDetailL1"
    },
    {
        "id": 77,
        "code": "004",
        "name": "Dig Trench",
        "category": "ActivityDetailL1"
    },
    {
        "id": 78,
        "code": "005",
        "name": "Drill Pile",
        "category": "ActivityDetailL1"
    },
    {
        "id": 79,
        "code": "006",
        "name": "Fill Rubberized Asphalt",
        "category": "ActivityDetailL1"
    },
    {
        "id": 80,
        "code": "007",
        "name": "Formwork",
        "category": "ActivityDetailL1"
    },
    {
        "id": 81,
        "code": "008",
        "name": "Graphics Processing Units (GPU)",
        "category": "ActivityDetailL1"
    },
    {
        "id": 82,
        "code": "009",
        "name": "Herbicide",
        "category": "ActivityDetailL1"
    },
    {
        "id": 83,
        "code": "010",
        "name": "Insecticide",
        "category": "ActivityDetailL1"
    },
    {
        "id": 84,
        "code": "011",
        "name": "Install Rebar",
        "category": "ActivityDetailL1"
    },
    {
        "id": 85,
        "code": "012",
        "name": "Lay Blinding Layer",
        "category": "ActivityDetailL1"
    },
    {
        "id": 86,
        "code": "001",
        "name": "Cart Away Grass and Weeds",
        "category": "ActivityDetailL2"
    },
    {
        "id": 87,
        "code": "002",
        "name": "Clamp Formwork into Position",
        "category": "ActivityDetailL2"
    },
    {
        "id": 88,
        "code": "003",
        "name": "Collect Formwork Clamps",
        "category": "ActivityDetailL2"
    },
    {
        "id": 89,
        "code": "004",
        "name": "Collect Auger",
        "category": "ActivityDetailL2"
    },
    {
        "id": 90,
        "code": "005",
        "name": "Collect Concrete",
        "category": "ActivityDetailL2"
    },
    {
        "id": 91,
        "code": "006",
        "name": "Collect Formwork",
        "category": "ActivityDetailL2"
    },
    {
        "id": 92,
        "code": "007",
        "name": "Collect Herbicide",
        "category": "ActivityDetailL2"
    },
    {
        "id": 93,
        "code": "008",
        "name": "Collect Insecticide",
        "category": "ActivityDetailL2"
    },
    {
        "id": 94,
        "code": "009",
        "name": "Collect Pesticide",
        "category": "ActivityDetailL2"
    },
    {
        "id": 95,
        "code": "010",
        "name": "Collect Precast Pile",
        "category": "ActivityDetailL2"
    },
    {
        "id": 96,
        "code": "011",
        "name": "Collect Rebar",
        "category": "ActivityDetailL2"
    },
    {
        "id": 97,
        "code": "012",
        "name": "Confirm Placement Position",
        "category": "ActivityDetailL2"
    },
    {
        "id": 98,
        "code": "001",
        "name": "3/4 Minus Aggregate",
        "category": "ActivityRequiredComponents"
    },
    {
        "id": 99,
        "code": "002",
        "name": "Auxiliary Power Systems",
        "category": "ActivityRequiredComponents"
    },
    {
        "id": 100,
        "code": "003",
        "name": "Battery Units",
        "category": "ActivityRequiredComponents"
    },
    {
        "id": 101,
        "code": "004",
        "name": "Buried to Surface Transition Conduit",
        "category": "ActivityRequiredComponents"
    },
    {
        "id": 102,
        "code": "005",
        "name": "Cable Support Bracket - Module Mount",
        "category": "ActivityRequiredComponents"
    },
    {
        "id": 103,
        "code": "006",
        "name": "Communication Systems",
        "category": "ActivityRequiredComponents"
    },
    {
        "id": 104,
        "code": "007",
        "name": "Container Type 1",
        "category": "ActivityRequiredComponents"
    },
    {
        "id": 105,
        "code": "008",
        "name": "Container Type 2",
        "category": "ActivityRequiredComponents"
    },
    {
        "id": 106,
        "code": "009",
        "name": "HVAC Units",
        "category": "ActivityRequiredComponents"
    },
    {
        "id": 107,
        "code": "010",
        "name": "Inverter Skid",
        "category": "ActivityRequiredComponents"
    },
    {
        "id": 108,
        "code": "011",
        "name": "Large Assembly Lead",
        "category": "ActivityRequiredComponents"
    },
    {
        "id": 109,
        "code": "012",
        "name": "Load Break Disconnect Box",
        "category": "ActivityRequiredComponents"
    }
];


router.get('/', (req, res) => {
    res.send(projectCodes);
})


//Getting the Name data by category and code
router.get('/:category/:code', (req, res) => {
  const { category, code } = req.params;

  // Find item by category and code (string comparison)
  const item = projectCodes.find(
    entry =>
      entry.category.trim().toLowerCase() === category.trim().toLowerCase() &&
      entry.code.trim() === code.trim()
  );

  if (!item) {
    return res.status(404).json({ error: `Item with code '${code}' in category '${category}' not found` });
  }

  res.json({name: item.name });
});

//Deleting a specific project code
router.delete('/:category/:code', (req, res) => {
    const {category, code} = req.params;

    const item = projectCodes.find(
        entry => entry.category.trim().toLowerCase() === category.trim().toLowerCase() && entry.code.trim() === code.trim()
    );

    if (!item) {return res.status(404).json({error: `Item with code '${code}' in category '${category}' does not exist therefore can't delete it`})}


    const name = item.name;
    
    projectCodes = projectCodes.filter(projectCode => (projectCode.name !== name && projectCode.code !== item.code && projectCode.category !== item.category));
    res.send(`Project code '${code}' with name '${name}' was deleted succesfully`)
});

//Patching/Updating a specific Project Code
router.patch('/:categoryIn/:codeIn', (req, res) => {
    const {categoryIn, codeIn} = req.params;
    const {code, name, category} = req.body;

    const item = projectCodes.find(
        entry => entry.category.trim().toLowerCase() === categoryIn.trim().toLowerCase() && entry.code.trim() === codeIn.trim()
    );

    if (!item) {return res.status(404).json({error: `Project code with code '${codeIn}' in category '${categoryIn}' does not exist`})}

    if (code) {
        // Check if the code already exists in the category
        const exists = projectCodes.some(item => item.category === category && item.code === code);
        if (exists) {
            return res.status(400).json({ 
            error: `Code '${code}' already exists in category '${category}'` 
            });
        }

        item.code = code;
        res.send(`Project code was updated from '${codeIn}' to '${code}'`)
    }

    if (category) {
        // Check that category exists in projectCodes
        const validCategories = [...new Set(projectCodes.map(item => item.category))];
        if (!validCategories.includes(category)) {
            return res.status(400).json({ 
            error: `Category '${category}' is invalid. Must be one of: ${validCategories.join(', ')}` 
            });
        }

        item.category = category;
        res.send(`Project code category was updated from '${categoryIn}' to '${category}'`)
    }

    if (name) {
        item.name = name;
        res.send(`Project code name was updated to '${name}'`)
    }

    res.send(`Updated successfuly`)
})


//Putting/Creating a project code
router.post('/', (req, res) => {
  const { code, name, category } = req.body;

  // Validate required fields
  if (!code || !name || !category) {
    return res.status(400).json({ error: 'code, name, and category are required' });
  }

  // Check that category exists in projectCodes
  const validCategories = [...new Set(projectCodes.map(item => item.category))];
  if (!validCategories.includes(category)) {
    return res.status(400).json({ 
      error: `Category '${category}' is invalid. Must be one of: ${validCategories.join(', ')}` 
    });
  }

  // Check if the code already exists in the category
  const exists = projectCodes.some(item => item.category === category && item.code === code);
  if (exists) {
    return res.status(400).json({ 
      error: `Code '${code}' already exists in category '${category}'` 
    });
  }

  // Generate new ID
  const maxId = projectCodes.length > 0 ? Math.max(...projectCodes.map(item => item.id)) : 0;
  const newEntry = {
    id: maxId + 1,
    code,
    name,
    category
  };

  // Add to projectCodes array
  projectCodes.push(newEntry);

  res.json({ message: `Project code '${name}' added successfully`, entry: newEntry });
});


export default router