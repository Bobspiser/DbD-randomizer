var RandFunc = [function () {
        randomateSurvPerks()
    },
				function () {
        randomateKillPerks()
    },
                function () {
        randomateItems()
    },
               function () {
        randomateKiller()
    },

                function () {
        randomateoffsurv()
    },
                function () {
        randomateoffkill()
    }];

// The different titles, gets chosen with click of the right button
var RandTitles = ["Random Survivor Perks",
                  "Random Killer Perks",
                  "Random Items",
                  "Random Killer",
                  "Random Offerings for Survivor",
                  "Random Offerings for Killer",
                  "Random Offerings for Killer"
                 ];

// The different descriptions, gets chosen the same way.
var RandDesc = ["These are random survivor perks",
                "These are random killer perks",
                "These are random items","Select the killers you own",
				"These are random killers",
                "These are random Offerings for Survivor",
                "These are random Offerings for Killer",
                "These are random Offerings for Killer"
               ];


/*----------------------------IMG------------------------------*/
var SurvImgSrc = [
    "<img src='css/image/roulette/survivor/AceInTheHole.png'>Ace In The Hole",
	"<img src='css/image/roulette/survivor/Adrenaline.png'>Adrenaline",
    "<img src='css/image/roulette/survivor/Aftercare.png'>Aftercare",
    "<img src='css/image/roulette/survivor/BoilOver.png'>Boil Over",
    "<img src='css/image/roulette/survivor/breakdown.png'>Breakdown",
    "<img src='css/image/roulette/survivor/pharmacy.png'>Pharmacy",
    "<img src='css/image/roulette/survivor/wakeUp.png'>Wake Up!",
    "<img src='css/image/roulette/survivor/vigil.png'>Vigil",
    "<img src='css/image/roulette/survivor/distortion.png'>Distortion",
    "<img src='css/image/roulette/survivor/bettertogether.png'>Better Toegether",
    "<img src='css/image/roulette/survivor/fixated.png'>Fixated",
    "<img src='css/image/roulette/survivor/innerstrength.png'>Inner Strength",
    "<img src='css/image/roulette/survivor/tenacity.png'>Tenacity",
    "<img src='css/image/roulette/survivor/stakeOut.png'>Stake Out",
    "<img src='css/image/roulette/survivor/windowsOfOpportunity.png'>Windows Of Opportunity",
    "<img src='css/image/roulette/survivor/solidarity.png'>Solidarity",
    "<img src='css/image/roulette/survivor/poised.png'>Poised",
    "<img src='css/image/roulette/survivor/detectivesHunch.png'>Detective's Hunch",
    "<img src='css/image/roulette/survivor/headon.png'>Head On",
    "<img src='css/image/roulette/survivor/flip-Flop.png'>Flip-Flop",
    "<img src='css/image/roulette/survivor/buckleup.png'>Buckle Up",
    "<img src='css/image/roulette/survivor/mettleofman.png'>Mettle of Man",
	"<img src='css/image/roulette/survivor/Alert.png'>Alert",
    "<img src='css/image/roulette/survivor/danceWithMe.png'>Dance With Me",
    "<img src='css/image/roulette/survivor/autodidact.png'>Autodidact",
    "<img src='css/image/roulette/survivor/deliverance.png'>Deliverance",
    "<img src='css/image/roulette/survivor/diversion.png'>Diversion",
	"<img src='css/image/roulette/survivor/BalancedLanding.png'>Balanced Landing",
    "<img src='css/image/roulette/survivor/babysitter.png'>Babysitter",
    "<img src='css/image/roulette/survivor/camaraderie.png'>Camaraderie",
    "<img src='css/image/roulette/survivor/secondwind.png'>Second Wind",
	"<img src='css/image/roulette/survivor/Bond.png'>Bond",
	"<img src='css/image/roulette/survivor/BorrowedTime.png'>Borrowed Time",
	"<img src='css/image/roulette/survivor/BotanyKnowledge.png'>Botany Knowledge",
	"<img src='css/image/roulette/survivor/CalmSpirit.png'>Calm Spirit",
	"<img src='css/image/roulette/survivor/DarkSense.png'>Dark Sense",
	"<img src='css/image/roulette/survivor/DeadHard.png'>Dead Hard",
	"<img src='css/image/roulette/survivor/DecisiveStrike.png'>Decisive Strike",
	"<img src='css/image/roulette/survivor/DejaVu.png'>Deja Vu",
	"<img src='css/image/roulette/survivor/Empathy.png'>Empathy",
	"<img src='css/image/roulette/survivor/Hope.png'>Hope",
	"<img src='css/image/roulette/survivor/IronWill.png'>Iron Will",
	"<img src='css/image/roulette/survivor/Kindred.png'>Kindred",
	"<img src='css/image/roulette/survivor/Leader.png'>Leader",
	"<img src='css/image/roulette/survivor/LeftBehind.png'>Left Behind",
	"<img src='css/image/roulette/survivor/Lightweight.png'>Lightweight",
	"<img src='css/image/roulette/survivor/Lithe.png'>Lithe",
	"<img src='css/image/roulette/survivor/NoMither.png'>No Mither",
	"<img src='css/image/roulette/survivor/NoOneLeftBehind.png'>No One Left Behind",
	"<img src='css/image/roulette/survivor/ObjectOfObsession.png'>Object Of Obsession",
	"<img src='css/image/roulette/survivor/Open-Handed.png'>Open Handed",
	"<img src='css/image/roulette/survivor/PlunderersInstinct.png'>Plunderers Instinct",
	"<img src='css/image/roulette/survivor/Premonition.png'>Premonition",
	"<img src='css/image/roulette/survivor/ProveThyself.png'>Prove Thyself",
	"<img src='css/image/roulette/survivor/QuickAndQuiet.png'>Quick & Quiet",
	"<img src='css/image/roulette/survivor/Resilience.png'>Resilience",
	"<img src='css/image/roulette/survivor/Saboteur.png'>Saboteur",
	"<img src='css/image/roulette/survivor/SelfCare.png'>Self Care",
	"<img src='css/image/roulette/survivor/SlipperyMeat.png'>Slippery Meat",
	"<img src='css/image/roulette/survivor/SmallGame.png'>Small Game",
	"<img src='css/image/roulette/survivor/SoleSurvivor.png'>Sole Survivor",
	"<img src='css/image/roulette/survivor/SpineChill.png'>Spine Chill",
	"<img src='css/image/roulette/survivor/SprintBurst.png'>Sprint Burst",
	"<img src='css/image/roulette/survivor/StreetWise.png'>Streetwise",
	"<img src='css/image/roulette/survivor/Thisisnothappening.png'>This Is Not Happening",
	"<img src='css/image/roulette/survivor/Technician.png'>Technician",
	"<img src='css/image/roulette/survivor/UpTheAnte.png'>Up The Ante",
	"<img src='css/image/roulette/survivor/Unbreakable.png'>Unbreakable",
	"<img src='css/image/roulette/survivor/UrbanEvasion.png'>Urban Evasion",
    "<img src='css/image/roulette/survivor/WellMakeIt.png'>We'll Make It",
    "<img src='css/image/roulette/survivor/WereGonnaLiveForever.png'>Were Gonna Live Forever",
    "<img src='css/image/roulette/survivor/anyMeansNecessary.png'>Any Mean's Necessary",
    "<img src='css/image/roulette/survivor/breakout.png'>Breakout",
    "<img src='css/image/roulette/survivor/luckyBreak.png'>Lucky Break",
    "<img src='css/image/roulette/survivor/forThePeople.png'>For the People",
    "<img src='css/image/roulette/survivor/offTheRecord.png'>Off the Record",
    "<img src='css/image/roulette/survivor/redHerring.png'>Red Herring",
    "<img src='css/image/roulette/survivor/bloodPact.png'>Blood Pact",
    "<img src='css/image/roulette/survivor/repressedAlliance.png'>Repressed Alliance",
    "<img src='css/image/roulette/survivor/soulGuard.png'>Sould Guard",
    "<img src='css/image/roulette/survivor/builtToLast.png'>Built to Last",
    "<img src='css/image/roulette/survivor/desperateMeasures.png'>Desperate Measures",
    "<img src='css/image/roulette/survivor/visionary.png'>Visionary",
    "<img src='css/image/roulette/survivor/appraisal.png'>Appraisal",
    "<img src='css/image/roulette/survivor/deception.png'>Deception",
    "<img src='css/image/roulette/survivor/powerStruggle.png'>Power Struggle",
    "<img src='css/image/roulette/survivor/fastTrack.png'>Fast Track",
    "<img src='css/image/roulette/survivor/self-Preservation.png'>Self-Preservation",
    "<img src='css/image/roulette/survivor/smashHit.png'>Smash Hit",
    "<img src='css/image/roulette/survivor/blastMine.png'>Blast Mine",
    "<img src='css/image/roulette/survivor/counterforce.png'>Counterforce",
    "<img src='css/image/roulette/survivor/resurgence.png'>Resurgence",
    "<img src='css/image/roulette/survivor/biteTheBullet.png'>Bite the Bullet",
    "<img src='css/image/roulette/survivor/flashbang.png'>Flashbang",
    "<img src='css/image/roulette/survivor/rookieSpirit.png'>Rookie Spirit"

];



var Killer = [
     "<img src='css/image/roulette/kill/BE.png'>The Huntress",
     "<img src='css/image/roulette/kill/CA.png'>The Cannibal",
     "<img src='css/image/roulette/kill/DO.png'>The Doctor",
     "<img src='css/image/roulette/kill/EK.png'>The Nightmare",
     "<img src='css/image/roulette/kill/GK.png'>The Clown",
     "<img src='css/image/roulette/kill/HA.png'>The Hag",
     "<img src='css/image/roulette/kill/HB.png'>Hill Billy",
     "<img src='css/image/roulette/kill/HK.png'>The Spirit",
     "<img src='css/image/roulette/kill/KK.png'>Legion",
     "<img src='css/image/roulette/kill/MK.png'>The Plague",
     "<img src='css/image/roulette/kill/NR.png'>Nurse",
     "<img src='css/image/roulette/kill/OK.png'>Ghostface",
     "<img src='css/image/roulette/kill/QK.png'>The Demorgorgon",
     "<img src='css/image/roulette/kill/SH.png'>The Shape",
     "<img src='css/image/roulette/kill/TR.png'>The Trapper",
     "<img src='css/image/roulette/kill/WR.png'>The Wraith",
     "<img src='css/image/roulette/kill/PIG.png'>The Pig",
     "<img src='css/image/roulette/kill/ON.png'>The Oni",
     "<img src='css/image/roulette/kill/K19.png'>The Deathslinger",
     "<img src='css/image/roulette/kill/K20.png'>The Executioner",
     "<img src='css/image/roulette/kill/K21.png'>The Blight",
     "<img src='css/image/roulette/kill/K22.png'>The Twins",
     "<img src='css/image/roulette/kill/K23.png'>The Trickster",
     "<img src='css/image/roulette/kill/K24.png'>The Nemesis",
     "<img src='css/image/roulette/kill/K25.png'>Pinhead",
     "<img src='css/image/roulette/kill/K26.png'>The Artist",
];

