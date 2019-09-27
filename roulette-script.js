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
        randomKillerAddons()
    }];

var RandTitles = ["Random Survivor Perks",
                  "Random Items",
                  "Random Killer",
				  "Random Killer Perks",
                  "Random Killer Addons"
                 ];

var RandDesc = ["These are random survivor perks",
                "These are random items",
				"These are random killers",
                "These are random killer perks",
                "These are random killer addons"
               ];

var SurvImgSrc = ["<img src='css/image/roulette/survivor/AceInTheHole.png'>Ace In The Hole",
			  "<img src='css/image/roulette/survivor/Adrenaline.png'>Adrenaline",
            "<img src='css/image/roulette/survivor/Aftercare.png'>Aftercare",
            "<img src='css/image/roulette/survivor/breakdown.png'>Breakdown",
            "<img src='css/image/roulette/survivor/distortion.png'>Distortion",
            "<img src='css/image/roulette/survivor/bettertogether.png'>Better Toegether",
            "<img src='css/image/roulette/survivor/fixated.png'>Fixated",
            "<img src='css/image/roulette/survivor/innerstrength.png'>Inner Strength",
            "<img src='css/image/roulette/survivor/solidarity.png'>Solidarity",
            "<img src='css/image/roulette/survivor/poised.png'>Poised",
            "<img src='css/image/roulette/survivor/headon.png'>Head On",
            "<img src='css/image/roulette/survivor/flip-Flop.png'>Flip-Flop",
            "<img src='css/image/roulette/survivor/buckleup.png'>Buckle Up",
            "<img src='css/image/roulette/survivor/mettleofman.png'>Mettle of Man",
			  "<img src='css/image/roulette/survivor/Alert.png'>Alert",
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
			  "<img src='css/image/roulette/survivor/WereGonnaLiveForever.png'>Were Gonna Live Forever"];

var Items = ["<img src='css/image/roulette/items/chinesefirecracker.png'>Chinese                  Firecracker",
             "<img src='css/image/roulette/items/winterPartyStarter.png'>Winter Party Starter",
             "<img src='css/image/roulette/items/partyPopper.png'>Party Popper",
             "<img src='css/image/roulette/items/willOwisp.png'>Will O'Wisp",
             "<img src='css/image/roulette/items/skeletonkey.png'>Skeleton Key",
             "<img src='css/image/roulette/items/dullkey.png'>Dull Key",
             "<img src='css/image/roulette/items/brokenkey.png'>Broken Key",
             "<img src='css/image/roulette/items/rainbowmap.png'>Rainbow Map",
             "<img src='css/image/roulette/items/mapitem.png'>Map",
             "<img src='css/image/roulette/items/flashlightItem.png'>Flashligt",
             "<img src='css/image/roulette/items/sportFlashlight.png'>Sport Flashlight",
             "<img src='css/image/roulette/items/utilityFlashlight.png'>Utility Flashlight",
             "<img src='css/image/roulette/items/campingAidKit.png'>Camping Aid Kit",
             "<img src='css/image/roulette/items/First Aid Kit'>",
             "<img src='css/image/roulette/items/partyPopper.png'>Party Popper",
             "<img src='css/image/roulette/items/firstaidkit.png'>First Aid Kit",
             "<img src='css/image/roulette/items/emergencyMed-kit.png'>Emergency Med-Kit",
             "<img src='css/image/roulette/items/rangermed-kit.png'>Ranger Med-Kit",
             "<img src='css/image/roulette/items/allHallowsEveLunchbox.png'>All Hallow' Eve Lunchbox",
             "<img src='css/image/roulette/items/worn-outTools.png'>Worn-Out Tools",
             "<img src='css/image/roulette/items/toolboxitem.png'>Toolbox",
             "<img src='css/image/roulette/items/mechanicsToolbox.png'>Mechanic's Toolbox",
             "<img src='css/image/roulette/items/commodioustoolbox.png'>Commodious Toolbox",
             "<img src='css/image/roulette/items/engineersToolbox.png'>Engineer's Toolbox",
             "<img src='css/image/roulette/items/alexsToolbox.png'>Alex's Toolbox",

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
     "<img src='css/image/roulette/kill/WR.png'>The Wraith"];

