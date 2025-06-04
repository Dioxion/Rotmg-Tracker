document.addEventListener('DOMContentLoaded', () => {
    // Main UI Elements
    const dungeonGrid = document.getElementById('dungeonGrid');
    const resetButton = document.getElementById('resetButton');
    const achievementsListContainer = document.getElementById('achievementsList');
    const overallBonusDisplay = document.getElementById('overallBonusDisplay');
    const pageWrapper = document.querySelector('.page-wrapper');
    const toggleSidebarButton = document.getElementById('toggleSidebarButton');

    // Character Management UI Elements
    const characterListDiv = document.getElementById('characterListContainer');
    const showAddCharacterInputButton = document.getElementById('showAddCharacterInputButton');
    const addCharacterControls = document.getElementById('addCharacterControls');
    const newCharacterNameInput = document.getElementById('newCharacterNameInput');
    const confirmAddCharacterButton = document.getElementById('confirmAddCharacterButton');

    const genericLogo = "https://www.realmofthemadgod.com/favicon.ico";

    const dungeons = [
        { name: "Pirate Cave", logo: "https://i.imgur.com/OqzVQuc.png" },
        { name: "Forest Maze", logo: "https://i.imgur.com/m0AO506.png" },
        { name: "Spider Den", logo: "https://i.imgur.com/up93OlG.png" },
        { name: "Forbidden Jungle", logo: "https://i.imgur.com/beQHm21.png" },
        { name: "The Hive", logo: "https://i.imgur.com/6WiS9zQ.png" },
        { name: "Snake Pit", logo: "https://i.imgur.com/Mhtm0aR.png" },
        { name: "Sprite World", logo: "https://i.imgur.com/K0dJRrF.png" },
        { name: "Cave of a Thousand Treasures", logo: "https://i.imgur.com/6lgodhZ.png" },
        { name: "Ancient Ruins", logo: "https://i.imgur.com/4gtP9OQ.png" },
        { name: "Magic Woods", logo: "https://i.imgur.com/nmLtcBD.png" },
        { name: "Candyland Hunting Grounds", logo: "https://i.imgur.com/BKoSv6j.png" },
        { name: "Undead Lair", logo: "https://i.imgur.com/pR8Dgth.png" },
        { name: "Puppet Master's Theatre", logo: "https://i.imgur.com/6diBou4.png" },
        { name: "Toxic Sewers", logo: "https://i.imgur.com/4Iv5apz.png" },
        { name: "Cursed Library", logo: "https://i.imgur.com/9nQ7nSz.gif" },
        { name: "Mad Lab", logo: "https://i.imgur.com/x6dyxMp.gif" },
        { name: "Abyss of Demons", logo: "https://i.imgur.com/wId2zPS.png" },
        { name: "Manor of the Immortals", logo: "https://i.imgur.com/paEB8Qu.png" },
        { name: "Haunted Cemetery", logo: "https://i.imgur.com/VB6hMsm.gif" },
        { name: "The Machine", logo: "https://i.imgur.com/Yhd1MCq.png" },
        { name: "The Inner Working", logo: "https://i.imgur.com/v2Hm1wt.png" },
        { name: "Davy Jones' Locker", logo: "https://i.imgur.com/Hqmoe5U.gif" },
        { name: "Ice Cave", logo: "https://i.imgur.com/PCB2ged.png" },
        { name: "Ocean Trench", logo: "https://i.imgur.com/9GR3Ypw.png" },
        { name: "The Crawling Depths", logo: "https://i.imgur.com/V1rfmTa.gif" },
        { name: "Woodland Labyrinth", logo: "https://i.imgur.com/jyKYlZg.gif" },
        { name: "Deadwater Docks", logo: "https://i.imgur.com/baXW11C.png" },
        { name: "Puppet Master's Encore", logo: "https://i.imgur.com/UhdCm8R.png" },
        { name: "Cnidarian Reef", logo: "https://i.imgur.com/pXFqErd.png" },
        { name: "Parasite Chambers", logo: "https://i.imgur.com/O43mDnf.gif" },
        { name: "Sulfurous Wetlands", logo: "https://i.imgur.com/88fMxeA.png" },
        { name: "Mountain Temple", logo: "https://i.imgur.com/fGgckZI.png" },
        { name: "Lair of Draconis", logo: "https://i.imgur.com/QjX8g5O.png" },
        { name: "Tomb of the Ancients", logo: "https://i.imgur.com/E6a3nHx.png" },
        { name: "The Third Dimension", logo: "https://i.imgur.com/X3j3GrM.png" },
        { name: "Lair of Shaitan", logo: "https://i.imgur.com/px7FwlI.png" },
        { name: "Secluded Thicket", logo: "https://i.imgur.com/IeOHusO.png" },
        { name: "High Tech Terror", logo: "https://i.imgur.com/2SwppYx.png" },
        { name: "Moonlight Village", logo: "https://i.imgur.com/CHqjDCE.png" },
        { name: "Beachzone", logo: "https://i.imgur.com/Ns31EKU.png" },
        { name: "Oryx's Castle", logo: "https://i.imgur.com/dLVOZiv.png" },
        { name: "Oryx's Chamber", logo: "https://i.imgur.com/dLVOZiv.png" },
        { name: "Wine Cellar", logo: "https://i.imgur.com/ozNWFFN.png" },
        { name: "Oryx's Sanctuary", logo: "https://i.imgur.com/JGnMCv2.png" },
        { name: "Court of Oryx", logo: "https://i.imgur.com/AUfvKkf.png" },
        { name: "The Tavern", logo: "https://i.imgur.com/4oOmRd4.png" },
        { name: "The Nest", logo: "https://i.imgur.com/4oOmRd4.png" },
        { name: "Fungal Cavern", logo: "https://i.imgur.com/CLzxdEM.png" },
        { name: "Crystal Cavern", logo: "https://i.imgur.com/Cd6RD9G.png" },
        { name: "Spectral Penitentiary", logo: "https://i.imgur.com/o9yNqBT.png" },
        { name: "Kogbold Steamworks", logo: "https://i.imgur.com/dohicSR.png" },
        { name: "Lost Halls", logo: "https://i.imgur.com/DwuQOQQ.png" },
        { name: "The Void", logo: "https://i.imgur.com/ijlxjJM.png" },
        { name: "Advanced Kogbold Steamworks", logo: "https://i.imgur.com/4V6j3wj.png" },
        { name: "Advanced Nest", logo: "https://i.imgur.com/ZZssHia.png" },
        { name: "The Shatters", logo: "https://i.imgur.com/yA4tlry.png" },
        { name: "Malogia", logo: "https://i.imgur.com/RNrgJ5t.png" },
        { name: "Untaris", logo: "https://i.imgur.com/WlZyR9Z.png" },
        { name: "Katalund", logo: "https://i.imgur.com/EvOyU7Z.png" },
        { name: "Forax", logo: "https://i.imgur.com/KyAxJXQ.png" },
        { name: "Heroic Undead Lair", logo: "https://i.imgur.com/G4CcZWp.png" },
        { name: "Heroic Abyss of Demons", logo: "https://i.imgur.com/qpULefS.png" },
        { name: "Rainbow Road", logo: "https://i.imgur.com/MDVaDzN.png" },
        { name: "Santa's Workshop", logo: "https://i.imgur.com/oX3aVA2.png" },
        { name: "Ice Tomb", logo: "https://i.imgur.com/zhWVACc.png" },
        { name: "Battle for the Nexus", logo: "https://i.imgur.com/zyCjq2l.png" },
        { name: "Belladonna's Garden", logo: "https://i.imgur.com/iIG3NIj.png" },
        { name: "White Snake Invasion I", logo: "https://i.imgur.com/SW85m6U.png" },
        { name: "White Snake Invasion II", logo: "https://i.imgur.com/F1WWPv7.png" },
        { name: "White Snake Invasion III", logo: "https://i.imgur.com/aicgQzn.png" },
        { name: "Cultist Hideout", logo: "https://i.imgur.com/Xa9mjsG.png" },
        { name: "Mad God Mayhem", logo: "https://i.imgur.com/U9HeRQ4.png" },
    ];

    const achievements = [
        {
            id: 'firstSteps',
            name: 'First Steps',
            description: '+2.5% Exp, +100 Fame',
            requirements: ['Pirate Cave', 'Forest Maze', 'Forbidden Jungle', 'Spider Den', 'The Hive'],
            bonusExp: 2.5,
            bonusFame: 100
        },
        {
            id: 'kingOfTheMountains',
            name: 'King of the Mountains',
            description: '+5% Exp, +1,000 Fame',
            requirements: [
                'Snake Pit', 'Sprite World', 'Abyss of Demons', 'Toxic Sewers', 'Mad Lab',
                'Magic Woods', "Puppet Master's Theatre", 'Haunted Cemetery', 'Cursed Library',
                'Ancient Ruins', 'Sulfurous Wetlands', 'Spectral Penitentiary'
            ],
            bonusExp: 5,
            bonusFame: 1000
        },
        {
            id: 'farOut',
            name: 'Far Out',
            description: '+5% Exp, +2,000 Fame',
            requirements: ['Malogia', 'Untaris', 'Forax', 'Katalund'],
            bonusExp: 5,
            bonusFame: 2000
        },
        {
            id: 'epicBattles',
            name: 'Epic Battles',
            description: '+7.5% Exp, +2,000 Fame',
            requirements: [
                'Deadwater Docks', 'Woodland Labyrinth', 'The Crawling Depths', 'The Nest',
                'Secluded Thicket'
            ],
            bonusExp: 7.5,
            bonusFame: 2000
        },
        {
            id: 'enemyOfTheCourt',
            name: 'Enemy of the Court',
            description: '+7.5% Exp, +3,000 Fame',
            requirements: [
                'Lair of Shaitan', "Puppet Master's Encore", 'Cnidarian Reef', 'Secluded Thicket',
                'High Tech Terror'
            ],
            bonusExp: 7.5,
            bonusFame: 3000
        },
        {
            id: 'tunnelRat',
            name: 'Tunnel Rat',
            description: '+7.5% Exp, +3,000 Fame',
            requirements: [
                'Pirate Cave', 'Forbidden Jungle', 'Spider Den', 'Snake Pit', 'Undead Lair',
                'Abyss of Demons', 'Manor of the Immortals', 'Ocean Trench', 'Tomb of the Ancients',
                "Oryx's Castle", "Oryx's Chamber", 'Wine Cellar'
            ],
            bonusExp: 7.5,
            bonusFame: 3000
        },
        {
            id: 'explosiveJourney',
            name: 'Explosive Journey',
            description: '+7.5% Exp, +3,000 Fame',
            requirements: [
                "Davy Jones' Locker", 'Mad Lab', 'Candyland Hunting Grounds', 'Haunted Cemetery',
                'Cave of a Thousand Treasures', 'Lair of Draconis', 'Deadwater Docks',
                'Woodland Labyrinth', 'The Crawling Depths', 'The Shatters', 'Lair of Shaitan',
                "Puppet Master's Theatre", 'Ice Cave'
            ],
            bonusExp: 7.5,
            bonusFame: 3000
        },
        {
            id: 'conquerorOfTheRealm',
            name: 'Conqueror of the Realm',
            description: '+10% Exp, +4,000 Fame',
            requirements: [
                "Davy Jones' Locker", 'Ice Cave', 'Lair of Draconis', 'Mountain Temple',
                'The Third Dimension', 'Ocean Trench', 'Tomb of the Ancients', 'The Shatters',
                'The Nest', 'Fungal Cavern', 'Crystal Cavern', 'Lost Halls', 'Kogbold Steamworks'
            ],
            bonusExp: 10,
            bonusFame: 4000
        },
        {
            id: 'travelOfTheDecade',
            name: 'Travel of the Decade',
            description: '+10% Exp, +5,000 Fame',
            requirements: [
                "Puppet Master's Encore", 'The Hive', 'Toxic Sewers', 'Mountain Temple',
                'The Third Dimension', 'The Nest', 'Lost Halls', 'Cultist Hideout', 'The Void',
                'Cnidarian Reef', 'Parasite Chambers', 'Magic Woods', 'Secluded Thicket',
                'Cursed Library', "Oryx's Sanctuary", 'Ancient Ruins', 'High Tech Terror',
                'Sulfurous Wetlands', 'Spectral Penitentiary'
            ],
            bonusExp: 10,
            bonusFame: 5000
        },
        {
            id: 'heroOfTheNexus',
            name: 'Hero of the Nexus',
            description: '+12.5% Exp, +5,000 Fame',
            requirements: [
                'Pirate Cave', 'Forest Maze', 'Spider Den', 'Snake Pit', 'Forbidden Jungle',
                'The Hive', 'Ancient Ruins', 'Magic Woods', 'Sprite World', 'Candyland Hunting Grounds',
                'Cave of a Thousand Treasures', 'Undead Lair', 'Abyss of Demons', 'Manor of the Immortals',
                "Puppet Master's Theatre", 'Toxic Sewers', 'Cursed Library', 'Haunted Cemetery',
                'Mad Lab', 'Parasite Chambers', "Davy Jones' Locker", 'Mountain Temple',
                'The Third Dimension', 'Lair of Draconis', 'Deadwater Docks', 'Woodland Labyrinth',
                'The Crawling Depths', 'Ocean Trench', 'Ice Cave', 'Tomb of the Ancients',
                'Fungal Cavern', 'Crystal Cavern', 'The Nest', 'The Shatters', 'Lost Halls',
                'Cultist Hideout', 'The Void', 'Sulfurous Wetlands', 'Kogbold Steamworks',
                "Oryx's Castle", 'Lair of Shaitan', "Puppet Master's Encore", 'Cnidarian Reef',
                'Secluded Thicket', 'High Tech Terror', "Oryx's Chamber", 'Wine Cellar',
                "Oryx's Sanctuary", 'Spectral Penitentiary'
            ],
            bonusExp: 12.5,
            bonusFame: 5000
        },
        {
            id: 'seasonsBeatins',
            name: "Season's Beatins",
            description: '+12.5% Exp, +5,000 Fame',
            requirements: [
                "Belladonna's Garden", 'Ice Tomb', 'Mad God Mayhem', 'Battle for the Nexus',
                "Santa's Workshop", 'The Machine', 'Malogia', 'Untaris', 'Forax', 'Katalund',
                'Rainbow Road', 'Beachzone'
            ],
            bonusExp: 12.5,
            bonusFame: 5000
        },
        {
            id: 'realmOfTheMadGod',
            name: 'Realm of the Mad God',
            description: '+25% Exp, +10,000 Fame',
            requirements: [
                'Pirate Cave', 'Forest Maze', 'Spider Den', 'Snake Pit', 'Forbidden Jungle',
                'The Hive', 'Ancient Ruins', 'Magic Woods', 'Sprite World', 'Candyland Hunting Grounds',
                'Cave of a Thousand Treasures', 'Undead Lair', 'Abyss of Demons', 'Manor of the Immortals',
                "Puppet Master's Theatre", 'Toxic Sewers', 'Cursed Library', 'Haunted Cemetery',
                'Mad Lab', 'Parasite Chambers', "Davy Jones' Locker", 'Mountain Temple',
                'The Third Dimension', 'Lair of Draconis', 'Deadwater Docks', 'Woodland Labyrinth',
                'The Crawling Depths', 'Ocean Trench', 'Ice Cave', 'Tomb of the Ancients',
                'Fungal Cavern', 'Crystal Cavern', 'The Nest', 'The Shatters', 'Lost Halls',
                'Cultist Hideout', 'The Void', 'Sulfurous Wetlands', 'Kogbold Steamworks',
                "Oryx's Castle", 'Lair of Shaitan', "Puppet Master's Encore", 'Cnidarian Reef',
                'Secluded Thicket', 'High Tech Terror', "Oryx's Chamber", 'Wine Cellar',
                "Oryx's Sanctuary", "Belladonna's Garden", 'Ice Tomb', 'Mad God Mayhem',
                'Battle for the Nexus', "Santa's Workshop", 'The Machine', 'Malogia', 'Untaris',
                'Forax', 'Katalund', 'Rainbow Road', 'Beachzone', 'Spectral Penitentiary'
            ],
            bonusExp: 25,
            bonusFame: 10000
        }
    ];

    // --- New Data Management System ---
    let trackerData = {};
    const LOCAL_STORAGE_KEY = 'rotmgTrackerData';

    function createNewCharacterData() {
        const newCharData = { dungeons: {}, achievements: {} };
        dungeons.forEach(dungeon => {
            newCharData.dungeons[dungeon.name] = 0;
        });
        achievements.forEach(achievement => {
            newCharData.achievements[achievement.id + '_unlocked'] = false;
        });
        return newCharData;
    }

    function initializeCharacterDataIfNeeded(characterName) {
        if (!trackerData.characters[characterName]) {
            trackerData.characters[characterName] = createNewCharacterData();
        } else {
            const charData = trackerData.characters[characterName];
            dungeons.forEach(dungeon => {
                if (typeof charData.dungeons[dungeon.name] === 'undefined') {
                    charData.dungeons[dungeon.name] = 0;
                }
            });
            achievements.forEach(achievement => {
                if (typeof charData.achievements[achievement.id + '_unlocked'] === 'undefined') {
                    charData.achievements[achievement.id + '_unlocked'] = false;
                }
            });
        }
    }
    
    function loadTrackerData() {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (data) {
            trackerData = JSON.parse(data);
            if (!trackerData.characters) trackerData.characters = {};

            // Initialize or validate characterOrder
            if (!Array.isArray(trackerData.characterOrder)) {
                // If characterOrder doesn't exist or isn't an array, create it from existing character keys
                // This provides a best-effort order for data from before characterOrder was introduced.
                trackerData.characterOrder = Object.keys(trackerData.characters);
            } else {
                // Ensure characterOrder is consistent with characters object (remove orphans)
                trackerData.characterOrder = trackerData.characterOrder.filter(name => trackerData.characters.hasOwnProperty(name));
                // Ensure all characters in characters object are in characterOrder (add missing)
                Object.keys(trackerData.characters).forEach(name => {
                    if (!trackerData.characterOrder.includes(name)) {
                        trackerData.characterOrder.push(name); // Add to end if missing, order might be not original but char is present
                    }
                });
            }
            
            const characterNames = trackerData.characterOrder; // Use ordered list
            if (!trackerData.currentCharacterName || !trackerData.characters[trackerData.currentCharacterName]) {
                if (characterNames.length > 0) {
                    trackerData.currentCharacterName = characterNames[0]; // Default to first in ordered list
                } else {
                    trackerData.currentCharacterName = null;
                }
            }
        } else {
            trackerData = {
                currentCharacterName: null, 
                characters: {},
                characterOrder: [] // Initialize characterOrder for new data
            };
        }
        if (trackerData.currentCharacterName) {
            initializeCharacterDataIfNeeded(trackerData.currentCharacterName);
        }
        saveTrackerData(); 
    }

    function saveTrackerData() {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(trackerData));
    }

    function getCurrentCharacterName() {
        if (!trackerData || !trackerData.currentCharacterName) {
            // This case should ideally be handled by loadTrackerData ensuring a default
            // or the initial render creating one if the list is empty.
            // If somehow it's still null here, it might indicate an issue in the init flow.
            // For now, if renderCharacterList is called and this is null, it will try to create 'Default'
            return trackerData.currentCharacterName; // Can be null
        }
        return trackerData.currentCharacterName;
    }

    function getCurrentCharacterData() {
        const charName = getCurrentCharacterName();
        if (!charName || !trackerData.characters || !trackerData.characters[charName]) {
            console.warn(`Data for current character "${charName}" not found or charName is null. Trying to recover.`);
            // Attempt to recover or set a default if absolutely necessary
            // This might happen if all characters were deleted and state wasn't perfectly handled,
            // though current delete logic tries to prevent this.
            if (Object.keys(trackerData.characters).length > 0) {
                trackerData.currentCharacterName = Object.keys(trackerData.characters)[0];
                initializeCharacterDataIfNeeded(trackerData.currentCharacterName);
                saveTrackerData();
                return trackerData.characters[trackerData.currentCharacterName];
            } else {
                // This is a critical state - no characters exist. 
                // renderCharacterList should ideally catch this and create 'Default'.
                // Returning a new temp character data to prevent immediate errors further down,
                // but this state should be resolved by UI creating a new character.
                console.error("Critical: No characters exist. UI should prompt for creation.");
                return createNewCharacterData(); // Return a volatile new data to avoid crashes
            }
        }
        initializeCharacterDataIfNeeded(charName); 
        return trackerData.characters[charName];
    }

    function getDungeonCount(dungeonName) {
        const charData = getCurrentCharacterData();
        if (!charData || charData.dungeons[dungeonName] === undefined) { // Added !charData check
            return 0; 
        }
        return charData.dungeons[dungeonName];
    }

    function setDungeonCount(dungeonName, count) {
        const charData = getCurrentCharacterData();
        if (!charData) return; // Prevent error if charData is somehow null
        charData.dungeons[dungeonName] = count;
        saveTrackerData();
    }

    function isAchievementUnlocked(achievementId) {
        const charData = getCurrentCharacterData();
        if (!charData || charData.achievements[achievementId + '_unlocked'] === undefined) { // Added !charData check
            return false;
        }
        return charData.achievements[achievementId + '_unlocked'];
    }

    function setAchievementUnlocked(achievementId, isUnlocked) {
        const charData = getCurrentCharacterData();
        if (!charData) return; // Prevent error
        charData.achievements[achievementId + '_unlocked'] = isUnlocked;
        saveTrackerData();
    }

    function generateDefaultCharacterName() {
        let baseName = "Character";
        let counter = 1;
        let potentialName = `${baseName} ${counter}`;
        // Ensure trackerData.characters is defined before checking keys
        const existingNames = trackerData.characters ? Object.keys(trackerData.characters) : [];

        while (existingNames.includes(potentialName)) {
            counter++;
            potentialName = `${baseName} ${counter}`;
        }
        return potentialName;
    }

    function addCharacter(name) {
        if (!name || name.trim() === "") {
            console.error('Character name cannot be empty in addCharacter.');
            return false;
        }
        name = name.trim();
        if (trackerData.characters && trackerData.characters[name]) {
            console.error(`Character with name "${name}" already exists in addCharacter.`);
            return false;
        }
        initializeCharacterDataIfNeeded(name); 
        
        // Add to characterOrder
        if (!trackerData.characterOrder.includes(name)) {
            trackerData.characterOrder.push(name);
        }
        
        saveTrackerData();
        renderCharacterList(); 
        switchCharacter(name); 
        return true;
    }

    function switchCharacter(name) {
        if (trackerData.characters[name]) {
            trackerData.currentCharacterName = name;
            // initializeCharacterDataIfNeeded(name); // Already ensures data exists, not strictly needed here if addCharacter did its job
            saveTrackerData(); // Save the new current character
            refreshAllDataDisplay(); // Update dungeon grid and achievements for the new char
            renderCharacterList(); // Re-render sidebar to highlight the active character
        } else {
            console.error(`Character ${name} not found for switching.`);
        }
    }

    function promptForRename(oldName) {
        const newName = prompt(`Enter new name for character "${oldName}":`, oldName);
        if (newName && newName.trim() !== "") {
            renameCharacter(oldName, newName.trim());
        }
    }

    function renameCharacter(oldName, newName) {
        if (!newName || newName.trim() === "") {
            alert('New character name cannot be empty.');
            return;
        }
        if (newName === oldName) return;
        if (trackerData.characters[newName]) {
            alert(`Character with name "${newName}" already exists!`);
            return;
        }

        trackerData.characters[newName] = JSON.parse(JSON.stringify(trackerData.characters[oldName]));
        delete trackerData.characters[oldName];

        // Update in characterOrder
        const index = trackerData.characterOrder.indexOf(oldName);
        if (index !== -1) {
            trackerData.characterOrder[index] = newName;
        }

        if (trackerData.currentCharacterName === oldName) {
            trackerData.currentCharacterName = newName;
        }

        saveTrackerData();
        renderCharacterList(); 
        if (trackerData.currentCharacterName === newName) {
            refreshAllDataDisplay(); 
        }
    }

    function getAllCharacterNames() {
        if (!trackerData || !trackerData.characterOrder) {
            // This might happen if data is corrupted or not loaded properly
            // Fallback to keys from characters object if characterOrder is missing
            console.warn("trackerData.characterOrder not found, falling back to Object.keys from characters.");
            return Object.keys(trackerData.characters || {});
        }
        return [...trackerData.characterOrder]; // Return a copy to prevent direct modification
    }
    
    function deleteCharacter(name) {
        if (!trackerData.characters[name]) return;
        if (trackerData.characterOrder.length <= 1) { // Check length of ordered list
            alert("Cannot delete the last character. Add another character first or reset this one.");
            return;
        }

        if (confirm(`Are you sure you want to delete character "${name}"? This action cannot be undone.`)) {
            const wasCurrentCharacter = trackerData.currentCharacterName === name;
            delete trackerData.characters[name];
            
            // Remove from characterOrder
            trackerData.characterOrder = trackerData.characterOrder.filter(charName => charName !== name);
            
            if (wasCurrentCharacter) {
                // Switch to the first character in the updated ordered list, if any characters remain
                trackerData.currentCharacterName = trackerData.characterOrder.length > 0 ? trackerData.characterOrder[0] : null;
            }
            saveTrackerData();
            
            if (wasCurrentCharacter && trackerData.currentCharacterName) {
                switchCharacter(trackerData.currentCharacterName);
            } else if (wasCurrentCharacter && !trackerData.currentCharacterName) {
                 // This implies the list became empty, which the check above should prevent
                renderCharacterList(); // Will attempt to create Default if list is empty
                refreshAllDataDisplay(); 
            } else {
                renderCharacterList(); 
            }
        }
    }

    function refreshAllDataDisplay() {
        dungeonGrid.innerHTML = ''; 
        initializeDungeons();    
        renderAchievements();    
    }

    function updateDungeonBoxState(dungeonBox, count) {
        if (count > 0) {
            dungeonBox.classList.add('completed');
        } else {
            dungeonBox.classList.remove('completed');
        }
    }

    function createDungeonBox(dungeon) {
        const dungeonBox = document.createElement('div');
        dungeonBox.classList.add('dungeon-box');
        dungeonBox.dataset.dungeonName = dungeon.name;

        dungeonBox.innerHTML = `
            <img src="${dungeon.logo || genericLogo}" alt="${dungeon.name} Logo" class="dungeon-logo">
            <div class="dungeon-info">
                <div class="dungeon-name">${dungeon.name}</div>
                <div class="counter-controls">
                    <button class="counter-button decrease-button" data-dungeon="${dungeon.name}">-</button>
                    <input type="number" class="counter-input" value="0" min="0" data-dungeon="${dungeon.name}">
                    <button class="counter-button increase-button" data-dungeon="${dungeon.name}">+</button>
                </div>
            </div>
        `;

        const savedCount = getDungeonCount(dungeon.name); 
        dungeonBox.querySelector('.counter-input').value = savedCount;
        updateDungeonBoxState(dungeonBox, savedCount);

        dungeonGrid.appendChild(dungeonBox);
    }

    function initializeDungeons() {
        dungeons.forEach(dungeon => {
            createDungeonBox(dungeon);
        });
    }

    function calculateOverallBonus() {
        let totalExpBonus = 0;
        let totalFameBonus = 0;

        achievements.forEach(achievement => {
            const isUnlocked = isAchievementUnlocked(achievement.id); 
            if (isUnlocked) {
                totalExpBonus += achievement.bonusExp;
                totalFameBonus += achievement.bonusFame;
            }
        });

        if (overallBonusDisplay) {
            overallBonusDisplay.textContent = `Overall Bonus: +${totalExpBonus.toFixed(1)}% Exp, +${totalFameBonus.toLocaleString()} Fame`;
        }
    }

    function checkAchievements() {
        achievements.forEach(achievement => {
            let allRequirementsMet = true;
            let completedRequirementsCount = 0;

            achievement.requirements.forEach(reqDungeonName => {
                const dungeonCount = getDungeonCount(reqDungeonName); 
                if (dungeonCount === 0) {
                    allRequirementsMet = false;
                } else {
                    completedRequirementsCount++;
                }
            });

            const achievementElement = document.getElementById(`achievement-${achievement.id}`);
            if (achievementElement) {
                const completionStatusSpan = achievementElement.querySelector('.achievement-completion-status');
                const reqSpans = achievementElement.querySelectorAll('.achievement-requirements span');
                const wasUnlocked = isAchievementUnlocked(achievement.id); 

                if (allRequirementsMet) {
                    achievementElement.classList.add('completed');
                    completionStatusSpan.textContent = '(Completed)';
                    setAchievementUnlocked(achievement.id, true); 
                } else {
                    achievementElement.classList.remove('completed');
                    completionStatusSpan.textContent = `(${completedRequirementsCount}/${achievement.requirements.length} Dungeons)`;
                    setAchievementUnlocked(achievement.id, false); 
                }

                reqSpans.forEach(span => {
                    const dungeonName = span.dataset.dungeonName || span.textContent; 
                    const dungeonCount = getDungeonCount(dungeonName); 
                    if (dungeonCount > 0) {
                        span.classList.add('req-completed');
                    } else {
                        span.classList.remove('req-completed');
                    }
                });

                const isNowUnlocked = isAchievementUnlocked(achievement.id); 
                if (wasUnlocked !== isNowUnlocked) {
                    calculateOverallBonus();
                }
            }
        });
        calculateOverallBonus();
    }

    function renderAchievements() {
        achievementsListContainer.innerHTML = ''; 
        if (achievements.length === 0) {
            achievementsListContainer.innerHTML = '<p>No achievements defined yet.</p>';
            return;
        }

        achievements.forEach(achievement => {
            const achievementRow = document.createElement('div');
            achievementRow.classList.add('achievement-row');
            achievementRow.id = `achievement-${achievement.id}`;

            const isUnlocked = isAchievementUnlocked(achievement.id); 
            if (isUnlocked) {
                achievementRow.classList.add('completed');
            }

            const requirementsHtml = achievement.requirements.map(reqDungeon => {
                const dungeonCount = getDungeonCount(reqDungeon); 
                return `<span class="${dungeonCount > 0 ? 'req-completed' : ''}" data-dungeon-name="${reqDungeon}">${reqDungeon}</span>`;
            }).join('');

            achievementRow.innerHTML = `
                <div class="achievement-title">
                    <span>${achievement.name}</span>
                    <span class="achievement-completion-status"></span>
                </div>
                <div class="achievement-description">${achievement.description}</div>
                <div class="achievement-requirements">${requirementsHtml}</div>
            `;
            achievementsListContainer.appendChild(achievementRow);

            const reqSpans = achievementRow.querySelectorAll('.achievement-requirements span');
            reqSpans.forEach(span => {
                span.addEventListener('click', handleAchievementDungeonClick);
                span.style.cursor = 'pointer'; 
            });
        });
        checkAchievements(); 
    }

    function handleAchievementDungeonClick(event) {
        const clickedSpan = event.target;
        const dungeonName = clickedSpan.dataset.dungeonName; 
        if (!dungeonName) return;

        const dungeonBox = dungeonGrid.querySelector(`.dungeon-box[data-dungeon-name="${dungeonName}"]`);
        if (dungeonBox) {
            const input = dungeonBox.querySelector('.counter-input');
            let currentCount = getDungeonCount(dungeonName); 
            const newCount = (currentCount === 0) ? 1 : 0;
            input.value = newCount;
            setDungeonCount(dungeonName, newCount); 
            updateDungeonBoxState(dungeonBox, newCount);
            renderAchievements(); 
        }
    }

    dungeonGrid.addEventListener('click', (event) => {
        const target = event.target;
        const dungeonBox = target.closest('.dungeon-box');
        if (!dungeonBox) return;

        const dungeonName = dungeonBox.querySelector('.counter-input').dataset.dungeon;
        const input = dungeonBox.querySelector('.counter-input');
        let count = parseInt(input.value);

        if (target.classList.contains('decrease-button')) {
            if (count > 0) count--;
        } else if (target.classList.contains('increase-button')) {
            count++;
        } else if (!target.classList.contains('counter-input') && !target.classList.contains('counter-button')) {
            const currentStoredCount = getDungeonCount(dungeonName);
            count = (currentStoredCount === 0) ? 1 : 0;
        } else {
            return; 
        }
        input.value = count;
        setDungeonCount(dungeonName, count); 
        updateDungeonBoxState(dungeonBox, count);
        renderAchievements(); 
    });

    dungeonGrid.addEventListener('change', (event) => {
        const target = event.target;
        if (target.classList.contains('counter-input')) {
            const dungeonName = target.dataset.dungeon;
            const dungeonBox = target.closest('.dungeon-box');
            let count = parseInt(target.value);
            if (isNaN(count) || count < 0) count = 0;
            target.value = count; 
            setDungeonCount(dungeonName, count); 
            updateDungeonBoxState(dungeonBox, count);
            renderAchievements();
        }
    });

    resetButton.addEventListener('click', () => {
        const charName = getCurrentCharacterName();
        if (!charName) {
            alert("No character selected to reset.");
            return;
        }
        if (confirm(`Are you sure you want to reset all dungeon counts for character "${charName}"? This will also reset achievements for this character.`)) {
            const charData = getCurrentCharacterData();
            if (!charData) {
                 alert("Could not get character data to reset.");
                 return;
            }
            dungeons.forEach(dungeon => { charData.dungeons[dungeon.name] = 0; });
            achievements.forEach(achievement => { charData.achievements[achievement.id + '_unlocked'] = false; });
            saveTrackerData(); 
            refreshAllDataDisplay(); 
            alert(`All dungeon counts and achievements for character "${charName}" have been reset!`);
        }
    });

    function renderCharacterList() { 
        if (!characterListDiv) {
            console.error("characterListDiv not found in renderCharacterList. Cannot render character list.");
            return;
        }

        characterListDiv.innerHTML = ''; 
        const characterNames = getAllCharacterNames();
        const currentActiveCharacter = getCurrentCharacterName();

        if (characterNames.length === 0) { // Simplified: if no characters, try to add Default
             console.log("No characters exist, attempting to create default.");
             if (!addCharacter("Default")) { // addCharacter will handle switching and re-rendering
                console.error("Failed to create and set Default character.");
                // If Default cannot be created, the list remains empty. UI should reflect this.
             }
             return; // addCharacter will trigger necessary re-renders via switchCharacter
        }

        characterNames.forEach(name => {
            const characterItem = document.createElement('div');
            characterItem.classList.add('character-item'); 
            characterItem.dataset.characterName = name;

            const nameSpan = document.createElement('span');
            nameSpan.classList.add('character-item-name');
            nameSpan.textContent = name;
            nameSpan.addEventListener('click', () => { 
                if (name !== getCurrentCharacterName()) {
                    switchCharacter(name);
                }
            });

            const actionsDiv = document.createElement('div');
            actionsDiv.classList.add('character-item-actions');

            const renameIcon = document.createElement('button');
            renameIcon.innerHTML = '&#9998;'; 
            renameIcon.classList.add('char-action-icon', 'rename-icon');
            renameIcon.title = `Rename ${name}`;
            renameIcon.addEventListener('click', (e) => {
                e.stopPropagation(); 
                promptForRename(name);
            });

            const deleteIcon = document.createElement('button'); 
            deleteIcon.innerHTML = '&#10005;'; 
            deleteIcon.classList.add('char-action-icon', 'delete-icon');
            deleteIcon.title = `Delete ${name}`;
            deleteIcon.addEventListener('click', (e) => {
                e.stopPropagation(); 
                deleteCharacter(name);
            });

            actionsDiv.appendChild(renameIcon);
            actionsDiv.appendChild(deleteIcon);

            characterItem.appendChild(nameSpan);
            characterItem.appendChild(actionsDiv);
            
            if (name === currentActiveCharacter) {
                characterItem.classList.add('active'); 
            }
            characterListDiv.appendChild(characterItem);
        });
    }
    
    // Initial Setup Flow:
    loadTrackerData(); // 1. Load data from localStorage or initialize empty structure

    // 2. Setup Character Management UI Listeners
    if (showAddCharacterInputButton) { // This is the '+' button
        showAddCharacterInputButton.addEventListener('click', () => {
            // Hide the (now obsolete) input field section if it was somehow visible
            if (addCharacterControls) { 
                addCharacterControls.style.display = 'none';
            }
            
            const defaultName = generateDefaultCharacterName();
            if (addCharacter(defaultName)) {
                // Successfully added, now prompt to rename this newly added character
                // A brief timeout can sometimes help ensure the UI updates (new char selected)
                // before the prompt appears, especially if there are many operations.
                setTimeout(() => {
                    promptForRename(defaultName);
                }, 100); // 100ms delay, can be adjusted or removed if not needed
            }
        });
    } else {
        console.warn("Add character button (showAddCharacterInputButton) not found.");
    }

    // REMOVE event listeners for confirmAddCharacterButton and newCharacterNameInput related to the old input field
    // The elements themselves (addCharacterControls, newCharacterNameInput, confirmAddCharacterButton) will be removed from HTML later.
    
    // 3. Initial Render of UI based on loaded data
    renderCharacterList(); 
    if (getCurrentCharacterName()) { 
        refreshAllDataDisplay(); 
    } else {
        dungeonGrid.innerHTML = '<p style="text-align:center; color: var(--cyber-text-secondary);">No character selected. Add one to begin!</p>';
        achievementsListContainer.innerHTML = '<p style="text-align:center; color: var(--cyber-text-secondary);">No character selected.</p>';
        if(overallBonusDisplay) overallBonusDisplay.textContent = 'Overall Bonus: N/A';
    }

    // --- Sidebar Toggle Functionality ---
    const SIDEBAR_STATE_KEY = 'rotmgTrackerSidebarState';

    function setSidebarState(isCollapsed) {
        if (!pageWrapper || !toggleSidebarButton) return; // Guard against missing elements
        if (isCollapsed) {
            pageWrapper.classList.add('sidebar-collapsed');
            toggleSidebarButton.textContent = '☰'; 
        } else {
            pageWrapper.classList.remove('sidebar-collapsed');
            toggleSidebarButton.textContent = '✕'; 
        }
    }

    if (toggleSidebarButton && pageWrapper) {
        toggleSidebarButton.addEventListener('click', () => {
            const isCollapsed = pageWrapper.classList.toggle('sidebar-collapsed');
            localStorage.setItem(SIDEBAR_STATE_KEY, isCollapsed ? 'collapsed' : 'expanded');
            setSidebarState(isCollapsed); 
        });

        const savedState = localStorage.getItem(SIDEBAR_STATE_KEY);
        setSidebarState(savedState === 'collapsed'); // Apply saved state or default to expanded if null/other
    } else {
        console.warn("Sidebar toggle button or page wrapper not found for toggle functionality.");
    }
});