var KillImgSrc = [
    "<img src='css/image/roulette/killer/ANursesCalling.png'>A Nurse's Calling",
	"<img src='css/image/roulette/killer/Agitation.png'>Agitation",
	"<img src='css/image/roulette/killer/barbecueAndChilli.png'>Barbecue & Chilli",
	"<img src='css/image/roulette/killer/BeastOfPrey.png'>Beast of Prey",
    "<img src='css/image/roulette/killer/Bamboozle.png'>Bamboozle",
    "<img src='css/image/roulette/killer/Coulrophobia.png'>Coulrophobia",
	"<img src='css/image/roulette/killer/BitterMurmur.png'>Bitter Murmur",
    "<img src='css/image/roulette/killer/corruptintervention.png'>Corrupt Intervention",
    "<img src='css/image/roulette/killer/infectiousfright.png'>Infectious Fright",
    "<img src='css/image/roulette/killer/darkdevotion.png'>Dark Devotion",
    "<img src='css/image/roulette/killer/surge.png'>Surge",
    "<img src='css/image/roulette/killer/mindbreaker.png'>Mindbreaker",
    "<img src='css/image/roulette/killer/cruellimits.png'>Cruel Limits",
    "<img src='css/image/roulette/killer/discordance.png'>Discordance",
    "<img src='css/image/roulette/killer/madgrit.png'>Mad Grit",
    "<img src='css/image/roulette/killer/ironmaiden.png'>Iron Maiden",
    "<img src='css/image/roulette/killer/popgoestheweasel.png'>Pop Goes the Weasel",
    "<img src='css/image/roulette/killer/Bloodwarden.png'>Blood Warden",
    "<img src='css/image/roulette/killer/imallears.png'>I'm All Ears",
    "<img src='css/image/roulette/killer/thrillingtremors.png'>Thrilling Tremors",
    "<img src='css/image/roulette/killer/furtivechase.png'>Furtive Chase",
    "<img src='css/image/roulette/killer/fireup.png'>Fire Up",
    "<img src='css/image/roulette/killer/rememberme.png'>Remember Me",
    "<img src='css/image/roulette/killer/hangmanstrick.png'>Hangman's Trick",
    "<img src='css/image/roulette/killer/surveillance.png'>Surveillance",
    "<img src='css/image/roulette/killer/Makeyourchoice.png'>Make Your Choice",
    "<img src='css/image/roulette/killer/spiritfury.png'>Spirit Fury",
    "<img src='css/image/roulette/killer/hexhauntedground.png'>Hex: Haunted Ground",
    "<img src='css/image/roulette/killer/Rancor.png'>Rancor",
    "<img src='css/image/roulette/killer/Bloodhound.png'>Bloodhound",
    "<img src='css/image/roulette/killer/BrutalStrength.png'>Brutal Strength",
    "<img src='css/image/roulette/killer/Deerstalker.png'>Deerstalker",
    "<img src='css/image/roulette/killer/Distressing.png'>Distressing",
    "<img src='css/image/roulette/killer/DyingLight.png'>Dying Light",
    "<img src='css/image/roulette/killer/Enduring.png'>Enduring",
    "<img src='css/image/roulette/killer/FranklinsDemise.png'>Franklins Demise",
    "<img src='css/image/roulette/killer/Insidious.png'>Insidious",
    "<img src='css/image/roulette/killer/IronGrasp.png'>Iron Grasp",
    "<img src='css/image/roulette/killer/HexDevourHope.png'>Hex: Devour Hope",
    "<img src='css/image/roulette/killer/HexNoOneEscapesDeath.png'>Hex: No One Escapes Death",
    "<img src='css/image/roulette/killer/HexRuin.png'>Hex: Ruin",
    "<img src='css/image/roulette/killer/HexTheThirdSeal.png'>Hex: The Third Seal",
    "<img src='css/image/roulette/killer/HexThrillOfTheHunt.png'>Hex: Thrill Of The Hunt",
    "<img src='css/image/roulette/killer/HexHuntressLullaby.png'>Hex: Huntress Lullaby",
    "<img src='css/image/roulette/killer/Knockout.png'>Knockout",
    "<img src='css/image/roulette/killer/Lightborn.png'>Lightborn",
    "<img src='css/image/roulette/killer/MonitorAndAbuse.png'>Monitor & Abuse",
    "<img src='css/image/roulette/killer/MonstrousShrine.png'>Monstrous Shrine",
    "<img src='css/image/roulette/killer/Overcharge.png'>Overcharge",
    "<img src='css/image/roulette/killer/OverwhelmingPresence.png'>Overwhelming Presence",
    "<img src='css/image/roulette/killer/PlayWithYourFood.png'>Play With Your Food",
    "<img src='css/image/roulette/killer/Predator.png'>Predator",
    "<img src='css/image/roulette/killer/SaveTheBestForLast.png'>Save The Best For Last",
    "<img src='css/image/roulette/killer/Shadowborn.png'>Shadowborn",
    "<img src='css/image/roulette/killer/SloppyButcher.png'>Sloppy Butcher",
    "<img src='css/image/roulette/killer/SpiesFromTheShadows.png'>Spies From The Shadows",
    "<img src='css/image/roulette/killer/Stridor.png'>Stridor",
    "<img src='css/image/roulette/killer/TerritorialImperative.png'>Territorial Imperative",
    "<img src='css/image/roulette/killer/Tinkerer.png'>Tinkerer",
    "<img src='css/image/roulette/killer/Thanatophobia.png'>Thanatophobia",
    "<img src='css/image/roulette/killer/UnnervingPresence.png'>Unnerving Presence",
    "<img src='css/image/roulette/killer/Unrelenting.png'>Unrelenting",
    "<img src='css/image/roulette/killer/Whispers.png'>Whispers",
    "<img src='css/image/roulette/killer/BloodEcho.png'>Blood Echo",
    "<img src='css/image/roulette/killer/ZanshinTactics.png'>Zanshin Tactics",
    "<img src='css/image/roulette/killer/Nemesis.png'>Nemesis",
    "<img src='css/image/roulette/killer/Gearhead.png'>Gearhead",
    "<img src='css/image/roulette/killer/DeadMansSwitch.png'>Dead Man's Switch",
    "<img src='css/image/roulette/killer/HexRetribution.png'>Hex: Retribution",
    "<img src='css/image/roulette/killer/ForcedPenance.png'>Forced Penance",
    "<img src='css/image/roulette/killer/TrailOfTorment.png'>Trail of Tormen",
    "<img src='css/image/roulette/killer/Deathbound.png'>Deathbound",
    "<img src='css/image/roulette/killer/dragonsGrip.png'>Dragon's Grip",
    "<img src='css/image/roulette/killer/hexBloodFavour.png'>Hex: Blood Favour",
    "<img src='css/image/roulette/killer/hexUndying.png'>Hex: Undying",
    "<img src='css/image/roulette/killer/hoarder.png'>Hoarder",
    "<img src='css/image/roulette/killer/oppression.png'>Oppression",
    "<img src='css/image/roulette/killer/coupDeGrace.png'>Coup de Grace",
    "<img src='css/image/roulette/killer/starstruck.png'>Starstruck",
    "<img src='css/image/roulette/killer/hexCrowdControl.png'>Hex: Crowd Control",
    "<img src='css/image/roulette/killer/noWayOut.png'>No Way Out",
    "<img src='css/image/roulette/killer/lethalPursuer.png'>Lethal Pursuer",
    "<img src='css/image/roulette/killer/eruption.png'>Eruption",
    "<img src='css/image/roulette/killer/hysteria.png'>Hysteria",
    "<img src='css/image/roulette/killer/hexPlaything.png'>Hex: Plaything",
    "<img src='css/image/roulette/killer/scourgeHookGiftOfPain.png'>Scourge Hook: Gift Of Pain",
    "<img src='css/image/roulette/killer/no-image.png'>Deadlock",
    "<img src='css/image/roulette/killer/no-image.png'>Grim Embrace",
    "<img src='css/image/roulette/killer/no-image.png'>Scourge Hook: Pain Resonance",
    "<img src='css/image/roulette/killer/no-image.png'>Hex: Pentimento",
];
    
var Items = [
    "Medkit",
    "Map",
    "Toolbox",
    "Key",
    "Flashlight",
    "Firecracker",
];

var Medkit = [
    "<img src='css/image/roulette/items/campingAidKit.png'>Camping Aid Kit",
    "<img src='css/image/roulette/items/emergencyMed-kit.png'>Emergency Med-Kit",
    "<img src='css/image/roulette/items/rangermed-kit.png'>Ranger Med-Kit",
    "<img src='css/image/roulette/items/allHallowsEveLunchbox.png'>All Hallow' Eve Lunchbox",
    "<img src='css/image/roulette/items/firstaidkit.png'>First Aid Kit"
];
var Key = [
    "<img src='css/image/roulette/items/skeletonkey.png'>Skeleton Key",
    "<img src='css/image/roulette/items/dullkey.png'>Dull Key",
    "<img src='css/image/roulette/items/brokenkey.png'>Broken Key",
];
var Toolbox = [
    "<img src='css/image/roulette/items/worn-outTools.png'>Worn-Out Tools",
    "<img src='css/image/roulette/items/toolboxitem.png'>Toolbox",
    "<img src='css/image/roulette/items/mechanicsToolbox.png'>Mechanic's Toolbox",
    "<img src='css/image/roulette/items/commodioustoolbox.png'>Commodious Toolbox",
    "<img src='css/image/roulette/items/engineersToolbox.png'>Engineer's Toolbox",
    "<img src='css/image/roulette/items/alexsToolbox.png'>Alex's Toolbox",
];
var Map = [
    "<img src='css/image/roulette/items/rainbowmap.png'>Rainbow Map",
    "<img src='css/image/roulette/items/mapitem.png'>Map",
];
var Flashlight = [
    "<img src='css/image/roulette/items/flashlightItem.png'>Flashligt",
    "<img src='css/image/roulette/items/sportFlashlight.png'>Sport Flashlight",
    "<img src='css/image/roulette/items/utilityFlashlight.png'>Utility Flashlight",
    "<img src='css/image/roulette/items/willOwisp.png'>Will O'Wisp",
];

var Firecracker = [
    "<img src='css/image/roulette/items/chinesefirecracker.png'>Chinese Firecracker",
    "<img src='css/image/roulette/items/winterPartyStarter.png'>Winter Party Starter",
    "<img src='css/image/roulette/items/partyPopper.png'>Party Popper"
];

var keyadd = [
    "<img src='css/image/roulette/ItemAddons/Keyaddons/bloodAmber.png'>Blood Amber",
    "<img src='css/image/roulette/ItemAddons/Keyaddons/erodedToken.png'>Eroded Token",
     "<img src='css/image/roulette/ItemAddons/Keyaddons/goldToken.png'>Gold Token",
     "<img src='css/image/roulette/ItemAddons/Keyaddons/milkyGlass.png'>Milky Glass",
     "<img src='css/image/roulette/ItemAddons/Keyaddons/prayerBeads.png'>Prayer Beads",
     "<img src='css/image/roulette/ItemAddons/Keyaddons/prayerRope.png'>Prayer Rope",
     "<img src='css/image/roulette/ItemAddons/Keyaddons/scratchedPearl.png'>Scratched Pearl",
     "<img src='css/image/roulette/ItemAddons/Keyaddons/uniqueWeddingRing.png'>Unigue Wedding Ring",
     "<img src='css/image/roulette/ItemAddons/Keyaddons/weavedRing.png'>Weaved Ring",
];

var medkitadd = [
     "<img src='css/image/roulette/ItemAddons/Medkitaddons/abdominalDressing.png'>Abdominal Dressing",
     "<img src='css/image/roulette/ItemAddons/Medkitaddons/anti-haemorrhagicSyringe.png'>Anti-Haemorrhagic Syringe",
     "<img src='css/image/roulette/ItemAddons/Medkitaddons/bandages.png'>Bandages",
     "<img src='css/image/roulette/ItemAddons/Medkitaddons/butterflyTape.png'>Butterfly Tape",
     "<img src='css/image/roulette/ItemAddons/Medkitaddons/gauzeRoll.png'>Gauze Roll",
     "<img src='css/image/roulette/ItemAddons/Medkitaddons/gelDressings.png'>Gel Dressings",
     "<img src='css/image/roulette/ItemAddons/Medkitaddons/medicalScissors.png'>Medical Scissors",
     "<img src='css/image/roulette/ItemAddons/Medkitaddons/rubberGloves.png'>Rubber Gloves",
     "<img src='css/image/roulette/ItemAddons/Medkitaddons/selfAdherentWrap.png'>Self Adherent Wrap",
     "<img src='css/image/roulette/ItemAddons/Medkitaddons/sponge.png'>Sponge",
     "<img src='css/image/roulette/ItemAddons/Medkitaddons/stypticAgent.png'>Styptic Agent",
     "<img src='css/image/roulette/ItemAddons/Medkitaddons/surgicalSuture.png'>Surgical Suture",
];

var mapadd = [
    "<img src='css/image/roulette/ItemAddons/Mapaddons/blackSilkCord.png'>Black Silk Cord",
    "<img src='css/image/roulette/ItemAddons/Mapaddons/crystalBead.png'>Crystal Bead",
    "<img src='css/image/roulette/ItemAddons/Mapaddons/glassBead.png'>Glass Bead",
    "<img src='css/image/roulette/ItemAddons/Mapaddons/mapAddendum.png'>Map Addendum",
    "<img src='css/image/roulette/ItemAddons/Mapaddons/oddStamp.png'>Odd Stamp",
    "<img src='css/image/roulette/ItemAddons/Mapaddons/redTwine.png'>Red Twine",
    "<img src='css/image/roulette/ItemAddons/Mapaddons/retardantJelly.png'>Retardant Jelly",
    "<img src='css/image/roulette/ItemAddons/Mapaddons/unusualStamp.png'>Unusual Stamp",
    "<img src='css/image/roulette/ItemAddons/Mapaddons/yellowWire.png'>Yellow Wire",
];