var KillImgSrc = ["<img src='css/image/roulette/killer/ANursesCalling.png'>A Nurse's Calling",
				  "<img src='css/image/roulette/killer/Agitation.png'>A Nurses Calling",
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
				  "<img src='css/image/roulette/killer/Whispers.png'>Whispers"];

var huntressAdd = [
    "<img src='css/image/roulette/kill/Huntress/coarseStone.png'>Coarse Stone",
    "<img src='css/image/roulette/kill/Huntress/berusToxin.png'>Berus Toxin",
    "<img src='css/image/roulette/kill/Huntress/bandagedHaft.png'>Bandaged Haft",
    "<img src='css/image/roulette/kill/Huntress/amanitaToxin.png'>Amanita Toxin",
    "<img src='css/image/roulette/kill/Huntress/yewSeedBrew.png'>Yes Seed Brew",
    "<img src='css/image/roulette/kill/Huntress/shinyPin.png'>Shiny Pin",
    "<img src='css/image/roulette/kill/Huntress/oakHaft.png'>Oak haft",
    "<img src='css/image/roulette/kill/Huntress/mannaGrassBraid.png'>Manna Grass Braid",
    "<img src='css/image/roulette/kill/Huntress/leatherLoop.png'>Leather Loop",
    "<img src='css/image/roulette/kill/Huntress/fineStone.png'>Fine Stone",
    "<img src='css/image/roulette/kill/Huntress/deerskinGloves.png'>Deer Skin Glove",
    "<img src='css/image/roulette/kill/Huntress/yewSeedConcoction.png'>Yew Seed Concotion",
    "<img src='css/image/roulette/kill/Huntress/venomousConcoction.png'>Venomous Concotion",
    "<img src='css/image/roulette/kill/Huntress/rustyHead.png'>Rusty Head",
    "<img src='css/image/roulette/kill/Huntress/pungentPhial.png'>Pungent Phial",
    "<img src='css/image/roulette/kill/Huntress/flowerBabushka.png'>Flower Babushka",
    "<img src='css/image/roulette/kill/Huntress/infantryBelt.png'>Infantry Belt",
    "<img src='css/image/roulette/kill/Huntress/glowingConcoction.png'>Glowing Concotion",
    "<img src='css/image/roulette/kill/Huntress/begrimedHead.png'>Begrimed Head",
    "<img src='css/image/roulette/kill/Huntress/iridescentHead.png'>Iridescent Head"

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
    "<img src='css/image/roulette/kill/Doctor/obedienceCartersNotes.png'>Obedience Carter Notes",
    "<img src='css/image/roulette/kill/Doctor/disciplineCartersNotes.png'>Discipline Carters Notes",
    "<img src='css/image/roulette/kill/Doctor/calmCartersNotes.png'>Calm Carters Notes",
    "<img src='css/image/roulette/kill/Doctor/iridescentKing.png'>Iridescent King"
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
    "<img src='css/image/roulette/kill/Clown/ether5Vol.png'>Ether 5 VOL",
    "<img src='css/image/roulette/kill/Clown/thickCorkStopper.png'>Thick Cork Stopper",
    "<img src='css/image/roulette/kill/Clown/stickySodaBottle.png'>Sticky Soda Bottle",
    "<img src='css/image/roulette/kill/Clown/starlingFeather.png'>Starling Feater",
    "<img src='css/image/roulette/kill/Clown/solventJug.png'>Solven Jug",
    "<img src='css/image/roulette/kill/Clown/keroseneCan.png'>Kerosene Cam",
    "<img src='css/image/roulette/kill/Clown/vhsPorn.png'>VHS Porn",
    "<img src='css/image/roulette/kill/Clown/sulphuricAcidVial.png'>Sulphuric Acid",
    "<img src='css/image/roulette/kill/Clown/flaskOfBleach.png'>Flask Of Bleach",
    "<img src='css/image/roulette/kill/Clown/ether10Vol.png'>Ether 10 VOL",
    "<img src='css/image/roulette/kill/Clown/bottleOfChloroform.png'>Bottle Of Chloroform",
    "<img src='css/image/roulette/kill/Clown/garishMake-UpKit.png'>Garish Make-Upkit",
    "<img src='css/image/roulette/kill/Clown/ether15Vol.png'>Ether 15 VOL",
    "<img src='css/image/roulette/kill/Clown/cigarBox.png'>Cigar Box",
    "<img src='css/image/roulette/kill/Clown/cheapGinBottle.png'>Cheap Gin Bottle",
    "<img src='css/image/roulette/kill/Clown/tattoosMiddleFinger.png'>Tattoos Middle Finger",
    "<img src='css/image/roulette/kill/Clown/redheadsPinkyFinger.png.png'>Redheads Pinky Finger"

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
    "<img src='css/image/roulette/kill/Hillbilly/vegetableOil.png'>Vegetable Oil",
    "<img src='css/image/roulette/kill/Hillbilly/sparkPlug.png'>Spark Plug",
    "<img src='css/image/roulette/kill/Hillbilly/chainsawFile.png'>Chansaw File",
    "<img src='css/image/roulette/kill/Hillbilly/spikedBoots.png'>Spiked Boots",
    "<img src='css/image/roulette/kill/Hillbilly/speedLimiter.png'>Speed Limiter",
    "<img src='css/image/roulette/kill/Hillbilly/shopLubricant.png'>Shop Lubricant",
    "<img src='css/image/roulette/kill/Hillbilly/primerBulb.png'>Primer Bulb",
    "<img src='css/image/roulette/kill/Hillbilly/longGuideBar.png'>Long Guide Bar",
    "<img src='css/image/roulette/kill/Hillbilly/homemadeMuffler.png'>Homemade Muffler",
    "<img src='css/image/roulette/kill/Hillbilly/grislyChains.png'>Grisly Chains",
    "<img src='css/image/roulette/kill/Hillbilly/depthGaugeRake.png'>Depth Gauge Rake",
    "<img src='css/image/roulette/kill/Hillbilly/deathEngravings.png'>Death Engravings",
    "<img src='css/image/roulette/kill/Hillbilly/theThompsonsMix.png'>The Thompsons Mix",
    "<img src='css/image/roulette/kill/Hillbilly/rustedChains.png'>Rusted Chains",
    "<img src='css/image/roulette/kill/Hillbilly/lightChassis.png'>Light Chassis",
    "<img src='css/image/roulette/kill/Hillbilly/doomEngravings.png'>Doom Engravings",
    "<img src='css/image/roulette/kill/Hillbilly/carburettorTuningGuide.png'>Carburettor Tuning Guide",
    "<img src='css/image/roulette/kill/Hillbilly/thompsonsMoonshine.png'>Thompsons Moonshine",
    "<img src='css/image/roulette/kill/Hillbilly/begrimedChains.png'>Begrimed Chains"

];

