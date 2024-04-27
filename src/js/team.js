class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('This character is already in the team.');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach(character => {
            if (this.members.has(character)) {
                console.log(`Character ${character.name} is already in the team.`);
            } else {
                this.members.add(character);
            }
        });
    }

    toArray() {
        return Array.from(this.members);
    }
}

class Character {
    constructor(name) {
        this.name = name;
    }
}

module.exports = { Team, Character };