var toolboxadd = [
    "<img src='css/image/roulette/ItemAddons/Toolboxaddons/brandNewPart.png'>Brand New Part",
    "<img src='css/image/roulette/ItemAddons/Toolboxaddons/cleanRag.png'>Clean Rag",
    "<img src='css/image/roulette/ItemAddons/Toolboxaddons/cuttingWire.png'>Cutting Wire",
    "<img src='css/image/roulette/ItemAddons/Toolboxaddons/gripWrench.png'>Grip Wrench",
    "<img src='css/image/roulette/ItemAddons/Toolboxaddons/hacksaw.png'>Hacksaw",
    "<img src='css/image/roulette/ItemAddons/Toolboxaddons/instructions.png'>Instructions",
    "<img src='css/image/roulette/ItemAddons/Toolboxaddons/protectiveGloves.png'>Protective Gloves",
    "<img src='css/image/roulette/ItemAddons/Toolboxaddons/scraps.png'>Scraps",
    "<img src='css/image/roulette/ItemAddons/Toolboxaddons/socketSwivels.png'>Socket Swivels",
    "<img src='css/image/roulette/ItemAddons/Toolboxaddons/springClamp.png'>Spring Clamp",
    "<img src='css/image/roulette/ItemAddons/Toolboxaddons/wireSpool.png'>Wire Spool",
];

var flashlightadd = [
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/battery.png'>Battery",
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/focusLens.png'>Focus Lens",
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/heavyDutyBattery.png'>Heavy Duty Battery",
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/high-EndSapphireLens.png'>High-End Sapphire Lens",
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/intenseHalogen.png'>Intense Halogen",
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/leatherGrip.png'>Leather Grip",
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/longLifeBattery.png'>Long Life Battery",
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/lowAmpFilament.png'>Low Amp Filament",
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/oddBulb.png'>Odd Bulb",
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/powerBulb.png'>Power Bulb",
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/rubberGrip.png'>Rubber Grip",
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/tirOptic.png'>Tir Optic",
    "<img src='css/image/roulette/ItemAddons/Flashlightaddons/wideLens.png'>Wide Lens",
];
var huntressAdd = [
    "<img src='css/image/roulette/kill/Huntress/coarseStone.png'>Coarse Stone",
    "<img src='css/image/roulette/kill/Huntress/oakHaft.png'>Oak Haft",
    "<img src='css/image/roulette/kill/Huntress/bandagedHaft.png'>Bandaged Haft",
    "<img src='css/image/roulette/kill/Huntress/amanitaToxin.png'>Amanita Toxin",
    "<img src='css/image/roulette/kill/Huntress/roseRoot.png'>Rose Root",
    "<img src='css/image/roulette/kill/Huntress/shinyPin.png'>Shiny Pin",
    "<img src='css/image/roulette/kill/Huntress/oakHaft.png'>Oak haft",
    "<img src='css/image/roulette/kill/Huntress/mannaGrassBraid.png'>Manna Grass Braid",
    "<img src='css/image/roulette/kill/Huntress/leatherLoop.png'>Leather Loop",
    "<img src='css/image/roulette/kill/Huntress/yellowedCloth.png'>Yellowed Cloth",
    "<img src='css/image/roulette/kill/Huntress/deerskinGloves.png'>Deer Skin Glove",
    "<img src='css/image/roulette/kill/Huntress/soldiersPuttee.png'>Soldiers Puttee",
    "<img src='css/image/roulette/kill/Huntress/venomousConcoction.png'>Venomous Concotion",
    "<img src='css/image/roulette/kill/Huntress/rustyHead.png'>Rusty Head",
    "<img src='css/image/roulette/kill/Huntress/woodenFox.png'>Wooden Fox",
    "<img src='css/image/roulette/kill/Huntress/flowerBabushka.png'>Flower Babushka",
    "<img src='css/image/roulette/kill/Huntress/infantryBelt.png'>Infantry Belt",
    "<img src='css/image/roulette/kill/Huntress/glowingConcoction.png'>Glowing Concotion",
    "<img src='css/image/roulette/kill/Huntress/begrimedHead.png'>Begrimed Head",
    "<img src='css/image/roulette/kill/Huntress/iridescentHead.png'>Iridescent Head",
    "<img src='css/image/roulette/kill/Huntress/weightedHead.png'>Weighted Head"
];

var cannibalAdd = [
    "<img src='css/image/roulette/kill/Bubba/vegetableOil.png'>Vegetable Oil",
    "<img src='css/image/roulette/kill/Bubba/sparkPlug.png'>Spark Plug",
    "<img src='css/image/roulette/kill/Bubba/chainsawFile.png'>Chainsaw File",
    "<img src='css/image/roulette/kill/Bubba/speedLimiter.png'>Speed Limiter",
    "<img src='css/image/roulette/kill/Bubba/shopLubricant.png'>Shop Lubricant",
    "<img src='css/image/roulette/kill/Bubba/primerBulb.png'>Primer Bulb",
    "<img src='css/image/roulette/kill/Bubba/longGuideBar.png'>Long Guide Bar",
    "<img src='css/image/roulette/kill/Bubba/knifeScratches.png'>Knife Scratches",
    "<img src='css/image/roulette/kill/Bubba/homemadeMuffler.png'>Homemade Muffler",
    "<img src='css/image/roulette/kill/Bubba/grislyChains.png'>Grisly Chains",
    "<img src='css/image/roulette/kill/Bubba/chilli.png'>Chili",
    "<img src='css/image/roulette/kill/Bubba/theGrease.png'>The Grease",
    "<img src='css/image/roulette/kill/Bubba/theBeastsMarks.png'>The Beast Marks",
    "<img src='css/image/roulette/kill/Bubba/rustedChains.png'>Rusted Chains",
    "<img src='css/image/roulette/kill/Bubba/lightChassis.png'>Light Chassis",
    "<img src='css/image/roulette/kill/Bubba/carburettorTuningGuide.png'>Carburettor Tuning Guide",
    "<img src='css/image/roulette/kill/Bubba/begrimedChains.png'>Begrimed Chains",
    "<img src='css/image/roulette/kill/Bubba/award-winningChilli.png'>Award Winning Chilli",
    "<img src='css/image/roulette/kill/Bubba/iridescentFlesh.png'>Iridescent Flesh"
];

var doctorAdd = [
    "<img src='css/image/roulette/kill/Doctor/moldyElectrode.png'>Moldy Electrode",
    "<img src='css/image/roulette/kill/Doctor/mapleKnight.png'>Maple Knight",
    "<img src='css/image/roulette/kill/Doctor/orderClassI.png'>Order Class I",
    "<img src='css/image/roulette/kill/Doctor/calmClassI.png'>Calm Class I",
    "<img src='css/image/roulette/kill/Doctor/scrappedTape.png'>Scrapped Tape",
    "<img src='css/image/roulette/kill/Doctor/polishedElectrode.png'>Polished Electrode",
    "<img src='css/image/roulette/kill/Doctor/interviewTape.png'>Interview Tape",
    "<img src='css/image/roulette/kill/Doctor/restraintClassII.png'>Restraint Class II",
    "<img src='css/image/roulette/kill/Doctor/orderClassII.png'>Order Class II",
    "<img src='css/image/roulette/kill/Doctor/disciplineClassII.png'>Discipline Class II",
    "<img src='css/image/roulette/kill/Doctor/calmClassII.png'>Calm Class II",
    "<img src='css/image/roulette/kill/Doctor/highStimulusElectrode.png'>High Stimulus Electrode",
    "<img src='css/image/roulette/kill/Doctor/restraintClassIII.png'>Restraint Class III",
    "<img src='css/image/roulette/kill/Doctor/disciplineClassIII.png'>Discipline Class III",
    "<img src='css/image/roulette/kill/Doctor/restraintCartersNotes.png'>Restraint Carter Notes",
    "<img src='css/image/roulette/kill/Doctor/orderCartersNotes.png'>Order Carter Notes",
    "<img src='css/image/roulette/kill/Doctor/disciplineCartersNotes.png'>Discipline Carters Notes",
    "<img src='css/image/roulette/kill/Doctor/calmCartersNotes.png'>Calm Carters Notes",
    "<img src='css/image/roulette/kill/Doctor/iridescentKing.png'>Iridescent King",
    "<img src='css/image/roulette/kill/Doctor/iridescentQueen.png'>Iridescent Queen"
];

var freddyAdd = [
    "<img src='css/image/roulette/kill/Freddy/woolShirt.png'>Wool Shirt",
    "<img src='css/image/roulette/kill/Freddy/sheepBlock.png'>Sheep Block",
    "<img src='css/image/roulette/kill/Freddy/kidsDrawing.png'>Kids Drawing",
    "<img src='css/image/roulette/kill/Freddy/gardenRake.png'>Garden Rake",
    "<img src='css/image/roulette/kill/Freddy/prototypeClaws.png'>Prototype Claws",
    "<img src='css/image/roulette/kill/Freddy/outdoorRope.png'>Outdoor Rope",
    "<img src='css/image/roulette/kill/Freddy/nancysSketch.png'>Nancys Sketch",
    "<img src='css/image/roulette/kill/Freddy/greenDress.png'>Green Dress",
    "<img src='css/image/roulette/kill/Freddy/catBlock.png'>Cat Block",
    "<img src='css/image/roulette/kill/Freddy/unicornBlock.png'>Unicorn Block",
    "<img src='css/image/roulette/kill/Freddy/paintThinner.png'>Paint Thinner",
    "<img src='css/image/roulette/kill/Freddy/nancysMasterpiece.png'>Nancy Masterpiece",
    "<img src='css/image/roulette/kill/Freddy/jumpRope.png'>Jump Rope",
    "<img src='css/image/roulette/kill/Freddy/blueDress.png'>Blue Dress",
    "<img src='css/image/roulette/kill/Freddy/pillBottle.png'>Pill Bottle",
    "<img src='css/image/roulette/kill/Freddy/swingChains.png'>Swing Chains",
    "<img src='css/image/roulette/kill/Freddy/classPhoto.png'>Class Photo",
    "<img src='css/image/roulette/kill/Freddy/zBlock.png'>Z Block",
    "<img src='css/image/roulette/kill/Freddy/redPaintBrush.png'>Red Paint Brush",
    "<img src='css/image/roulette/kill/Freddy/blackBox.png'>Blackbox"

];

var clownAdd = [
    "<img src='css/image/roulette/kill/Clown/smellyInnerSoles.png'>Smelly Inner Soles",
    "<img src='css/image/roulette/kill/Clown/robinFeather.png'>Robin Feather",
    "<img src='css/image/roulette/kill/Clown/fingerlessParadeGloves.png'>Fingerless Parade Gloves",
    "<img src='css/image/roulette/kill/Clown/partyBottle.png'>Party Bottle",
    "<img src='css/image/roulette/kill/Clown/thickCorkStopper.png'>Thick Cork Stopper",
    "<img src='css/image/roulette/kill/Clown/stickySodaBottle.png'>Sticky Soda Bottle",
    "<img src='css/image/roulette/kill/Clown/starlingFeather.png'>Starling Feater",
    "<img src='css/image/roulette/kill/Clown/solventJug.png'>Solven Jug",
    "<img src='css/image/roulette/kill/Clown/keroseneCan.png'>Kerosene Cam",
    "<img src='css/image/roulette/kill/Clown/vhsPorn.png'>VHS Porn",
    "<img src='css/image/roulette/kill/Clown/sulphuricAcidVial.png'>Sulphuric Acid",
    "<img src='css/image/roulette/kill/Clown/flaskOfBleach.png'>Flask Of Bleach",
    "<img src='css/image/roulette/kill/Clown/spiritOfHartshorn.png'>Spirit Of Hartshorn",
    "<img src='css/image/roulette/kill/Clown/bottleOfChloroform.png'>Bottle Of Chloroform",
    "<img src='css/image/roulette/kill/Clown/garishMake-UpKit.png'>Garish Make-Upkit",
    "<img src='css/image/roulette/kill/Clown/ether15Vol.png'>Ether 15 VOL",
    "<img src='css/image/roulette/kill/Clown/cigarBox.png'>Cigar Box",
    "<img src='css/image/roulette/kill/Clown/cheapGinBottle.png'>Cheap Gin Bottle",
    "<img src='css/image/roulette/kill/Clown/tattoosMiddleFinger.png'>Tattoos Middle Finger",
    "<img src='css/image/roulette/kill/Clown/redheadsPinkyFinger.png'>Redheads Pinky Finger"

];

