import express from 'express';
import { error } from 'node:console';

const router = express.Router();

let groups = [
    {
        "name": "Administrators",
        "description": "Complete system access and user management",
        "status": "active",
        "permissions": ["admin access", "project create", "project edit", "project delete", "project view", "user create", "user edit", "user delete", "user view", "report create", "report edit", "report view", "task create", "task edit", "task view", "task update", "settings access"]
    },

    {
        "name": "Architects",
        "description": "Architectural design and planning",
        "status": "active",
        "permissions": ["project create", "project edit", "project view", "report create"]
    },

    {
        "name": "Auditors",
        "description": "Internal audit and review",
        "status": "active",
        "permissions": ["project view", "user view", "report view"]
    },

    {
        "name": "Civil Engineers",
        "description": "Civil engineering and infrastructure",
        "status": "active",
        "permissions": ["project create", "project edit", "project view", "report create"]
    },

    {
        "name": "Communications Team",
        "description": "Internal and external communications",
        "status": "active",
        "permissions": ["project view", "report view"]
    },

    {
        "name": "Compliance Officers",
        "description": "Regulatory compliance monitoring",
        "status": "active",
        "permissions": ["project view", "report create", "report view"]
    },

    {
        "name": "Concrete Workers",
        "description": "Concrete pouring and finishing",
        "status": "active",
        "permissions": ["task view", "task update"]
    },

    {
        "name": "Construction Team",
        "description": "On-site construction operations",
        "status": "active",
        "permissions": ["project view", "task view", "task update"]
    },

    {
        "name": "Consultants",
        "description": "External consulting services",
        "status": "active",
        "permissions": ["project view", "report view"]
    },

    {
        "name": "Contract Administrators",
        "description": "Contract management and compliance",
        "status": "active",
        "permissions": ["project view", "user view", "report view"]
    },

    {
        "name": "Crane Operators",
        "description": "Heavy lifting and crane operations",
        "status": "active",
        "permissions": ["task view", "task update"]
    },

    {
        "name": "Data Analysts",
        "description": "Data analysis and reporting",
        "status": "active",
        "permissions": ["project view", "report create", "report view"]
    },

    {
        "name": "Design Engineers",
        "description": "Engineering design and documentation",
        "status": "active",
        "permissions": ["project create", "project edit", "project view", "report create"]
    },

    {
        "name": "Document Control",
        "description": "Document management and version control",
        "status": "active",
        "permissions": ["project view", "report view", "task view"]
    },

    {
        "name": "Electrical Engineers",
        "description": "Electrical system design and installation",
        "status": "active",
        "permissions": ["project create", "project edit", "project view", "task view"]
    },

    {
        "name": "Environmental Compliance",
        "description": "Environmental regulations and compliance",
        "status": "active",
        "permissions": ["project view", "report create", "report view"]
    },

    {
        "name": "Executive Assistants",
        "description": "Executive support and administration",
        "status": "active",
        "permissions": ["project view", "user view", "report view"]
    },

    {
        "name": "Facilities Management",
        "description": "Facility operations and maintenance",
        "status": "active",
        "permissions": ["project view", "report view", "task view", "task update"]
    },

    {
        "name": "Field Workers",
        "description": "Basic access to assigned tasks and updates",
        "status": "active",
        "permissions": ["task view", "task update"]
    },

    {
        "name": "Financial Analysts",
        "description": "Budget and cost analysis",
        "status": "active",
        "permissions": ["project view", "report create", "report view"]
    },

    {
        "name": "Flooring Specialists",
        "description": "Floor installation and finishing",
        "status": "active",
        "permissions": ["task view", "task update"]
    },

    {
        "name": "Geotechnical Engineers",
        "description": "Soil and foundation analysis",
        "status": "active",
        "permissions": ["project view", "report create", "report view"]
    },

    {
        "name": "Heavy Equipment Operators",
        "description": "Heavy machinery operation",
        "status": "active",
        "permissions": ["task view", "task update"]
    },

    {
        "name": "HR Representatives",
        "description": "Human resources management",
        "status": "active",
        "permissions": ["project view", "user view", "task view"]
    },

    {
        "name": "HVAC Specialists",
        "description": "HVAC system installation and maintenance",
        "status": "active",
        "permissions": ["project view", "report create", "task view", "task update"]
    },

    {
        "name": "Inspectors",
        "description": "Quality and safety inspections",
        "status": "active",
        "permissions": ["project view", "report create", "report view", "task view"]
    },

    {
        "name": "IT Support",
        "description": "Technical support and system maintenance",
        "status": "active",
        "permissions": ["project view", "user view"]
    },

    {
        "name": "Laborers",
        "description": "General construction labor",
        "status": "active",
        "permissions": ["task view", "task update"]
    },

    {
        "name": "Landscapers",
        "description": "Landscaping and site finishing",
        "status": "active",
        "permissions": ["project view", "task view", "task update"]
    },

    {
        "name": "Legal Advisors",
        "description": "Legal compliance and consultation",
        "status": "active",
        "permissions": ["project view", "report view"]
    },

    {
        "name": "Maintenance Crew",
        "description": "Equipment maintenance and repairs",
        "status": "active",
        "permissions": ["project view", "task view", "task update"]
    },

    {
        "name": "Marketing Team",
        "description": "Marketing and public relations",
        "status": "active",
        "permissions": ["project view", "report view"]
    },

    {
        "name": "Material Handlers",
        "description": "Material receiving and distribution",
        "status": "active",
        "permissions": ["task view", "task update"]
    },

    {
        "name": "Mechanical Engineers",
        "description": "Mechanical system design and installation",
        "status": "active",
        "permissions": ["project create", "project edit", "project view",  "task view"]
    },

    {
        "name": "Painters",
        "description": "Surface preparation and painting",
        "status": "active",
        "permissions": ["task view", "task update"]
    },

    {
        "name": "Plumbing Team",
        "description": "Plumbing installation and maintenance",
        "status": "active",
        "permissions": ["project view", "task view", "task updated"]
    },

    {
        "name": "Procurement Team",
        "description": "Material and equipment procurement",
        "status": "active",
        "permissions": ["project view", "report view", "task view"]
    },

    {
        "name": "Project Analysts",
        "description": "Project analysis and reporting",
        "status": "inactive",
        "permissions": ["project view", "report create", "report view"]
    },

    {
        "name": "Project Coordinators",
        "description": "Project coordination and scheduling",
        "status": "active",
        "permissions": ["project create", "project edit", "project view", "task view"]
    },

    {
        "name": "Project Managers",
        "description": "Full access to project management features",
        "status": "active",
        "permissions": ["project create", "project edit", "project delete", "user view"]
    }
];

