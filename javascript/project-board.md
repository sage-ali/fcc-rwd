# Build a Project Idea Board

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should define an object constant named `projectStatus` with the three keys: `PENDING`, `SUCCESS`, and `FAILURE`. Each status should be assigned an object with a `description` key with the value `Pending Execution`, `Executed Successfully`, and `Execution Failed`, respectively.
2. You should define a class named `ProjectIdea` with a `constructor` that takes `title` and `description` as parameters. Initialize the `title` and `description` properties with the provided parameters. The class should also have a property named `status` that is set to the value `projectStatus.PENDING` by default.
3. You should define a method named `updateProjectStatus` inside the `ProjectIdea` class. This method should accept a `newStatus` parameter and update the `status` property to the given value.
4. You should define a `ProjectIdeaBoard` class with a `constructor` that accepts a `title` and initializes an empty array named `ideas` to hold instances of the `ProjectIdea` class.
5. You should define a method named `pin` inside the `ProjectIdeaBoard` class that accepts an instance of the `ProjectIdea` class and pushes the given instance to the `ideas` array.
6. You should define a method named `unpin` inside the `ProjectIdeaBoard` class. This method should accept an instance of the `ProjectIdea` class and removes it from the `ideas` array.
7. You should define a method named `count` that returns the number of project ideas in the given `ProjectIdeaBoard` array.
8. You should define a method named `formatToString` that returns the name of the projects ideas, their description and status in the format:

```js
<ProjectIdeaBoard title> has <ProjectIdeaBoard count> idea(s)
<ProjectIdea title> (<ProjectIdea status description>) - <ProjectIdea description>
<ProjectIdea title> (<ProjectIdea status description>) - <ProjectIdea description>
.
.
.
```

## Tests

1. You should define an object constant named `projectStatus` with the correct project statuses and descriptions.

2. You should have a `ProjectIdea` class.

3. Your `ProjectIdea` class should initialize the `title` property and `description` property based on the parameters passed. It should also set the status to `projectStatus.PENDING`.

4. Your `ProjectIdea` class should have a `updateProjectStatus` method.

5. You should have a `ProjectIdeaBoard` class.

6. Your `ProjectIdeaBoard` should initialize the `title` property based on the parameter passed and initialize an empty array named `ideas` to hold instances of the `ProjectIdea` class.

7. Your `ProjectIdeaBoard` class should have a `pin` method.

8. Your `ProjectIdeaBoard` class should have an `unpin` method.

9. Your `ProjectIdeaBoard` class should have a `count` method.

10. Your `ProjectIdeaBoard` class should have a `formatToString` method.

11. `new ProjectIdea("Smart Window Locks", "An automation project allowing users to lock, unlock windows automatically based on weather conditions.")` should return `{ title: 'Smart Window Locks', description: 'An automation project allowing users to lock, unlock windows automatically based on weather conditions.', status: { description: 'Pending Execution' } }`.

12. Calling `updateProjectStatus(projectStatus.SUCCESS)` on `new ProjectIdea("Fitness Tracker App", "An app that tracks user workouts, diet, and sleep patterns.")` should update the status to `{ description: 'Executed Successfully' }`.

13. Calling `updateProjectStatus(projectStatus.FAILURE)` on `new ProjectIdea("Breakfast Chef Robot", "A robot that can follow a given list of instructions and prepare breakfast for the user and let them know through their phone.")` should update the status to `{ description: 'Execution Failed' }`.

14. Calling `updateProjectStatus(projectStatus.SUCCESS)` on `new ProjectIdea("Online Used Video Games Store", "An online platform where users can buy second hand physical copies of video games from other users.")` should update the status to `{ description: 'Executed Successfully' }`.

15. You should be able to pin a `ProjectIdea` object to your `ProjectIdeaBoard` using the `pin` method.

16. You should be able to unpin a `ProjectIdea` object to your `ProjectIdeaBoard` using the `unpin` method.

17. When `new ProjectIdeaBoard("Empty Board")` is empty, `emptyBoard.formatToString()` should return `Empty Board has 0 idea(s)\n`.

18. When you pin `new ProjectIdea("Smart Home System", "An integrated system to control lighting, temperature, and security devices remotely.")` to `new ProjectIdeaBoard("Tech Projects Board")`, `techProjects.formatToString()` should return `Tech Projects Board has 1 idea(s)\nSmart Home System (Pending Execution) - An integrated system to control lighting, temperature, and security devices remotely.\n`.