var spiritAdd = [
    "<img src='css/image/roulette/kill/Spirit/zori.png'>",
    "<img src='css/image/roulette/kill/Spirit/shiawaseAmulet.png'>",
    "<img src='css/image/roulette/kill/Spirit/origamiCrane.png'>",
    "<img src='css/image/roulette/kill/Spirit/giftedBambooComb.png'>",
    "<img src='css/image/roulette/kill/Spirit/whiteHairRibbon.png'>",
    "<img src='css/image/roulette/kill/Spirit/rinsBrokenWatch.png'>",
    "<img src='css/image/roulette/kill/Spirit/muddySportsDayCap.png'>",
    "<img src='css/image/roulette/kill/Spirit/kaiunTalisman.png'>",
    "<img src='css/image/roulette/kill/Spirit/juniperBonsai.png'>",
    "<img src='css/image/roulette/kill/Spirit/rustyFlute.png'>",
    "<img src='css/image/roulette/kill/Spirit/katsumoriTalisman.png'>",
    "<img src='css/image/roulette/kill/Spirit/katanaTsuba.png'>",
    "<img src='css/image/roulette/kill/Spirit/dirtyUwabaki.png'>",
    "<img src='css/image/roulette/kill/Spirit/bloodyHairBrooch.png'>",
    "<img src='css/image/roulette/kill/Spirit/yakuyokeAmulet.png'>",
    "<img src='css/image/roulette/kill/Spirit/wakizashiSaya.png'>",
    "<img src='css/image/roulette/kill/Spirit/prayerBeadsBracelet.png'>",
    "<img src='css/image/roulette/kill/Spirit/driedCherryBlossom.png'>",
    "<img src='css/image/roulette/kill/Spirit/mother-DaughterRing.png'>",
    "<img src='css/image/roulette/kill/Spirit/fathersGlasses.png'>"

];