var hag = [
    "<img src='css/image/roulette/kill/Hag/ropeNecklet.png'>Rope Necklet",
    "<img src='css/image/roulette/kill/Hag/powderedEggshell.png'>Powdered Egg Shell",
    "<img src='css/image/roulette/kill/Hag/deadFlyMud.png'>Dead Fly Mud",
    "<img src='css/image/roulette/kill/Hag/bogWater.png'>Bog Water",
    "<img src='css/image/roulette/kill/Hag/pussyWillowCatkins.png'>Pussy Willow Catkins",
    "<img src='css/image/roulette/kill/Hag/halfEggshell.png'>Half Egg Shell",
    "<img src='css/image/roulette/kill/Hag/dragonflyWings.png'>Dragonfly Wings",
    "<img src='css/image/roulette/kill/Hag/cypressNecklet.png'>Cypress Necklet",
    "<img src='css/image/roulette/kill/Hag/bloodiedWater.png'>Bloodied Water",
    "<img src='css/image/roulette/kill/Hag/willowWreath.png'>Willow Wreath",
    "<img src='css/image/roulette/kill/Hag/swampOrchidNecklet.png'>Swamp Orchid Neklet",
    "<img src='css/image/roulette/kill/Hag/driedCicada.png'>Dried Cicada",
    "<img src='css/image/roulette/kill/Hag/crackedTurtleEgg.png'>Cracked Turtle Egg",
    "<img src='css/image/roulette/kill/Hag/bloodiedMud.png'>Bloodied Mud",
    "<img src='css/image/roulette/kill/Hag/scarredHand.png'>Scarred Hand",
    "<img src='css/image/roulette/kill/Hag/rustyShackles.png'>Rusty Shackles",
    "<img src='css/image/roulette/kill/Hag/granmasHeart.png'>Granma Heart",
    "<img src='css/image/roulette/kill/Hag/disfiguredEar.png'>Disfigured Ear",
    "<img src='css/image/roulette/kill/Hag/waterloggedShoe.png'>Water Logged Shoe",
    "<img src='css/image/roulette/kill/Hag/mintRag.png'>Mint Rag"

];

var hillAdd = [
    "<img src='css/image/roulette/kill/Hillbilly/apexMuffler.png'>Apex Muffler",
    "<img src='css/image/roulette/kill/Hillbilly/bigBuckle.png'>Big Buckle",
    "<img src='css/image/roulette/kill/Hillbilly/blackGrease.png'>Black Grease",
    "<img src='css/image/roulette/kill/Hillbilly/spikedBoots.png'>Spiked Boots",
    "<img src='css/image/roulette/kill/Hillbilly/dadsBoots.png'>Dads Boots",
    "<img src='css/image/roulette/kill/Hillbilly/heavyClutch.png'>Heavy Clutch",
    "<img src='css/image/roulette/kill/Hillbilly/iridescentBrick.png'>Iridescent Brick",
    "<img src='css/image/roulette/kill/Hillbilly/junkyardAirFilter.png'>Junkyard Air Filter",
    "<img src='css/image/roulette/kill/Hillbilly/leafyMash.png'>Leafy Mash",
    "<img src='css/image/roulette/kill/Hillbilly/loProChains.png'>Lo Pro Chains",
    "<img src='css/image/roulette/kill/Hillbilly/lowKickbackChains.png'>Low Kickback Chains",
    "<img src='css/image/roulette/kill/Hillbilly/deathEngravings.png'>Death Engravings", 
    "<img src='css/image/roulette/kill/Hillbilly/mothersHelpers.png'>Mothers Helpers",
    "<img src='css/image/roulette/kill/Hillbilly/off-brandMotorOil.png'>Off-brand Motor Oil",
    "<img src='css/image/roulette/kill/Hillbilly/pighouseGloves.png'>Pighouse Gloves",
    "<img src='css/image/roulette/kill/Hillbilly/doomEngravings.png'>Doom Engravings",
    "<img src='css/image/roulette/kill/Hillbilly/puncturedMuffler.png'>Punctured Muffler",
    "<img src='css/image/roulette/kill/Hillbilly/steelToeBoots.png'>Steel Toe Boots",
    "<img src='css/image/roulette/kill/Hillbilly/tunedCarburettor.png'>Tuned Carburettor"

];

var spiritAdd = [
    "<img src='css/image/roulette/kill/Spirit/zori.png'>Zori",
    "<img src='css/image/roulette/kill/Spirit/shiawaseAmulet.png'>Shiawase Amulet",
    "<img src='css/image/roulette/kill/Spirit/origamiCrane.png'>Origami Crane",
    "<img src='css/image/roulette/kill/Spirit/giftedBambooComb.png'>Gifted Bamboo Comb",
    "<img src='css/image/roulette/kill/Spirit/whiteHairRibbon.png'>White Hair Ribbon",
    "<img src='css/image/roulette/kill/Spirit/rinsBrokenWatch.png'>Rins Broken Watch",
    "<img src='css/image/roulette/kill/Spirit/muddySportsDayCap.png'>Muddy Sports Day Cap",
    "<img src='css/image/roulette/kill/Spirit/kaiunTalisman.png'>Kaiun Talisman",
    "<img src='css/image/roulette/kill/Spirit/juniperBonsai.png'>Juniper Bonsai",
    "<img src='css/image/roulette/kill/Spirit/rustyFlute.png'>Rusty Flute",
    "<img src='css/image/roulette/kill/Spirit/mothersGlasses.png'>Mothers Glasses",
    "<img src='css/image/roulette/kill/Spirit/katanaTsuba.png'>Katana Tsuba",
    "<img src='css/image/roulette/kill/Spirit/kintsugiTeacup.png'>Kintsugi Teacup",
    "<img src='css/image/roulette/kill/Spirit/furin.png'>Furin",
    "<img src='css/image/roulette/kill/Spirit/yakuyokeAmulet.png'>Yakuyoke Amulet",
    "<img src='css/image/roulette/kill/Spirit/wakizashiSaya.png'>Wakizashi Saya",
    "<img src='css/image/roulette/kill/Spirit/uchiwa.png'>Uchiwa",
    "<img src='css/image/roulette/kill/Spirit/driedCherryBlossom.png'>Dried Cherry Blossom",
    "<img src='css/image/roulette/kill/Spirit/mother-DaughterRing.png'>Mother-Daughter Ring",
    "<img src='css/image/roulette/kill/Spirit/senkoHanabi.png'>Senko Hanabi"

];

var legionAdd = [
    "<img src='css/image/roulette/kill/Legion/smileyFacePin.png'>Smiley Face Pin",
    "<img src='css/image/roulette/kill/Legion/scratchedRuler.png'>Scratched Ruler",
    "<img src='css/image/roulette/kill/Legion/mischiefList.png'>Mischief List",
    "<img src='css/image/roulette/kill/Legion/friendshipBracelet.png'>Friendship Bracelet",
    "<img src='css/image/roulette/kill/Legion/never-SleepPills.png'>Never-Sleep Pills",
    "<img src='css/image/roulette/kill/Legion/muralSketch.png'>Mural Sketch",
    "<img src='css/image/roulette/kill/Legion/juliesMixTape.png'>Julies Mix Tape",
    "<img src='css/image/roulette/kill/Legion/etchedRuler.png'>Etched Ruler",
    "<img src='css/image/roulette/kill/Legion/defacedSmileyPin.png'>Defaced Smiley Pin",
    "<img src='css/image/roulette/kill/Legion/theLegionPin.png'>The Legion Pin",
    "<img src='css/image/roulette/kill/Legion/susiesMixTape.png'>Susies Mix Tape",
    "<img src='css/image/roulette/kill/Legion/stolenSketchBook.png'>Stolen Sketch Book",
    "<img src='css/image/roulette/kill/Legion/nastyBlade.png'>Nasty Blade",
    "<img src='css/image/roulette/kill/Legion/joeysMixTape.png'>Joeys Mix Tape",
    "<img src='css/image/roulette/kill/Legion/stabWoundsStudy.png'>Stab Wounds Study",
    "<img src='css/image/roulette/kill/Legion/franksMixTape.png'>Franks Mix Tape",
    "<img src='css/image/roulette/kill/Legion/filthyBlade.png'>Filthy Blade",
    "<img src='css/image/roulette/kill/Legion/coldDirt.png'>Cold Dirt",
    "<img src='css/image/roulette/kill/Legion/iridescentButton.png'>Iridescent Button",
    "<img src='css/image/roulette/kill/Legion/fumingMixTape.png'>Fuming Mix Tape"

];

var plagueAdd = [
    "<img src='css/image/roulette/kill/Plague/prayerTabletFragment.png'>Prayer Tablet Fragment",
    "<img src='css/image/roulette/kill/Plague/olibanumIncense.png'>Olibanum Incense",
    "<img src='css/image/roulette/kill/Plague/limestoneSeal.png'>Limestone Seal",
    "<img src='css/image/roulette/kill/Plague/healingSalve.png'>Healing Salve",
    "<img src='css/image/roulette/kill/Plague/prophylacticAmulet.png'>Prophylactic Amulet",
    "<img src='css/image/roulette/kill/Plague/potentTincture.png'>Potent Tincture",
    "<img src='css/image/roulette/kill/Plague/haematiteSeal.png'>Haematite Seal",
    "<img src='css/image/roulette/kill/Plague/emeticPotion.png'>Emetic Potion",
    "<img src='css/image/roulette/kill/Plague/blessedApple.png'>Blessed Apple",
    "<img src='css/image/roulette/kill/Plague/rubbingOil.png'>Rubbing Oil",
    "<img src='css/image/roulette/kill/Plague/infectedEmetic.png'>Infected Emetic",
    "<img src='css/image/roulette/kill/Plague/incensedOintment.png'>Incensed Ointment",
    "<img src='css/image/roulette/kill/Plague/exorcismAmulet.png'>Exorcism Amulet",
    "<img src='css/image/roulette/kill/Plague/ashenApple.png'>Ashen Apple",
    "<img src='css/image/roulette/kill/Plague/worshipTablet.png'>Worship Tablet",
    "<img src='css/image/roulette/kill/Plague/vileEmetic.png'>Vile Emetic",
    "<img src='css/image/roulette/kill/Plague/severedToe.png'>Servered Toe",
    "<img src='css/image/roulette/kill/Plague/devoteesAmulet.png'>Devotees Amulet",
    "<img src='css/image/roulette/kill/Plague/iridescentSeal.png'>Iridescent Seal",
    "<img src='css/image/roulette/kill/Plague/blackIncense.png'>Black Incense"
];

var nurseAdd = [
    "<img src='css/image/roulette/kill/Nurse/woodenHorse.png'>Wooden Horse",
    "<img src='css/image/roulette/kill/Nurse/whiteNitComb.png'>White Nit Comb",
    "<img src='css/image/roulette/kill/Nurse/tornBookmark.png'>Torn Bookmark",
    "<img src='css/image/roulette/kill/Nurse/metalSpoon.png'>Metal Spoon",
    "<img src='css/image/roulette/kill/Nurse/matchbox.png'>Matchbox",
    "<img src='css/image/roulette/kill/Nurse/badManKeepsake.png'>Bad Man Keepsake",
    "<img src='css/image/roulette/kill/Nurse/pocketWatch.png'>Pocket Watch",
    "<img src='css/image/roulette/kill/Nurse/dullBracelet.png'>Dull Bracelet",
    "<img src='css/image/roulette/kill/Nurse/darkCincture.png'>Dark Cincture",
    "<img src='css/image/roulette/kill/Nurse/catatonicBoysTreasure.png'>Catatonic Boys Treasure",
    "<img src='css/image/roulette/kill/Nurse/spasmodicBreath.png'>Spasmodic Breath",
    "<img src='css/image/roulette/kill/Nurse/heavyPanting.png'>Heavy Panting",
    "<img src='css/image/roulette/kill/Nurse/fragileWheeze.png'>Fragile Wheeze",
    "<img src='css/image/roulette/kill/Nurse/ataxicRespiration.png'>Ataxic Respiration",
    "<img src='css/image/roulette/kill/Nurse/anxiousGasp.png'>Anxious Gasp",
    "<img src='css/image/roulette/kill/Nurse/plaidFlannel.png'>Plaid Flannel",
    "<img src='css/image/roulette/kill/Nurse/kavanaghsLastBreath.png'>Kavanagh's Last Breath",
    "<img src='css/image/roulette/kill/Nurse/jennersLastBreath.png'>Jenner's Last Breath",
    "<img src='css/image/roulette/kill/Nurse/campbellsLastBreath.png'>Campbell's Last Breath",
    "<img src='css/image/roulette/kill/Nurse/badMansLastBreath.png'>Badmans Last Breath"
];

