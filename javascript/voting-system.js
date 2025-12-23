const poll = new Map();

/**
 * Adds an option to the poll. If the option already exists, returns a string indicating that it already exists.
 * Otherwise, adds the option to the poll and returns a string indicating that the option was added.
 * @param {string} option - The option to add to the poll.
 * @returns {string} - A string indicating whether the option already existed or was added.
 */
const addOption = function addOption(option) {
  if (!option) return 'Option cannot be empty.';

  return poll.has(option) ? `Option "${option}" already exists.` : (poll.set(option, new Set()), `Option "${option}" added to the poll.`);
};

/**
 * Records a vote for an option.
 * @param {string} option - The option to vote for.
 * @param {string} voterId - The id of the voter.
 * @return {string} A string indicating the result of the vote.
 */
const vote = function vote(option, voterId) {
  const votes = poll.get(option);
  if (!votes) return `Option "${option}" does not exist.`;
  if (votes.has(voterId)) return `Voter ${voterId} has already voted for "${option}".`;

  votes.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
};

/**
 * Returns a string containing the poll results.
 * The string will be in the format 'Poll Results:\n${option}: ${voters.size} votes\n'.
 * @return {string} The poll results.
 */
const displayResults = function displayResults() {
  return 'Poll Results:\n' + Array.from(poll, ([option, voters]) => `${option}: ${voters.size} votes`).join('\n');
};

console.log(addOption('Egypt'));
console.log(addOption(''));
console.log(addOption('Turkey'));
console.log(addOption('Turkey'));
console.log(addOption('Malaysia'));
console.log(vote('Malaysia', 'traveler1'));
console.log(vote('Malaysia', 'traveler1'));
console.log(vote('Turkey', 'traveler1'));
console.log(vote('Nigeria', 'traveler2'));
console.log(vote('Turkey', 'traveler3'));
console.log(displayResults());