var legionAdd = [
    "<img src='css/image/roulette/kill/Legion/smileyFacePin.png'>",
    "<img src='css/image/roulette/kill/Legion/scratchedRuler.png'>",
    "<img src='css/image/roulette/kill/Legion/mischiefList.png'>",
    "<img src='css/image/roulette/kill/Legion/friendshipBracelet.png'>",
    "<img src='css/image/roulette/kill/Legion/never-SleepPills.png'>",
    "<img src='css/image/roulette/kill/Legion/muralSketch.png'>",
    "<img src='css/image/roulette/kill/Legion/juliesMixTape.png'>",
    "<img src='css/image/roulette/kill/Legion/etchedRuler.png'>",
    "<img src='css/image/roulette/kill/Legion/defacedSmileyPin.png'>",
    "<img src='css/image/roulette/kill/Legion/theLegionPin.png'>",
    "<img src='css/image/roulette/kill/Legion/susiesMixTape.png'>",
    "<img src='css/image/roulette/kill/Legion/stolenSketchBook.png'>",
    "<img src='css/image/roulette/kill/Legion/nastyBlade.png'>",
    "<img src='css/image/roulette/kill/Legion/joeysMixTape.png'>",
    "<img src='css/image/roulette/kill/Legion/stabWoundsStudy.png'>",
    "<img src='css/image/roulette/kill/Legion/franksMixTape.png'>",
    "<img src='css/image/roulette/kill/Legion/filthyBlade.png'>",
    "<img src='css/image/roulette/kill/Legion/coldDirt.png'>",
    "<img src='css/image/roulette/kill/Legion/iridescentButton.png'>",
    "<img src='css/image/roulette/kill/Legion/fumingMixTape.png'>"

];

var plagueAdd = [
    "<img src='css/image/roulette/kill/Plague/prayerTabletFragment.png'>",
    "<img src='css/image/roulette/kill/Plague/olibanumIncense.png'>",
    "<img src='css/image/roulette/kill/Plague/limestoneSeal.png'>",
    "<img src='css/image/roulette/kill/Plague/healingSalve.png'>",
    "<img src='css/image/roulette/kill/Plague/prophylacticAmulet.png'>",
    "<img src='css/image/roulette/kill/Plague/potentTincture.png'>",
    "<img src='css/image/roulette/kill/Plague/haematiteSeal.png'>",
    "<img src='css/image/roulette/kill/Plague/emeticPotion.png'>",
    "<img src='css/image/roulette/kill/Plague/blessedApple.png'>",
    "<img src='css/image/roulette/kill/Plague/rubbingOil.png'>",
    "<img src='css/image/roulette/kill/Plague/infectedEmetic.png'>",
    "<img src='css/image/roulette/kill/Plague/incensedOintment.png'>",
    "<img src='css/image/roulette/kill/Plague/exorcismAmulet.png'>",
    "<img src='css/image/roulette/kill/Plague/ashenApple.png'>",
    "<img src='css/image/roulette/kill/Plague/worshipTablet.png'>",
    "<img src='css/image/roulette/kill/Plague/vileEmetic.png'>",
    "<img src='css/image/roulette/kill/Plague/severedToe.png'>",
    "<img src='css/image/roulette/kill/Plague/devoteesAmulet.png'>",
    "<img src='css/image/roulette/kill/Plague/iridescentSeal.png'>",
    "<img src='css/image/roulette/kill/Plague/blackIncense.png'>"
];

var nurseAdd = [
    "<img src='css/image/roulette/kill/Nurse/woodenHorse.png'>",
    "<img src='css/image/roulette/kill/Nurse/whiteNitComb.png'>",
    "<img src='css/image/roulette/kill/Nurse/tornBookmark.png'>",
    "<img src='css/image/roulette/kill/Nurse/metalSpoon.png'>",
    "<img src='css/image/roulette/kill/Nurse/matchbox.png'>",
    "<img src='css/image/roulette/kill/Nurse/badManKeepsake.png'>",
    "<img src='css/image/roulette/kill/Nurse/pocketWatch.png'>",
    "<img src='css/image/roulette/kill/Nurse/dullBracelet.png'>",
    "<img src='css/image/roulette/kill/Nurse/darkCincture.png'>",
    "<img src='css/image/roulette/kill/Nurse/catatonicBoysTreasure.png'>",
    "<img src='css/image/roulette/kill/Nurse/spasmodicBreath.png'>",
    "<img src='css/image/roulette/kill/Nurse/heavyPanting.png'>",
    "<img src='css/image/roulette/kill/Nurse/fragileWheeze.png'>",
    "<img src='css/image/roulette/kill/Nurse/ataxicRespiration.png'>",
    "<img src='css/image/roulette/kill/Nurse/anxiousGasp.png'>",
    "<img src='css/image/roulette/kill/Nurse/plaidFlannel.png'>",
    "<img src='css/image/roulette/kill/Nurse/kavanaghsLastBreath.png'>",
    "<img src='css/image/roulette/kill/Nurse/jennersLastBreath.png'>",
    "<img src='css/image/roulette/kill/Nurse/campbellsLastBreath.png'>",
    "<img src='css/image/roulette/kill/Nurse/badMansLastBreath.png'>"
];