var ghostAdd = [
    "<img src='css/image/roulette/kill/Ghostface/philly.png'>Philly",
    "<img src='css/image/roulette/kill/Ghostface/walleyesMatchbook.png'>Walleyes Matchbook",
    "<img src='css/image/roulette/kill/Ghostface/headlinesCutouts.png'>Headline Cutouts",
    "<img src='css/image/roulette/kill/Ghostface/cheapCologne.png'>Cheap Cologne",
    "<img src='css/image/roulette/kill/Ghostface/telephotoLens.png'>Telephoto Lens",
    "<img src='css/image/roulette/kill/Ghostface/reusuableCinchStraps.png'>Reusuable Cinch Straps",
    "<img src='css/image/roulette/kill/Ghostface/olsensJournal.png'>Olsens Journal",
    "<img src='css/image/roulette/kill/Ghostface/olsensAddressBook.png'>Olsens Address Book",
    "<img src='css/image/roulette/kill/Ghostface/markedMap.png'>Merked Map",
    "<img src='css/image/roulette/kill/Ghostface/olsensWallet.png'>Olsens Wallet",
    "<img src='css/image/roulette/kill/Ghostface/leatherKnifeSheath.png'>Leather Knife Sheat",
    "<img src='css/image/roulette/kill/Ghostface/lastingPerfume.png'>Lasting Perfume",
    "<img src='css/image/roulette/kill/Ghostface/knifeBeltClip.png'>Knife Belt Clip",
    "<img src='css/image/roulette/kill/Ghostface/chewedPen.png'>Chewed Pen",
    "<img src='css/image/roulette/kill/Ghostface/victimsDetailedRoutine.png'>Victims Detailed Routine",
    "<img src='css/image/roulette/kill/Ghostface/nightvisionMonocular.png'>Nightvision Monocular",
    "<img src='css/image/roulette/kill/Ghostface/drop-LegKnifeSheath.png'>Drop-Leg Knife Sheat",
    "<img src='css/image/roulette/kill/Ghostface/driversLicense.png'>Drivers License",
    "<img src='css/image/roulette/kill/Ghostface/caughtOnTape.png'>Caught On Tape",
    "<img src='css/image/roulette/kill/Ghostface/outdoorSecurityCamera.png'>Outdoor Security Camera"

];

var demoAdd = [
    "<img src='css/image/roulette/kill/Demo/rottenPumpkin.png'>Rotten Pumpkin",
    "<img src='css/image/roulette/kill/Demo/blackHeart.png'>Black Heart",
    "<img src='css/image/roulette/kill/Demo/ratLiver.png'>Rat Liver",
    "<img src='css/image/roulette/kill/Demo/ratTail.png'>Rat Tail",
    "<img src='css/image/roulette/kill/Demo/stickyLining.png'>Sticky Lining",
    "<img src='css/image/roulette/kill/Demo/viscousWebbing.png'>Viscous Webbing",
    "<img src='css/image/roulette/kill/Demo/rottenGreenTripe.png'>Rotten Green Tripe",
    "<img src='css/image/roulette/kill/Demo/mewsGuts.png'>Mew's Guts",
    "<img src='css/image/roulette/kill/Demo/barbsGlasses.png'>Barb's Glasses",
    "<img src='css/image/roulette/kill/Demo/elevensSoda.png'>Eleven's Soda",
    "<img src='css/image/roulette/kill/Demo/thornyVines.png'>Thorny Vines",
    "<img src='css/image/roulette/kill/Demo/brassCaseLighter.png'>Brass Casel Lighter",
    "<img src='css/image/roulette/kill/Demo/violetWaxcap.png'>Violet Waxcap",
    "<img src='css/image/roulette/kill/Demo/deerLung.png'>Deer Lung",
    "<img src='css/image/roulette/kill/Demo/lifeguardWhistle.png'>Lifeguard Whistle",
    "<img src='css/image/roulette/kill/Demo/vermilionWebcap.png'>Vermilion Webcap",
    "<img src='css/image/roulette/kill/Demo/upsideDownResin.png'>Upside Down Resin",
    "<img src='css/image/roulette/kill/Demo/unknownEgg.png'>Unknown Egg",
    "<img src='css/image/roulette/kill/Demo/leproseLichen.png'>Leprose Lichen",
    "<img src='css/image/roulette/kill/Demo/redMoss.png'>Red Moss"

];

var shapeAdd = [
    "<img src='css/image/roulette/kill/Shape/tackyEarrings.png'>Tacky Earrings",
    "<img src='css/image/roulette/kill/Shape/boyfriendsMemo.png'>Boyfriends Memo",
    "<img src='css/image/roulette/kill/Shape/blondeHair.png'>Blonde Hair",
    "<img src='css/image/roulette/kill/Shape/reflectiveFragment.png'>Reflectove Fragrent",
    "<img src='css/image/roulette/kill/Shape/memorialFlower.png'>Memorial Flower",
    "<img src='css/image/roulette/kill/Shape/jewelry.png'>Jewelry",
    "<img src='css/image/roulette/kill/Shape/hairBrush.png'>Hair Brush",
    "<img src='css/image/roulette/kill/Shape/glassFragment.png'>Glass Fragment",
    "<img src='css/image/roulette/kill/Shape/deadRabbit.png'>Dead Rabbit",
    "<img src='css/image/roulette/kill/Shape/mirrorShard.png'>Mirror Shard",
    "<img src='css/image/roulette/kill/Shape/judithsJournal.png'>Judiths Journal",
    "<img src='css/image/roulette/kill/Shape/jewelryBox.png'>Jewelry Box",
    "<img src='css/image/roulette/kill/Shape/jMyersMemorial.png'>J Myers Memorial",
    "<img src='css/image/roulette/kill/Shape/hairBow.png'>Hair Bow",
    "<img src='css/image/roulette/kill/Shape/vanityMirror.png'>Vanity Mirror",
    "<img src='css/image/roulette/kill/Shape/tombstonePiece.png'>Tombstone Piece",
    "<img src='css/image/roulette/kill/Shape/scratchedMirror.png'>Scratched Mirror",
    "<img src='css/image/roulette/kill/Shape/lockOfHair.png'>Lock Of Hair",
    "<img src='css/image/roulette/kill/Shape/judithsTombstone.png'>Judiths Tombstone",
    "<img src='css/image/roulette/kill/Shape/fragrantTuftOfHair.png'>Fragrant Tuft Of Hair"

];

var trapperAdd = [
    "<img src='css/image/roulette/kill/Trapper/trapperSack.png'>Trapper Sack",
    "<img src='css/image/roulette/kill/Trapper/trapperGloves.png'>Trapper Gloves",
    "<img src='css/image/roulette/kill/Trapper/makeshiftWrap.png'>Makeshift Wrap",
    "<img src='css/image/roulette/kill/Trapper/paddedJaws.png'>Padded Jaws",
    "<img src='css/image/roulette/kill/Trapper/trapperBag.png'>Trapper Bag",
    "<img src='css/image/roulette/kill/Trapper/coffeeGrinds.png'>Coffee Grinds",
    "<img src='css/image/roulette/kill/Trapper/serratedJaws.png'>Serrated Jaws",
    "<img src='css/image/roulette/kill/Trapper/bearOil.png'>Bear Oil",
    "<img src='css/image/roulette/kill/Trapper/4-coilSpringKit.png'>4-Coil Spring Kit",
    "<img src='css/image/roulette/kill/Trapper/waxBrick.png'>Wax Brick",
    "<img src='css/image/roulette/kill/Trapper/tarBottle.png'>Tar Bottle",
    "<img src='css/image/roulette/kill/Trapper/lengthenedJaws.png'>Lengthened Jaws",
    "<img src='css/image/roulette/kill/Trapper/secondaryCoil.png'>Secondary Coil",
    "<img src='css/image/roulette/kill/Trapper/rustedJaws.png'>Rusted Jaws",
    "<img src='css/image/roulette/kill/Trapper/tensionSpring.png'>Tension Spring",
    "<img src='css/image/roulette/kill/Trapper/oilyCoil.png'>Oily Coil",
    "<img src='css/image/roulette/kill/Trapper/honingStone.png'>Honing Stone",
    "<img src='css/image/roulette/kill/Trapper/fasteningTools.png'>Fastening Tools",
    "<img src='css/image/roulette/kill/Trapper/iridescentStone.png'>Iridescent Stone",
    "<img src='css/image/roulette/kill/Trapper/bloodyCoil.png'>Bloody Coil"

];

var wraithAdd = [
    "<img src='css/image/roulette/kill/Wraith/theSerpent-Soot.png'>The Serpent-Soot",
    "<img src='css/image/roulette/kill/Wraith/theHound-Soot.png'>The Hound-Soot",
    "<img src='css/image/roulette/kill/Wraith/theGhost-Soot.png'>The Ghost-Soot",
    "<img src='css/image/roulette/kill/Wraith/theBeast-Soot.png'>The Beast-Soot",
    "<img src='css/image/roulette/kill/Wraith/boneClapper.png'>Bone Clapper",
    "<img src='css/image/roulette/kill/Wraith/blink-Mud.png'>Blink-Mud",
    "<img src='css/image/roulette/kill/Wraith/windstorm-Mud.png'>Windstorm-Mud",
    "<img src='css/image/roulette/kill/Wraith/swiftHunt-Mud.png'>Swift Hunt-Mud",
    "<img src='css/image/roulette/kill/Wraith/blindWarrior-Mud.png'>Blind Warrior-Mud",
    "<img src='css/image/roulette/kill/Wraith/windstorm-White.png'>Windstorm-White",
    "<img src='css/image/roulette/kill/Wraith/swiftHunt-White.png'>Swift Hunt-White",
    "<img src='css/image/roulette/kill/Wraith/shadowDance-White.png'>Shadow Dance-White",
    "<img src='css/image/roulette/kill/Wraith/blink-White.png'>Blink-White",
    "<img src='css/image/roulette/kill/Wraith/blindWarrior-White.png'>Blind Warrior-White",
    "<img src='css/image/roulette/kill/Wraith/windstorm-Blood.png'>Windstorm-Blood",
    "<img src='css/image/roulette/kill/Wraith/swiftHunt-Blood.png'>Swift Hunt-Blood",
    "<img src='css/image/roulette/kill/Wraith/shadowDance-Blood.png'>Shadow Dance-Blood",
    "<img src='css/image/roulette/kill/Wraith/allSeeing-Blood.png'>All Seeing-Blood",
    "<img src='css/image/roulette/kill/Wraith/coxcombedClapper.png'>Coxcombed Clapper",
    "<img src='css/image/roulette/kill/Wraith/allSeeing-Spirit.png'>All Seeing-Spirit"

];

