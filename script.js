document.addEventListener('DOMContentLoaded', () => {
    const dungeonGrid = document.getElementById('dungeonGrid');
    const resetButton = document.getElementById('resetButton');
    const achievementsListContainer = document.getElementById('achievementsList');
    // Get the element where the overall bonus will be displayed
    const overallBonusDisplay = document.getElementById('overallBonusDisplay');

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
        { name: "Puppet Master’s Theatre", logo: "https://i.imgur.com/6diBou4.png" },
        { name: "Toxic Sewers", logo: "https://i.imgur.com/4Iv5apz.png" },
        { name: "Cursed Library", logo: "https://i.imgur.com/9nQ7nSz.gif" },
        { name: "Mad Lab", logo: "https://i.imgur.com/x6dyxMp.gif" },
        { name: "Abyss of Demons", logo: "https://i.imgur.com/wId2zPS.png" },
        { name: "Manor of the Immortals", logo: "https://i.imgur.com/paEB8Qu.png" },
        { name: "Haunted Cemetery", logo: "https://i.imgur.com/VB6hMsm.gif" },
        { name: "The Machine", logo: "https://i.imgur.com/Yhd1MCq.png" },
        { name: "The Inner Working", logo: "https://i.imgur.com/v2Hm1wt.png" },
        { name: "Davy Jones’ Locker", logo: "https://i.imgur.com/Hqmoe5U.gif" },
        { name: "Ice Cave", logo: "https://i.imgur.com/PCB2ged.png" },
        { name: "Ocean Trench", logo: "https://i.imgur.com/9GR3Ypw.png" },
        { name: "The Crawling Depths", logo: "https://i.imgur.com/V1rfmTa.gif" },
        { name: "Woodland Labyrinth", logo: "https://i.imgur.com/jyKYlZg.gif" },
        { name: "Deadwater Docks", logo: "https://i.imgur.com/baXW11C.png" },
        { name: "Puppet Master’s Encore", logo: "https://i.imgur.com/UhdCm8R.png" },
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
        { name: "Oryx’s Castle", logo: "https://i.imgur.com/dLVOZiv.png" },
        { name: "Oryx’s Chamber", logo: "https://i.imgur.com/dLVOZiv.png" },
        { name: "Wine Cellar", logo: "https://i.imgur.com/ozNWFFN.png" },
        { name: "Oryx’s Sanctuary", logo: "https://i.imgur.com/JGnMCv2.png" },
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
        { name: "Santa’s Workshop", logo: "https://i.imgur.com/oX3aVA2.png" },
        { name: "Ice Tomb", logo: "https://i.imgur.com/zhWVACc.png" },
        { name: "Battle for the Nexus", logo: "https://i.imgur.com/zyCjq2l.png" },
        { name: "Belladonna’s Garden", logo: "https://i.imgur.com/iIG3NIj.png" },
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
                'Magic Woods', 'Puppet Master’s Theatre', 'Haunted Cemetery', 'Cursed Library',
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
                'Lair of Shaitan', 'Puppet Master’s Encore', 'Cnidarian Reef', 'Secluded Thicket',
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
                'Oryx’s Castle', 'Oryx’s Chamber', 'Wine Cellar'
            ],
            bonusExp: 7.5,
            bonusFame: 3000
        },
        {
            id: 'explosiveJourney',
            name: 'Explosive Journey',
            description: '+7.5% Exp, +3,000 Fame',
            requirements: [
                'Davy Jones’ Locker', 'Mad Lab', 'Candyland Hunting Grounds', 'Haunted Cemetery',
                'Cave of a Thousand Treasures', 'Lair of Draconis', 'Deadwater Docks',
                'Woodland Labyrinth', 'The Crawling Depths', 'The Shatters', 'Lair of Shaitan',
                'Puppet Master’s Theatre', 'Ice Cave'
            ],
            bonusExp: 7.5,
            bonusFame: 3000
        },
        {
            id: 'conquerorOfTheRealm',
            name: 'Conqueror of the Realm',
            description: '+10% Exp, +4,000 Fame',
            requirements: [
                'Davy Jones’ Locker', 'Ice Cave', 'Lair of Draconis', 'Mountain Temple',
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
                'Puppet Master’s Encore', 'The Hive', 'Toxic Sewers', 'Mountain Temple',
                'The Third Dimension', 'The Nest', 'Lost Halls', 'Cultist Hideout', 'The Void',
                'Cnidarian Reef', 'Parasite Chambers', 'Magic Woods', 'Secluded Thicket',
                'Cursed Library', 'Oryx’s Sanctuary', 'Ancient Ruins', 'High Tech Terror',
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
                'Puppet Master’s Theatre', 'Toxic Sewers', 'Cursed Library', 'Haunted Cemetery',
                'Mad Lab', 'Parasite Chambers', 'Davy Jones’ Locker', 'Mountain Temple',
                'The Third Dimension', 'Lair of Draconis', 'Deadwater Docks', 'Woodland Labyrinth',
                'The Crawling Depths', 'Ocean Trench', 'Ice Cave', 'Tomb of the Ancients',
                'Fungal Cavern', 'Crystal Cavern', 'The Nest', 'The Shatters', 'Lost Halls',
                'Cultist Hideout', 'The Void', 'Sulfurous Wetlands', 'Kogbold Steamworks',
                'Oryx’s Castle', 'Lair of Shaitan', 'Puppet Master’s Encore', 'Cnidarian Reef',
                'Secluded Thicket', 'High Tech Terror', 'Oryx’s Chamber', 'Wine Cellar',
                'Oryx’s Sanctuary', 'Spectral Penitentiary'
            ],
            bonusExp: 12.5,
            bonusFame: 5000
        },
        {
            id: 'seasonsBeatins',
            name: 'Season\'s Beatins',
            description: '+12.5% Exp, +5,000 Fame',
            requirements: [
                'Belladonna’s Garden', 'Ice Tomb', 'Mad God Mayhem', 'Battle for the Nexus',
                'Santa’s Workshop', 'The Machine', 'Malogia', 'Untaris', 'Forax', 'Katalund',
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
                'Puppet Master’s Theatre', 'Toxic Sewers', 'Cursed Library', 'Haunted Cemetery',
                'Mad Lab', 'Parasite Chambers', 'Davy Jones’ Locker', 'Mountain Temple',
                'The Third Dimension', 'Lair of Draconis', 'Deadwater Docks', 'Woodland Labyrinth',
                'The Crawling Depths', 'Ocean Trench', 'Ice Cave', 'Tomb of the Ancients',
                'Fungal Cavern', 'Crystal Cavern', 'The Nest', 'The Shatters', 'Lost Halls',
                'Cultist Hideout', 'The Void', 'Sulfurous Wetlands', 'Kogbold Steamworks',
                'Oryx’s Castle', 'Lair of Shaitan', 'Puppet Master’s Encore', 'Cnidarian Reef',
                'Secluded Thicket', 'High Tech Terror', 'Oryx’s Chamber', 'Wine Cellar',
                'Oryx’s Sanctuary', 'Belladonna’s Garden', 'Ice Tomb', 'Mad God Mayhem',
                'Battle for the Nexus', 'Santa’s Workshop', 'The Machine', 'Malogia', 'Untaris',
                'Forax', 'Katalund', 'Rainbow Road', 'Beachzone', 'Spectral Penitentiary'
            ],
            bonusExp: 25,
            bonusFame: 10000
        }
    ];

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
            <img src="${dungeon.logo}" alt="${dungeon.name} Logo" class="dungeon-logo">
            <div class="dungeon-info">
                <div class="dungeon-name">${dungeon.name}</div>
                <div class="counter-controls">
                    <button class="counter-button decrease-button" data-dungeon="${dungeon.name}">-</button>
                    <input type="number" class="counter-input" value="0" min="0" data-dungeon="${dungeon.name}">
                    <button class="counter-button increase-button" data-dungeon="${dungeon.name}">+</button>
                </div>
            </div>
        `;

        const savedCount = parseInt(localStorage.getItem(dungeon.name) || '0');
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
            const isUnlocked = localStorage.getItem(achievement.id + '_unlocked') === 'true';
            if (isUnlocked) {
                totalExpBonus += achievement.bonusExp;
                totalFameBonus += achievement.bonusFame;
            }
        });

        // Update the display element
        if (overallBonusDisplay) {
            overallBonusDisplay.textContent = `Overall Bonus: +${totalExpBonus.toFixed(1)}% Exp, +${totalFameBonus.toLocaleString()} Fame`;
        }
    }


    function checkAchievements() {
        achievements.forEach(achievement => {
            let allRequirementsMet = true;
            let completedRequirementsCount = 0;

            achievement.requirements.forEach(reqDungeonName => {
                const dungeonCount = parseInt(localStorage.getItem(reqDungeonName) || '0');
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

                // Determine if the achievement *was* unlocked before this check
                const wasUnlocked = localStorage.getItem(achievement.id + '_unlocked') === 'true';

                if (allRequirementsMet) {
                    achievementElement.classList.add('completed');
                    completionStatusSpan.textContent = '(Completed)';
                    localStorage.setItem(achievement.id + '_unlocked', 'true');
                } else {
                    achievementElement.classList.remove('completed');
                    completionStatusSpan.textContent = `(${completedRequirementsCount}/${achievement.requirements.length} Dungeons)`;
                    localStorage.setItem(achievement.id + '_unlocked', 'false');
                }

                reqSpans.forEach(span => {
                    const dungeonName = span.textContent; // Get the dungeon name from the span's text
                    const dungeonCount = parseInt(localStorage.getItem(dungeonName) || '0');
                    if (dungeonCount > 0) {
                        span.classList.add('req-completed');
                    } else {
                        span.classList.remove('req-completed');
                    }
                });

                // If completion status changed, recalculate overall bonus
                const isNowUnlocked = localStorage.getItem(achievement.id + '_unlocked') === 'true';
                if (wasUnlocked !== isNowUnlocked) {
                    calculateOverallBonus();
                }
            }
        });
        calculateOverallBonus(); // Ensure bonus is calculated on initial load and reset
    }


    function renderAchievements() {
        achievementsListContainer.innerHTML = ''; // Clear previous content

        if (achievements.length === 0) {
            achievementsListContainer.innerHTML = '<p>No achievements defined yet.</p>';
            return;
        }

        achievements.forEach(achievement => {
            const achievementRow = document.createElement('div');
            achievementRow.classList.add('achievement-row');
            achievementRow.id = `achievement-${achievement.id}`;

            const isUnlocked = localStorage.getItem(achievement.id + '_unlocked') === 'true';
            if (isUnlocked) {
                achievementRow.classList.add('completed');
            }

            const requirementsHtml = achievement.requirements.map(reqDungeon => {
                const dungeonCount = parseInt(localStorage.getItem(reqDungeon) || '0');
                return `<span class="${dungeonCount > 0 ? 'req-completed' : ''}">${reqDungeon}</span>`;
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
        });

        checkAchievements(); // This will also call calculateOverallBonus
    }

    dungeonGrid.addEventListener('click', (event) => {
        const target = event.target;
        const dungeonBox = target.closest('.dungeon-box');

        if (!dungeonBox) return;

        const dungeonName = dungeonBox.querySelector('.counter-input').dataset.dungeon;
        const input = dungeonBox.querySelector('.counter-input');
        let count = parseInt(input.value);

        if (target.classList.contains('decrease-button')) {
            if (count > 0) {
                count--;
            }
        } else if (target.classList.contains('increase-button')) {
            count++;
        } else if (!target.classList.contains('counter-input')) {
            count++;
        } else {
            return;
        }

        input.value = count;
        localStorage.setItem(dungeonName, count);
        updateDungeonBoxState(dungeonBox, count);
        renderAchievements(); // This calls checkAchievements, which calls calculateOverallBonus
    });

    dungeonGrid.addEventListener('change', (event) => {
        const target = event.target;
        if (target.classList.contains('counter-input')) {
            const dungeonName = target.dataset.dungeon;
            const dungeonBox = target.closest('.dungeon-box');
            let count = parseInt(target.value);
            if (isNaN(count) || count < 0) {
                count = 0;
            }
            target.value = count;
            localStorage.setItem(dungeonName, count);
            updateDungeonBoxState(dungeonBox, count);
            renderAchievements(); // This calls checkAchievements, which calls calculateOverallBonus
        }
    });

    resetButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all dungeon counts to 0? This will also reset all achievements.')) {
            dungeons.forEach(dungeon => {
                localStorage.removeItem(dungeon.name);
                const input = dungeonGrid.querySelector(`.counter-input[data-dungeon="${dungeon.name}"]`);
                if (input) {
                    input.value = 0;
                    const dungeonBox = input.closest('.dungeon-box');
                    updateDungeonBoxState(dungeonBox, 0);
                }
            });

            achievements.forEach(achievement => {
                localStorage.removeItem(achievement.id + '_unlocked');
            });

            renderAchievements(); // This calls checkAchievements, which calls calculateOverallBonus
            alert('All dungeon counts and achievements have been reset!');
        }
    });

    initializeDungeons();
    renderAchievements(); // Initial render and calculation of overall bonus
});