var ghostAdd = [
    "<img src='css/image/roulette/kill/Ghostface/philly.png'>",
    "<img src='css/image/roulette/kill/Ghostface/walleyesMatchbook.png'>",
    "<img src='css/image/roulette/kill/Ghostface/headlinesCutouts.png'>",
    "<img src='css/image/roulette/kill/Ghostface/cheapCologne.png'>",
    "<img src='css/image/roulette/kill/Ghostface/telephotoLens.png'>",
    "<img src='css/image/roulette/kill/Ghostface/reusuableCinchStraps.png'>",
    "<img src='css/image/roulette/kill/Ghostface/olsensJournal.png'>",
    "<img src='css/image/roulette/kill/Ghostface/olsensAddressBook.png'>",
    "<img src='css/image/roulette/kill/Ghostface/markedMap.png'>",
    "<img src='css/image/roulette/kill/Ghostface/olsensWallet.png'>",
    "<img src='css/image/roulette/kill/Ghostface/leatherKnifeSheath.png'>",
    "<img src='css/image/roulette/kill/Ghostface/lastingPerfume.png'>",
    "<img src='css/image/roulette/kill/Ghostface/knifeBeltClip.png'>",
    "<img src='css/image/roulette/kill/Ghostface/chewedPen.png'>",
    "<img src='css/image/roulette/kill/Ghostface/victimsDetailedRoutine.png'>",
    "<img src='css/image/roulette/kill/Ghostface/nightvisionMonocular.png'>",
    "<img src='css/image/roulette/kill/Ghostface/drop-LegKnifeSheath.png'>",
    "<img src='css/image/roulette/kill/Ghostface/driversLicense.png'>",
    "<img src='css/image/roulette/kill/Ghostface/caughtOnTape.png'>",
    "<img src='css/image/roulette/kill/Ghostface/outdoorSecurityCamera.png'>"

];

var demoAdd = [
    "<img src='css/image/roulette/kill/Demo/rottenPumpkin.png'>",
    "<img src='css/image/roulette/kill/Demo/blackHeart.png'>",
    "<img src='css/image/roulette/kill/Demo/ratLiver.png'>",
    "<img src='css/image/roulette/kill/Demo/ratTail.png'>",
    "<img src='css/image/roulette/kill/Demo/stickyLining.png'>",
    "<img src='css/image/roulette/kill/Demo/viscousWebbing.png'>",
    "<img src='css/image/roulette/kill/Demo/rottenGreenTripe.png'>",
    "<img src='css/image/roulette/kill/Demo/mewsGuts.png'>",
    "<img src='css/image/roulette/kill/Demo/barbsGlasses.png'>",
    "<img src='css/image/roulette/kill/Demo/elevensSoda.png'>",
    "<img src='css/image/roulette/kill/Demo/thornyVines.png'>",
    "<img src='css/image/roulette/kill/Demo/brassCaseLighter.png'>",
    "<img src='css/image/roulette/kill/Demo/violetWaxcap.png'>",
    "<img src='css/image/roulette/kill/Demo/deerLung.png'>",
    "<img src='css/image/roulette/kill/Demo/lifeguardWhistle.png'>",
    "<img src='css/image/roulette/kill/Demo/vermilionWebcap.png'>",
    "<img src='css/image/roulette/kill/Demo/upsideDownResin.png'>",
    "<img src='css/image/roulette/kill/Demo/unknownEgg.png'>",
    "<img src='css/image/roulette/kill/Demo/leproseLichen.png'>",
    "<img src='css/image/roulette/kill/Demo/redMoss.png'>"

];