var pigAdd = [
    "<img src='css/image/roulette/kill/Pig/amandasLetter.png'>Amanda's Letter",
    "<img src='css/image/roulette/kill/Pig/amandasSecret.png'>Amanda's Secret",
    "<img src='css/image/roulette/kill/Pig/bagOfGears.png'>Bag Of Gears",
    "<img src='css/image/roulette/kill/Pig/combatStraps.png'>Combat Straps",
    "<img src='css/image/roulette/kill/Pig/crateOfGears.png'>Crate Of Gears",
    "<img src='css/image/roulette/kill/Pig/faceMask.png'>Face Mask",
    "<img src='css/image/roulette/kill/Pig/interlockingRazor.png'>Interlocking Razor",
    "<img src='css/image/roulette/kill/Pig/jigsawsAnnotatedPlan.png'>Jigsaws Annotated",
    "<img src='css/image/roulette/kill/Pig/jigsawsSketch.png'>Jigsaws Sketch",
    "<img src='css/image/roulette/kill/Pig/johnsMedicalFile.png'>John's Medical File",
    "<img src='css/image/roulette/kill/Pig/lastWill.png'>Last Will",
    "<img src='css/image/roulette/kill/Pig/razorWires.png'>Cazor Wires",
    "<img src='css/image/roulette/kill/Pig/rulesSetNo.2.png'>Rules Set No.2",
    "<img src='css/image/roulette/kill/Pig/rustyAttachments.png'>Rusty Attachments",
    "<img src='css/image/roulette/kill/Pig/shatteredSyringe.png'>Shattered Syringe",
    "<img src='css/image/roulette/kill/Pig/slow-ReleaseToxin.png'>Slow-Release Toxin",
    "<img src='css/image/roulette/kill/Pig/tamperedTimer.png'>Tampered Timer",
    "<img src='css/image/roulette/kill/Pig/utilityBlades.png'>Utility Blades",
    "<img src='css/image/roulette/kill/Pig/videoTape.png'>Video Tape",
    "<img src='css/image/roulette/kill/Pig/workshopGrease.png'>Workshop Grease"
];

var oniAdd = [
    "<img src='css/image/roulette/kill/Oni/yakuyokeTalisman.png'>Yakuyoke Talisman",
    "<img src='css/image/roulette/kill/Oni/rottingRope.png'>Rotting Rope",
    "<img src='css/image/roulette/kill/Oni/crackedSakazuki.png'>Cracked Sakazuki",
    "<img src='css/image/roulette/kill/Oni/blackenedToenail.png'>Blackened Toenail",
    "<img src='css/image/roulette/kill/Oni/polishedMaedate.png'>Polished Maedate",
    "<img src='css/image/roulette/kill/Oni/inkLion.png'>Ink Lion",
    "<img src='css/image/roulette/kill/Oni/chippedSaihai.png'>Chipped Saihai",
    "<img src='css/image/roulette/kill/Oni/childsWoodenSword.png'>Childs Wooden Sword",
    "<img src='css/image/roulette/kill/Oni/bloodySash.png'>Bloody Sash",
    "<img src='css/image/roulette/kill/Oni/yamaokaSashimono.png'>Yamaoka Sashimono",
    "<img src='css/image/roulette/kill/Oni/woodenOniMask.png'>Wooden Oni Mask",
    "<img src='css/image/roulette/kill/Oni/shatteredWakizashi.png'>Shattered Wakizashi",
    "<img src='css/image/roulette/kill/Oni/scalpedTopknot.png'>Scalped Topknot",
    "<img src='css/image/roulette/kill/Oni/kanai-AnzenTalisman.png'>Kanai-Anzen Talisman",
    "<img src='css/image/roulette/kill/Oni/tearSoakedTenugui.png'>Tear Soaked Tengui",
    "<img src='css/image/roulette/kill/Oni/splinteredHull.png'>Splintered Hull",
    "<img src='css/image/roulette/kill/Oni/lionFang.png'>Lion Fang",
    "<img src='css/image/roulette/kill/Oni/akitosCrutch.png'>Akitos Crutch",
    "<img src='css/image/roulette/kill/Oni/renjirosBloodyGlove.png'>Renjiros Bloody Glove",
    "<img src='css/image/roulette/kill/Oni/iridescentFamilyCrest.png'>Iridescent Family Crest"
];

var deathAdd = [
    "<img src='css/image/roulette/kill/Deathslinger/spitPolishRag.png'>Spit Polish Rag",
    "<img src='css/image/roulette/kill/Deathslinger/snakeOil.png'>Snake Oil",
    "<img src='css/image/roulette/kill/Deathslinger/ricketyChain.png'>Rickety Chaing",
    "<img src='css/image/roulette/kill/Deathslinger/modifiedAmmoBelt.png'>Modified Ammo Belt",
    "<img src='css/image/roulette/kill/Deathslinger/rustedSpike.png'>Rusted Spike",
    "<img src='css/image/roulette/kill/Deathslinger/poisonOakLeaves.png'>Poison Oak Leaves",
    "<img src='css/image/roulette/kill/Deathslinger/marshalsBadge.png'>Marshal's Badge",
    "<img src='css/image/roulette/kill/Deathslinger/jawSmasher.png'>Jaw Smasher",
    "<img src='css/image/roulette/kill/Deathslinger/chewingTobacco.png'>Chewing Tobacco",
    "<img src='css/image/roulette/kill/Deathslinger/wardensKeys.png'>Wardens Keys",
    "<img src='css/image/roulette/kill/Deathslinger/wantedPoster.png'>Wanted Poster",
    "<img src='css/image/roulette/kill/Deathslinger/tinOilCan.png'>Tin Oil Can",
    "<img src='css/image/roulette/kill/Deathslinger/honeyLocustThorn.png'>Honey Locust Thorn",
    "<img src='css/image/roulette/kill/Deathslinger/bayshoresGoldTooth.png'>Bayshore's Gold Tooth",
    "<img src='css/image/roulette/kill/Deathslinger/prisonChain.png'>Prison Chain",
    "<img src='css/image/roulette/kill/Deathslinger/goldCreekWhiskey.png'> Gold Creek Whiskey",
    "<img src='css/image/roulette/kill/Deathslinger/bayshoresCigar.png'>Bayshore's Cigar",
    "<img src='css/image/roulette/kill/Deathslinger/barbedWire.png'>Barbed Wire",
    "<img src='css/image/roulette/kill/Deathslinger/iridescentCoin.png'>Iridescent Coin",
    "<img src='css/image/roulette/kill/Deathslinger/hellshireIron.png'>Hellshire Iron"
];

var exeAdd = [
    "<img src='css/image/roulette/kill/Executioner/leadRing.png'>Lead Ring",
    "<img src='css/image/roulette/kill/Executioner/deadButterfly.png'>Dead Butterfly",
    "<img src='css/image/roulette/kill/Executioner/copperRing.png'>Copper Ring",
    "<img src='css/image/roulette/kill/Executioner/blackStrap.png'>Black Strap",
    "<img src='css/image/roulette/kill/Executioner/waxDoll.png'>Wax Doll",
    "<img src='css/image/roulette/kill/Executioner/spearhead.png'>Spearhead",
    "<img src='css/image/roulette/kill/Executioner/leopardprintFabric.png'>Leopard-Print Fabric",
    "<img src='css/image/roulette/kill/Executioner/forgottenVideotape.png'>Forgotten Videotape",
    "<img src='css/image/roulette/kill/Executioner/cinderellaMusicBox.png'>Cinderella Music Box",
    "<img src='css/image/roulette/kill/Executioner/valtielSectPhotograph.png'>Valtiel Sect Photograph",
    "<img src='css/image/roulette/kill/Executioner/tabletOfTheOppressor.png'>Tablet of the Oppressor",
    "<img src='css/image/roulette/kill/Executioner/mistyDay.png'>Misty Day, Remains of Judgement",
    "<img src='css/image/roulette/kill/Executioner/mannequinFoot.png'>Manneguin Foot",
    "<img src='css/image/roulette/kill/Executioner/burningManPainting.png'>Burning Man Painting",
    "<img src='css/image/roulette/kill/Executioner/scarletEgg.png'>Scarlet Egg",
    "<img src='css/image/roulette/kill/Executioner/rustColoredEgg.png'>Rust-Colored Egg",
    "<img src='css/image/roulette/kill/Executioner/lostMemoriesBook.png'>Lost Meories Book",
    "<img src='css/image/roulette/kill/Executioner/crimsonCeremonyBook.png'>Crimson Ceremony Book",
    "<img src='css/image/roulette/kill/Executioner/obsidianGoblet.png'>Obsidian Goblet",
    "<img src='css/image/roulette/kill/Executioner/iridescentSealOfMetatron.png'>Iridescent Seal of Metatron"
];

var blighAdd = [
    "<img src='css/image/roulette/kill/Blight/placeboTablet.png'>Placebo Tablet",
    "<img src='css/image/roulette/kill/Blight/foxglove.png'>Foxglove",
    "<img src='css/image/roulette/kill/Blight/compoundSeven.png'>Compound Seven",
    "<img src='css/image/roulette/kill/Blight/chippedMonocle.png'>Chipped Monocle",
    "<img src='css/image/roulette/kill/Blight/shreddedNotes.png'>Shredded Notes",
    "<img src='css/image/roulette/kill/Blight/pustulaDust.png'>Pustula Dust",
    "<img src='css/image/roulette/kill/Blight/plagueBile.png'>Plague Bile",
    "<img src='css/image/roulette/kill/Blight/cankerThorn.png'>Canker Thorn",
    "<img src='css/image/roulette/kill/Blight/blightedRat.png'>Blighted Rat",
    "<img src='css/image/roulette/kill/Blight/umbraSalts.png'> Umbra Salts",
    "<img src='css/image/roulette/kill/Blight/roseTonic.png'>Rose Tonic",
    "<img src='css/image/roulette/kill/Blight/compoundTwentyOne.png'>Compound Twenty-One",
    "<img src='css/image/roulette/kill/Blight/blightedCrow.png'>Blighted Crow",
    "<img src='css/image/roulette/kill/Blight/adrenalineVial.png'>Arenaline Vial",
    "<img src='css/image/roulette/kill/Blight/vigosJournal.png'>Vigo's Journal",
    "<img src='css/image/roulette/kill/Blight/summoningStone.png'>Summoning Stone",
    "<img src='css/image/roulette/kill/Blight/soulChemical.png'>Soul Chemical",
    "<img src='css/image/roulette/kill/Blight/alchemistsRing.png'>Alchemist Ring",
    "<img src='css/image/roulette/kill/Blight/iridescentBlightTag.png'>Iridescent Blight Tag",
    "<img src='css/image/roulette/kill/Blight/compoundThirtyThree.png'>Compound Thirdy-three"
];

var twinsAdd = [
    "<img src='css/image/roulette/kill/Twins/toySword.png'>Toy Sword",
    "<img src='css/image/roulette/kill/Twins/tinyFingernail.png'>Tiny Fingernail",
    "<img src='css/image/roulette/kill/Twins/souredMilk.png'>Soured Milk",
    "<img src='css/image/roulette/kill/Twins/catFigurine.png'>Cat Figurine",
    "<img src='css/image/roulette/kill/Twins/madeleinesGlove.png'>Madeleine's Glove",
    "<img src='css/image/roulette/kill/Twins/ceremonialCandelabrum.png'>Ceremonial Candelabrum",
    "<img src='css/image/roulette/kill/Twins/catsEye.png'>Cat's Eye",
    "<img src='css/image/roulette/kill/Twins/bloodyBlackHood.png'>Bloody Black Hood",
    "<img src='css/image/roulette/kill/Twins/babyTeeth.png'>Baby Teeth",
    "<img src='css/image/roulette/kill/Twins/weightyRattle.png'>Weighty Rattle",
    "<img src='css/image/roulette/kill/Twins/staleBiscuit.png'>Stale Biscuit",
    "<img src='css/image/roulette/kill/Twins/sewerSludge.png'>Sewer Sludge",
    "<img src='css/image/roulette/kill/Twins/rustedNeedle.png'>Rusted Neelde",
    "<img src='css/image/roulette/kill/Twins/madeleinesScarf.png'>Madeleine's Scarf",
    "<img src='css/image/roulette/kill/Twins/victorsSoldier.png'>Victor's Soldier",
    "<img src='css/image/roulette/kill/Twins/spinningTop.png'>Spinning Top",
    "<img src='css/image/roulette/kill/Twins/forestStew.png'>Forest Stew",
    "<img src='css/image/roulette/kill/Twins/dropOfPerfume.png'>Drop of Perfume",
    "<img src='css/image/roulette/kill/Twins/silencingCloth.png'>Silencing Cloth",
    "<img src='css/image/roulette/kill/Twins/iridescentPendant.png'>Iridescent Pendant"
];

