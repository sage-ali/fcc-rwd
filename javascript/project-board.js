const projectStatus = {
  PENDING: {
    description: 'Pending Execution'
  },
  SUCCESS: {
    description: 'Executed Successfully'
  },
  FAILURE: {
    description: 'Execution Failed'
  }
};

const ProjectIdea = class {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
};

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(projectIdea) {
    return this.ideas.push(projectIdea);
  }

  unpin(projectIdea) {
    this.ideas.splice(
      this.ideas.findIndex((idea) => idea === projectIdea),
      1
    );
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    if (!this.count()) return `${this.title} has 0 idea(s)\n`;
    let projectIdeaStrings = this.ideas.map((idea) => {
      return `${idea.title} (${idea.status.description}) - ${idea.description}`;
    });
    return `${this.title} has ${this.count()} idea(s)\n` + projectIdeaStrings.join('\n') + `\n`;
  }
}

const board = new ProjectIdeaBoard('Empty Board');
console.log(board.formatToString());