var shapeAdd = [
    "<img src='css/image/roulette/kill/Shape/tackyEarrings.png'>",
    "<img src='css/image/roulette/kill/Shape/boyfriendsMemo.png'>",
    "<img src='css/image/roulette/kill/Shape/blondeHair.png'>",
    "<img src='css/image/roulette/kill/Shape/reflectiveFragment.png'>",
    "<img src='css/image/roulette/kill/Shape/memorialFlower.png'>",
    "<img src='css/image/roulette/kill/Shape/jewelry.png'>",
    "<img src='css/image/roulette/kill/Shape/hairBrush.png'>",
    "<img src='css/image/roulette/kill/Shape/glassFragment.png'>",
    "<img src='css/image/roulette/kill/Shape/deadRabbit.png'>",
    "<img src='css/image/roulette/kill/Shape/mirrorShard.png'>",
    "<img src='css/image/roulette/kill/Shape/judithsJournal.png'>",
    "<img src='css/image/roulette/kill/Shape/jewelryBox.png'>",
    "<img src='css/image/roulette/kill/Shape/jMyersMemorial.png'>",
    "<img src='css/image/roulette/kill/Shape/hairBow.png'>",
    "<img src='css/image/roulette/kill/Shape/vanityMirror.png'>",
    "<img src='css/image/roulette/kill/Shape/tombstonePiece.png'>",
    "<img src='css/image/roulette/kill/Shape/scratchedMirror.png'>",
    "<img src='css/image/roulette/kill/Shape/lockOfHair.png'>",
    "<img src='css/image/roulette/kill/Shape/judithsTombstone.png'>",
    "<img src='css/image/roulette/kill/Shape/fragrantTuftOfHair.png'>"

];

var trapperAdd = [
    "<img src='css/image/roulette/kill/Trapper/trapperSack.png'>",
    "<img src='css/image/roulette/kill/Trapper/trapperGloves.png'>",
    "<img src='css/image/roulette/kill/Trapper/strongCoilSpring.png'>",
    "<img src='css/image/roulette/kill/Trapper/paddedJaws.png'>",
    "<img src='css/image/roulette/kill/Trapper/trapperBag.png'>",
    "<img src='css/image/roulette/kill/Trapper/trapSetters.png'>",
    "<img src='css/image/roulette/kill/Trapper/serratedJaws.png'>",
    "<img src='css/image/roulette/kill/Trapper/logwoodDye.png'>",
    "<img src='css/image/roulette/kill/Trapper/4-coilSpringKit.png'>",
    "<img src='css/image/roulette/kill/Trapper/waxBrick.png'>",
    "<img src='css/image/roulette/kill/Trapper/tarBottle.png'>",
    "<img src='css/image/roulette/kill/Trapper/settingTools.png'>",
    "<img src='css/image/roulette/kill/Trapper/secondaryCoil.png'>",
    "<img src='css/image/roulette/kill/Trapper/rustedJaws.png'>",
    "<img src='css/image/roulette/kill/Trapper/stitchedBag.png'>",
    "<img src='css/image/roulette/kill/Trapper/oilyCoil.png'>",
    "<img src='css/image/roulette/kill/Trapper/honingStone.png'>",
    "<img src='css/image/roulette/kill/Trapper/fasteningTools.png'>",
    "<img src='css/image/roulette/kill/Trapper/iridescentStone.png'>",
    "<img src='css/image/roulette/kill/Trapper/bloodyCoil.png'>"

];

