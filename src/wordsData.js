const wordsData = [
  {
    Id: 1,
    Meaning: "Abaft",
    Defination: "in or behind the stern of a ship",
  },
  { Id: 2, Meaning: "Abandon", Defination: "to leave" },
  { Id: 3, Meaning: "Abase", Defination: "cause to feel shame" },
  {
    Id: 4,
    Meaning: "Abashed",
    Defination: "feeling or ca used to feel uneasy and self",
  },
  { Id: 5, Meaning: "Abatement", Defination: "lessening of something" },
  {
    Id: 6,
    Meaning: "Abatis",
    Defination:
      "line of defence consisting of a barrier of felled or live trees with branches (sharpened or with barbed wire entwined) toward the enemy",
  },
  {
    Id: 7,
    Meaning: "Abattoir",
    Defination: "a place where animals are slaughtered for consumption as food",
  },
  { Id: 8, Meaning: "Abbot", Defination: "the superior of a monastery" },
  {
    Id: 9,
    Meaning: "Abdicate",
    Defination: "to give up the position of being king/queen",
  },
  {
    Id: 10,
    Meaning: "Abduct",
    Defination: "to take somebody away illegally, especially using force",
  },
  {
    Id: 11,
    Meaning: "Aberration",
    Defination:
      "a fact, an action or a way of behaving that is not usual, a disorder in one's mental state ",
  },
  { Id: 12, Meaning: "Abhor", Defination: "to hate, to de test" },
  { Id: 13, Meaning: "Abject", Defination: "terrible and without hope " },
  {
    Id: 14,
    Meaning: "Ableism",
    Defination: "discrimination in favor of the able ",
  },
  {
    Id: 15,
    Meaning: "Ablution",
    Defination: "the ritual washing of a priest's hands or of sacred vessels ",
  },
  {
    Id: 16,
    Meaning: "Aboard",
    Defination: "on or onto a ship/plane/ bus or train ",
  },
  {
    Id: 17,
    Meaning: "Abode",
    Defination: "a place where somebody lives ",
  },
  {
    Id: 18,
    Meaning: "Abolish",
    Defination: "formally put an end to a system, practice, or institution ",
  },
  {
    Id: 19,
    Meaning: "Abominable",
    Defination: "unequivocally detestable ",
  },
  {
    Id: 20,
    Meaning: "Abort",
    Defination:
      "to end or cause to end before something has been completed because it is likely to fail ",
  },
  {
    Id: 21,
    Meaning: "Abortionist",
    Defination: "a person (who should be a doctor) who terminates pregnancies ",
  },
  {
    Id: 22,
    Meaning: "Abridge",
    Defination: "to shorten a piece of writing without losing the sense",
  },
  {
    Id: 23,
    Meaning: "Abridgement",
    Defination: "a shortened version o f  a written work 2",
  },
  {
    Id: 24,
    Meaning: "Abrogate",
    Defination: "to officially end a law, an agreement, etc.  ",
  },
  {
    Id: 25,
    Meaning: "Absconders",
    Defination:
      "a fugitive who runs away and hides to avoid arrest/prosecution ",
  },
  {
    Id: 26,
    Meaning: "Absenteeism",
    Defination: "habitual absence from work",
  },
  {
    Id: 27,
    Meaning: "Absolute",
    Defination: "one who is perfect/complete/free from imperfection ",
  },
  {
    Id: 28,
    Meaning: "Abstain",
    Defination:
      "to choose not to use a vote, either in favour of/ against something ",
  },
  {
    Id: 29,
    Meaning: "Abstruse",
    Defination: "difficult to comprehend obscure ",
  },
  { Id: 30, Meaning: "Absurd", Defination: "completely ridiculous" },
  {
    Id: 31,
    Meaning: "Abundance",
    Defination: "a large quantity that is more than enough ",
  },
  {
    Id: 32,
    Meaning: "Academicism",
    Defination: "orthodoxy of a scholastic variety ",
  },
  {
    Id: 33,
    Meaning: "Academy",
    Defination: "a school/college for special training  ",
  },
  {
    Id: 34,
    Meaning: "Accolade",
    Defination: "praise/an award f or an achievement that people admire  ",
  },
  {
    Id: 35,
    Meaning: "Accomplice",
    Defination:
      "a person who helps another to commit a crime/ to do something wrong  ",
  },
  { Id: 36, Meaning: "Accord", Defination: "sympathetic compatibility " },
  {
    Id: 37,
    Meaning: "Accountability",
    Defination: "responsibility to someone or for some activity ",
  },
  {
    Id: 38,
    Meaning: "Accountant",
    Defination: "a person whose profession is to keep accounts ",
  },
  { Id: 39, Meaning: "Accredit", Defination: "give credit for " },
  {
    Id: 40,
    Meaning: "Accretive",
    Defination: "characterized by gradual growth or increase ",
  },
  { Id: 41, Meaning: "Accrual", Defination: "the act of accumulating " },
  {
    Id: 42,
    Meaning: "Accuser",
    Defination:
      "a person who says that somebody has done something wrong/is guilty of something ",
  },
  {
    Id: 43,
    Meaning: "Acerb",
    Defination: "harsh or corrosive in tone 0",
  },
  {
    Id: 44,
    Meaning: "Acetic",
    Defination: "relating to or  containing acetic acid ",
  },
  { Id: 45, Meaning: "Acoustics", Defination: "study of sound  " },
  {
    Id: 46,
    Meaning: "Acquaint",
    Defination: "to make somebody/yourself familiar with/ aware of  something ",
  },
  {
    Id: 47,
    Meaning: "Acquiesce",
    Defination: "to accept something without arguing ",
  },
  {
    Id: 48,
    Meaning: "Acquit",
    Defination:
      "to decide and state officially in court that somebody is not guilty of a crime ",
  },
  {
    Id: 49,
    Meaning: "Acquittal",
    Defination:
      "an official decision in court that a person is not guilty of a crime ",
  },
  {
    Id: 50,
    Meaning: "Acrid",
    Defination: "harsh or corrosive in tone  ",
  },
  {
    Id: 51,
    Meaning: "Acrimonious",
    Defination: "angry and full of strong bitter feelings and words ",
  },
  {
    Id: 52,
    Meaning: "Acrobat",
    Defination:
      "an entertainer who performs difficult acts such as balancing on high ropes (at a circus) // an athlete who performs acts that need skill, agility and coordination ",
  },
  {
    Id: 53,
    Meaning: "Acronym",
    Defination:
      "a word formed from the first letters of the words that make up the name of something ",
  },
  { Id: 54, Meaning: "Acrophobia", Defination: "fear of great heights " },
  {
    Id: 55,
    Meaning: "Acrostic",
    Defination:
      "a poem/other piece of writing in which particular letters in each line, usually first letters, can be read downwards to form a word/words spelling out e.g. CANDY: crunchy and chewy awesome nice and sweet delightful and delicious yummy treat.   ",
  },
  {
    Id: 56,
    Meaning: "Act",
    Defination:
      "to do something // to behave in a particular way // to perform a part in a play/film/ function  ",
  },
  {
    Id: 57,
    Meaning: "Activist",
    Defination: "advocating or en gaged in activism ",
  },
  {
    Id: 58,
    Meaning: "Actuary",
    Defination:
      "someone versed in the collection and interpretation of numerical data (especially some one who uses statistics  to calculate insurance premiums) ",
  },
  {
    Id: 59,
    Meaning: "Acumen",
    Defination:
      "the ability to mak e good judgements and take quick  decisions ",
  },
  { Id: 60, Meaning: "Ad Lib", Defination: "not prepared/ practised" },
  {
    Id: 61,
    Meaning: "Adamant",
    Defination: "determined not to change your mind  ",
  },
  { Id: 62, Meaning: "Adapt", Defination: "to adjust //  to modify  " },
  {
    Id: 63,
    Meaning: "Addict",
    Defination:
      "a person who is very interested in some thing and  spends a lot of his free time in it // a person who is unable to stop taking harmful drugs",
  },
  {
    Id: 64,
    Meaning: "Addiction",
    Defination:
      "(roman law) a formal a ward by a magistrate of  a thing or person to another person (as the award of a debtor to his creditor)  ",
  },
  {
    Id: 65,
    Meaning: "Adept",
    Defination:
      "a person who is good at doing something that is quite difficult ",
  },
  { Id: 66, Meaning: "Adhere", Defination: "to stick firmly " },
  { Id: 67, Meaning: "Adherent", Defination: "sticking fast " },
  {
    Id: 68,
    Meaning: "Adjoins",
    Defination:
      "be next to and joined with (a building, room, or  piece of land)  ",
  },
  {
    Id: 69,
    Meaning: "Adjunct",
    Defination:
      "a thing that is added/attached to some thing larger/more important  ",
  },
  {
    Id: 70,
    Meaning: "Administrate",
    Defination: "work in an administrative capacity ",
  },
  { Id: 71, Meaning: "Admire", Defination: "feel admiration for   " },
  {
    Id: 72,
    Meaning: "Adolescent",
    Defination: "in the process of  developing from a child into an adult ",
  },
  { Id: 73, Meaning: "Adonis", Defination: "an extremely young  man  " },
  {
    Id: 74,
    Meaning: "Adoration",
    Defination: "the worship given to god alone  ",
  },
  {
    Id: 75,
    Meaning: "Adrenalin",
    Defination:
      "a catecholamine secreted by the adrenal medulla in response to stress (trade name adrenalin)   ",
  },
  {
    Id: 76,
    Meaning: "Adroit",
    Defination: "quick or skillful or adept in action or thought ",
  },
  {
    Id: 77,
    Meaning: "Adulations",
    Defination: "admiration and praise that is greater than is necessary ",
  },
  {
    Id: 78,
    Meaning: "Adult",
    Defination: "(of animals) fully developed ",
  },
  {
    Id: 79,
    Meaning: "Advantaged",
    Defination: "being in a good social/financial situation ",
  },
  {
    Id: 80,
    Meaning: "Adventitious",
    Defination: "associated by chance and  not  an  integral part ",
  },
  {
    Id: 81,
    Meaning: "Adventurism",
    Defination: "recklessness in politics or foreign affairs ",
  },
  {
    Id: 82,
    Meaning: "Adversary",
    Defination: "someone who offers opposition j",
  },
  { Id: 83, Meaning: "Advisory", Defination: "giving advice " },
  {
    Id: 84,
    Meaning: "Advocacy",
    Defination: "active support of an idea/a cause ",
  },
  {
    Id: 85,
    Meaning: "Advocate",
    Defination:
      "a person who speak s/supports in favour of somebody/of a public plan/action // a person wh o defends somebody in court ",
  },
  {
    Id: 86,
    Meaning: "Aegis",
    Defination: "kindly endorsement and guidance ",
  },
  {
    Id: 87,
    Meaning: "Aeon",
    Defination: "a major division of time, divided into eras ,",
  },
  { Id: 88, Meaning: "Aerial", Defination: "growing / existing in air " },
  {
    Id: 89,
    Meaning: "Aerophobia",
    Defination:
      "abnormal or excessive fear of drafts or of fresh air / fear or strong dislike of flying ",
  },
  {
    Id: 90,
    Meaning: "Aesthetic",
    Defination: "concerned with beauty or the appreciation of beauty ",
  },
  {
    Id: 91,
    Meaning: "Aesthetics",
    Defination:
      "t he branch of philosophy t hat stud ies the principles of beauty, especially in art ",
  },
  {
    Id: 92,
    Meaning: "Affable",
    Defination: "pleasant, friendly and easy to talk to",
  },
  {
    Id: 93,
    Meaning: "Affaire",
    Defination: "a usually secretive or illicit sexual relationship ",
  },
  {
    Id: 94,
    Meaning: "Affidavit",
    Defination:
      "a written statement that you sw ear is true, and that can be used as evidence in court  ",
  },
  {
    Id: 95,
    Meaning: "Affinity",
    Defination: "clos e connection relationship ",
  },
  {
    Id: 96,
    Meaning: "Affliction",
    Defination: "a cause of great suffering and distress ",
  },
  {
    Id: 97,
    Meaning: "Affluent",
    Defination: "having an abundant supply of money or possessions of value ",
  },
  {
    Id: 98,
    Meaning: "Ageist",
    Defination: "showing prejudice on the  grounds  of a person's age ",
  },
  {
    Id: 99,
    Meaning: "Agenda",
    Defination: "a list of items to be discussed at a meeting ",
  },
  {
    Id: 100,
    Meaning: "Agglomerative",
    Defination: "clustered together but not coherent 22",
  },
  { Id: 101, Meaning: "Aggrandise", Defination: "increase " },
  {
    Id: 102,
    Meaning: "Aggravation",
    Defination: "the fact of an illness/ a bad situation being made worse ",
  },
  {
    Id: 103,
    Meaning: "Aggressive",
    Defination: "angry, and behaving in a threatening way ",
  },
  {
    Id: 104,
    Meaning: "Aggressor",
    Defination: "a person, country etc. that attacks first  ",
  },
  {
    Id: 105,
    Meaning: "Agitate",
    Defination:
      "to arg ue strongly for something  you want // to make somebody feel angry/ anxious/ nervous /",
  },
  {
    Id: 106,
    Meaning: "Agitation",
    Defination:
      "worry and anxiety that you show by be having in a nervous way ",
  },
  {
    Id: 107,
    Meaning: "Agnostic",
    Defination: "a person who doubts truth of religion  ",
  },
  {
    Id: 108,
    Meaning: "Agony",
    Defination: "extreme physical/ mental pain ",
  },
  {
    Id: 109,
    Meaning: "Agoraphobia",
    Defination:
      "a fear of being in public places where there are many other people ",
  },
  {
    Id: 110,
    Meaning: "Agriculturist",
    Defination:
      "an expert in agriculture (practice of farming) who gives advice to farmers ",
  },
  {
    Id: 111,
    Meaning: "Agronomy",
    Defination:
      "the application of soil and plant sciences to land management and crop production",
  },
  {
    Id: 112,
    Meaning: "Alacrity",
    Defination: "eager and cheerful readiness ",
  },
  {
    Id: 113,
    Meaning: "Alarmist",
    Defination: "a person who alarms others needlessly ",
  },
  {
    Id: 114,
    Meaning: "Albinism",
    Defination:
      "the congenital absence of pigmentation in the  eyes and skin and hair ",
  },
  {
    Id: 115,
    Meaning: "Alchemist",
    Defination:
      "one who was versed in the practice of alchemy and who sought an elixir of life and a panacea and an alkahest and the philosopher's  stone /",
  },
  {
    Id: 116,
    Meaning: "Alcoholic",
    Defination:
      "a person who regularly drinks too much alcohol and cannot easily stop drinking  ",
  },
  { Id: 117, Meaning: "Aleatory", Defination: "dependent on chance " },
  { Id: 118, Meaning: "Algophobia", Defination: "fear of pain." },
  {
    Id: 119,
    Meaning: "Algorism",
    Defination: "computation with Arabic figures ",
  },
  {
    Id: 120,
    Meaning: "Alien",
    Defination:
      "hostile, strange and frightening // different from what you are used to ",
  },
  {
    Id: 121,
    Meaning: "Alienation",
    Defination: "the action of alienating ",
  },
  {
    Id: 122,
    Meaning: "Alienism",
    Defination:
      "the quality of being alien / an obsolete term for the study and treatment of mental illness ",
  },
  {
    Id: 123,
    Meaning: "Alimony",
    Defination:
      "the money that a court orders somebody to pay regularly to his former wife/ husband  when the marriage is ended ",
  },
  { Id: 124, Meaning: "Allative", Defination: "the grammatical case " },
  { Id: 125, Meaning: "Allay", Defination: "satisfy (thirst)" },
  { Id: 126, Meaning: "Allege", Defination: "report or maintain" },
  { Id: 127, Meaning: "Allegiance", Defination: "duty support loyalty" },
  {
    Id: 128,
    Meaning: "Allegory",
    Defination:
      "a story, play, picture, etc. in which each character/event is a symbol representing an idea/a quality, such as truth, evil, death, etc. ",
  },
  {
    Id: 129,
    Meaning: "Alleviate",
    Defination: "make (pain) easier to bear ,",
  },
  {
    Id: 130,
    Meaning: "Alliteration",
    Defination:
      "the use of the same letter/sound at the beginning of words that are close together ",
  },
  {
    Id: 131,
    Meaning: "Allude",
    Defination: "make a more or less disguised reference to  ",
  },
  {
    Id: 132,
    Meaning: "Allure",
    Defination: "the power to entice or attract through personal charm ",
  },
  {
    Id: 133,
    Meaning: "Ally",
    Defination:
      "a person who helps and supports somebody in a difficult situation",
  },
  {
    Id: 134,
    Meaning: "Almanac",
    Defination:
      "a book is published every year giving information for that year about a particular subject/ activity",
  },
  { Id: 135, Meaning: "Almighty", Defination: "having complete power  " },
  { Id: 136, Meaning: "Aloof", Defination: "reserved indifferent " },
  { Id: 137, Meaning: "Alpinism", Defination: "mountain climbing " },
  {
    Id: 138,
    Meaning: "Altar",
    Defination: "a table or flat surface where offerings are made to a deity ",
  },
  {
    Id: 139,
    Meaning: "Altitude",
    Defination: "the height above sea level ",
  },
  {
    Id: 140,
    Meaning: "Altruism",
    Defination: "the quality of unselfish concern for the welfare of others",
  },
  {
    Id: 141,
    Meaning: "Altruist",
    Defination:
      "someone who makes charitable donations intended to increase human wellbeing",
  },
  {
    Id: 142,
    Meaning: "Altruistic",
    Defination: "showing self less concern",
  },
  {
    Id: 143,
    Meaning: "Alumnus",
    Defination: "a former male student of a school, college/ university ",
  },
  {
    Id: 144,
    Meaning: "Amalgamation",
    Defination: "the combination of two/more of anything g",
  },
  {
    Id: 145,
    Meaning: "Amateur",
    Defination:
      "a person who likes to take part in a sport/ other activity for enjoyment, not as a jo",
  },
  {
    Id: 146,
    Meaning: "Amatory",
    Defination: "expressive of or exciting sexual love or romance ",
  },
  {
    Id: 147,
    Meaning: "Amazon",
    Defination: "a member of a legendary race of female warriors ",
  },
  {
    Id: 148,
    Meaning: "Ambassador",
    Defination: "a diploma tic representative in another country ",
  },
  {
    Id: 149,
    Meaning: "Ambidextrous",
    Defination: "able to use both the hands equally well  ",
  },
  { Id: 150, Meaning: "Ambient", Defination: "complete ly enveloping " },
  {
    Id: 151,
    Meaning: "Ambiguous",
    Defination:
      "that can be understood in more than one way // not clearly defined or stated ",
  },
  {
    Id: 152,
    Meaning: "Ambit",
    Defination:
      "an area in which something acts or operates or has power or control:'the range of a supersonic jet' ",
  },
  {
    Id: 153,
    Meaning: "Ambitious",
    Defination: "determined to be successful, rich, powerful, etc.",
  },
  {
    Id: 154,
    Meaning: "Ambivalent",
    Defination: "having or showing both good and bad feelings",
  },
  {
    Id: 155,
    Meaning: "Ambivert",
    Defination: "a person who is both an introvert and an extrovert ",
  },
  {
    Id: 156,
    Meaning: "Ambrosia",
    Defination: "something that is very pleasant to eat ",
  },
  {
    Id: 157,
    Meaning: "Amenable",
    Defination: "readily reacting to suggestions and influences ",
  },
  { Id: 158, Meaning: "Amiable", Defination: "disposed to please " },
  { Id: 159, Meaning: "Amiss", Defination: "not functioning properly " },
  { Id: 160, Meaning: "Amity", Defination: "a cordial disposition " },
  {
    Id: 161,
    Meaning: "Ammeter",
    Defination:
      "a meter that measures the flow of electrical current in amperes  ",
  },
  {
    Id: 162,
    Meaning: "Amnesia",
    Defination:
      "a medical condition in which somebody partly/ completely loses his memory  ",
  },
  {
    Id: 163,
    Meaning: "Amnesty",
    Defination:
      "an official statement that allows people who have been put in prison for crimes against the state to go free  ",
  },
  {
    Id: 164,
    Meaning: "Amoeba",
    Defination: "a very small living creature that consists of only one cell  ",
  },
  {
    Id: 165,
    Meaning: "Amoral",
    Defination:
      "not following any moral rules and not ca ring about right/wrong  ",
  },
  {
    Id: 166,
    Meaning: "Amorphous",
    Defination: "having no definite form or distinct shape ",
  },
  {
    Id: 167,
    Meaning: "Amphibians",
    Defination:
      "any animal that can live both on land and in water // a cold-blooded vertebrate typically living on land but breeding in water ",
  },
  {
    Id: 168,
    Meaning: "Amphibious",
    Defination: "able to live both on land and in water ",
  },
  {
    Id: 169,
    Meaning: "Amputation",
    Defination: "a surgical removal of all or a part of a lim",
  },
  {
    Id: 170,
    Meaning: "Amputee",
    Defination: "a person who has had an arm/leg removed ",
  },
  {
    Id: 171,
    Meaning: "Amusia",
    Defination:
      "the inability to recognize musical tones or to reproduce them ",
  },
  {
    Id: 172,
    Meaning: "Anachronism",
    Defination:
      "a person, a custom or an idea that seems old-fashioned and does not belong to the present ",
  },
  {
    Id: 173,
    Meaning: "Anaerobe",
    Defination:
      "an organism (especially a bacterium) that does not require air or free oxygen to live ",
  },
  {
    Id: 174,
    Meaning: "Analgesia",
    Defination: "the loss of the ability to feel pain while still conscious ",
  },
  { Id: 175, Meaning: "Anarchic", Defination: "without law or control " },
  {
    Id: 176,
    Meaning: "Anarchist",
    Defination:
      "a person  wh o believes that la ws and governments are not necessary ",
  },
  {
    Id: 177,
    Meaning: "Anarchy",
    Defination:
      "a situation in a country, an organization, etc. in which there is no government, order/control ",
  },
  {
    Id: 178,
    Meaning: "Ancestry",
    Defination: "the family or the race of people that you come from ",
  },
  {
    Id: 179,
    Meaning: "Anchor",
    Defination: "A person who presents a radio/television programme ",
  },
  { Id: 180, Meaning: "Ancient", Defination: "belonging to long past " },
  {
    Id: 181,
    Meaning: "Androgynist",
    Defination: "a person who possesses the characteristics of both sexes",
  },
  {
    Id: 182,
    Meaning: "Anecdote",
    Defination:
      "a short, interesting or amusing story about a real person or an event  ",
  },
  {
    Id: 183,
    Meaning: "Anemometer",
    Defination: "a gauge for recording the speed and direction of wind ",
  },
  {
    Id: 184,
    Meaning: "Anesthesia",
    Defination:
      "loss of bodily sensation with or without loss of consciousness ",
  },
  {
    Id: 185,
    Meaning: "Anesthetist",
    Defination:
      "a medical specialist who administers drugs for relieving pain during surgery ",
  },
  {
    Id: 186,
    Meaning: "Angiology",
    Defination:
      "the branch of medical science that studies the blood and lymph vessels  and their disorders ",
  },
  {
    Id: 187,
    Meaning: "Anglophile",
    Defination:
      "a person who is not British but who likes Britain things very much  ",
  },
  { Id: 188, Meaning: "Anile", Defination: "like a weak old woman " },
  {
    Id: 189,
    Meaning: "Animate",
    Defination: "to make something more lively/full of energy ",
  },
  {
    Id: 190,
    Meaning: "Animism",
    Defination:
      "the belief that plants, objects and natural things each have a living soul  ",
  },
  {
    Id: 191,
    Meaning: "Animosity",
    Defination: "a strong feeling of opposition, anger/hatred ",
  },
  {
    Id: 192,
    Meaning: "Annals",
    Defination: "an official record of events/activities year by year  ",
  },
  {
    Id: 193,
    Meaning: "Anneal",
    Defination:
      "toughen (steel or glass) by a process of gradually heating and cooling ",
  },
  {
    Id: 194,
    Meaning: "Annex",
    Defination:
      "to take  control of a country/ region, etc. especially by force ",
  },
  {
    Id: 195,
    Meaning: "Annihilate",
    Defination: "to destroy somebody/something completely ",
  },
  {
    Id: 196,
    Meaning: "Anniversary",
    Defination: "the date on which an event happened in some previous year ",
  },
  {
    Id: 197,
    Meaning: "Annuity",
    Defination:
      "income from capital investment paid in a series of regular payments ",
  },
  {
    Id: 198,
    Meaning: "Annul",
    Defination:
      "to state officially that something is no longer legally valid  ",
  },
  {
    Id: 199,
    Meaning: "Anonymous",
    Defination: "with a name that is not known/ that is not ma de public",
  },
  {
    Id: 200,
    Meaning: "Antacid",
    Defination: "a medicine that prevents/ corrects acidity (in the stomach) ",
  },
  {
    Id: 201,
    Meaning: "Antagonism",
    Defination: "active hostility or opposition ",
  },
  {
    Id: 202,
    Meaning: "Antagonist",
    Defination: "a person who strongly opposes somebody/ something",
  },
  {
    Id: 203,
    Meaning: "Anthem",
    Defination:
      "a song that has a special importance for a country, an organisation or a particular group of people, and is sung on special occasions ",
  },
  {
    Id: 204,
    Meaning: "Anthill",
    Defination: "a mound of earth made by ants as they dig their nest ",
  },
  {
    Id: 205,
    Meaning: "Anthology",
    Defination:
      "a collection of poems, stories, etc. that have been written by  different people and published tog ether in a book // A collection of  poems ",
  },
  {
    Id: 206,
    Meaning: "Anthracite",
    Defination:
      "a hard natural coal that burns slowly and gives intense heat *",
  },
  {
    Id: 207,
    Meaning: "Anthropoid",
    Defination: "resembling a human being in form ",
  },
  {
    Id: 208,
    Meaning: "Anthropologist",
    Defination:
      "a person who studies about the human race, its origin, developments, customs and beliefs",
  },
  {
    Id: 209,
    Meaning: "Anthropology",
    Defination:
      "the study of human race, especially of its origin, development, customs and beliefs !Ó!!",
  },
  {
    Id: 210,
    Meaning: "Antibiotic",
    Defination:
      "a chemical substance derivable from a mold/bacterium that can kill micro organisms and cure bacterial infections",
  },
  {
    Id: 211,
    Meaning: "Antibody",
    Defination:
      "a substance that the body produces in the blood to fight disease, or as a reaction when certain substances are put into the body",
  },
  { Id: 212, Meaning: "Anticipate", Defination: "look forward to" },
  {
    Id: 213,
    Meaning: "Anticlimax",
    Defination:
      "a situation that is disappointing because it happens at the end of something that was much more exciting ",
  },
  {
    Id: 214,
    Meaning: "Antidote",
    Defination: "a substance that controls the effects of poison/ disease",
  },
  {
    Id: 215,
    Meaning: "Antigen",
    Defination:
      " a substance tha t enters the body and starts a process that can cause disease",
  },
  {
    Id: 216,
    Meaning: "Antimony",
    Defination: "a metallic element having four allotropic forms",
  },
  {
    Id: 217,
    Meaning: "Antipathy",
    Defination: "a strong feeling of dislike",
  },
  {
    Id: 218,
    Meaning: "Antiquarian",
    Defination: "One who studies antique things ",
  },
  {
    Id: 219,
    Meaning: "Antiquary",
    Defination: "an expert or collector of antiquities ",
  },
  { Id: 220, Meaning: "Antique", Defination: "old and valuable " },
  {
    Id: 221,
    Meaning: "Antiseptic",
    Defination:
      "a substance that helps to prevent infection in wounds by killing bacteria ",
  },
  {
    Id: 222,
    Meaning: "Antisocial",
    Defination:
      "hostile to o r disruptive of normal standards of social behavior ",
  },
  {
    Id: 223,
    Meaning: "Antithetic",
    Defination: "sharply contrasted in character or purpose ",
  },
  {
    Id: 224,
    Meaning: "Antonyms",
    Defination: "words of opposite meanings",
  },
  {
    Id: 225,
    Meaning: "Anxiety",
    Defination:
      "a vague unpleasant emotion that is experienced in anticipation of some (usually ill)  ",
  },
  {
    Id: 226,
    Meaning: "Apartheid",
    Defination:
      "the former official policy of racial segregation (in south Africa)  ",
  },
  {
    Id: 227,
    Meaning: "Apathetic",
    Defination: "showing or feeling no interest, enthusiasm, or concern ",
  },
  {
    Id: 228,
    Meaning: "Apathy",
    Defination: "the feeling of not being interested in or enthusiastic ",
  },
  {
    Id: 229,
    Meaning: "Aperture",
    Defination: "small opening in something",
  },
  {
    Id: 230,
    Meaning: "Aphasia",
    Defination:
      "the loss of the ability to understand or produce  speech because of brain damage ",
  },
  {
    Id: 231,
    Meaning: "Apiary",
    Defination: "a place where b ees are kept",
  },
  {
    Id: 232,
    Meaning: "Apologist",
    Defination:
      "a person who argues to defend or justify some policy or institution",
  },
  {
    Id: 233,
    Meaning: "Apologize",
    Defination: "to express regret for something that one has done wrong ",
  },
  {
    Id: 234,
    Meaning: "Apostasy",
    Defination:
      "the state of having rejected your religious beliefs or your political party or a cause ",
  },
  {
    Id: 235,
    Meaning: "Apostate",
    Defination:
      "one who abandons long-held religious or political convictions ",
  },
  {
    Id: 236,
    Meaning: "Apostle",
    Defination:
      "a person who strongly believes in a policy or an idea and tries to make other people believe in it",
  },
  { Id: 237, Meaning: "Apotheosis", Defination: "climax" },
  {
    Id: 238,
    Meaning: "Appalling",
    Defination: "Causing shock or dismay ",
  },
  {
    Id: 239,
    Meaning: "Apparition",
    Defination: "an act of appearing or becoming  visible unexpectedly ",
  },
  { Id: 240, Meaning: "Appease", Defination: "make quiet or calm " },
  {
    Id: 241,
    Meaning: "Apperception",
    Defination:
      "the process whereby perceived qualities of an object are related to past experience ",
  },
  {
    Id: 242,
    Meaning: "Appertain",
    Defination: "be appropriate or applicable ",
  },
  {
    Id: 243,
    Meaning: "Applause",
    Defination: "a demonstration of approval by clapping the hand s together",
  },
  {
    Id: 244,
    Meaning: "Appraisal",
    Defination:
      "a judgement of the value, performance/nature of somebody/something",
  },
  {
    Id: 245,
    Meaning: "Apprentice",
    Defination: "a person who works for an expert to learn a trade",
  },
  { Id: 246, Meaning: "Approbation", Defination: "approval " },
  {
    Id: 247,
    Meaning: "Approve",
    Defination: "to think that somebody/something is acceptable/ suitable  ",
  },
  { Id: 248, Meaning: "Apt", Defination: "well-suited quick-witted  " },
  {
    Id: 249,
    Meaning: "Aquaphobi",
    Defination: "a  an extreme fear of drowning !",
  },
  {
    Id: 250,
    Meaning: "Aquarians",
    Defination: "a person born between 21 January and 19 February",
  },
  {
    Id: 251,
    Meaning: "Aquarium",
    Defination: "a glass tank where fish and water plants are kept  ",
  },
  {
    Id: 252,
    Meaning: "Aquatic",
    Defination: "growing or living in, or near water ",
  },
  {
    Id: 253,
    Meaning: "Arable",
    Defination: "suitable for growing crops  ",
  },
  {
    Id: 254,
    Meaning: "Arachnology",
    Defination:
      "  the scientific study of spiders and related animals such as scorpions",
  },
  {
    Id: 255,
    Meaning: "Arbitrary",
    Defination:
      "based on or subject to individual discretion or preference or sometimes impulse or caprice  ",
  },
  {
    Id: 256,
    Meaning: "Arbitrator",
    Defination: "a person who is chosen to settle a disagreement ",
  },
  {
    Id: 257,
    Meaning: "Archaeologist",
    Defination:
      "a person who studies cultures of the past, and of periods of history by examining the remains of buildings and objects found in the ground ",
  },
  {
    Id: 258,
    Meaning: "Archaeology",
    Defination:
      "the study of cultures of the past, and of periods of history by examining the remains of buildings and objects found in the ground ",
  },
  {
    Id: 259,
    Meaning: "Archer",
    Defination: "a person who is expert in the use of a bow and arrow ",
  },
  {
    Id: 260,
    Meaning: "Archetype",
    Defination: "an original model on which something is patterned  ",
  },
  {
    Id: 261,
    Meaning: "Archipelago",
    Defination: "a large body of water with many islands",
  },
  {
    Id: 262,
    Meaning: "Architect",
    Defination: "a person whose job is designing buildings, etc.",
  },
  {
    Id: 263,
    Meaning: "Archives",
    Defination:
      "a collection of historical documents/records of a government, a family, a place or an organization /",
  },
  {
    Id: 264,
    Meaning: "Arcology",
    Defination:
      "an ideal integrated city contained within a massive vertical structure, allowing maximum conservation of the surrounding environment.",
  },
  {
    Id: 265,
    Meaning: "Ardent",
    Defination: "glowing or shining like fire",
  },
  {
    Id: 266,
    Meaning: "Ardour",
    Defination: "feelings  of great warmth and intensity",
  },
  {
    Id: 267,
    Meaning: "Arena",
    Defination: "A place where fights take place",
  },
  {
    Id: 268,
    Meaning: "Arid",
    Defination: "having little/no rain // very dry",
  },
  {
    Id: 269,
    Meaning: "Aristocracy",
    Defination:
      "the rule by nobles / government by person of highest social order.",
  },
  {
    Id: 270,
    Meaning: "Armistice",
    Defination:
      "a formal agreement during a war to stop fighting and discuss making peace ",
  },
  {
    Id: 271,
    Meaning: "Armoured",
    Defination: "protected by metal covers (military vehicles) ",
  },
  {
    Id: 272,
    Meaning: "Armoury",
    Defination: "a place whe re arms are kept",
  },
  {
    Id: 273,
    Meaning: "Aroma",
    Defination: "a pleasant, noticeable  smell ",
  },
  {
    Id: 274,
    Meaning: "Arouse",
    Defination: "call forth (emotions, feelings, and responses)",
  },
  { Id: 275, Meaning: "Arrhenphobia", Defination: "fear of men " },
  {
    Id: 276,
    Meaning: "Arrival",
    Defination: "accomplishment of an objective ",
  },
  {
    Id: 277,
    Meaning: "Arrogate",
    Defination: "to claim/take something that you have no right to",
  },
  {
    Id: 278,
    Meaning: "Arsenal",
    Defination:
      "a military structure where arms and ammunition and other military equipment are stored and training is given in the use of arms",
  },
  {
    Id: 279,
    Meaning: "Arsonist",
    Defination: "a criminal who illegally sets fire to property",
  },
  { Id: 280, Meaning: "Arsonphobia", Defination: "fear of fire" },
  {
    Id: 281,
    Meaning: "Arteries",
    Defination:
      "muscular-walled tube s forming part of the circulation system by which blood (mainly that which has been oxygenated) is conveyed ",
  },
  {
    Id: 282,
    Meaning: "Articulate",
    Defination: "good at expressing ideas/ feelings clearly in words (speech)",
  },
  {
    Id: 283,
    Meaning: "Artificial",
    Defination: "made or produced to copy something",
  },
  {
    Id: 284,
    Meaning: "Artillery",
    Defination: "large, heavy guns which are often moved on wheels",
  },
  {
    Id: 285,
    Meaning: "Artisan",
    Defination: "a person who does skilled work, making things with his hands",
  },
  {
    Id: 286,
    Meaning: "Artist",
    Defination: "a person who creates works of art-paintings/ drawings",
  },
  {
    Id: 287,
    Meaning: "Artiste",
    Defination: "a public performer (dancer/ singer)",
  },
  {
    Id: 288,
    Meaning: "Artistic",
    Defination: "connected with arts/artists ",
  },
  { Id: 289, Meaning: "Artistry", Defination: "the skill of an artist" },
  {
    Id: 290,
    Meaning: "Ascendancy",
    Defination:
      "the state that exists when one person or group has power over another",
  },
  {
    Id: 291,
    Meaning: "Ascetic",
    Defination:
      "a person who lives in a simple and strict way, without physical pleasures, especially for religious reasons (monks, hermits, saints)",
  },
  {
    Id: 292,
    Meaning: "Ascribe",
    Defination: "regard something as being due to a cause",
  },
  {
    Id: 293,
    Meaning: "Askance",
    Defination: "nations that do not trust each other/look upon each other.",
  },
  {
    Id: 294,
    Meaning: "Asperity",
    Defination: "roughness harshness ill temper irritability",
  },
  {
    Id: 295,
    Meaning: "Assassin",
    Defination:
      "a person who murders somebody important or famous, for money or for political reasons",
  },
  {
    Id: 296,
    Meaning: "Assent",
    Defination: "to agree to a request/ an idea/ a suggestion ",
  },
  {
    Id: 297,
    Meaning: "Assertive",
    Defination:
      "expressing opinions/ desires strongly and with confide nce, so that people may take notice",
  },
  {
    Id: 298,
    Meaning: "Assiduous",
    Defination:
      "working very hard and taking great care that everything is done  ",
  },
  {
    Id: 299,
    Meaning: "Assign",
    Defination:
      "to give somebody something that he can use, or some work or  responsibility ",
  },
  {
    Id: 300,
    Meaning: "Assimilate",
    Defination: "become similar to one's environment",
  },
  {
    Id: 301,
    Meaning: "Association",
    Defination:
      "an official  group of people  who have joi ned  together for a particular purpose",
  },
  {
    Id: 302,
    Meaning: "Assurance",
    Defination: "A positive declaration intended to give confidence ",
  },
  {
    Id: 303,
    Meaning: "Assure",
    Defination: "to make yourself certain about something ",
  },
  {
    Id: 304,
    Meaning: "Astern",
    Defination: "(of a ship or an airplane) behind",
  },
  {
    Id: 305,
    Meaning: "Astraphobia",
    Defination: "a morbid fear of thunder and lightning",
  },
  {
    Id: 306,
    Meaning: "Astrologer",
    Defination:
      "someone who predicts  the future by the positions of the planets and sun and moon",
  },
  {
    Id: 307,
    Meaning: "Astrology",
    Defination:
      "the study of  the positions of the stars and the movements of the planets in the belief that they influence human affairs ",
  },
  {
    Id: 308,
    Meaning: "Astronaut",
    Defination:
      "a person whose job involves travelling and working in a spacecraft",
  },
  {
    Id: 309,
    Meaning: "Astronomy",
    Defination: "the scientific study of the sun, moon, stars, planets, etc. ",
  },
  {
    Id: 310,
    Meaning: "Astrophobia",
    Defination: "severe and irrational fe ar of stars and space",
  },
  {
    Id: 311,
    Meaning: "Astute",
    Defination: "clever quick at seeing to get an advantage ",
  },
  {
    Id: 312,
    Meaning: "Asunder",
    Defination: "widely separated especially in space",
  },
  {
    Id: 313,
    Meaning: "Asylum",
    Defination:
      "protection that a government gives to people who have left their own country, because they were in danger for political reasons. // a hospital where people who were mentally ill could be cared for, often for a long time",
  },
  {
    Id: 314,
    Meaning: "Atheism",
    Defination: "the be lief that god does not exist",
  },
  {
    Id: 315,
    Meaning: "Atheist",
    Defination: "a person who believes that god does not exist ",
  },
  {
    Id: 316,
    Meaning: "Athlete",
    Defination:
      "a person who competes in sports running, jumping, physical exercises, etc. ",
  },
  { Id: 317, Meaning: "Atlas", Defination: "a book of maps" },
  {
    Id: 318,
    Meaning: "Atmosphere",
    Defination: "the mixture of gases that surrounds the earth",
  },
  {
    Id: 319,
    Meaning: "Atoll",
    Defination:
      "an island consisting of a circular coral reef surrounding a lagoon",
  },
  {
    Id: 320,
    Meaning: "Atonement",
    Defination:
      "the act of showing you are sorry for doing something wrong in the past",
  },
  {
    Id: 321,
    Meaning: "Attack",
    Defination: "try to hurt or kill somebody ",
  },
  {
    Id: 322,
    Meaning: "Attempt",
    Defination:
      "an act of trying to do something difficult, often with no success",
  },
  {
    Id: 323,
    Meaning: "Attestation",
    Defination: "the evidence by which some thing is attested",
  },
  {
    Id: 324,
    Meaning: "Attic",
    Defination:
      "a room/space just below the roof of a house, often used for storing things ",
  },
  { Id: 325, Meaning: "Attractive", Defination: "pleasant to look at" },
  {
    Id: 326,
    Meaning: "Audacious",
    Defination: "willing to take risks/to do some thing shocking ",
  },
  {
    Id: 327,
    Meaning: "Audible",
    Defination: "that can be heard clearly",
  },
  {
    Id: 328,
    Meaning: "Audit",
    Defination:
      "a methodical examination or review of a condition or situation",
  },
  {
    Id: 329,
    Meaning: "Auditor",
    Defination:
      "a qualified accountant who inspects the accounting records and practices of a business/other organisation ",
  },
  {
    Id: 330,
    Meaning: "Auditorium",
    Defination:
      "the area of a theatre or concert hall where the audience sits ",
  },
  {
    Id: 331,
    Meaning: "Auditory",
    Defination: "of or relating to the process of hearing ",
  },
  { Id: 332, Meaning: "Augment", Defination: "increase" },
  { Id: 333, Meaning: "Aurivorous", Defination: "gold-devouring. " },
  {
    Id: 334,
    Meaning: "Authentic",
    Defination: "made o r do ne in the traditional or original way",
  },
  {
    Id: 335,
    Meaning: "Authority",
    Defination: "official permission or approval",
  },
  {
    Id: 336,
    Meaning: "Autism",
    Defination:
      "a mental condition in which a person finds it very difficult to communicate/form relationships with others",
  },
  {
    Id: 337,
    Meaning: "Autobiography",
    Defination: "a biography of yourself",
  },
  {
    Id: 338,
    Meaning: "Autocracy",
    Defination:
      "a system of government of a country in which one person has complete power",
  },
  {
    Id: 339,
    Meaning: "Autocrat",
    Defination: "a ruler who has complete power",
  },
  {
    Id: 340,
    Meaning: "Autonomous",
    Defination:
      " (of persons) free from external control and constraint in e.g. action and judgment ",
  },
  { Id: 341, Meaning: "Autonomy", Defination: "self-rule " },
  {
    Id: 342,
    Meaning: "Autophobia",
    Defination:
      "also called monophobia/ isolophobia, or eremophobia, is the specific phobia of isolation // a morbid fear of being egotistical, or a dread of being alone or isolated ",
  },
  {
    Id: 343,
    Meaning: "Autopsy",
    Defination:
      "an official examination of a dead body by a doctor in order to discover the cause of death ",
  },
  {
    Id: 344,
    Meaning: "Avalanche",
    Defination:
      "a mass of snow, ice and rock that falls down the side of a mountain",
  },
  {
    Id: 346,
    Meaning: "Avarice",
    Defination: "extreme desire for wealth ",
  },
  {
    Id: 347,
    Meaning: "Avaricious",
    Defination: "having an extreme desire for wealth ",
  },
  {
    Id: 348,
    Meaning: "Avenue",
    Defination: "a street in a town or city ",
  },
  { Id: 349, Meaning: "Average", Defination: "not special " },
  {
    Id: 350,
    Meaning: "Averment",
    Defination:
      "a declaration that is made emphatically (as if no supporting evidence were necessary)",
  },
  {
    Id: 351,
    Meaning: "Aversion",
    Defination: "a strong feeling of not liking somebody/ something ",
  },
  { Id: 352, Meaning: "Averted", Defination: "prevent from happening " },
  {
    Id: 353,
    Meaning: "Aviary",
    Defination: "a place where birds are kept",
  },
  {
    Id: 354,
    Meaning: "Aviation",
    Defination: "the art of operating aircraft",
  },
  {
    Id: 355,
    Meaning: "Aviator",
    Defination: "a person who flies an aircraft",
  },
  { Id: 356, Meaning: "Avicide", Defination: "killing of birds" },
  {
    Id: 357,
    Meaning: "Avidity",
    Defination: "keen interest or enthusiasm",
  },
  {
    Id: 358,
    Meaning: "Axiology",
    Defination: "the study of the nature of values and value judgements ",
  },
  {
    Id: 359,
    Meaning: "Axiom",
    Defination: "a rule/principle that most people believe to be true",
  },
  {
    Id: 360,
    Meaning: "Babble",
    Defination: "gibberish resembling the sounds of a baby",
  },
  { Id: 361, Meaning: "Baccivorous", Defination: "feeding on berries " },
  {
    Id: 362,
    Meaning: "Bachelor",
    Defination: "a man who remains unmarried",
  },
  {
    Id: 363,
    Meaning: "Backlist",
    Defination:
      "the list of books that have been published by a company in the past and are still available",
  },
  {
    Id: 364,
    Meaning: "Bacteria",
    Defination: "the simplest and smallest forms of life",
  },
  {
    Id: 365,
    Meaning: "Bactericide",
    Defination: "any chemical agent that destroys bacteria",
  },
  {
    Id: 366,
    Meaning: "Baggage",
    Defination: "a case used to carry belongings when traveling ",
  },
  {
    Id: 367,
    Meaning: "Bagpiper",
    Defination: "someone who plays the bagpipe ",
  },
  {
    Id: 368,
    Meaning: "Bakery",
    Defination: "a place where bread and cakes are made and/or sold ",
  },
  {
    Id: 369,
    Meaning: "Bald",
    Defination: "having little or no hair on the head ",
  },
  {
    Id: 370,
    Meaning: "Balderdash",
    Defination: "senseless talk or writing ",
  },
  {
    Id: 371,
    Meaning: "Bale",
    Defination: "a large bundle bound for storage or transport ",
  },
  {
    Id: 372,
    Meaning: "Ballad",
    Defination: "a song/poem that tells a story ",
  },
  {
    Id: 373,
    Meaning: "Balled",
    Defination: "squeeze or form (something) into a rounded shape",
  },
  {
    Id: 374,
    Meaning: "Ballet",
    Defination:
      "at heatrical  representation of a story performed to music by ballet dancers ",
  },
  {
    Id: 375,
    Meaning: "Ballistophobia",
    Defination: "an abnormal fear of missiles ",
  },
  {
    Id: 376,
    Meaning: "Bandit",
    Defination: "a member of an armed group of thieves who attack travelers ",
  },
  {
    Id: 377,
    Meaning: "Bank",
    Defination:
      "Draft  a draft drawn by a bank against funds deposited in another bank ",
  },
  {
    Id: 378,
    Meaning: "Bank",
    Defination: "Roll  to support by giving money ",
  },
  {
    Id: 379,
    Meaning: "Banker",
    Defination: "a person who owns a bank or has an important job at a bank ",
  },
  {
    Id: 380,
    Meaning: "Bankrupt",
    Defination: "without enough money to pay what you own ",
  },
  {
    Id: 381,
    Meaning: "Bar",
    Defination:
      "a room/ establishment where alcoholic d rinks are served over a counter  ",
  },
  {
    Id: 382,
    Meaning: "Bar",
    Defination: "the profession of a barrister // a lawyer in a higher court  ",
  },
  {
    Id: 383,
    Meaning: "Barbarians",
    Defination:
      "people wh o do not belong to one of the great civilizations (Greek , roman, Christian)  ",
  },
  {
    Id: 384,
    Meaning: "Baritone",
    Defination: "lower in range than tenor and higher than bass  ",
  },
  {
    Id: 385,
    Meaning: "Barometer",
    Defination:
      "an instrument for measuring air pressure to show  when the weather will change ",
  },
  {
    Id: 386,
    Meaning: "Barracks",
    Defination: "a large building/ group of buildings for soldiers to live in ",
  },
  {
    Id: 387,
    Meaning: "Barrel",
    Defination: "a wooden drum in which beer or oil is stored  ",
  },
  {
    Id: 388,
    Meaning: "Barren",
    Defination: "l and not good enough to grow plants on it ",
  },
  { Id: 389, Meaning: "Basal", Defination: "of primary importance " },
  {
    Id: 390,
    Meaning: "Baseness",
    Defination: "unworthiness by virtue of lacking higher values ",
  },
  { Id: 391, Meaning: "Bashful", Defination: "disposed to avoid notice" },
  {
    Id: 392,
    Meaning: "Bask",
    Defination: "revel in and make the most of something pleasing ",
  },
  {
    Id: 393,
    Meaning: "Basophilia",
    Defination: "the tendency of cells to stain with basic dyes ",
  },
  {
    Id: 394,
    Meaning: "Bass",
    Defination: "having or denoting a low vocal or instrumental range  ",
  },
  {
    Id: 395,
    Meaning: "Bathophobia",
    Defination: "extreme fear of depths (deep water, falling from heights)  ",
  },
  {
    Id: 396,
    Meaning: "Bathrobe",
    Defination:
      "a robe, typically made of terry cloth, worn especially before and after taking a bath. ",
  },
  {
    Id: 397,
    Meaning: "Batrachophobia",
    Defination: "fear of amphibians. ",
  },
  {
    Id: 398,
    Meaning: "Bauxite",
    Defination: "chief commercial ore of aluminum",
  },
  {
    Id: 399,
    Meaning: "Beadle",
    Defination:
      "a minor parish (church) official who serves as an usher (a person who shows people where to sit) and keeps order at services ",
  },
  {
    Id: 400,
    Meaning: "Beam",
    Defination:
      "long thick piece of wood or metal or concrete, etc., used in construction ",
  },
  {
    Id: "401",
    Meaning: "Beast",
    Defination:
      "a large/dangerous animal// a person who is cruel and whose behaviour is uncontrolled ",
  },
  {
    Id: "402",
    Meaning: "Beautician",
    Defination: "someone who works in a beauty parlor ",
  },
  {
    Id: "403",
    Meaning: "Beget",
    Defination: "make children  ",
  },
  {
    Id: "404",
    Meaning: "Beguile",
    Defination:
      "to trick somebody into doing something, by being nice to them ",
  },
  {
    Id: "405",
    Meaning: "Bellicose",
    Defination: "a person who is fond of fighting",
  },
  {
    Id: "406",
    Meaning: "Belligerent",
    Defination: "(person nation) waging war",
  },
  {
    Id: "407",
    Meaning: "Bemuse",
    Defination: "cause to b e confused emotionally ",
  },
  {
    Id: "408",
    Meaning: "Benefactor",
    Defination:
      "a person who gives money/other help to a person or an organisation (school, charity) ",
  },
  {
    Id: "409",
    Meaning: "Beneficiary",
    Defination: "a person who gains as a results of something ",
  },
  {
    Id: "410",
    Meaning: "Benevolence",
    Defination: "an inclination to do kind or charitable acts",
  },
  {
    Id: "411",
    Meaning: "Benign",
    Defination: "kind and gentle mild (climate) ",
  },
  {
    Id: "412",
    Meaning: "Bequeath",
    Defination: "leave or give by will after one's death E",
  },
  {
    Id: "413",
    Meaning: "Bereavement",
    Defination: "state of sorrow over the death or departure of a loved one ",
  },
  {
    Id: "414",
    Meaning: "Bereft",
    Defination: "deprived of or lacking of something ",
  },
  {
    Id: "415",
    Meaning: "Bestow",
    Defination: "give as a gift ",
  },
  {
    Id: "416",
    Meaning: "Betwixt",
    Defination: "in the interval ",
  },
  {
    Id: "417",
    Meaning: "Beverage",
    Defination: "any soft drink except water ",
  },
  {
    Id: "418",
    Meaning: "Bevy",
    Defination:
      "a large group of people/things of the same k ind girls/young women",
  },
  {
    Id: "419",
    Meaning: "Bias",
    Defination: "slanting diagonally across the grain of a fabric ",
  },
  {
    Id: "420",
    Meaning: "Biblicist",
    Defination: "one w ho interprets the bible literally.",
  },
  {
    Id: "421",
    Meaning: "Bibliomania",
    Defination: "preoccupation with the acquisition and possession of books",
  },
  {
    Id: "422",
    Meaning: "Bibliographer",
    Defination:
      "someone trained in compiling books/articles  about a particular subject ",
  },
  {
    Id: "423",
    Meaning: "Bibliography",
    Defination:
      "a list of books or articles about a particular subject or by a particular author",
  },
  {
    Id: "424",
    Meaning: "Bibliomaniac",
    Defination: "excessive fondness for acquiring and possessing books",
  },
  {
    Id: "425",
    Meaning: "Bibliophile",
    Defination: "a person who loves or collects books",
  },
  {
    Id: "426",
    Meaning: "Bicentennial",
    Defination: "200th anniversary. ",
  },
  {
    Id: "427",
    Meaning: "Biennial",
    Defination: "happening every second year",
  },
  {
    Id: "428",
    Meaning: "Bigamist",
    Defination:
      "a person who commits the crime of marrying somebody when you are still legally married to some body else",
  },
  {
    Id: "429",
    Meaning: "Bigamy",
    Defination:
      "the crime of marrying somebody when you are still legally married to somebody else",
  },
  {
    Id: "430",
    Meaning: "Bigot",
    Defination:
      "a person who has  very strong, unreasonable beliefs or opinions  about race, religion/politics  and who wil l  not listen to/accept the opinions of anyone who disagrees ",
  },
  {
    Id: "431",
    Meaning: "Bilingual",
    Defination:
      "able to speak two languages equally well // written in two languagesn",
  },
  {
    Id: "432",
    Meaning: "Bilingualist",
    Defination: "a person who speaks more than one language ",
  },
  {
    Id: "433",
    Meaning: "Biloquist",
    Defination: "person hav ing the ability to speak in two different voices ",
  },
  {
    Id: "434",
    Meaning: "Bimillennial",
    Defination: "2,000th anniversary of an event",
  },
  {
    Id: "435",
    Meaning: "Binomial",
    Defination: " consisting of tw o nam es or terms ",
  },
  {
    Id: "436",
    Meaning: "Biodegradable",
    Defination:
      "capable  of being decomposed by biological agents, especially bacteria",
  },
  {
    Id: "437",
    Meaning: "Biography",
    Defination: "the story of a person™s life written by somebody else ",
  },
  {
    Id: "438",
    Meaning: "Biological",
    Defination:
      "connected with the processes that take place within living things",
  },
  {
    Id: "439",
    Meaning: "Biologist",
    Defination: "(biology) a scientist who studies living organisms",
  },
  {
    Id: "440",
    Meaning: "Biology",
    Defination:
      "the scientific study of the life and structure of plants and animals",
  },
  {
    Id: "441",
    Meaning: "Biopsy",
    Defination:
      "the removal of tissue from the body of somebody who is ill and its examination in order to find out more about the disease",
  },
  {
    Id: "442",
    Meaning: "Biped",
    Defination: "using two legs to walk.",
  },
  {
    Id: "443",
    Meaning: "Bisque",
    Defination: "a thick soup, especially made from shellfish",
  },
  {
    Id: "444",
    Meaning: "Bizarre",
    Defination: "very strange or unusual",
  },
  {
    Id: "445",
    Meaning: "Blaspheme",
    Defination: "speak of in an irreverent or impious manner ",
  },
  {
    Id: "446",
    Meaning: "Blasphemy",
    Defination:
      "behaviour/language that insults/shows a lack of respect for g od/ religion",
  },
  {
    Id: "447",
    Meaning: "Blind",
    Defination: "unable or unwilling to perceive or understand",
  },
  {
    Id: "448",
    Meaning: "Blite",
    Defination: "a widespread annual weed having leaves with a frost  ",
  },
  {
    Id: "449",
    Meaning: "Blithe",
    Defination: "cheerful casual carefree 2 ",
  },
  {
    Id: "450",
    Meaning: "Blizzard",
    Defination: "a snowstorm with very strong winds",
  },
  {
    Id: "451",
    Meaning: "Blockhead",
    Defination: "a very stupid person",
  },
  {
    Id: "452",
    Meaning: "Blonde",
    Defination: "(of hair) pale gold in colo ur  ",
  },
  {
    Id: "453",
    Meaning: "Blooper",
    Defination: "an embarrassing mistake  ",
  },
  {
    Id: "454",
    Meaning: "Blunder",
    Defination: "an embarrassing mistake / make a serious mistake × ",
  },
  {
    Id: "455",
    Meaning: "Blurb",
    Defination: "a shor t de scription of a book, a new product, etc. j ",
  },
  {
    Id: "456",
    Meaning: "Bluster",
    Defination:
      "to talk in an aggressive/threatening way, but with little effect  ",
  },
  {
    Id: "457",
    Meaning: "Board",
    Defination: "a flat piece of material designed for a special purpose 2 ",
  },
  {
    Id: "458",
    Meaning: "Boer",
    Defination:
      "a white native of cape  province who is a descendant of Dutch settlers and who speaks Afrikaans  ",
  },
  {
    Id: "459",
    Meaning: "Boggle",
    Defination: "to hesitate as if in fear or doubt 2/ ",
  },
  {
    Id: "460",
    Meaning: "Bogus",
    Defination: "sham count erfeit not genuine  ",
  },
  {
    Id: "461",
    Meaning: "Bohemian",
    Defination:
      "a person who is involved with the  ar ts, who lives in a very informal way without following accepted rules of behaviour þ",
  },
  {
    Id: "462",
    Meaning: "Bolster",
    Defination: "give greatly needed support gE ",
  },
  {
    Id: "463",
    Meaning: "Bond",
    Defination:
      "a legal agreement by which a bank lends you money to buy a house, etc. which you pay back over many years 2 ",
  },
  {
    Id: "464",
    Meaning: "Bonus",
    Defination:
      "a sum of money added to a person™s wages as a reward for good performance.  ",
  },
  {
    Id: "465",
    Meaning: "Bookworm",
    Defination: "an avid book reader  ",
  },
  {
    Id: "466",
    Meaning: "Bore",
    Defination:
      "a deep hole made in the groun d, especially to find water or oil /  ",
  },
  {
    Id: "467",
    Meaning: "Borrower",
    Defination: "a person/ organisation that borrows money from a bank // ",
  },
  {
    Id: "468",
    Meaning: "Bossy",
    Defination: "alway s telling people what to do / / ",
  },
  {
    Id: "469",
    Meaning: "Botanist",
    Defination: "a scientist who studies about plants and their structure -Ó ",
  },
  {
    Id: "470",
    Meaning: "Botanophobia",
    Defination: "a fear of plants / ",
  },
  {
    Id: "471",
    Meaning: "Botany",
    Defination: "the study of plant life  ",
  },
  {
    Id: "472",
    Meaning: "Bottleneck",
    Defination:
      "a narrow or busy section of road where the traffic often gets slower and stops /2 ",
  },
  {
    Id: "473",
    Meaning: "Boudoir",
    Defination: "a woman™s small private room or bedroom 0 0/ ",
  },
  {
    Id: "474",
    Meaning: "Boulevard",
    Defination: "a wide city street , often with trees  on either side   ",
  },
  {
    Id: "475",
    Meaning: "Bouquet",
    Defination:
      "a bunch of  flowers arranged in an attractive way so that it ca n be carried in a ceremony /presented as a  gift ",
  },
  {
    Id: "476",
    Meaning: "Bourgeois",
    Defination: "belonging to mi ddle class. ×2Ó ",
  },
  {
    Id: "477",
    Meaning: "Boutique",
    Defination: "a shop that sells women's clothes and jewelry 1Ñ2/˜ ×//G ",
  },
  {
    Id: "478",
    Meaning: "Bovial",
    Defination: "of or pertaining to cattle /2 ",
  },
  {
    Id: "479",
    Meaning: "Bovine",
    Defination: "connected with cows ",
  },
  {
    Id: "480",
    Meaning: "Bower",
    Defination: "a shady place under trees 2 ",
  },
  {
    Id: "481",
    Meaning: "Brazen",
    Defination: "made of brass 2/ ",
  },
  {
    Id: "482",
    Meaning: "Brazier",
    Defination:
      "a large metal container that holds a fire and is used to keep people warm when they are outside 2 ",
  },
  {
    Id: "483",
    Meaning: "Breach",
    Defination: "a failure to do something that must be done by law 2 ",
  },
  {
    Id: "484",
    Meaning: "Breather",
    Defination:
      "air passage provided by a retractable device containing  intake and exhaust pipes  ",
  },
  {
    Id: "485",
    Meaning: "Breeze",
    Defination: "a light mind  ",
  },
  {
    Id: "486",
    Meaning: "Brewery",
    Defination: "a fact ory where beer is made",
  },
  {
    Id: "487",
    Meaning: "Bridle",
    Defination: "the act of restraining power or action or limiting excess",
  },
  {
    Id: "488",
    Meaning: "Brier",
    Defination: "any of a number of prickly scrambling shrubs",
  },
  {
    Id: "489",
    Meaning: "Brigand",
    Defination: "member of a band of robbers",
  },
  {
    Id: "490",
    Meaning: "Brittle",
    Defination: "hard but easily broken",
  },
  {
    Id: "491",
    Meaning: "Brochure",
    Defination: "a small book usually having a paper cover",
  },
  {
    Id: "492",
    Meaning: "Brood",
    Defination: "the young of an animal cared for at one time",
  },
  {
    Id: "493",
    Meaning: "Brunette",
    Defination: "a white skinned woman with dark brown hair",
  },
  {
    Id: "494",
    Meaning: "Brutal",
    Defination: "violent and cruel ",
  },
  {
    Id: "495",
    Meaning: "Budgeting",
    Defination:
      "an itemized summary of estimated expenses for a given period along with proposals for financing them  ",
  },
  {
    Id: "496",
    Meaning: "Bullion",
    Defination: "gold and silver before using for manufacturing  ornaments",
  },
  {
    Id: "497",
    Meaning: "Bulwark",
    Defination: "a fencelike structure around a deck (usually plural)",
  },
  {
    Id: "498",
    Meaning: "Bungle",
    Defination: "carry out a task clumsily or incompetently",
  },
  {
    Id: "499",
    Meaning: "Buoy",
    Defination:
      "an anchored float serving as a navigation mark, to show reefs or other hazards, or for mooring ",
  },
  {
    Id: "500",
    Meaning: "BureaucracY",
    Defination:
      "a system of government in which there are a large number of state officials who are not elected ",
  },
  {
    Id: "501",
    Meaning: "Bureaucrat",
    Defination: "an official of a bureaucracy",
  },
  {
    Id: "502",
    Meaning: "Burglar",
    Defination: "a person who enters a building illegally in order to steal",
  },
  {
    Id: "503",
    Meaning: "Burglary",
    Defination:
      "the crime of entering building illegally and stealing things from it",
  },
  {
    Id: "504",
    Meaning: "Burrow",
    Defination:
      "a hole/tunnel in the ground made by animals such as rabbits, for them to live in",
  },
  {
    Id: "505",
    Meaning: "Bursar",
    Defination: "a person who manages the financial affairs of a college",
  },
  {
    Id: "506",
    Meaning: "Business",
    Defination:
      "Like work ing  in an efficient and organized way and not wasting  time or think ing  about personal things  ",
  },
  {
    Id: "507",
    Meaning: "Butcher",
    Defination: "a person who slaughters or dresses meat for market",
  },
  {
    Id: "508",
    Meaning: "Bypass",
    Defination:
      "a road that passes around a tow n/ city rather than through the centre",
  },
  {
    Id: "509",
    Meaning: "Bypassers",
    Defination: "one who passes by",
  },
  {
    Id: "510",
    Meaning: "Cabby",
    Defination: "a taxi driver",
  },
  {
    Id: "511",
    Meaning: "Cache",
    Defination: "a hidden storage space (for money or provisions or weapons)",
  },
  {
    Id: "512",
    Meaning: "Cacography",
    Defination: "a poor hand writing",
  },
  {
    Id: "513",
    Meaning: "Cacophony",
    Defination: "loud confusing disagreeable sounds",
  },
  {
    Id: "514",
    Meaning: "Cadaverous",
    Defination: "of or relating to a cadaver or corpse",
  },
  {
    Id: "515",
    Meaning: "Cage",
    Defination: "a house in which animals/birds are kept",
  },
  {
    Id: "516",
    Meaning: "Cajolement",
    Defination:
      "  making somebody do  something by talking to him and being very nice to him",
  },
  {
    Id: "517",
    Meaning: "Calcivorous",
    Defination: "erode / eat limestone",
  },
  {
    Id: "518",
    Meaning: "Calculative",
    Defination: "used for person sŒ the most calculating and s elfish men  ",
  },
  {
    Id: "519",
    Meaning: "Calculus",
    Defination:
      "the branch of mathematics that is concerned with limits and with the differentiation and integration of functions  ",
  },
  {
    Id: "520",
    Meaning: "Calibre",
    Defination: "a degree or grade of excellence or worth ",
  },
  {
    Id: "521",
    Meaning: "Calligrapher",
    Defination:
      "someone skilled in penmanship ( calligraphy beautiful writing done with a special pen/ brush) ",
  },
  {
    Id: "522",
    Meaning: "Calligraphy",
    Defination: "beautiful handwriting  that you do with a special pen/brush. ",
  },
  {
    Id: "523",
    Meaning: "Callous",
    Defination: "not caring about other people™s feelings or suffering ",
  },
  {
    Id: "524",
    Meaning: "Calmative",
    Defination: "having a sedative effect. ",
  },
  {
    Id: "525",
    Meaning: "Calumny",
    Defination: "slander aspersion ",
  },
  {
    Id: "526",
    Meaning: "Camouflage",
    Defination:
      "The disguising of  military personnel, equipment, and installations by painting or covering them to make them blend in with their surroundings ",
  },
  {
    Id: "527",
    Meaning: "Canicide",
    Defination: "the killing of a dog ",
  },
  {
    Id: "528",
    Meaning: "Canine",
    Defination: "connected with dogs ",
  },
  {
    Id: "529",
    Meaning: "Cannery",
    Defination: "a factory where food is canned ",
  },
  {
    Id: "530",
    Meaning: "Cannibal",
    Defination: "a person who eats human flesh ",
  },
  {
    Id: "531",
    Meaning: "Canophilia",
    Defination: "love for dogs",
  },
  {
    Id: "532",
    Meaning: "Capable",
    Defination: "(usually followed by 'of') having capacity or ability  ",
  },
  {
    Id: "533",
    Meaning: "Capacity",
    Defination: "the maximum production possible   ",
  },
  {
    Id: "534",
    Meaning: "Capitalist",
    Defination:
      "a person who supports the fact that a  country™s businesses and industry  are controlled and run by  private owners rather than by the government ",
  },
  {
    Id: "535",
    Meaning: "Capsize",
    Defination: "overturn accidentally  ",
  },
  {
    Id: "536",
    Meaning: "Captor",
    Defination:
      "a person who captures a person/ an animal and keeps him/it as a prisoner",
  },
  {
    Id: "537",
    Meaning: "Caravan",
    Defination: "a covered vehicle, used for living by gypsies",
  },
  {
    Id: "538",
    Meaning: "Carcass",
    Defination: "The dead body  of an animal",
  },
  {
    Id: "539",
    Meaning: "Cardiologist",
    Defination:
      "A doctor who specializes in the study or treatment of  heart diseases ",
  },
  {
    Id: "540",
    Meaning: "Cardiology",
    Defination: "the study and treatment of heart diseases ",
  },
  {
    Id: "541",
    Meaning: "Carefree",
    Defination: "having no worries/reponsibilities  ",
  },
  {
    Id: "542",
    Meaning: "Caricature",
    Defination:
      "a funny drawing/ picture of somebody that exaggerates some of his features ",
  },
  {
    Id: "543",
    Meaning: "Carnivore",
    Defination: "eats the flesh of other animals (animal) ",
  },
  {
    Id: "544",
    Meaning: "Carnivorous",
    Defination: "animals that eat meat ",
  },
  {
    Id: "545",
    Meaning: "Carol",
    Defination: "a Christian religious song sung  at Christmas  ",
  },
  {
    Id: "546",
    Meaning: "Cartographer",
    Defination: "a person who draws or makes maps ",
  },
  {
    Id: "547",
    Meaning: "Cartography",
    Defination: "the art or process of drawing or making maps ",
  },
  {
    Id: "548",
    Meaning: "Cartoon",
    Defination: "an am using drawing about politics/events in the news ",
  },
  {
    Id: "549",
    Meaning: "Cascade",
    Defination: "a succession of stag es or operations or processes or units  ",
  },
  {
    Id: "550",
    Meaning: "Castigation",
    Defination: "severe punishment",
  },
  {
    Id: "551",
    Meaning: "Catalogue",
    Defination:
      "a complete list of items, for example, of things that people can look at/buy",
  },
  {
    Id: "552",
    Meaning: "Catastrophe",
    Defination: "a sudden violent change in the earth's surface  ",
  },
  {
    Id: "553",
    Meaning: "Catharsis",
    Defination: "(psychoanalysis) purging of emotional tensions",
  },
  {
    Id: "554",
    Meaning: "Cathedral",
    Defination:
      "the main church of a district, under the care of a bishop (a priest of hig h rank )  ",
  },
  {
    Id: "555",
    Meaning: "Caustic",
    Defination: "biting sarcastic ",
  },
  {
    Id: "556",
    Meaning: "Cavalier",
    Defination:
      "a courtly gentle man, especially one acting as a lady™s escort",
  },
  {
    Id: "557",
    Meaning: "Cavalry",
    Defination:
      "the part of the army that fought on horses (in the past) // the part of the modern army that uses armoured vehicles ",
  },
  {
    Id: "558",
    Meaning: "Cave",
    Defination: "a large hole in the side of a hill/ under the ground  ",
  },
  {
    Id: "559",
    Meaning: "Ceasefire",
    Defination: "a time when enemies agree to stop fighting ",
  },
  {
    Id: "560",
    Meaning: "Cede",
    Defination: "relinquish possession or control over  ",
  },
  {
    Id: "561",
    Meaning: "Celestial",
    Defination: "of the sky/ heaven ",
  },
  {
    Id: "562",
    Meaning: "Celibacy",
    Defination: "the state of living unmarried  ",
  },
  {
    Id: "563",
    Meaning: "Celibate",
    Defination: "a person who has chosen not to marry",
  },
  {
    Id: "564",
    Meaning: "Cellar",
    Defination:
      "an underground room often  used for  storing things (wine, s alt, etc.) ",
  },
  {
    Id: "565",
    Meaning: "Celsius",
    Defination: "using a scale of temperature in which water freezes at ",
  },
  {
    Id: "566",
    Meaning: "Cemetry",
    Defination:
      "an area of land used for burying dead people, especially one that is not beside a church ",
  },
  {
    Id: "567",
    Meaning: "Cenotaph",
    Defination:
      "a  monument built i n memory of soldiers killed in war who are buried somewhere else ",
  },
  {
    Id: "568",
    Meaning: "Centenarian",
    Defination: "a person who is a 100 years old or more ",
  },
  {
    Id: "569",
    Meaning: "Centenary",
    Defination: "the 100th anniversary of an event ",
  },
  {
    Id: "570",
    Meaning: "Centennial",
    Defination: "the 100th anniversary of an event  ",
  },
  {
    Id: "571",
    Meaning: "Centipede",
    Defination: "a small, long, thin animal with many legs ",
  },
  {
    Id: "572",
    Meaning: "Centrifugal",
    Defination: "anything tending to move away from center",
  },
  {
    Id: "573",
    Meaning: "Centripetal",
    Defination: "tending to move toward a center ",
  },
  {
    Id: "574",
    Meaning: "Centurion",
    Defination:
      "an army officer who commanded a 100 soldiers (in ancient Rome)",
  },
  {
    Id: "575",
    Meaning: "Century",
    Defination: "a period of a 100 years  ",
  },
  {
    Id: "576",
    Meaning: "Cereal",
    Defination:
      "made of grain or relating to grain or the plants that produce it ",
  },
  {
    Id: "577",
    Meaning: "Ceremony",
    Defination:
      "any activity that is performed in an especially solemn elaborate or formal way ",
  },
  {
    Id: "578",
    Meaning: "Cerography",
    Defination:
      "the art of engraving on a waxed plate on which a printing  surface is created by electrotyping",
  },
  {
    Id: "579",
    Meaning: "Certificate",
    Defination:
      "an official document that may be used for proving that the facts it states are true ",
  },
  {
    Id: "580",
    Meaning: "Certitude",
    Defination:
      "total certainty or greater certainty than circumstances warrant ",
  },
  {
    Id: "581",
    Meaning: "Cessation",
    Defination: "a stopping ",
  },
  {
    Id: "582",
    Meaning: "Chafe",
    Defination: "rub a part of the body to restore warmth or sensation ",
  },
  {
    Id: "583",
    Meaning: "Chagrin",
    Defination: "vexation for humiliation of disappointment",
  },
  {
    Id: "584",
    Meaning: "Chairman",
    Defination: "the officer who presides at the meetings of an organization ",
  },
  {
    Id: "585",
    Meaning: "Chalcocite",
    Defination: "a heavy grey mineral that is an ore of copper ",
  },
  {
    Id: "586",
    Meaning: "Chalet",
    Defination:
      "a wooden house with a sloping roof, usually built in mountain areas, in Switzerland ",
  },
  {
    Id: "587",
    Meaning: "Chamois",
    Defination:
      "hoofed mammal of mountains of Eurasia having upright horns with backward  ",
  },
  {
    Id: "588",
    Meaning: "Chandler",
    Defination:
      "a maker (and seller) of candles and soap and oils and paints   ",
  },
  {
    Id: "589",
    Meaning: "Changeable",
    Defination: "such that alteration is possible ",
  },
  {
    Id: "590",
    Meaning: "Changeling",
    Defination:
      "a child who is believed to have been secretly left in exchange for another  ",
  },
  {
    Id: "591",
    Meaning: "Chaotic",
    Defination: "lacking a visible order or organization  ",
  },
  {
    Id: "592",
    Meaning: "Chapel",
    Defination:
      "a small building/ room used for Christian worship in a school, prison, large private house, etc.",
  },
  {
    Id: "593",
    Meaning: "Chaperon",
    Defination:
      "one who accompanies and supervises a young woman or gatherings of young people",
  },
  {
    Id: "594",
    Meaning: "Chaplain",
    Defination:
      "a priest or other Christian minister who is responsible for the religious needs of people in a prison, hospital etc. or in the armed forces  ",
  },
  {
    Id: "595",
    Meaning: "Charge",
    Defination: "a impetuous rush toward someone or something ",
  },
  {
    Id: "596",
    Meaning: "Charger",
    Defination: "a horse that a soldier rode in battle in the past  ",
  },
  {
    Id: "597",
    Meaning: "Chariot",
    Defination: "a light four",
  },
  {
    Id: "598",
    Meaning: "Charisma",
    Defination:
      "compelling attractiveness or charm that can inspire or influence others",
  },
  {
    Id: "599",
    Meaning: "Charismatic",
    Defination:
      "exercising a compelling charm which inspires devotion in others",
  },
  {
    Id: "600",
    Meaning: "Charlatan",
    Defination:
      "a person falsely claiming to have a special knowledge or skill",
  },
  {
    Id: "601",
    Meaning: "Chartered",
    Defination: "Accountant  a fully trained and qualified accountant",
  },
  {
    Id: "602",
    Meaning: "Chassis",
    Defination: "the base frame of car or other wheel vehicle",
  },
  {
    Id: "603",
    Meaning: "Chaste",
    Defination: "pure",
  },
  {
    Id: "604",
    Meaning: "Chastise",
    Defination: "censure severely ",
  },
  {
    Id: "605",
    Meaning: "Chauffeur",
    Defination:
      "a person whose job is to drive a car, especially for somebody rich/important",
  },
  {
    Id: "606",
    Meaning: "Chauvinism",
    Defination: "fanatical patriotism",
  },
  {
    Id: "607",
    Meaning: "Chauvinist",
    Defination: "a blindly devoted patriot",
  },
  {
    Id: "608",
    Meaning: "Cheap",
    Defination: "relatively low in price or charging low prices",
  },
  {
    Id: "609",
    Meaning: "Cheat",
    Defination: "to deceive /fool/trick",
  },
  {
    Id: "610",
    Meaning: "Chemotherapy",
    Defination:
      "the treatment of disease (cancer) with the use of chemical substances",
  },
  {
    Id: "611",
    Meaning: "Chew",
    Defination: "to bite continuously",
  },
  {
    Id: "612",
    Meaning: "Chide",
    Defination: "to criticize/ blame /scold",
  },
  {
    Id: "613",
    Meaning: "Child",
    Defination: "a young person of either sex",
  },
  {
    Id: "614",
    Meaning: "Chirography",
    Defination: "another name for calligraphy",
  },
  {
    Id: "615",
    Meaning: "Choir",
    Defination:
      "a group of people who sing together (in church services/ public performances)",
  },
  {
    Id: "616",
    Meaning: "Chore",
    Defination: "aroutine task, especially a household one  ",
  },
  {
    Id: "617",
    Meaning: "Choreography",
    Defination: "the act of designing and arranging the steps",
  },
  {
    Id: "618",
    Meaning: "Chronic",
    Defination: "difficult to care or get rid of // lasting for a long",
  },
  {
    Id: "619",
    Meaning: "Chronicle",
    Defination: "a record or narrative description of past events",
  },
  {
    Id: "620",
    Meaning: "Chronological",
    Defination: "arranged in the or der in whi ch the y happened (events)",
  },
  {
    Id: "621",
    Meaning: "Chronometer",
    Defination:
      "an instrument for measuring time accurately in spite of motion or variations in temperature, humidity, and  air pressure.  ",
  },
  {
    Id: "622",
    Meaning: "Chum",
    Defination:
      "bait consisting of chopped fish and fish oils that are dumped overboard to attract fish  ",
  },
  {
    Id: "623",
    Meaning: "Church",
    Defination: "a place of worship of the Christians",
  },
  {
    Id: "624",
    Meaning: "Churlish",
    Defination: "rude in a mean-spirited and surly way",
  },
  {
    Id: "625",
    Meaning: "Chutzpah",
    Defination: "extreme self-confidence or audacity",
  },
  {
    Id: "626",
    Meaning: "Cinch",
    Defination: "an extremely easy task.  ",
  },
  {
    Id: "627",
    Meaning: "Circulatory",
    Defination: "relating to circulatory system or to circulation of the blood",
  },
  {
    Id: "628",
    Meaning: "Circumcenter",
    Defination:
      "the point at which the perpendicular bisectors of the sides of a triangle intersect and which is equidistant from the three vertices",
  },
  {
    Id: "629",
    Meaning: "Circumlocution",
    Defination:
      "using more words than are necessary instead of speaking or writing in a clear/direct way.",
  },
  {
    Id: "630",
    Meaning: "Circumscription",
    Defination: "the act of restricting  ",
  },
  {
    Id: "631",
    Meaning: "Circumspection",
    Defination: "knowing how to avoid distress  ",
  },
  {
    Id: "632",
    Meaning: "Circumstantial",
    Defination:
      "containing information and details that strongly suggest that something is true but do not prove it ",
  },
  {
    Id: "633",
    Meaning: "Circumvent",
    Defination:
      "avoid or try to avoid fulfilling, answering, or performing (duties, questions, or issues) ",
  },
  {
    Id: "634",
    Meaning: "Circumvention",
    Defination: "the act of escaping by going around ",
  },
  {
    Id: "635",
    Meaning: "Citadel",
    Defination: "a fortress typically one on high ground above a city ",
  },
  {
    Id: "636",
    Meaning: "Citizen",
    Defination:
      "a person who has the legal right to belong to a particular country ",
  },
  {
    Id: "637",
    Meaning: "Civilization",
    Defination:
      "a society , its culture and its way of life during  a particular period of time/in a particular part of the world  ",
  },
  {
    Id: "638",
    Meaning: "Clamorous",
    Defination: "making a loud and confused noise",
  },
  {
    Id: "639",
    Meaning: "Clamour",
    Defination: "loud and persistent outcry from many people  ",
  },
  {
    Id: "640",
    Meaning: "Clandestine",
    Defination: "conducted with or marked by hidden aims or methods  ",
  },
  {
    Id: "641",
    Meaning: "Clarity",
    Defination: "easy to understand ",
  },
  {
    Id: "642",
    Meaning: "Claustrophobia",
    Defination: "an extreme fear of being in a small confined place ",
  },
  {
    Id: "643",
    Meaning: "Clavierist",
    Defination: "a musician who plays the clavier. ",
  },
  {
    Id: "644",
    Meaning: "Clement",
    Defination: "(used of persons or behavior) inclined to show mercy ",
  },
  {
    Id: "645",
    Meaning: "Clergy",
    Defination:
      "in Christianity, clergymen collectively (as distinguished from the laity) ",
  },
  {
    Id: "646",
    Meaning: "Cleverness",
    Defination: "intelligence  ",
  },
  {
    Id: "647",
    Meaning: "Client",
    Defination:
      "a person who uses the services/ advice of a professional person/ organization ",
  },
  {
    Id: "648",
    Meaning: "Clientele",
    Defination: "customers collectively ",
  },
  {
    Id: "649",
    Meaning: "Climatology",
    Defination: "meteorol ogy of cli mat es  and their phenomena  ",
  },
  {
    Id: "650",
    Meaning: "Clincher",
    Defination: "a tool used to clinch nails or bolts or rivets ",
  },
  {
    Id: "651",
    Meaning: "Clinker",
    Defination: "a hard brick used as a  paving stone ",
  },
  {
    Id: "652",
    Meaning: "Clinophobia",
    Defination: "fear of beds or going to bed ",
  },
  {
    Id: "653",
    Meaning: "Cloakroom",
    Defination:
      "a room in a public building where people can leave coats, bags, etc. for a time ",
  },
  {
    Id: "654",
    Meaning: "Closure",
    Defination:
      "the situation when a factory, school, hospital, etc. shuts permanently ",
  },
  {
    Id: "655",
    Meaning: "Clout",
    Defination: " influence or power, especially in politics or business ",
  },
  {
    Id: "656",
    Meaning: "Clung",
    Defination: "to adhere closely",
  },
  {
    Id: "657",
    Meaning: "Coach",
    Defination: "a carriage pulled by four horses with one driver ",
  },
  {
    Id: "658",
    Meaning: "Coarse",
    Defination: "conspicuously and tastelessly indecent  ",
  },
  {
    Id: "659",
    Meaning: "Coarseness",
    Defination: "the quality of lacking taste and refinement ",
  },
  {
    Id: "660",
    Meaning: "Cocktail",
    Defination: " an appetizer served as a first course at a meal",
  },
  {
    Id: "661",
    Meaning: "Cocktail",
    Defination:
      "a drink usually made from a mixture of one or more alcoholic drinks and fruit juice",
  },
  {
    Id: "662",
    Meaning: "Codicil",
    Defination:
      "an instruction that is added later to a will, usually to change a part of it ",
  },
  {
    Id: "663",
    Meaning: "Codify",
    Defination: "organize into a code or system, such as a body of law",
  },
  {
    Id: "664",
    Meaning: "Coefficient",
    Defination:
      "a constant number that serves as a measure of some property or characteristic ",
  },
  {
    Id: "665",
    Meaning: "Coerce",
    Defination: "compel to force to make obedient ",
  },
  {
    Id: "666",
    Meaning: "Coercion",
    Defination:
      "the action of making  somebody  do something that he does not want to do, using force or threatening ",
  },
  {
    Id: "667",
    Meaning: "Coffer",
    Defination:
      "a large strong box, used in the past for storing money/ valuable objects ",
  },
  {
    Id: "668",
    Meaning: "Coffle",
    Defination:
      "a group of animals, prisoners, or slaves chained tog ether in a line I ",
  },
  {
    Id: "669",
    Meaning: "Cohere",
    Defination:
      "have internal elements  or parts logically connected so that aesthetic consistency results ",
  },
  {
    Id: "670",
    Meaning: "Coherence",
    Defination: "logical and orderly and consistent relation of  parts ",
  },
  {
    Id: "671",
    Meaning: "Coin",
    Defination:
      "Collector  a collector and student of money collects coins with the aim to complete sets of coins ",
  },
  {
    Id: "672",
    Meaning: "Coincidence",
    Defination:
      "a remarkable concurrence of events or circumstances without apparent causal connection",
  },
  {
    Id: "673",
    Meaning: "Coir",
    Defination:
      "rough material made from the shells of coconuts, used for making ropes, for covering flowers, etc. ",
  },
  {
    Id: "675",
    Meaning: "Colleague",
    Defination:
      "a person that one w ork with at the same place, in a profession or  a business ",
  },
  {
    Id: "676",
    Meaning: "Collier",
    Defination: "a ship that carries coal ",
  },
  {
    Id: "677",
    Meaning: "Colloquy",
    Defination: "mutual discourse *",
  },
  {
    Id: "678",
    Meaning: "Colony",
    Defination:
      "a country or an area that is governed by people from another, more powerful country ",
  },
  {
    Id: "679",
    Meaning: "Colossal",
    Defination: "so great in size or force or extent as to elicit awe ",
  },
  {
    Id: "680",
    Meaning: "Colosus",
    Defination: "A gigantic statue ",
  },
  {
    Id: "681",
    Meaning: "Comet",
    Defination:
      "a mass of ice and dust that moves around  the sun and  looks like a bright star with a tail ",
  },
  {
    Id: "682",
    Meaning: "Commemorate",
    Defination:
      "to remind people of an important person/ event from the past with a special action/ object ",
  },
  {
    Id: "683",
    Meaning: "Commence",
    Defination: "take the first step or steps in carrying out an action",
  },
  {
    Id: "684",
    Meaning: "Commensurate",
    Defination: "to match something in size, importance, quality, etc. ",
  },
  {
    Id: "685",
    Meaning: "Commiserate",
    Defination: "to show sympathy when somebody is upset/ disappointed",
  },
  {
    Id: "686",
    Meaning: "Commission",
    Defination: "money given to agent on sales ",
  },
  {
    Id: "687",
    Meaning: "Common",
    Defination: "having no special distinction or quality ",
  },
  {
    Id: "688",
    Meaning: "Common",
    Defination:
      "belonging to or participated in by a community as a whole public ",
  },
  {
    Id: "689",
    Meaning: "Communicate",
    Defination: "to exchange information, news, ideas, etc. ",
  },
  {
    Id: "690",
    Meaning: "Communist",
    Defination:
      "a person who believes in or supports living together and sharing possessions and responsibilities  ",
  },
  {
    Id: "691",
    Meaning: "Community",
    Defination:
      "a group of people having common interests, living in the same locality and under the same government ",
  },
  {
    Id: "692",
    Meaning: "Companion",
    Defination: "a person who travels/ spends a lot of time with you ",
  },
  {
    Id: "693",
    Meaning: "Company",
    Defination: "a group of  persons firm, business enterprise",
  },
  {
    Id: "694",
    Meaning: "Compass",
    Defination: "an instrument for finding directions",
  },
  {
    Id: "695",
    Meaning: "Compassion",
    Defination: "a deep awareness of and sympathy fo r another™s suffering  ",
  },
  {
    Id: "696",
    Meaning: "Compatriot",
    Defination:
      "a person who was born in, as a citizen of, the same country as somebody else ",
  },
  {
    Id: "697",
    Meaning: "Compatriots",
    Defination: "a fellow citizen or national of a country.  ",
  },
  {
    Id: "698",
    Meaning: "Compere",
    Defination:
      "British term for someone who introduces television acts or cab arets etc. ",
  },
  {
    Id: "699",
    Meaning: "Complacent",
    Defination: "too satisfied with yourself or with a situation  ",
  },
  {
    Id: "700",
    Meaning: "Complaisant",
    Defination: "trying to please ",
  },
  {
    Id: "701",
    Meaning: "Complex",
    Defination: "complicated  ",
  },
  {
    Id: "702",
    Meaning: "Complicity",
    Defination: "the act of taking with another person in a crime",
  },
  {
    Id: "703",
    Meaning: "Compliment",
    Defination: "a remark (or act) expressing praise and admiration ",
  },
  {
    Id: "704",
    Meaning: "Complimentary",
    Defination: "conveying or resembling a compliment  ",
  },
  {
    Id: "705",
    Meaning: "Compositor",
    Defination: "one who sets written material into type",
  },
  {
    Id: "706",
    Meaning: "Compositor",
    Defination: "a person who arranges text on a page before printing ",
  },
  {
    Id: "707",
    Meaning: "Compromise",
    Defination: "an agreement made between two people or groups ",
  },
  {
    Id: "708",
    Meaning: "Compulsorily",
    Defination: "that must be done because of a law or a rule",
  },
  {
    Id: "709",
    Meaning: "Comrades",
    Defination: "friends ",
  },
  {
    Id: "710",
    Meaning: "Conceited",
    Defination: "having  too much pride in yourself and what y ou do",
  },
  {
    Id: "711",
    Meaning: "Conceivable",
    Defination: "capable of being imagined or grasped mentally ",
  },
  {
    Id: "712",
    Meaning: "Concentration",
    Defination:
      "the ability to direct all your effort and attention on one thing ",
  },
  {
    Id: "713",
    Meaning: "Concentric",
    Defination: "having a common center  ",
  },
  {
    Id: "714",
    Meaning: "Concept",
    Defination:
      "an abstract or general idea inferred or derived from specific instances ",
  },
  {
    Id: "715",
    Meaning: "Concision",
    Defination:
      "terseness and economy in writing and speaking achieved by expressing a great deal in just a few words ",
  },
  {
    Id: "716",
    Meaning: "Concluding",
    Defination:
      " Speech  said at the end of something as a conclusion to what happened  ",
  },
  {
    Id: "717",
    Meaning: "Concoct",
    Defination: "invent, prepare by mixing together  ",
  },
  {
    Id: "718",
    Meaning: "Concubinage",
    Defination: "living together (as spouses) without being legally married ",
  },
  {
    Id: "719",
    Meaning: "Concubine",
    Defination: "a woman who cohabits with an important man  ",
  },
  {
    Id: "720",
    Meaning: "Condiment",
    Defination:
      "a preparation (a sauce or relish or spice) to enhance flavor or enjoyment ",
  },
  {
    Id: "721",
    Meaning: "Condominium",
    Defination:
      "an apartment building/ group of houses in which each flat/ apartment/ house is owned by a person living in it but the shared areas are owned by everyone together ",
  },
  {
    Id: "722",
    Meaning: "Confectioner",
    Defination: " a company or person that mak es or sells sweets or chocolate",
  },
  {
    Id: "723",
    Meaning: "Confederate",
    Defination: "joined by an agreement or  treaty",
  },
  {
    Id: "724",
    Meaning: "Confession",
    Defination:
      "a statement that a person makes admitting that he is guilty of a crime ",
  },
  {
    Id: "725",
    Meaning: "Confident",
    Defination:
      "feeling sure about your own ability to do  things and be successful ",
  },
  {
    Id: "726",
    Meaning: "Configuration",
    Defination:
      "an arrangement of the parts of something or a group of things ",
  },
  {
    Id: "727",
    Meaning: "Confiscate",
    Defination: "to officially take something away from somebody ",
  },
  {
    Id: "728",
    Meaning: "Conflagrant",
    Defination: "combustibles flammable ",
  },
  {
    Id: "729",
    Meaning: "Conflagration",
    Defination: " an excessive fire which destroys a lot of land/ buildings ",
  },
  {
    Id: "730",
    Meaning: "Confrontation",
    Defination:
      "a situation in which there is an angry disagreement between people or groups who have different opinions",
  },
  {
    Id: "731",
    Meaning: "Confusing",
    Defination: "a state of not being certain",
  },
  {
    Id: "732",
    Meaning: "Congenial",
    Defination: "used of plants",
  },
  {
    Id: "733",
    Meaning: "Congregation",
    Defination:
      "a group of people who are gathered together in a church to worship god ",
  },
  {
    Id: "734",
    Meaning: "Conjecture",
    Defination:
      "an opinion or conclusion formed on the basis of incomplete information ",
  },
  {
    Id: "735",
    Meaning: "Conjugate",
    Defination: "of an organic compound ",
  },
  {
    Id: "736",
    Meaning: "Conjunctivitis",
    Defination:
      "an infectious eye disease that causes pain and swelling in part of the eye",
  },
  {
    Id: "737",
    Meaning: "Conjuror",
    Defination:
      "a person who performs magic tricks which seem to make things appear or disappear",
  },
  {
    Id: "738",
    Meaning: "Connoisseur",
    Defination:
      "an expert on matters involving the judgmental beauty, quality or skill in art, food or music",
  },
  {
    Id: "739",
    Meaning: "Conscience",
    Defination:
      "the fact of behaving in a way that you feel is right even though this may cause problems",
  },
  {
    Id: "740",
    Meaning: "Conscientious",
    Defination: "guided by one's sense of duty ",
  },
  {
    Id: "741",
    Meaning: "Conscious",
    Defination:
      "(followed by `of') showing realization or  recognition of something ",
  },
  {
    Id: "742",
    Meaning: "Consciousness",
    Defination:
      "the state of be ing able to use your senses and mental powers to understand  what is happening ",
  },
  {
    Id: "743",
    Meaning: "Conservative",
    Defination:
      "holding to traditional attitudes and values and cautious about change or innovation // a person who is opposed to great/sudden social change ",
  },
  {
    Id: "744",
    Meaning: "Conservatory",
    Defination:
      " a room with glass walls and a glass roof that is built on the side of a house ",
  },
  {
    Id: "745",
    Meaning: "Console",
    Defination: "comfort someone at a time of grief or disappointment",
  },
  {
    Id: "746",
    Meaning: "Consolidate",
    Defination: "unite into one",
  },
  {
    Id: "747",
    Meaning: "Conspicuous",
    Defination: "Clearly visible // likely  to attract attention",
  },
  {
    Id: "748",
    Meaning: "Constellation",
    Defination:
      "a group of stars that forms a shape in the sky and has a name  ",
  },
  {
    Id: "749",
    Meaning: "Consternation",
    Defination: "worried, sad feeling after you have received ",
  },
  {
    Id: "750",
    Meaning: "Constipated",
    Defination: "unable to get rid of waste material from the bowels easily  ",
  },
  {
    Id: "751",
    Meaning: "Constrained",
    Defination: "Appearing forced or overly controlled ",
  },
  {
    Id: "752",
    Meaning: "Constriction",
    Defination: "a narrowing that reduces the  flow through a channel ",
  },
  {
    Id: "753",
    Meaning: "Construed",
    Defination:
      "to understand the meaning of a word, a sentence or an action in a particular way  ",
  },
  {
    Id: "754",
    Meaning: "Consummate",
    Defination: " extremely skilled  ",
  },
  {
    Id: "755",
    Meaning: "Contagious",
    Defination: "easily spread from one person to another (disease)  ",
  },
  {
    Id: "756",
    Meaning: "Cont",
    Defination:
      "aminat ed something made impure by exposure to polluting substances ",
  },
  {
    Id: "757",
    Meaning: "Contemplate",
    Defination: "consider as a possibility ",
  },
  {
    Id: "758",
    Meaning: "Contemporaries",
    Defination: "  belonging to the same time",
  },
  {
    Id: "759",
    Meaning: "Contemporary",
    Defination: "belonging to the same time  ",
  },
  {
    Id: "760",
    Meaning: "Contempt",
    Defination:
      "the feeling that somebody/ something is without value and deserves no respect at all  ",
  },
  {
    Id: "761",
    Meaning: "Contender",
    Defination: "the contestant you hope to defeat  ",
  },
  {
    Id: "762",
    Meaning: "Contented",
    Defination: "someone who is satisfied with life is general ",
  },
  {
    Id: "763",
    Meaning: "Contingency",
    Defination: "an event that may/may not happen  ",
  },
  {
    Id: "764",
    Meaning: "Continuum",
    Defination:
      "a series of similar items in which each is almost the same as the ones next to it but the last is very different from the first  ",
  },
  {
    Id: "765",
    Meaning: "Contraband",
    Defination: "goods that are illegally taken into or out of a country  ",
  },
  {
    Id: "766",
    Meaning: "Contract",
    Defination: "an official written agreement ",
  },
  {
    Id: "767",
    Meaning: "Cont",
    Defination: "raction  the process of becoming smaller",
  },
  {
    Id: "768",
    Meaning: "Co",
    Defination: "ntrary resistant to guidance or discipline",
  },
  {
    Id: "769",
    Meaning: "Contributory",
    Defination: "tending to bring about ",
  },
  {
    Id: "770",
    Meaning: "Controversy",
    Defination: "a dispute where there is strong  disagreement ",
  },
  {
    Id: "771",
    Meaning: "Convalescent",
    Defination: "a man who is recovering from illness. ",
  },
  {
    Id: "772",
    Meaning: "Convent",
    Defination: "a place where nuns li ve and work  ",
  },
  {
    Id: "773",
    Meaning: "Convention",
    Defination:
      "the way in which something is done that most people in a society  expect and consider to be  polite /the right way to do it ",
  },
  {
    Id: "774",
    Meaning: "Conventionalist",
    Defination: "advocacy of or conformity to that which is established",
  },
  {
    Id: "775",
    Meaning: "Convergence",
    Defination: "the act of converging (coming closer)  ",
  },
  {
    Id: "776",
    Meaning: "Conversant",
    Defination: "knowing about something  ",
  },
  {
    Id: "777",
    Meaning: "Conviction",
    Defination: "the act of finding somebody guilty of a crime in court",
  },
  {
    Id: "778",
    Meaning: "Convivial",
    Defination: "occupied with or fond of the pleasures of good company  ",
  },
  {
    Id: "779",
    Meaning: "Copse",
    Defination: "a dense growth of bushes ",
  },
  {
    Id: "780",
    Meaning: "Copy",
    Defination:
      "a thing that is made to be the same as something else (a document or a work of art) ",
  },
  {
    Id: "781",
    Meaning: "Copyright",
    Defination:
      "the legal right granted to an author, composer, playwright, publisher, or distributor to exclusive publication, production, sale/distribution of a literary, musical, dramatic, or artistic work ",
  },
  {
    Id: "782",
    Meaning: "Coquette",
    Defination: "a seductive woman who uses her  sex appeal to exploit men",
  },
  {
    Id: "783",
    Meaning: "Cordial",
    Defination: "warm and sincere",
  },
  {
    Id: "784",
    Meaning: "Coronation",
    Defination: "ceremony of crowning a king  ",
  },
  {
    Id: "785",
    Meaning: "Corporal",
    Defination: "a petty officer.",
  },
  {
    Id: "786",
    Meaning: "Corporate",
    Defination: "organized and maintained as a legal corporation ",
  },
  {
    Id: "787",
    Meaning: "Corpse",
    Defination: "a dead body  (human)  ",
  },
  {
    Id: "788",
    Meaning: "Corpsing",
    Defination:
      "spoil a piece of acting by forgetting one™s lines/ laughing uncontrollably ",
  },
  {
    Id: "789",
    Meaning: "Corrigendum",
    Defination: "a printer™s error to be corrected  ",
  },
  {
    Id: "790",
    Meaning: "Corroborate",
    Defination: "  to provide evidence/ information that supports a statement ",
  },
  {
    Id: "791",
    Meaning: "Corruption",
    Defination: "dishonest/ illegal behaviour (of people  in  authority)   ",
  },
  {
    Id: "792",
    Meaning: "Cortege",
    Defination: "a line of cars/people moving along slowly at a funeral ",
  },
  {
    Id: "793",
    Meaning: "Cosmesis",
    Defination: "the preservation, restoration or bestowing of bodily beauty  ",
  },
  {
    Id: "794",
    Meaning: "Cosmetician",
    Defination:
      "  one whose occupation is manufacturing , selling or applying cosmetics.  ",
  },
  {
    Id: "795",
    Meaning: "Cosmocrat",
    Defination: "ruler/leader of the whole world ",
  },
  {
    Id: "796",
    Meaning: "Cosmography",
    Defination: "science of the  constitution of the whole universe ",
  },
  {
    Id: "797",
    Meaning: "Cosmopolitan",
    Defination:
      "a person who has the experience of many different parts of the world  ",
  },
  {
    Id: "798",
    Meaning: "Coterie",
    Defination:
      "a small group of people who have the same interests and do things together b ut do not like to include others ",
  },
  {
    Id: "799",
    Meaning: "Cough",
    Defination: "Syrup  a liquid medicine that you take for a cough ",
  },
  {
    Id: "800",
    Meaning: "Council",
    Defination:
      "a group of people who a re elected to govern an area such as a ci ty or a district, etc. ",
  },
  {
    Id: "801",
    Meaning: "Councilor",
    Defination: "a member of a council ",
  },
  {
    Id: "802",
    Meaning: "Counsellor",
    Defination:
      "someone who has supervisory duties/gives advice about problems // a lawyer who pleads cases in court  ",
  },
  {
    Id: "803",
    Meaning: "Counterfeit",
    Defination:
      "fake made to look exactly  like something in order to trick people into thinking that the y are getting the  real thing  ",
  },
  {
    Id: "804",
    Meaning: "Country",
    Defination:
      "an area of land that has or used to have its own government and laws ",
  },
  {
    Id: "805",
    Meaning: "Coup",
    Defination:
      "a sudden cha nge of government that is illegal and often violent  ",
  },
  {
    Id: "806",
    Meaning: "Couplet",
    Defination: "a stanza having two lines in verse ",
  },
  {
    Id: "807",
    Meaning: "Courier",
    Defination:
      "a person/ company whose job is to take pack ages/ important parcels some where ",
  },
  {
    Id: "808",
    Meaning: "Covertly",
    Defination: "in a covert manner ",
  },
  {
    Id: "809",
    Meaning: "Covey",
    Defination: "a small collection of people ",
  },
  {
    Id: "810",
    Meaning: "Cowardice",
    Defination: "the trait of lacking courage ",
  },
  {
    Id: "811",
    Meaning: "Creasy",
    Defination: "a line made by pressing, folding, or wrinkling ",
  },
  {
    Id: "812",
    Meaning: "Creative",
    Defination:
      "having the skill and ability to produce something new, especially a work of art  ",
  },
  {
    Id: "813",
    Meaning: "Creator",
    Defination: "a person who has ma de/ invented a particular thing ",
  },
  {
    Id: "814",
    Meaning: "Credence",
    Defination:
      "the mental attitude t hat something is believable and should be accepted as true  ",
  },
  {
    Id: "815",
    Meaning: "Credential",
    Defination:
      "the qualities/ training/experience that make you suitable to do something  ",
  },
  {
    Id: "816",
    Meaning: "Credible",
    Defination: 'that can be believed or trusted j"',
  },
  {
    Id: "817",
    Meaning: "Creditable",
    Defination:
      "deserving public acknowledgement and praise but not necessarily outstanding or successful",
  },
  {
    Id: "818",
    Meaning: "Creditor",
    Defination: "a person to whom money is owed by another person ",
  },
  {
    Id: "819",
    Meaning: "Credulous",
    Defination: "ready to believe things and therefore easy to trick ",
  },
  {
    Id: "820",
    Meaning: "Creed",
    Defination: "a system of religious belief ",
  },
  {
    Id: "821",
    Meaning: "Crematorium",
    Defination: " a building in which the bodies of dead people are burned  ",
  },
  {
    Id: "822",
    Meaning: "Crescendo",
    Defination: "a gradual increase in loudness in a piece of music  ",
  },
  {
    Id: "823",
    Meaning: "Crew",
    Defination: "all the people working on a ship, plane, etc. ",
  },
  {
    Id: "824",
    Meaning: "Criminal",
    Defination: "connected with crime ",
  },
  {
    Id: "825",
    Meaning: "Crisis",
    Defination: "turning point of danger/disease ",
  },
  {
    Id: "826",
    Meaning: "Crisp",
    Defination: "crunchy ",
  },
  {
    Id: "827",
    Meaning: "Criterion",
    Defination:
      "a standard/principle by which something is judged, or with the help of which a decision is made ",
  },
  {
    Id: "828",
    Meaning: "Critic",
    Defination:
      "a person who expresses disapproval of somebody/something and talks about his bad qualities, especially publicly ",
  },
  {
    Id: "829",
    Meaning: "Crocodile",
    Defination:
      "large voracious aquatic reptile having a long snout with massive jaws and sharp teeth and a body covered with bony plates  ",
  },
  {
    Id: "830",
    Meaning: "Crowd",
    Defination:
      "a large number of people  gathered together in a public place in the streets at a sports ground, etc.  ",
  },
  {
    Id: "831",
    Meaning: "Crude",
    Defination:
      "simple and not very accurate but giving a general idea of something ",
  },
  {
    Id: "832",
    Meaning: "Crypto",
    Defination:
      "a person having a secret allegiance to a political cr eed , especially communism. ",
  },
  {
    Id: "833",
    Meaning: "Cryptograph",
    Defination: "a device for deciphering codes and ciphers ",
  },
  {
    Id: "834",
    Meaning: "Cull",
    Defination:
      "to kill a particular number of animals of a group in order to pr event the group from getting too large   ",
  },
  {
    Id: "835",
    Meaning: "Culpable",
    Defination:
      "responsible and deserving blame for having done something wrong ",
  },
  {
    Id: "836",
    Meaning: "Culprits",
    Defination: "a person who has done something wrong/against the law  ",
  },
  {
    Id: "837",
    Meaning: "Culture",
    Defination:
      "the customs and beliefs, art, way of life and social organisation of a particular country/g roup ",
  },
  {
    Id: "838",
    Meaning: "Curator",
    Defination:
      "a person whose job is to be in charge of the objects or words of art in a museum or art gallery, etc.",
  },
  {
    Id: "839",
    Meaning: "Curfew",
    Defination: "signal under martial law for people to remain indoors ",
  },
  {
    Id: "840",
    Meaning: "Curiosity",
    Defination: "a strong desire to know or learn something  ",
  },
  {
    Id: "841",
    Meaning: "Curmudgeon",
    Defination: "a bad-tempered person, often an old one Ù ",
  },
  {
    Id: "842",
    Meaning: "Currency",
    Defination: "general acceptance or use  ",
  },
  {
    Id: "843",
    Meaning: "Cursory",
    Defination: "going rapidly over something  ",
  },
  {
    Id: "844",
    Meaning: "Curt",
    Defination: "brief and to the point þ ",
  },
  {
    Id: "845",
    Meaning: "Customer",
    Defination:
      "a person/an organisation that buys something from a shop/ store or business  ",
  },
  {
    Id: "846",
    Meaning: "Cut",
    Defination: "to make an opening // to divide with a knife  ",
  },
  {
    Id: "847",
    Meaning: "Cyclone",
    Defination:
      "a violent tropical storm in which strong winds move in a circle   ",
  },
  {
    Id: "848",
    Meaning: "Cyclostyle",
    Defination:
      "print with a cyclostyle a writing implement with a small toot hed wheel that cuts small holes in a stencil ",
  },
  {
    Id: "849",
    Meaning: "Cynic",
    Defination: "someone who is critical of the motives of others ",
  },
  {
    Id: "850",
    Meaning: "Cynicism",
    Defination: "a cynical feeling of distrust ",
  },
  {
    Id: "851",
    Meaning: "Cynophobia",
    Defination: "extreme fear of dogs",
  },
  {
    Id: "852",
    Meaning: "Cynosure",
    Defination: "centre of attraction ",
  },
  {
    Id: "853",
    Meaning: "Cytology",
    Defination: "dealing with cells  ",
  },
  {
    Id: "854",
    Meaning: "Dabbler",
    Defination:
      "an amateur who engages in an activity without serious intentions and who pretends to have knowledge  ",
  },
  {
    Id: "855",
    Meaning: "Dacoit",
    Defination: "a member of an armed ga ng of robbers ",
  },
  {
    Id: "856",
    Meaning: "Dactylogy",
    Defination:
      "the science of communicating by sign language using the hands and fingers.  ",
  },
  {
    Id: "857",
    Meaning: "Daft",
    Defination: "informal or slang terms for mentally irregular",
  },
  {
    Id: "858",
    Meaning: "Dam",
    Defination:
      "a barrier that is built across a river in order to stop the water from flowing",
  },
  {
    Id: "859",
    Meaning: "Damsel",
    Defination: "a young unmarried  woman ",
  },
  {
    Id: "860",
    Meaning: "Dandy",
    Defination: "a man unduly concerned with looking stylish and fashionable  ",
  },
  {
    Id: "861",
    Meaning: "Dangerous",
    Defination:
      "likely to injure or harm somebody // likely to damage or destroy something ",
  },
  {
    Id: "862",
    Meaning: "Daring",
    Defination: "brave  ",
  },
  {
    Id: "863",
    Meaning: "Dark",
    Defination: "with no or little light  ",
  },
  {
    Id: "864",
    Meaning: "Data",
    Defination:
      "facts/information, especially when examined and used for finding out things/ for making decisions  ",
  },
  {
    Id: "865",
    Meaning: "Daughter",
    Defination: "a female human offspring  ",
  },
  {
    Id: "866",
    Meaning: "Dawdle",
    Defination: "to take a long time to do something/go somewhere  ",
  },
  {
    Id: "867",
    Meaning: "Dazzling",
    Defination: "amazingly impressive  ",
  },
  {
    Id: "868",
    Meaning: "Deacon",
    Defination: "a cleric ranking just below a priest in churches  ",
  },
  {
    Id: "869",
    Meaning: "Deadly",
    Defination: "causing or likely to cause death  ",
  },
  {
    Id: "870",
    Meaning: "Deaf",
    Defination:
      "lacking or deprive of the sense of hearing wholly or in part  ",
  },
  {
    Id: "871",
    Meaning: "Deal",
    Defination: "an agreement  ",
  },
  {
    Id: "872",
    Meaning: "Dean",
    Defination:
      "an administrator in cha rge of a division of a university/college  ",
  },
  {
    Id: "873",
    Meaning: "Debacle",
    Defination:
      "an event/a situation that is a complete failure and causes em barrassment // a breakup overthrow  sudden disaster ",
  },
  {
    Id: "874",
    Meaning: "Debasement",
    Defination:
      "the fact of making something/ somebody less valuable/ respected",
  },
  {
    Id: "875",
    Meaning: "Debatable",
    Defination: "capable of being disproved",
  },
  {
    Id: "876",
    Meaning: "Debate",
    Defination:
      "a formal discussion of an issue expressing different opinions ",
  },
  {
    Id: "877",
    Meaning: "Debauch",
    Defination:
      "a wild gathering involving excessive drinking and promiscuity  ",
  },
  {
    Id: "878",
    Meaning: "Debauchery",
    Defination: "immoral behaviour involving sex, alcohol or drugs ",
  },
  {
    Id: "879",
    Meaning: "Debonair",
    Defination: "f ashionable and co nf ident ( of  men) ",
  },
  {
    Id: "880",
    Meaning: "Debut",
    Defination: "the first public appearance of a performer/ sports player  ",
  },
  {
    Id: "881",
    Meaning: "Decadent",
    Defination: "marked by excessive self ",
  },
  {
    Id: "882",
    Meaning: "Deceit",
    Defination: "the act o f deceiving ",
  },
  {
    Id: "883",
    Meaning: "Deceive",
    Defination: "to cheat/fool/ trick/mislead ",
  },
  {
    Id: "884",
    Meaning: "Decipher",
    Defination:
      "to succeed in finding the meaning of something of that is difficult to read/ understand ",
  },
  {
    Id: "885",
    Meaning: "Declaratory",
    Defination: "relating to the use of or having the nature of a declaration ",
  },
  {
    Id: "886",
    Meaning: "Declare",
    Defination:
      "to say something officially/ publicly // to state firmly and clearly ",
  },
  {
    Id: "887",
    Meaning: "Decrepit",
    Defination: "lacking bodily/ muscular strength/vitality ",
  },
  {
    Id: "888",
    Meaning: "Defalcation",
    Defination: "the sum of money that is misappropriated ",
  },
  {
    Id: "889",
    Meaning: "Defamation",
    Defination:
      "the act of damaging somebody™s reputation by say ing/writing bad/false thing s about him orchestration  ",
  },
  {
    Id: "890",
    Meaning: "Defame",
    Defination:
      "to harm somebody by saying/ writing bad/ false things about him",
  },
  {
    Id: "891",
    Meaning: "Defeatist",
    Defination:
      "a person expecting not to succeed, and showing it in a particular situation",
  },
  {
    Id: "892",
    Meaning: "Defection",
    Defination:
      "withdrawing support or help despite continued support for a political party, religion, ruler, etc.",
  },
  {
    Id: "893",
    Meaning: "Definite",
    Defination: "known for certain",
  },
  {
    Id: "894",
    Meaning: "Deist",
    Defination:
      "a person who believes in god, especially god that created the universe but does not part in it  ",
  },
  {
    Id: "895",
    Meaning: "Delectable",
    Defination: "greatly pleasing  ",
  },
  {
    Id: "896",
    Meaning: "Delegate",
    Defination:
      "to give part of your work, power or authority to somebody in a lower position than you ",
  },
  {
    Id: "897",
    Meaning: "Delete",
    Defination:
      "to remove something that  has been written/printed/ stored  on a computer  ",
  },
  {
    Id: "898",
    Meaning: "Deliberate",
    Defination:
      "carefully thought out in advance // unhurried and with care and dignity",
  },
  {
    Id: "899",
    Meaning: "Deliberation",
    Defination: "slow and careful movement or thought",
  },
  {
    Id: "900",
    Meaning: "Delible",
    Defination: "capable of being deleted",
  },
];

export default wordsData;
