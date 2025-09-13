//* Fill in the blank Variables
let classSummaryTemplate = "";

let classSkillTemplate = "";

let classEquipTemplate = "";

let classMultiTemplate = "";

//* Blanks to be filled

// Class Summaries

let barbarianSummary =
  "So you want to know about the Barbarian, the unrelenting brute of the game. Well don't you worry, we actually have one here ready to interview! What do you say, nameless Barbarian? '...RAAAAAAUUUUUUGH'. Well Said. Ready to take a hit and deal it back two-fold, barbarians are a Strength based Melee class, with a focus on either absorbing damage for your team or hitting with the force of a thousand suns out of pure anger. As they say, Person hit me? I hit person HARDER! You can't go wrong bashing it out with your big stick as a Barbarian.";

let bardSummary =
  "The Bard, equally suave and support. Inspiring the party to keep up the good work? Check. Slinging spells to keep the battlefield changing in your favor? Check. No shortage of Charisma to talk your way in and out of every situation? Absolutely. The Bard is a Charisma based spellcasting class, with the utility to be helpful in every situation, in and out of combat. A jack of all trades, master of some, you are the ultimate utility tool, so get ready to perform as a Bard.";

let clericSummary =
  "Ah, the humble healer, a classi... wait what are you doing, wait nO WAI- *cleric sounds*. The Cleric is a class that focuses on spellcasting using their Wisdom and divine powers, letting them specialize in a wide variety of things. While some call the Cleric the healing class, it is capable of much more, where it can also be an insane damage dealer. Either way, the support of your god ultimately decides your fate as a cleric, just be sure to not make the mistake of making enemies with the wrong one, I heard Divine Punishment is unpleasant.";

let druidSummary =
  "Here, we see the humble druid in it's natural habitat. A Wisdom based Spellcaster, it channels the power of nature to support your allies and not-so-support your enemies. With grace, we watch them cast their spells and h- HOLY HELL IS THAT A BEAR?!?!? Yes, you heard right, not only do they sling spells to assist their allies, they also are so in tune with nature, that they have harnessed the ability shapechange into the creatures of the forest. So whether it be spells or beasts, a Druid will have your back.";

let fighterSummary =
  "Knight wielding a sword and shield for the innocent? Fighter. An archer who lies in wait for the perfect shot? Fighter. A shambling maniac with a scythe and a thirst for blood? Fighter. A decent class for any player just starting their journey, the fighter is a versatile master of any weapon of choice. Whatever you want to make, the world is yours. With ultimate custimizability, no two fighters ever have to look the same. So don't worry about the goblin in the corner with 13 too many knives, it's just another Fighter in the making.";

let monkSummary =
  "A man in a gi is found training on an island, practicing their martial arts for an upcoming tournament. Suddenly, alien creatures arrive and threaten his peace. Too bad for the them, however, the man is ready for a fight, and suddenly with a shout, releases a ki bla- WAIT THIS IS JUST THE BEGINNING OF DRAGON BALL Z. You heard that right, the monk is a dexterity based melee class that allows you to focus an a variety of things resembling certain media, from martial arts to ki blasts. Are you ready to power up and release enough punchs that it takes two episodes to finish the fight? Then you might just be the next G- monk, the next Monk.";

let paladinSummary =
  "You're village is under attack, and you're running away from the bandits who decided your home was the next to go up in flames. Suddenly, you see man riding in full speed towards you, clad in shiny armor. 'A hero has arrived!' is what you think, moments before the man kindly relieves your neck of the weight of your head. The Paladin is a class built upon tenets of the god they serve, for better... or for worst. Built to both be able to stand at the front and take protect their allies, they also are capable of small array of spells to either empower their own damage in return, or support the party in small ways. Tanky and powerful, a Paladin can take a beating, and dish out a dish best served cold.";

let rangerSummary =
  "Something lurks in the dark, looming over the forest. You hear a the rustling of leaves, the snapping of twigs, then suddenly, an arrow comes flying out, piercing it's prey in the heart. The hunter has found it's mark, and hopefully, it sticks to wild animals. The ranger is a class specializing in a variety of skills involved with wildlife, whether it be tracking down prey, or befriending the very cute, totally not dangerous, 500 pound Owlbear drooling at the sight of fresh meat. With a repertoire of spells at their side, just hope you are not the next obsession on the other end of the arrow or blade of a Ranger.";

let rogueSummary =
  "'Stop, Thief!' a woman shouts, a man running from her and into the alleyways expertly. Another easy target, another purse full of money. But as he finally believes he escapes, a silent shot pierces him from behind, killing him instantly. The rogue is a class that specializes very well in certain areas. A dexterity based fighter, they usually excel at stealth and subterfuge, with a killing ability that would make Oppenheimer blush. Able to deal massive damage to a single target, without ever being seen, you truly won't know what hit you.";

let sorcererSummary =
  "Do you like magic? Do you think that there's something your family is hiding from you? Are there scales growing on your skin? Well then you might just be a Sorcerer. A Charisma based magic class, the Sorcerer gets a variety of abilities based off of where their blood comes from, modifying and enhancing the spells they learned to become a veritable force of destruction. Do whatever you want with your spells, turn your ice into fire, disintigrate two people for the price of one, really anything is possible with a sorcerer.";

let warlockSummary =
  "Warlocks, universally feared for the contracts they make with the unknown. Maybe a demon has bought your soul, or an eldritch being has taken anchor in your heart, or even worse, you have no clue where the power came from. Either way, Warlocks use the abilities from their willing patrons to sling spells and become menaces on the battlefield. Warlocks are charisma based spellcasters, with abilities to make up for their lack of legitimate spells. But what a warlock lacks in quantity, it more than makes up for in quantity.";

let wizardSummary =
  "In the corner of the library sits a woman, reading a book larger than most dictionaries. Suddenly, a man runs into the library, wreaking havoc and destroying shelves. Suddenly, it seems as if time has stopped. The next second, the man is gone, and the library has returned to it's previous state, the only difference being the woman, being several pages further in her book. The wizard is an Intellegence based spellcasting class that can learn almost any spell available, and save them for later. Need a healer? What about a walking nuke? Or even a better than average chef? Wizards can do it all with the flick of a finger and a tome of all their findings.";

// Class Proficiencies Strings
let skillPart1 = "As a ";
let skillPart2 = " you get to ";
let skillPart3 = ". You also become proficient in ";
let skillPart4 = " and the saving throws for ";

// Class Equipment Strings
let equipPart1 = "For sure, you'll start out with "
let equipPart2 = ", but then you'll have to choose between two for the rest. Your choices are "
let equipPart3 = ". After that, you're ready to go!"

// Class Multiclass requirements