var trickAdd = [
    "<img src='css/image/roulette/kill/Trickster/trickPouch.png'>Trick Pouch",
    "<img src='css/image/roulette/kill/Trickster/mementoBlades.png'>Memento Blades",
    "<img src='css/image/roulette/kill/Trickster/killingPartChords.png'>Killing Part Chords",
    "<img src='css/image/roulette/kill/Trickster/infernoWires.png'>Inferno Wires",
    "<img src='css/image/roulette/kill/Trickster/tequilaMoonrock.png'>Tequila Moonrock",
    "<img src='css/image/roulette/kill/Trickster/onTargetSingle.png'>On Target Single",
    "<img src='css/image/roulette/kill/Trickster/luckyBlade.png'>Lucky Blade",
    "<img src='css/image/roulette/kill/Trickster/ji-WoonsAutograph.png'>Ji-Woon's Autograph",
    "<img src='css/image/roulette/kill/Trickster/cagedHeartShoes.png'>Caged Heart Shoes",
    "<img src='css/image/roulette/kill/Trickster/melodiousMurder.png'>Melodious Murder",
    "<img src='css/image/roulette/kill/Trickster/waitingForYouWatch.png'>Waiting For You Watch",
    "<img src='css/image/roulette/kill/Trickster/ripperBrace.png'>Ripper Brace",
    "<img src='css/image/roulette/kill/Trickster/fizz-SpinSoda.png'>Fizz-Spin Soda",
    "<img src='css/image/roulette/kill/Trickster/bloodyBoa.png'>Bloody Boa",
    "<img src='css/image/roulette/kill/Trickster/trickBlades.png'>Trick Blade's",
    "<img src='css/image/roulette/kill/Trickster/edgeOfRevivalAlbum.png'>Edge of Revival Album",
    "<img src='css/image/roulette/kill/Trickster/diamondCufflinks.png'>Diamond Cufflinks",
    "<img src='css/image/roulette/kill/Trickster/cutThruUSingle.png'>Cut Thru U Single",
    "<img src='css/image/roulette/kill/Trickster/iridescentPhotocard.png'>Iridescent Photocard",
    "<img src='css/image/roulette/kill/Trickster/deathThroesCompilation.png'>Death Throes Comilation"
];

var nemesisAdd = [
    "<img src='css/image/roulette/kill/Nemesis/visitorWristband.png'>Visitor Wristband",
    "<img src='css/image/roulette/kill/Nemesis/starsFieldCombatManual.png'>Star's Field Combat Manual",
    "<img src='css/image/roulette/kill/Nemesis/damagedSyringe.png'>Damaged Syringe",
    "<img src='css/image/roulette/kill/Nemesis/briansIntestine.png'>Brian's Intestine",
    "<img src='css/image/roulette/kill/Nemesis/zombieHeart.png'>Zombie Hearth",
    "<img src='css/image/roulette/kill/Nemesis/mikhailsEye.png'>Mikhail's Eye",
    "<img src='css/image/roulette/kill/Nemesis/marvinsBlood.png'>Marvin's Blood",
    "<img src='css/image/roulette/kill/Nemesis/adrenalineInjector.png'>Adrenaline Injector",
    "<img src='css/image/roulette/kill/Nemesis/adminWristband.png'>Admin Wristband",
    "<img src='css/image/roulette/kill/Nemesis/tyrantGore.png'>Tyrant Gore",
    "<img src='css/image/roulette/kill/Nemesis/t-VirusSample.png'>T-Virus Sample",
    "<img src='css/image/roulette/kill/Nemesis/serotoninInjector.png'>Serotonin Injector",
    "<img src='css/image/roulette/kill/Nemesis/plant43Vines.png'>Plant 43 Vines",
    "<img src='css/image/roulette/kill/Nemesis/lickerTongue.png'>Licker Tongue",
    "<img src='css/image/roulette/kill/Nemesis/ne-AParasite.png'>NE-a Parasite",
    "<img src='css/image/roulette/kill/Nemesis/jillsSandwich.png'>Jill's Sandwich",
    "<img src='css/image/roulette/kill/Nemesis/depletedInkRibbon.png'>Depleted Ink Ribbon",
    "<img src='css/image/roulette/kill/Nemesis/brokenRecoveryCoin.png'>Broken Recovery Coin",
    "<img src='css/image/roulette/kill/Nemesis/shatteredSTARSBadge.png'>Shattered S.T.A.R.S Badge",
    "<img src='css/image/roulette/kill/Nemesis/iridescentUmbrellaBadge.png'>Iridescent Umbrella Badge"
];

var pinheadAdd = [
    "<img src='css/image/roulette/kill/Pinhead/bentNail.png'>Bent Nail",
    "<img src='css/image/roulette/kill/Pinhead/burningCandle.png'>Burning Candle",
    "<img src='css/image/roulette/kill/Pinhead/chatterersTooth.png'>Chatterers Tooth",
    "<img src='css/image/roulette/kill/Pinhead/engineersFang.png'>Engineers Fang",
    "<img src='css/image/roulette/kill/Pinhead/flickeringTelevision.png'>Flickering Television",
    "<img src='css/image/roulette/kill/Pinhead/franksHeart.png'>Franks Heart",
    "<img src='css/image/roulette/kill/Pinhead/greasyBlackLens.png'>Greasy Black Lens",
    "<img src='css/image/roulette/kill/Pinhead/impalingWire.png'>Impaling Wire",
    "<img src='css/image/roulette/kill/Pinhead/iridescentLamentConfiguration.png'>Iridescent Lament Configuration",
    "<img src='css/image/roulette/kill/Pinhead/larrysBlood.png'>Larrys Blood",
    "<img src='css/image/roulette/kill/Pinhead/larrysRemains.png'>Larrys Remains",
    "<img src='css/image/roulette/kill/Pinhead/leatherStrip.png'>Leather Strip",
    "<img src='css/image/roulette/kill/Pinhead/liquifiedGore.png'>Liquified Gore",
    "<img src='css/image/roulette/kill/Pinhead/livelyCrickets.png'>Lively Crickets",
    "<img src='css/image/roulette/kill/Pinhead/originalPain.png'>Original Pain",
    "<img src='css/image/roulette/kill/Pinhead/skeweredRat.png'>Skewered Rat",
    "<img src='css/image/roulette/kill/Pinhead/sliceOfFrank.png'>Slice Of Frank",
    "<img src='css/image/roulette/kill/Pinhead/spoiledMeal.png'>Spoiled Meal",
    "<img src='css/image/roulette/kill/Pinhead/torturePillar.png'>Torture Pillar",
    "<img src='css/image/roulette/kill/Pinhead/wrigglingMaggots.png'>Wriggling Maggots"
];

var artistAdd = [
    "<img src='css/image/roulette/kill/Artist/automaticDrawing.png'>Automatic Drawing",
    "<img src='css/image/roulette/kill/Artist/charcoalStick.png'>Charcoal Stick",
    "<img src='css/image/roulette/kill/Artist/chocloCorn.png'>Choclo Corn",
    "<img src='css/image/roulette/kill/Artist/darkestInk.png'>Darkest Ink",
    "<img src='css/image/roulette/kill/Artist/festeringCarrion.png'>Festering Carrion",
    "<img src='css/image/roulette/kill/Artist/gardenOfRot.png'>Garden Of Rot",
    "<img src='css/image/roulette/kill/Artist/inkEgg.png'>Ink Egg",
    "<img src='css/image/roulette/kill/Artist/iridescentFeather.png'>Iridescent Feather",
    "<img src='css/image/roulette/kill/Artist/matiasBabyShoes.png'>Matias Baby Shoes",
    "<img src='css/image/roulette/kill/Artist/oGriefOLover.png'>O Grief O Lover",
    "<img src='css/image/roulette/kill/Artist/oilPaints.png'>Oil Paints",
    "<img src='css/image/roulette/kill/Artist/severedHands.png'>Severed Hands",
    "<img src='css/image/roulette/kill/Artist/severedTongue.png'>Severed Tongue",
    "<img src='css/image/roulette/kill/Artist/silverBell.png'>Silver Bell",
    "<img src='css/image/roulette/kill/Artist/stillLifeCrow.png'>Still Life Crow",
    "<img src='css/image/roulette/kill/Artist/thickTar.png'>Thick Tar",
    "<img src='css/image/roulette/kill/Artist/thornyNest.png'>Thorny Nest",
    "<img src='css/image/roulette/kill/Artist/untitledAgony.png'>Untitled Agony",
    "<img src='css/image/roulette/kill/Artist/velvetFabric.png'>Velvet Fabric",
    "<img src='css/image/roulette/kill/Artist/vibrantObituary.png'>Vibrant Obituary",
];

var offeringsurv = [
    "<img src='css/image/roulette/Offerings/Survivor/vigosShroud.png'>Vigo's Shroud",
    "<img src='css/image/roulette/Offerings/Survivor/vigosJarOfSaltyLips.png'>Vigo's Jar Of Salty Lips",
    "<img src='css/image/roulette/Offerings/Survivor/shroudOfUnion.png'>Shroud Of Union",
    "<img src='css/image/roulette/Offerings/Survivor/tarnishedCoin.png'>Tarnished Coin",
    "<img src='css/image/roulette/Offerings/Survivor/shroudOfBinding.png'>Shroud Of Binding",
    "<img src='css/image/roulette/Offerings/Survivor/shinyCoin.png'>Shiny Coin",
    "<img src='css/image/roulette/Offerings/Survivor/petrifiedOak.png'>Petrified Oak",
    "<img src='css/image/roulette/Offerings/Survivor/saltPouch.png'>Salt Pouch",
    "<img src='css/image/roulette/Offerings/Survivor/ivoryChalkPouch.png'>Ivory Chalk Pouch",
    "<img src='css/image/roulette/Offerings/Survivor/hazyReagent.png'>Hazy Reagent",
    "<img src='css/image/roulette/Offerings/Survivor/blackSaltStatuette.png'>Black Salt Statuette",
    "<img src='css/image/roulette/Offerings/Survivor/chalkPouch.png'>Chalk Pouch",
    "<img src='css/image/roulette/Offerings/Survivor/clearReagent.png'>CLear Reagent",
    "<img src='css/image/roulette/Offerings/Survivor/creamChalkPouch.png'>Cream Chalk Pouch",
    "<img src='css/image/roulette/Offerings/Survivor/murkyReagent.png'>Murky Reagent",
    "<img src='css/image/roulette/Offerings/Survivor/whiteWard.png'>White Ward",
    "<img src='css/image/roulette/Offerings/azarovsKey.png'>Azarov's Key",
    "<img src='css/image/roulette/Offerings/charredWeddingPhotograph.png'>Charred Wedding Photograph",
    "<img src='css/image/roulette/Offerings/damagedPhoto.png'>Damaged Photo",
    "<img src='css/image/roulette/Offerings/granmasCookbook.png'>Granma's Cookbook",
    "<img src='css/image/roulette/Offerings/hawkinsNationalLaboratoryID.png'>Hawkins National Laboratory ID",
    "<img src='css/image/roulette/Offerings/heartLocket.png'>Heart Locket",
    "<img src='css/image/roulette/Offerings/jigsawPiece.png'>Jigsaw Piece",
    "<img src='css/image/roulette/Offerings/macMillansPhalanxBone.png'>MacMillan's Phalanx Bone",
    "<img src='css/image/roulette/Offerings/shatteredGlasses.png'>Shattered Glasses",
    "<img src='css/image/roulette/Offerings/strodeRealtyKey.png'>Strode Realty Key",
    "<img src='css/image/roulette/Offerings/theLastMask.png'>The Last Mask",
    "<img src='css/image/roulette/Offerings/thePiedPiper.png'>The Pied Piper",
    "<img src='css/image/roulette/Offerings/yamaokaFamilyCrest.png'>Yamaoka Family Crest",
]

