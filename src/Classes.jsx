

const Classes = ({resetViewHandler}) => {

    const classInfo = [
        {
            name: 'Wizard',
            pic: 'https://i.imgur.com/QAtKJFt.png',
            weapon: 'Staff',
            armour: 'Robe',
            ability: 'Spell',
            maxedHP: 670,
            maxedMP: 385,
            maxedDef: 25,
            maxedDex: 75,
            maxedVit: 40,
            maxedWis: 60,
            maxedSpd: 50,
            maxedAtk: 75,
            weaponsOfInterest: [
                {
                    weaponName: 'Staff of the Fundamental Core',
                    weaponPic: 'https://i.imgur.com/t3Ko60Q.png',
                    tier: "14",
                    projectiles: "2",
                    damage: '75-115 (average: 95)',
                    damageWithMaxedAtk: '113-174 (average: 143)',
                    dropsFrom: "Oryx the Mad God 3",
                    notes: "Most consistent staff"
                },
                {
                    weaponName: 'Superior',
                    weaponPic: 'https://i.imgur.com/y0Svuxi.png',
                    tier: "UT",
                    projectiles: "4",
                    damage: '45-75 (average: 60)',
                    damageWithMaxedAtk: '68-113 (average: 90)',
                    dropsFrom: "Chancellor Dammah",
                    notes: "True range of 5 tiles"
                },
                {
                    weaponName: 'Staff of Unholy Sacrifice',
                    weaponPic: 'https://i.imgur.com/jsi1jrb.png',
                    tier: "UT",
                    projectiles: "4",
                    damage: '130-155 (average: 142)',
                    damageWithMaxedAtk: '196-234 (average: 214)',
                    dropsFrom: "Malus",
                    notes: "Shoots backwards"
                },
                {
                    weaponName: 'Staff of the Vital Unity',
                    weaponPic: 'https://i.imgur.com/spRnVBC.png',
                    tier: "13",
                    projectiles: "2",
                    damage: '65-110 (average: 87)',
                    damageWithMaxedAtk: '98-166 (average: 131)',
                    dropsFrom: "Sage Genji, Drummer Kaguya, Dancer Miko, Archbishop Leucoryx, Chancellor Dammah, Chief Beisa, Treasurer Gemsbok, Void Entity",
                    notes: "Easiest end-game staff to get"
                }

            ],
            armoursOfInterest: [
                {
                    armourName: 'Robe of the Ancient Intellect',
                    armourPic: 'https://i.imgur.com/FFK4t7E.png',
                    tier: "15",
                    equipStats: "+75 MP, +6 ATK, +17 DEF, +8 WIS",
                    proc: "N/A",
                    dropsFrom: "Oryx the Mad God 3",
                    notes: "Most versatile robe"
                },
                {
                    armourName: 'Robe of the Mad Scientist',
                    armourPic: 'https://i.imgur.com/SwTLhZA.png',
                    tier: "UT",
                    equipStats: "+12 DEF, +5 VIT, +5 WIS",
                    proc: "20% MP discount on ability use",
                    dropsFrom: "Dr. Terrible",
                    notes: "Good robe for when you want to spam your ability"
                },
                {
                    armourName: 'Diplomatic Robe',
                    armourPic: 'https://i.imgur.com/hHyzrLB.png',
                    tier: "UT",
                    equipStats: "+11 DEF, +50 HP, +10 ATK",
                    proc: "On ability use, summon a portal that deals 125 damage and zaps enemies in a radius of 5 every .4 seconds. The portal lasts 4 seconds and has a cooldown of 8 seconds.",
                    dropsFrom: "Chancellor Dammah",
                    notes: "Best robe for crowd control"
                },
                {
                    armourName: 'Vesture of Duality',
                    armourPic: 'https://i.imgur.com/QjfsjIn.png',
                    tier: "UT",
                    equipStats: "+12 DEF, +5 SPD, +5 ATK, +40 MP",
                    proc: "On ability use, +15 ATK and -6 DEF for 5 seconds",
                    dropsFrom: "Archbishop Leucoryx",
                    notes: "Best robe for huge damage output"
                },
                {
                    armourName: 'Robe of the Star Mother',
                    armourPic: 'https://i.imgur.com/TfNgqCU.png',
                    tier: "14",
                    equipStats: "+15 DEF, +7 WIS, +5 ATK, +65 MP",
                    proc: "N/A",
                    dropsFrom: "Archbishop Leucoryx, Chancellor Dammah, Chief Beisa, Treasurer Gemsbok, Crystal Entity, Crystal Worm Mother, Killer Bee Queen, Factory Control Core, Marble Colossus, Void Entity, Twilight Archmage, The Forgotten King",
                    notes: "Easiest end-game robe to get"
                }


            ],
            abilitiesOfInterest: {

            }
        }
    ]


    return(
        <div className="w-full h-auto bg-slate-500">
            {classInfo.map((character) => {
                return (
                <div className="m-2" key={character.name}>

                    <div className="flex flex-row items-center">

                    <section className="flex flex-col items-center m-2">

                    <img src={character.pic}/>
                    <h1 className="text-white">{character.name}</h1>
                    
                    <p>Weapon: {character.weapon}</p>
                    <p>Armour: {character.armour}</p>
                    <p>Ability: {character.ability}</p>
                    </section>
                    
                    <section className=" m-2 flex flex-col">

                    <p className="text-white text-2xl">{character.name}s Maxed Stats</p>
                    <p>Maxed HP: {character.maxedHP}</p>
                    <p>Maxed MP: {character.maxedMP}</p>
                    <p>Maxed Defence: {character.maxedDef}</p>
                    <p>Maxed Dexterity: {character.maxedDex}</p>
                    <p>Maxed Speed: {character.maxedSpd}</p>
                    <p>Maxed Vitaility: {character.maxedVit}</p>
                    <p>Maxed Wisdom: {character.maxedWis}</p>
                    <p>Maxed Attack: {character.maxedAtk}</p>
                    </section>

                    </div>
                    <br/>

                    <h1 className="m-2 text-white text-2xl">Weapons of Interest</h1>
                    <section className="flex flex-row">
                    {character.weaponsOfInterest.map((weapon) => (
                        <div className="border-2 p-2">
                            <img src={weapon.weaponPic}/>
                            <h2>{weapon.weaponName}</h2>
                            <p>Tier: {weapon.tier}</p>
                            <p>Projectile Count: {weapon.projectiles}</p>
                            <p>Damage: {weapon.damage}</p>
                            <p>Damage when attack is maxed: {weapon.damageWithMaxedAtk}</p>
                            <p>Drops from: {weapon.dropsFrom}</p>
                            <p>Notes: {weapon.notes}</p>
                        </div>
                    ))}
                    </section>

                    <h1 className="m-2 text-white text-2xl">Armours of Interest</h1>
                    <section className="flex flex-row">
                    {character.armoursOfInterest.map((armour) => (
                        <div className="border-2 p-2 w-1/4">
                            <img src={armour.armourPic}/>
                            <h2>{armour.armourName}</h2>
                            <p>Tier: {armour.tier}</p>
                            <p>On Equip: {armour.equipStats}</p>
                            <p>Special Ability: {armour.proc}</p>
                            <p>Drops from: {armour.dropsFrom}</p>
                            <p>Notes: {armour.notes}</p>
                        </div>
                    ))}
                    </section>
                    
                </div>
            )})}

            <br/>
            <button onClick={resetViewHandler} className="w-24 h-10 border-black bg-slate-700 border-2 m-2 text-white">Back</button>
        </div>
    )
}

export default Classes