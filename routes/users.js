import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

// Mock database
let users = [
  {
    "id": "1",
    "FullName": "Adim",
    "Email": "adim",
    "Password": "admin",
    "Status": "Inactive",
    "ReportsTo": "You",
    "Role": "Admin",
    "Permissions": ["admin access", "project create", "project edit", "project delete", "project view", "user create", "user edit", "user delete", "user view", "report create", "report edit", "report view", "task create", "task edit", "task view", "task update", "settings access"],
    "CreatedAt": "2025-12-16T10:30:00Z"
  },

  {
    "id": "2",
    "FullName": "Pete Dormehl",
    "Email": "pdormehl@sedna.net",
    "Password": "sedna123",
    "Status": "Active",
    "ReportsTo": "Emily Rodriguez",
    "Role": "Super Users",
    "Permissions": ["project create", "project edit", "project delete", "project view", "user view", "report create", "report edit", "report view", "task create", "task edit", "task view", "task update"],
    "CreatedAt": "2025-12-22T00:00:00"
  },

  {
    "id": "3",
    "FullName": "Sarah Johnson",
    "Email": "jsarah@sedna.net",
    "Password": "sedna123",
    "Status": "Active",
    "ReportsTo": "Pete Dormehl",
    "Role": "Site Supervisor",
    "Permissions": ["project view", "report view", "task create", "task edit", "task view", "task update"],
    "CreatedAt": "2025-12-21T00:00:00"
  },

  {
    "id": "4",
    "FullName": "Mike Chen",
    "Email": "cmike@sedna.net",
    "Password": "sedna123",
    "Status": "Active",
    "ReportsTo": "Sarah Johnson",
    "Role": "Field Worker",
    "Permissions": ["task view", "task update"],
    "CreatedAt": "2025-12-22T00:00:00"
  },

  {
    "id": "5",
    "FullName": "Emily Rodriguez",
    "Email": "remily@sedna.net",
    "Password": "sedna123",
    "Status": "Active",
    "ReportsTo": "admin",
    "Role": "Administrator",
    "Permissions": ["project create", "project edit", "project delete", "project view", "user create", "user edit", "user delete", "user view", "report create", "report edit", "report view", "task create", "task edit", "task view", "task update", "settings access"],
    "CreatedAt": "2025-12-23T14:30:00Z"
  }
];

// Getting the list of users from the mock database
router.get('/', (req, res) => {
    res.send(users);
})

//Putting/Creating a user
router.post('/', (req, res) => {
    const user = req.body;

    // Find the max current ID in users
    const maxId = users.length > 0 ? Math.max(...users.map(u => parseInt(u.id))) : 0;

    // Create new user with next ID
    const newUser = { ...user, id: (maxId + 1).toString() };

    users.push(newUser);

    res.send(`${user.FullName} has been added to the Database with ID ${newUser.id}`);
});

//Getting specific user by his Id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)

    res.send(foundUser)
});

//Deleting a specific user based on his id
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const userToDelete = users.find(user => user.id === id);
    if (!userToDelete) {
        return res.status(404).send(`User with id ${id} not found`);
    }

    const userName = userToDelete.FullName;
    users = users.filter(user => user.id !== id);

    res.send(`${userName} with id ${id} was deleted successfully`);
});


//Patching/Updating a specific user based on his id
router.patch('/:id', (req, res) => {
  const { id } = req.params;

  const { FullName, Email, Password, Status, ReportsTo, Role, Permissions, CreatedAt} = req.body;

  const user = users.find((user) => user.id === id)

  if (FullName) user.FullName = FullName;
  if (Email) user.Email = Email;
  if (Password) user.Password = Password;
  if (Status) user.Status = Status;
  if (ReportsTo) user.ReportsTo = ReportsTo;
  if (Role) user.Role = Role;
  if (Permissions) user.Permissions = Permissions;
  if (CreatedAt) user.CreatedAt = CreatedAt;

  if (!user) {return res.status(404).send(`User with is {${id}} not found`)}

  res.send(`User with the {${id}} has been updated`)
});

export default router