var offeringkill = [
    "<img src='css/image/roulette/Offerings/azarovsKey.png'>Azarov's Key",
    "<img src='css/image/roulette/Offerings/charredWeddingPhotograph.png'>Charred Wedding Photograph",
    "<img src='css/image/roulette/Offerings/damagedPhoto.png'>Damaged Photo",
    "<img src='css/image/roulette/Offerings/granmasCookbook.png'>Granma's Cookbook",
    "<img src='css/image/roulette/Offerings/hawkinsNationalLaboratoryID.png'>Hawkins National Laboratory ID",
    "<img src='css/image/roulette/Offerings/heartLocket.png'>Heart Locket",
    "<img src='css/image/roulette/Offerings/jigsawPiece.png'>Jigsaw Piece",
    "<img src='css/image/roulette/Offerings/macMillansPhalanxBone.png'>MacMillan's Phalanx Bone",
    "<img src='css/image/roulette/Offerings/shatteredGlasses.png'>Shattered Glasses",
    "<img src='css/image/roulette/Offerings/strodeRealtyKey.png'>Strode Realty Key",
    "<img src='css/image/roulette/Offerings/theLastMask.png'>The Last Mask",
    "<img src='css/image/roulette/Offerings/thePiedPiper.png'>The Pied Piper",
    "<img src='css/image/roulette/Offerings/yamaokaFamilyCrest.png'>Yamaoka Family Crest",
    "<img src='css/image/roulette/Offerings/Killer/blackWard.png'>Black Ward",
    "<img src='css/image/roulette/Offerings/Killer/cypressMementoMori.png'>Cypress Memento Mori",
    "<img src='css/image/roulette/Offerings/Killer/ebonyMementoMori.png'>Ebony Memento Mori",
    "<img src='css/image/roulette/Offerings/Killer/ivoryMementoMori.png'>Ivory Memento Mori",
    "<img src='css/image/roulette/Offerings/Killer/moldyOak.png'>Moldy Oak",
    "<img src='css/image/roulette/Offerings/Killer/rottenOak.png'>Rotten Oak",
    "<img src='css/image/roulette/Offerings/Killer/shroudOfSeparation.png'>Shroud Of Separation",
    "<img src='css/image/roulette/Offerings/Killer/putridOak.png'>Putrid Oak",
]

/*---------------------------------------------------------------*/


var RandButton = ["none",
				  "block"];

// Surviver Background
function sb() {
    document.body.style.backgroundImage = "url('SurvivorBack.jpg')";
}

// Killer background
function kb() {
    document.body.style.backgroundImage = "url('wallhaven.png')";
}

function kg(id, visibility) {
    document.getElementById(id).style.display = visibility;
}

// Shows the information about the page in and show images when randomizing
function showFunc(x, y) {
    document.getElementById("rand_title").innerHTML = RandTitles[x];
    document.getElementById("rand_desc").innerHTML = RandDesc[x];
    document.getElementById("random").onclick = RandFunc[x];

    document.getElementById("perkslotone").src = "css/image/roulette/survivor/perkslot.gif";
    document.getElementById("perkslottwo").src = "css/image/roulette/survivor/perkslot.gif";
    document.getElementById("perkslotthree").src = "css/image/roulette/survivor/perkslot.gif";
    document.getElementById("perkslotfour").src = "css/image/roulette/survivor/perkslot.gif";

    document.getElementById("perkslotone").style.display = RandButton[y];
    document.getElementById("perkslottwo").style.display = RandButton[y];
    document.getElementById("perkslotthree").style.display = RandButton[y];
    document.getElementById("perkslotfour").style.display = RandButton[y];

    document.getElementById('random').style.display = RandButton[y];
};

// The random survivor perks function
function randomateSurvPerks() {
    
    // Shuffles the array and returns it
    var Survshuffled = SurvImgSrc.sort(function () {
        return .5 - Math.random()
    });
    // Select the first 4 in the new array 
    var Survselected = Survshuffled.slice(0, 4);

    // Puts the first 4 in slots made in html.
    document.getElementById("perkslotone").innerHTML = Survselected[0];
    document.getElementById("perkslottwo").innerHTML = Survselected[1];
    document.getElementById("perkslotthree").innerHTML = Survselected[2];
    document.getElementById("perkslotfour").innerHTML = Survselected[3];

};

// The one for killer
function randomateKiller() {
    var killershuffled = Killer.sort(function () {
        return .5 - Math.random()
    });
    var killerselected = killershuffled.slice(1);

    // Depending on what gets selected in the random killer randomize the addons.
    if (killerselected[0] == "<img src='css/image/roulette/kill/BE.png'>The Huntress") {
        var killerAddShuffled = huntressAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/CA.png'>The Cannibal") {
        var killerAddShuffled = cannibalAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/DO.png'>The Doctor") {
        var killerAddShuffled = doctorAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/EK.png'>The Nightmare") {
        var killerAddShuffled = freddyAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/GK.png'>The Clown") {
        var killerAddShuffled = clownAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/HA.png'>The Hag") {
        var killerAddShuffled = hag.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/HB.png'>Hill Billy") {
        var killerAddShuffled = hillAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/HK.png'>The Spirit") {
        var killerAddShuffled = spiritAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/KK.png'>Legion") {
        var killerAddShuffled = legionAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/MK.png'>The Plague") {
        var killerAddShuffled = plagueAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/NR.png'>Nurse") {
        var killerAddShuffled = nurseAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/OK.png'>Ghostface") {
        var killerAddShuffled = ghostAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/QK.png'>The Demorgorgon") {
        var killerAddShuffled = demoAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/SH.png'>The Shape") {
        var killerAddShuffled = shapeAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/TR.png'>The Trapper") {
        var killerAddShuffled = trapperAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddShuffled[0];
        document.getElementById("perkslotthree").innerHTML = killerAddShuffled[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/WR.png'>The Wraith") {
        var killerAddShuffled = wraithAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddShuffled[0];
        document.getElementById("perkslotthree").innerHTML = killerAddShuffled[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/PIG.png'>The Pig") {
        var killerAddShuffled = pigAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/ON.png'>The Oni") {
        var killerAddShuffled = oniAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K19.png'>The Deathslinger") {
        var killerAddShuffled = deathAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K20.png'>The Executioner") {
        var killerAddShuffled = exeAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K21.png'>The Blight") {
        var killerAddShuffled = blighAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K22.png'>The Twins") {
        var killerAddShuffled = twinsAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K23.png'>The Trickster") {
        var killerAddShuffled = trickAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K24.png'>The Nemesis") {
        var killerAddShuffled = nemesisAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K25.png'>Pinhead") {
        var killerAddShuffled = pinheadAdd.sort(function () {
            return .5 - Math.random()
        });
        
        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K26.png'>The Artist") {
        var killerAddShuffled = artistAdd.sort(function () {
            return .5 - Math.random()
        });
    
        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K19.png'>The Deathslinger") {
        var killerAddShuffled = deathAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K20.png'>The Executioner") {
        var killerAddShuffled = exeAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K21.png'>The Blight") {
        var killerAddShuffled = blighAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K22.png'>The Twins") {
        var killerAddShuffled = twinsAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);

        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K23.png'>The Trickster") {
        var killerAddShuffled = trickAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/K24.png'>The Nemesis") {
        var killerAddShuffled = nemesisAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
        document.getElementById("perkslotfour").innerHTML = killerselected[0];
    } else {
        document.getElementById("test").innerHTML = "fejl"
    };
}

// The one for killer perks
function randomateKillPerks() {
    var Killshuffled = KillImgSrc.sort(function () {
        return .5 - Math.random()
    });
    var Killselected = Killshuffled.slice(0, 4);

    document.getElementById("perkslotone").innerHTML = Killselected[0];
    document.getElementById("perkslottwo").innerHTML = Killselected[1];
    document.getElementById("perkslotthree").innerHTML = Killselected[2];
    document.getElementById("perkslotfour").innerHTML = Killselected[3];
};

// The one for survivor items
function randomateItems() {
    var Itemshuffled = Items.sort(function () {
        return .5 - Math.random()
    });
    var Itemselected = Itemshuffled.slice(0);


    if (Itemshuffled[0] == "Key") {

        var Keyshuffled = Key.sort(function () {
            return .5 - Math.random()
        });

        var Keyselected = Keyshuffled.slice(0);
        var keyaddshuffled = keyadd.sort(function () {
            return .5 - Math.random()
        });
        var Itemaddselected = keyaddshuffled.slice(0, 1);

        document.getElementById("perkslotone").innerHTML = Itemselected[0];
        document.getElementById("perkslotone").innerHTML = Itemaddselected[0];
        document.getElementById("perkslotone").innerHTML = Itemaddselected[1];
        document.getElementById("perkslotone").innerHTML = Keyselected[0];
        document.getElementById("perkslottwo").innerHTML = keyaddshuffled[0];
        document.getElementById("perkslotthree").innerHTML = keyaddshuffled[1];
        document.getElementById("perkslotfour").innerHTML = Keyselected[0];
    } else if (Itemshuffled[0] == "Map") {

        var Mapshuffled = Map.sort(function () {
            return .5 - Math.random()
        });

        var Mapselected = Mapshuffled.slice(0);
        var mapaddshuffled = mapadd.sort(function () {
            return .5 - Math.random()
        });
        var Itemaddselected = mapaddshuffled.slice(0, 1);

        document.getElementById("perkslotone").innerHTML = Mapselected[0];
        document.getElementById("perkslottwo").innerHTML = mapaddshuffled[0];
        document.getElementById("perkslotthree").innerHTML = mapaddshuffled[1];
        document.getElementById("perkslotfour").innerHTML = Mapselected[0];
    } else if (Itemshuffled[0] == "Medkit") {

        var Medkitshuffled = Medkit.sort(function () {
            return .5 - Math.random()
        });

        var Medkitselected = Medkitshuffled.slice(0);
        var medkitaddshuffled = medkitadd.sort(function () {
            return .5 - Math.random()
        });
        var Itemaddselected = medkitaddshuffled.slice(0, 1);

        document.getElementById("perkslotone").innerHTML = Medkitselected[0];
        document.getElementById("perkslottwo").innerHTML = medkitaddshuffled[0];
        document.getElementById("perkslotthree").innerHTML = medkitaddshuffled[1];
        document.getElementById("perkslotfour").innerHTML = Medkitselected[0];
    } else if (Itemshuffled[0] == "Toolbox") {

        var Toolboxshuffled = Toolbox.sort(function () {
            return .5 - Math.random()
        });
        var Toolboxselected = Toolboxshuffled.slice(0);
        var toolboxaddshuffled = toolboxadd.sort(function () {
            return .5 - Math.random()
        });
        var Itemaddselected = toolboxaddshuffled.slice(0, 1);

        document.getElementById("perkslotone").innerHTML = Toolboxselected[0];
        document.getElementById("perkslottwo").innerHTML = toolboxaddshuffled[0];
        document.getElementById("perkslotthree").innerHTML = toolboxaddshuffled[1];
        document.getElementById("perkslotfour").innerHTML = Toolboxselected[0];
    } else if (Itemshuffled[0] == "Flashlight") {

        var Flashlightshuffled = Flashlight.sort(function () {
            return .5 - Math.random()
        });
        var Flashlightselected = Flashlightshuffled.slice(0);
        var flashlightaddshuffled = flashlightadd.sort(function () {
            return .5 - Math.random()
        });

        var Itemaddselected = flashlightaddshuffled.slice(0, 1);
        document.getElementById("perkslotone").innerHTML = Flashlightselected[0];
        document.getElementById("perkslottwo").innerHTML = flashlightaddshuffled[0];
        document.getElementById("perkslotthree").innerHTML = flashlightaddshuffled[1];
        document.getElementById("perkslotfour").innerHTML = Flashlightselected[0];
    } else if (Itemshuffled[0] == "Firecracker") {
        var Firecrackershuffled = Firecracker.sort(function () {
            return .5 - Math.random()
        });
        var Firecrackerselected = Firecrackershuffled.slice(0);

        document.getElementById("perkslotone").innerHTML = Firecrackerselected[0];
        document.getElementById("perkslottwo").innerHTML = Firecrackerselected[0];
        document.getElementById("perkslotthree").innerHTML = Firecrackerselected[0];
        document.getElementById("perkslotfour").innerHTML = Firecrackerselected[0];
    }
}

// The survivor offerings
function randomateoffsurv() {
    var Offsurvshuffled = offeringsurv.sort(function () {
        return .5 - Math.random()
    });
    var Offsurvselected = Offsurvshuffled.slice(0);

    document.getElementById("perkslotone").innerHTML = Offsurvselected[0];
    document.getElementById("perkslottwo").innerHTML = Offsurvselected[0];
    document.getElementById("perkslotthree").innerHTML = Offsurvselected[0];
    document.getElementById("perkslotfour").innerHTML = Offsurvselected[0];
};

// The killer offerings
function randomateoffkill() {
    var Offkillshuffled = offeringkill.sort(function () {
        return .5 - Math.random()
    });
    var Offkillselected = Offkillshuffled.slice(0);

    document.getElementById("perkslotone").innerHTML = Offkillselected[0];
    document.getElementById("perkslottwo").innerHTML = Offkillselected[0];
    document.getElementById("perkslotthree").innerHTML = Offkillselected[0];
    document.getElementById("perkslotfour").innerHTML = Offkillselected[0];
};