var wraithAdd = [
    "<img src='css/image/roulette/kill/Wraith/theSerpent-Soot.png'>",
    "<img src='css/image/roulette/kill/Wraith/theHound-Soot.png'>",
    "<img src='css/image/roulette/kill/Wraith/theGhost-Soot.png'>",
    "<img src='css/image/roulette/kill/Wraith/theBeast-Soot.png'>",
    "<img src='css/image/roulette/kill/Wraith/boneClapper.png'>",
    "<img src='css/image/roulette/kill/Wraith/blink-Mud.png'>",
    "<img src='css/image/roulette/kill/Wraith/windstorm-Mud.png'>",
    "<img src='css/image/roulette/kill/Wraith/swiftHunt-Mud.png'>",
    "<img src='css/image/roulette/kill/Wraith/blindWarrior-Mud.png'>",
    "<img src='css/image/roulette/kill/Wraith/windstorm-White.png'>",
    "<img src='css/image/roulette/kill/Wraith/swiftHunt-White.png'>",
    "<img src='css/image/roulette/kill/Wraith/shadowDance-White.png'>",
    "<img src='css/image/roulette/kill/Wraith/blink-White.png'>",
    "<img src='css/image/roulette/kill/Wraith/blindWarrior-White.png'>",
    "<img src='css/image/roulette/kill/Wraith/windstorm-Blood.png'>",
    "<img src='css/image/roulette/kill/Wraith/swiftHunt-Blood.png'>",
    "<img src='css/image/roulette/kill/Wraith/shadowDance-Blood.png'>",
    "<img src='css/image/roulette/kill/Wraith/allSeeing-Blood.png'>",
    "<img src='css/image/roulette/kill/Wraith/coxcombedClapper.png'>",
    "<img src='css/image/roulette/kill/Wraith/allSeeing-Spirit.png'>"

];


var RandButton = ["none",
				  "block"];



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

function randomateSurvPerks() {

    var Survshuffled = SurvImgSrc.sort(function () {
        return .5 - Math.random()
    });
    var Survselected = Survshuffled.slice(0, 4);

    document.getElementById("perkslotone").innerHTML = Survselected[0];
    document.getElementById("perkslottwo").innerHTML = Survselected[1];
    document.getElementById("perkslotthree").innerHTML = Survselected[2];
    document.getElementById("perkslotfour").innerHTML = Survselected[3];

};

function randomateKiller() {
    var killershuffled = Killer.sort(function () {
        return .5 - Math.random()
    });
    var killerselected = killershuffled.slice(1);

    // document.getElementById("test").innerHTML = killershuffled;
    // document.getElementById("test2").innerHTML = killerselected;

    if (killerselected[0] == "<img src='css/image/roulette/kill/BE.png'>The Huntress") {
        var killerAddShuffled = huntressAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/CA.png'>The Cannibal") {
        var killerAddShuffled = cannibalAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/DO.png'>The Doctor") {
        var killerAddShuffled = doctorAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslottthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/EK.png'>The Nightmare") {
        var killerAddShuffled = freddyAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/GK.png'>The Clown") {
        var killerAddShuffled = clownAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/HA.png'>The Hag") {
        var killerAddShuffled = hag.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/HB.png'>Hill Billy") {
        var killerAddShuffled = hillAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/HK.png'>The Spirit") {
        var killerAddShuffled = spiritAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/KK.png'>Legion") {
        var killerAddShuffled = legionAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/MK.png'>The Plague") {
        var killerAddShuffled = plagueAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/NR.png'>Nurse") {
        var killerAddShuffled = nurseAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/OK.png'>Ghostface") {
        var killerAddShuffled = ghostAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/QK.png'>The Demorgorgon") {
        var killerAddShuffled = demoAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/SH.png'>The Shape") {
        var killerAddShuffled = shapeAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddselected[0];
        document.getElementById("perkslotthree").innerHTML = killerAddselected[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/TR.png'>The Trapper") {
        var killerAddShuffled = trapperAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddShuffled[0];
        document.getElementById("perkslotthree").innerHTML = killerAddShuffled[1];
    } else if (killerselected[0] == "<img src='css/image/roulette/kill/WR.png'>The Wraith") {
        var killerAddShuffled = wraithAdd.sort(function () {
            return .5 - Math.random()
        });

        var killerAddselected = killerAddShuffled.slice(0, 2);



        document.getElementById("perkslotone").innerHTML = killerselected[0];
        document.getElementById("perkslottwo").innerHTML = killerAddShuffled[0];
        document.getElementById("perkslotthree").innerHTML = killerAddShuffled[1];
    }
    
    else {
        document.getElementById("test").innerHTML = "fejl"
    }
}

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


function randomateItems() {
    var Itemshuffled = Items.sort(function () {
        return .5 - Math.random()
    });
    var Itemselected = Itemshuffled.slice(0);

    document.getElementById("perkslotone").innerHTML = Itemselected[0];
    document.getElementById("perkslottwo").innerHTML = Itemselected[0];
    document.getElementById("perkslotthree").innerHTML = Itemselected[0];
    document.getElementById("perkslotfour").innerHTML = Itemselected[0];
};