router.get('/', (req, res) => {
    res.send(groups);
})

//Getting specific group by its name
router.get('/:name', (req, res) => {
    const {name} = req.params;

    const findGroup = groups.find((group) => group.name === name);

    if (!findGroup) {
        return res.status(404).json({error: `No Group with name '${name}'`});
    }

    res.send(findGroup)
});

//Put/Creating group
router.post('/', (req, res) => {
    const group = req.body;

    groups.push({ ...group});
    res.send(`The group with name '${group.name}' has been added to the Database`);
});

//Delete specific group based on its name
router.delete('/:name', (req, res) => {
    const {name} = req.params;

    const findGroup = groups.find((group) => group.name === name);
    if (!findGroup) return res.status(404).json({error: `No Group with name '${name}'`})

    groups = groups.filter((group) => group.name !== name)
    res.send(`Group with name '${name}' was deleted successfully from database`);
});

//Patching/Updating a specific group based on its name
router.patch('/:nameIn', (req, res) => {
    const {nameIn} = req.params;

    const {name, description, status, permissions} = req.body;

    const group = groups.find((group) => group.name === nameIn)
    if (!group) return res.status(404).json({error: `No Group with name '${name}'`})
    
    if (name) group.name = name;
    if (description) group.description = description;
    if (status) group.status = status;
    if (permissions) group.permissions = permissions;

    res.send(`Group with name '${nameIn}' was updated`)
})

export default router