 
const wordsData = [
    {
      "Id": 1,
      "Meaning": "Abaft",
      "Defination": "in or behind the stern of a ship"
    },
    { "Id": 2, "Meaning": "Abandon", "Defination": "to leave" },
    { "Id": 3, "Meaning": "Abase", "Defination": "cause to feel shame" },
    {
      "Id": 4,
      "Meaning": "Abashed",
      "Defination": "feeling or ca used to feel uneasy and self"
    },
    { "Id": 5, "Meaning": "Abatement", "Defination": "lessening of something" },
    {
      "Id": 6,
      "Meaning": "Abatis",
      "Defination": "line of defence consisting of a barrier of felled or live trees with branches (sharpened or with barbed wire entwined) toward the enemy"
    },
    {
      "Id": 7,
      "Meaning": "Abattoir",
      "Defination": "a place where animals are slaughtered for consumption as food"
    },
    { "Id": 8, "Meaning": "Abbot", "Defination": "the superior of a monastery" },
    {
      "Id": 9,
      "Meaning": "Abdicate",
      "Defination": "to give up the position of being king/queen"
    },
    {
      "Id": 10,
      "Meaning": "Abduct",
      "Defination": "to take somebody away illegally, especially using force"
    },
    {
      "Id": 11,
      "Meaning": "Aberration",
      "Defination": "a fact, an action or a way of behaving that is not usual, a disorder in one's mental state "
    },
    { "Id": 12, "Meaning": "Abhor", "Defination": "to hate, to de test" },
    { "Id": 13, "Meaning": "Abject", "Defination": "terrible and without hope " },
    {
      "Id": 14,
      "Meaning": "Ableism",
      "Defination": "discrimination in favor of the able "
    },
    {
      "Id": 15,
      "Meaning": "Ablution",
      "Defination": "the ritual washing of a priest's hands or of sacred vessels "
    },
    {
      "Id": 16,
      "Meaning": "Aboard",
      "Defination": "on or onto a ship/plane/ bus or train "
    },
    {
      "Id": 17,
      "Meaning": "Abode",
      "Defination": "a place where somebody lives "
    },
    {
      "Id": 18,
      "Meaning": "Abolish",
      "Defination": "formally put an end to a system, practice, or institution "
    },
    {
      "Id": 19,
      "Meaning": "Abominable",
      "Defination": "unequivocally detestable "
    },
    {
      "Id": 20,
      "Meaning": "Abort",
      "Defination": "to end or cause to end before something has been completed because it is likely to fail "
    },
    {
      "Id": 21,
      "Meaning": "Abortionist",
      "Defination": "a person (who should be a doctor) who terminates pregnancies "
    },
    {
      "Id": 22,
      "Meaning": "Abridge",
      "Defination": "to shorten a piece of writing without losing the sense"
    },
    {
      "Id": 23,
      "Meaning": "Abridgement",
      "Defination": "a shortened version o f  a written work 2"
    },
    {
      "Id": 24,
      "Meaning": "Abrogate",
      "Defination": "to officially end a law, an agreement, etc.  "
    },
    {
      "Id": 25,
      "Meaning": "Absconders",
      "Defination": "a fugitive who runs away and hides to avoid arrest/prosecution "
    },
    {
      "Id": 26,
      "Meaning": "Absenteeism",
      "Defination": "habitual absence from work"
    },
    {
      "Id": 27,
      "Meaning": "Absolute",
      "Defination": "one who is perfect/complete/free from imperfection "
    },
    {
      "Id": 28,
      "Meaning": "Abstain",
      "Defination": "to choose not to use a vote, either in favour of/ against something "
    },
    {
      "Id": 29,
      "Meaning": "Abstruse",
      "Defination": "difficult to comprehend obscure "
    },
    { "Id": 30, "Meaning": "Absurd", "Defination": "completely ridiculous" },
    {
      "Id": 31,
      "Meaning": "Abundance",
      "Defination": "a large quantity that is more than enough "
    },
    {
      "Id": 32,
      "Meaning": "Academicism",
      "Defination": "orthodoxy of a scholastic variety "
    },
    {
      "Id": 33,
      "Meaning": "Academy",
      "Defination": "a school/college for special training  "
    },
    {
      "Id": 34,
      "Meaning": "Accolade",
      "Defination": "praise/an award f or an achievement that people admire  "
    },
    {
      "Id": 35,
      "Meaning": "Accomplice",
      "Defination": "a person who helps another to commit a crime/ to do something wrong  "
    },
    { "Id": 36, "Meaning": "Accord", "Defination": "sympathetic compatibility " },
    {
      "Id": 37,
      "Meaning": "Accountability",
      "Defination": "responsibility to someone or for some activity "
    },
    {
      "Id": 38,
      "Meaning": "Accountant",
      "Defination": "a person whose profession is to keep accounts "
    },
    { "Id": 39, "Meaning": "Accredit", "Defination": "give credit for " },
    {
      "Id": 40,
      "Meaning": "Accretive",
      "Defination": "characterized by gradual growth or increase "
    },
    { "Id": 41, "Meaning": "Accrual", "Defination": "the act of accumulating " },
    {
      "Id": 42,
      "Meaning": "Accuser",
      "Defination": "a person who says that somebody has done something wrong/is guilty of something "
    },
    {
      "Id": 43,
      "Meaning": "Acerb",
      "Defination": "harsh or corrosive in tone 0"
    },
    {
      "Id": 44,
      "Meaning": "Acetic",
      "Defination": "relating to or  containing acetic acid "
    },
    { "Id": 45, "Meaning": "Acoustics", "Defination": "study of sound  " },
    {
      "Id": 46,
      "Meaning": "Acquaint",
      "Defination": "to make somebody/yourself familiar with/ aware of  something "
    },
    {
      "Id": 47,
      "Meaning": "Acquiesce",
      "Defination": "to accept something without arguing "
    },
    {
      "Id": 48,
      "Meaning": "Acquit",
      "Defination": "to decide and state officially in court that somebody is not guilty of a crime "
    },
    {
      "Id": 49,
      "Meaning": "Acquittal",
      "Defination": "an official decision in court that a person is not guilty of a crime "
    },
    {
      "Id": 50,
      "Meaning": "Acrid",
      "Defination": "harsh or corrosive in tone  "
    },
    {
      "Id": 51,
      "Meaning": "Acrimonious",
      "Defination": "angry and full of strong bitter feelings and words "
    },
    {
      "Id": 52,
      "Meaning": "Acrobat",
      "Defination": "an entertainer who performs difficult acts such as balancing on high ropes (at a circus) // an athlete who performs acts that need skill, agility and coordination "
    },
    {
      "Id": 53,
      "Meaning": "Acronym",
      "Defination": "a word formed from the first letters of the words that make up the name of something "
    },
    { "Id": 54, "Meaning": "Acrophobia", "Defination": "fear of great heights " },
    {
      "Id": 55,
      "Meaning": "Acrostic",
      "Defination": "a poem/other piece of writing in which particular letters in each line, usually first letters, can be read downwards to form a word/words spelling out e.g. CANDY: crunchy and chewy awesome nice and sweet delightful and delicious yummy treat.   "
    },
    {
      "Id": 56,
      "Meaning": "Act",
      "Defination": "to do something // to behave in a particular way // to perform a part in a play/film/ function  "
    },
    {
      "Id": 57,
      "Meaning": "Activist",
      "Defination": "advocating or en gaged in activism "
    },
    {
      "Id": 58,
      "Meaning": "Actuary",
      "Defination": "someone versed in the collection and interpretation of numerical data (especially some one who uses statistics  to calculate insurance premiums) "
    },
    {
      "Id": 59,
      "Meaning": "Acumen",
      "Defination": "the ability to mak e good judgements and take quick  decisions "
    },
    { "Id": 60, "Meaning": "Ad Lib", "Defination": "not prepared/ practised" },
    {
      "Id": 61,
      "Meaning": "Adamant",
      "Defination": "determined not to change your mind  "
    },
    { "Id": 62, "Meaning": "Adapt", "Defination": "to adjust //  to modify  " },
    {
      "Id": 63,
      "Meaning": "Addict",
      "Defination": "a person who is very interested in some thing and  spends a lot of his free time in it // a person who is unable to stop taking harmful drugs"
    },
    {
      "Id": 64,
      "Meaning": "Addiction",
      "Defination": "(roman law) a formal a ward by a magistrate of  a thing or person to another person (as the award of a debtor to his creditor)  "
    },
    {
      "Id": 65,
      "Meaning": "Adept",
      "Defination": "a person who is good at doing something that is quite difficult "
    },
    { "Id": 66, "Meaning": "Adhere", "Defination": "to stick firmly " },
    { "Id": 67, "Meaning": "Adherent", "Defination": "sticking fast " },
    {
      "Id": 68,
      "Meaning": "Adjoins",
      "Defination": "be next to and joined with (a building, room, or  piece of land)  "
    },
    {
      "Id": 69,
      "Meaning": "Adjunct",
      "Defination": "a thing that is added/attached to some thing larger/more important  "
    },
    {
      "Id": 70,
      "Meaning": "Administrate",
      "Defination": "work in an administrative capacity "
    },
    { "Id": 71, "Meaning": "Admire", "Defination": "feel admiration for   " },
    {
      "Id": 72,
      "Meaning": "Adolescent",
      "Defination": "in the process of  developing from a child into an adult "
    },
    { "Id": 73, "Meaning": "Adonis", "Defination": "an extremely young  man  " },
    {
      "Id": 74,
      "Meaning": "Adoration",
      "Defination": "the worship given to god alone  "
    },
    {
      "Id": 75,
      "Meaning": "Adrenalin",
      "Defination": "a catecholamine secreted by the adrenal medulla in response to stress (trade name adrenalin)   "
    },
    {
      "Id": 76,
      "Meaning": "Adroit",
      "Defination": "quick or skillful or adept in action or thought "
    },
    {
      "Id": 77,
      "Meaning": "Adulations",
      "Defination": "admiration and praise that is greater than is necessary "
    },
    {
      "Id": 78,
      "Meaning": "Adult",
      "Defination": "(of animals) fully developed "
    },
    {
      "Id": 79,
      "Meaning": "Advantaged",
      "Defination": "being in a good social/financial situation "
    },
    {
      "Id": 80,
      "Meaning": "Adventitious",
      "Defination": "associated by chance and  not  an  integral part "
    },
    {
      "Id": 81,
      "Meaning": "Adventurism",
      "Defination": "recklessness in politics or foreign affairs "
    },
    {
      "Id": 82,
      "Meaning": "Adversary",
      "Defination": "someone who offers opposition j"
    },
    { "Id": 83, "Meaning": "Advisory", "Defination": "giving advice " },
    {
      "Id": 84,
      "Meaning": "Advocacy",
      "Defination": "active support of an idea/a cause "
    },
    {
      "Id": 85,
      "Meaning": "Advocate",
      "Defination": "a person who speak s/supports in favour of somebody/of a public plan/action // a person wh o defends somebody in court "
    },
    {
      "Id": 86,
      "Meaning": "Aegis",
      "Defination": "kindly endorsement and guidance "
    },
    {
      "Id": 87,
      "Meaning": "Aeon",
      "Defination": "a major division of time, divided into eras ,"
    },
    { "Id": 88, "Meaning": "Aerial", "Defination": "growing / existing in air " },
    {
      "Id": 89,
      "Meaning": "Aerophobia",
      "Defination": "abnormal or excessive fear of drafts or of fresh air / fear or strong dislike of flying "
    },
    {
      "Id": 90,
      "Meaning": "Aesthetic",
      "Defination": "concerned with beauty or the appreciation of beauty "
    },
    {
      "Id": 91,
      "Meaning": "Aesthetics",
      "Defination": "t he branch of philosophy t hat stud ies the principles of beauty, especially in art "
    },
    {
      "Id": 92,
      "Meaning": "Affable",
      "Defination": "pleasant, friendly and easy to talk to"
    },
    {
      "Id": 93,
      "Meaning": "Affaire",
      "Defination": "a usually secretive or illicit sexual relationship "
    },
    {
      "Id": 94,
      "Meaning": "Affidavit",
      "Defination": "a written statement that you sw ear is true, and that can be used as evidence in court  "
    },
    {
      "Id": 95,
      "Meaning": "Affinity",
      "Defination": "clos e connection relationship "
    },
    {
      "Id": 96,
      "Meaning": "Affliction",
      "Defination": "a cause of great suffering and distress "
    },
    {
      "Id": 97,
      "Meaning": "Affluent",
      "Defination": "having an abundant supply of money or possessions of value "
    },
    {
      "Id": 98,
      "Meaning": "Ageist",
      "Defination": "showing prejudice on the  grounds  of a person's age "
    },
    {
      "Id": 99,
      "Meaning": "Agenda",
      "Defination": "a list of items to be discussed at a meeting "
    },
    {
      "Id": 100,
      "Meaning": "Agglomerative",
      "Defination": "clustered together but not coherent 22"
    },
    { "Id": 101, "Meaning": "Aggrandise", "Defination": "increase " },
    {
      "Id": 102,
      "Meaning": "Aggravation",
      "Defination": "the fact of an illness/ a bad situation being made worse "
    },
    {
      "Id": 103,
      "Meaning": "Aggressive",
      "Defination": "angry, and behaving in a threatening way "
    },
    {
      "Id": 104,
      "Meaning": "Aggressor",
      "Defination": "a person, country etc. that attacks first  "
    },
    {
      "Id": 105,
      "Meaning": "Agitate",
      "Defination": "to arg ue strongly for something  you want // to make somebody feel angry/ anxious/ nervous /"
    },
    {
      "Id": 106,
      "Meaning": "Agitation",
      "Defination": "worry and anxiety that you show by be having in a nervous way "
    },
    {
      "Id": 107,
      "Meaning": "Agnostic",
      "Defination": "a person who doubts truth of religion  "
    },
    {
      "Id": 108,
      "Meaning": "Agony",
      "Defination": "extreme physical/ mental pain "
    },
    {
      "Id": 109,
      "Meaning": "Agoraphobia",
      "Defination": "a fear of being in public places where there are many other people "
    },
    {
      "Id": 110,
      "Meaning": "Agriculturist",
      "Defination": "an expert in agriculture (practice of farming) who gives advice to farmers "
    },
    {
      "Id": 111,
      "Meaning": "Agronomy",
      "Defination": "the application of soil and plant sciences to land management and crop production"
    },
    {
      "Id": 112,
      "Meaning": "Alacrity",
      "Defination": "eager and cheerful readiness "
    },
    {
      "Id": 113,
      "Meaning": "Alarmist",
      "Defination": "a person who alarms others needlessly "
    },
    {
      "Id": 114,
      "Meaning": "Albinism",
      "Defination": "the congenital absence of pigmentation in the  eyes and skin and hair "
    },
    {
      "Id": 115,
      "Meaning": "Alchemist",
      "Defination": "one who was versed in the practice of alchemy and who sought an elixir of life and a panacea and an alkahest and the philosopher's  stone /"
    },
    {
      "Id": 116,
      "Meaning": "Alcoholic",
      "Defination": "a person who regularly drinks too much alcohol and cannot easily stop drinking  "
    },
    { "Id": 117, "Meaning": "Aleatory", "Defination": "dependent on chance " },
    { "Id": 118, "Meaning": "Algophobia", "Defination": "fear of pain." },
    {
      "Id": 119,
      "Meaning": "Algorism",
      "Defination": "computation with Arabic figures "
    },
    {
      "Id": 120,
      "Meaning": "Alien",
      "Defination": "hostile, strange and frightening // different from what you are used to "
    },
    {
      "Id": 121,
      "Meaning": "Alienation",
      "Defination": "the action of alienating "
    },
    {
      "Id": 122,
      "Meaning": "Alienism",
      "Defination": "the quality of being alien / an obsolete term for the study and treatment of mental illness "
    },
    {
      "Id": 123,
      "Meaning": "Alimony",
      "Defination": "the money that a court orders somebody to pay regularly to his former wife/ husband  when the marriage is ended "
    },
    { "Id": 124, "Meaning": "Allative", "Defination": "the grammatical case " },
    { "Id": 125, "Meaning": "Allay", "Defination": "satisfy (thirst)" },
    { "Id": 126, "Meaning": "Allege", "Defination": "report or maintain" },
    { "Id": 127, "Meaning": "Allegiance", "Defination": "duty support loyalty" },
    {
      "Id": 128,
      "Meaning": "Allegory",
      "Defination": "a story, play, picture, etc. in which each character/event is a symbol representing an idea/a quality, such as truth, evil, death, etc. "
    },
    {
      "Id": 129,
      "Meaning": "Alleviate",
      "Defination": "make (pain) easier to bear ,"
    },
    {
      "Id": 130,
      "Meaning": "Alliteration",
      "Defination": "the use of the same letter/sound at the beginning of words that are close together "
    },
    {
      "Id": 131,
      "Meaning": "Allude",
      "Defination": "make a more or less disguised reference to  "
    },
    {
      "Id": 132,
      "Meaning": "Allure",
      "Defination": "the power to entice or attract through personal charm "
    },
    {
      "Id": 133,
      "Meaning": "Ally",
      "Defination": "a person who helps and supports somebody in a difficult situation"
    },
    {
      "Id": 134,
      "Meaning": "Almanac",
      "Defination": "a book is published every year giving information for that year about a particular subject/ activity"
    },
    { "Id": 135, "Meaning": "Almighty", "Defination": "having complete power  " },
    { "Id": 136, "Meaning": "Aloof", "Defination": "reserved indifferent " },
    { "Id": 137, "Meaning": "Alpinism", "Defination": "mountain climbing " },
    {
      "Id": 138,
      "Meaning": "Altar",
      "Defination": "a table or flat surface where offerings are made to a deity "
    },
    {
      "Id": 139,
      "Meaning": "Altitude",
      "Defination": "the height above sea level "
    },
    {
      "Id": 140,
      "Meaning": "Altruism",
      "Defination": "the quality of unselfish concern for the welfare of others"
    },
    {
      "Id": 141,
      "Meaning": "Altruist",
      "Defination": "someone who makes charitable donations intended to increase human wellbeing"
    },
    {
      "Id": 142,
      "Meaning": "Altruistic",
      "Defination": "showing self less concern"
    },
    {
      "Id": 143,
      "Meaning": "Alumnus",
      "Defination": "a former male student of a school, college/ university "
    },
    {
      "Id": 144,
      "Meaning": "Amalgamation",
      "Defination": "the combination of two/more of anything g"
    },
    {
      "Id": 145,
      "Meaning": "Amateur",
      "Defination": "a person who likes to take part in a sport/ other activity for enjoyment, not as a jo"
    },
    {
      "Id": 146,
      "Meaning": "Amatory",
      "Defination": "expressive of or exciting sexual love or romance "
    },
    {
      "Id": 147,
      "Meaning": "Amazon",
      "Defination": "a member of a legendary race of female warriors "
    },
    {
      "Id": 148,
      "Meaning": "Ambassador",
      "Defination": "a diploma tic representative in another country "
    },
    {
      "Id": 149,
      "Meaning": "Ambidextrous",
      "Defination": "able to use both the hands equally well  "
    },
    { "Id": 150, "Meaning": "Ambient", "Defination": "complete ly enveloping " },
    {
      "Id": 151,
      "Meaning": "Ambiguous",
      "Defination": "that can be understood in more than one way // not clearly defined or stated "
    },
    {
      "Id": 152,
      "Meaning": "Ambit",
      "Defination": "an area in which something acts or operates or has power or control:'the range of a supersonic jet' "
    },
    {
      "Id": 153,
      "Meaning": "Ambitious",
      "Defination": "determined to be successful, rich, powerful, etc."
    },
    {
      "Id": 154,
      "Meaning": "Ambivalent",
      "Defination": "having or showing both good and bad feelings"
    },
    {
      "Id": 155,
      "Meaning": "Ambivert",
      "Defination": "a person who is both an introvert and an extrovert "
    },
    {
      "Id": 156,
      "Meaning": "Ambrosia",
      "Defination": "something that is very pleasant to eat "
    },
    {
      "Id": 157,
      "Meaning": "Amenable",
      "Defination": "readily reacting to suggestions and influences "
    },
    { "Id": 158, "Meaning": "Amiable", "Defination": "disposed to please " },
    { "Id": 159, "Meaning": "Amiss", "Defination": "not functioning properly " },
    { "Id": 160, "Meaning": "Amity", "Defination": "a cordial disposition " },
    {
      "Id": 161,
      "Meaning": "Ammeter",
      "Defination": "a meter that measures the flow of electrical current in amperes  "
    },
    {
      "Id": 162,
      "Meaning": "Amnesia",
      "Defination": "a medical condition in which somebody partly/ completely loses his memory  "
    },
    {
      "Id": 163,
      "Meaning": "Amnesty",
      "Defination": "an official statement that allows people who have been put in prison for crimes against the state to go free  "
    },
    {
      "Id": 164,
      "Meaning": "Amoeba",
      "Defination": "a very small living creature that consists of only one cell  "
    },
    {
      "Id": 165,
      "Meaning": "Amoral",
      "Defination": "not following any moral rules and not ca ring about right/wrong  "
    },
    {
      "Id": 166,
      "Meaning": "Amorphous",
      "Defination": "having no definite form or distinct shape "
    },
    {
      "Id": 167,
      "Meaning": "Amphibians",
      "Defination": "any animal that can live both on land and in water // a cold-blooded vertebrate typically living on land but breeding in water "
    },
    {
      "Id": 168,
      "Meaning": "Amphibious",
      "Defination": "able to live both on land and in water "
    },
    {
      "Id": 169,
      "Meaning": "Amputation",
      "Defination": "a surgical removal of all or a part of a lim"
    },
    {
      "Id": 170,
      "Meaning": "Amputee",
      "Defination": "a person who has had an arm/leg removed "
    },
    {
      "Id": 171,
      "Meaning": "Amusia",
      "Defination": "the inability to recognize musical tones or to reproduce them "
    },
    {
      "Id": 172,
      "Meaning": "Anachronism",
      "Defination": "a person, a custom or an idea that seems old-fashioned and does not belong to the present "
    },
    {
      "Id": 173,
      "Meaning": "Anaerobe",
      "Defination": "an organism (especially a bacterium) that does not require air or free oxygen to live "
    },
    {
      "Id": 174,
      "Meaning": "Analgesia",
      "Defination": "the loss of the ability to feel pain while still conscious "
    },
    { "Id": 175, "Meaning": "Anarchic", "Defination": "without law or control " },
    {
      "Id": 176,
      "Meaning": "Anarchist",
      "Defination": "a person  wh o believes that la ws and governments are not necessary "
    },
    {
      "Id": 177,
      "Meaning": "Anarchy",
      "Defination": "a situation in a country, an organization, etc. in which there is no government, order/control "
    },
    {
      "Id": 178,
      "Meaning": "Ancestry",
      "Defination": "the family or the race of people that you come from "
    },
    {
      "Id": 179,
      "Meaning": "Anchor",
      "Defination": "A person who presents a radio/television programme "
    },
    { "Id": 180, "Meaning": "Ancient", "Defination": "belonging to long past " },
    {
      "Id": 181,
      "Meaning": "Androgynist",
      "Defination": "a person who possesses the characteristics of both sexes"
    },
    {
      "Id": 182,
      "Meaning": "Anecdote",
      "Defination": "a short, interesting or amusing story about a real person or an event  "
    },
    {
      "Id": 183,
      "Meaning": "Anemometer",
      "Defination": "a gauge for recording the speed and direction of wind "
    },
    {
      "Id": 184,
      "Meaning": "Anesthesia",
      "Defination": "loss of bodily sensation with or without loss of consciousness "
    },
    {
      "Id": 185,
      "Meaning": "Anesthetist",
      "Defination": "a medical specialist who administers drugs for relieving pain during surgery "
    },
    {
      "Id": 186,
      "Meaning": "Angiology",
      "Defination": "the branch of medical science that studies the blood and lymph vessels  and their disorders "
    },
    {
      "Id": 187,
      "Meaning": "Anglophile",
      "Defination": "a person who is not British but who likes Britain things very much  "
    },
    { "Id": 188, "Meaning": "Anile", "Defination": "like a weak old woman " },
    {
      "Id": 189,
      "Meaning": "Animate",
      "Defination": "to make something more lively/full of energy "
    },
    {
      "Id": 190,
      "Meaning": "Animism",
      "Defination": "the belief that plants, objects and natural things each have a living soul  "
    },
    {
      "Id": 191,
      "Meaning": "Animosity",
      "Defination": "a strong feeling of opposition, anger/hatred "
    },
    {
      "Id": 192,
      "Meaning": "Annals",
      "Defination": "an official record of events/activities year by year  "
    },
    {
      "Id": 193,
      "Meaning": "Anneal",
      "Defination": "toughen (steel or glass) by a process of gradually heating and cooling "
    },
    {
      "Id": 194,
      "Meaning": "Annex",
      "Defination": "to take  control of a country/ region, etc. especially by force "
    },
    {
      "Id": 195,
      "Meaning": "Annihilate",
      "Defination": "to destroy somebody/something completely "
    },
    {
      "Id": 196,
      "Meaning": "Anniversary",
      "Defination": "the date on which an event happened in some previous year "
    },
    {
      "Id": 197,
      "Meaning": "Annuity",
      "Defination": "income from capital investment paid in a series of regular payments "
    },
    {
      "Id": 198,
      "Meaning": "Annul",
      "Defination": "to state officially that something is no longer legally valid  "
    },
    {
      "Id": 199,
      "Meaning": "Anonymous",
      "Defination": "with a name that is not known/ that is not ma de public"
    },
    {
      "Id": 200,
      "Meaning": "Antacid",
      "Defination": "a medicine that prevents/ corrects acidity (in the stomach) "
    },
    {
      "Id": 201,
      "Meaning": "Antagonism",
      "Defination": "active hostility or opposition "
    },
    {
      "Id": 202,
      "Meaning": "Antagonist",
      "Defination": "a person who strongly opposes somebody/ something"
    },
    {
      "Id": 203,
      "Meaning": "Anthem",
      "Defination": "a song that has a special importance for a country, an organisation or a particular group of people, and is sung on special occasions "
    },
    {
      "Id": 204,
      "Meaning": "Anthill",
      "Defination": "a mound of earth made by ants as they dig their nest "
    },
    {
      "Id": 205,
      "Meaning": "Anthology",
      "Defination": "a collection of poems, stories, etc. that have been written by  different people and published tog ether in a book // A collection of  poems "
    },
    {
      "Id": 206,
      "Meaning": "Anthracite",
      "Defination": "a hard natural coal that burns slowly and gives intense heat *"
    },
    {
      "Id": 207,
      "Meaning": "Anthropoid",
      "Defination": "resembling a human being in form "
    },
    {
      "Id": 208,
      "Meaning": "Anthropologist",
      "Defination": "a person who studies about the human race, its origin, developments, customs and beliefs"
    },
    {
      "Id": 209,
      "Meaning": "Anthropology",
      "Defination": "the study of human race, especially of its origin, development, customs and beliefs !Ó!!"
    },
    {
      "Id": 210,
      "Meaning": "Antibiotic",
      "Defination": "a chemical substance derivable from a mold/bacterium that can kill micro organisms and cure bacterial infections"
    },
    {
      "Id": 211,
      "Meaning": "Antibody",
      "Defination": "a substance that the body produces in the blood to fight disease, or as a reaction when certain substances are put into the body"
    },
    { "Id": 212, "Meaning": "Anticipate", "Defination": "look forward to" },
    {
      "Id": 213,
      "Meaning": "Anticlimax",
      "Defination": "a situation that is disappointing because it happens at the end of something that was much more exciting "
    },
    {
      "Id": 214,
      "Meaning": "Antidote",
      "Defination": "a substance that controls the effects of poison/ disease"
    },
    {
      "Id": 215,
      "Meaning": "Antigen",
      "Defination": " a substance tha t enters the body and starts a process that can cause disease"
    },
    {
      "Id": 216,
      "Meaning": "Antimony",
      "Defination": "a metallic element having four allotropic forms"
    },
    {
      "Id": 217,
      "Meaning": "Antipathy",
      "Defination": "a strong feeling of dislike"
    },
    {
      "Id": 218,
      "Meaning": "Antiquarian",
      "Defination": "One who studies antique things "
    },
    {
      "Id": 219,
      "Meaning": "Antiquary",
      "Defination": "an expert or collector of antiquities "
    },
    { "Id": 220, "Meaning": "Antique", "Defination": "old and valuable " },
    {
      "Id": 221,
      "Meaning": "Antiseptic",
      "Defination": "a substance that helps to prevent infection in wounds by killing bacteria "
    },
    {
      "Id": 222,
      "Meaning": "Antisocial",
      "Defination": "hostile to o r disruptive of normal standards of social behavior "
    },
    {
      "Id": 223,
      "Meaning": "Antithetic",
      "Defination": "sharply contrasted in character or purpose "
    },
    {
      "Id": 224,
      "Meaning": "Antonyms",
      "Defination": "words of opposite meanings"
    },
    {
      "Id": 225,
      "Meaning": "Anxiety",
      "Defination": "a vague unpleasant emotion that is experienced in anticipation of some (usually ill)  "
    },
    {
      "Id": 226,
      "Meaning": "Apartheid",
      "Defination": "the former official policy of racial segregation (in south Africa)  "
    },
    {
      "Id": 227,
      "Meaning": "Apathetic",
      "Defination": "showing or feeling no interest, enthusiasm, or concern "
    },
    {
      "Id": 228,
      "Meaning": "Apathy",
      "Defination": "the feeling of not being interested in or enthusiastic "
    },
    {
      "Id": 229,
      "Meaning": "Aperture",
      "Defination": "small opening in something"
    },
    {
      "Id": 230,
      "Meaning": "Aphasia",
      "Defination": "the loss of the ability to understand or produce  speech because of brain damage "
    },
    {
      "Id": 231,
      "Meaning": "Apiary",
      "Defination": "a place where b ees are kept"
    },
    {
      "Id": 232,
      "Meaning": "Apologist",
      "Defination": "a person who argues to defend or justify some policy or institution"
    },
    {
      "Id": 233,
      "Meaning": "Apologize",
      "Defination": "to express regret for something that one has done wrong "
    },
    {
      "Id": 234,
      "Meaning": "Apostasy",
      "Defination": "the state of having rejected your religious beliefs or your political party or a cause "
    },
    {
      "Id": 235,
      "Meaning": "Apostate",
      "Defination": "one who abandons long-held religious or political convictions "
    },
    {
      "Id": 236,
      "Meaning": "Apostle",
      "Defination": "a person who strongly believes in a policy or an idea and tries to make other people believe in it"
    },
    { "Id": 237, "Meaning": "Apotheosis", "Defination": "climax" },
    {
      "Id": 238,
      "Meaning": "Appalling",
      "Defination": "Causing shock or dismay "
    },
    {
      "Id": 239,
      "Meaning": "Apparition",
      "Defination": "an act of appearing or becoming  visible unexpectedly "
    },
    { "Id": 240, "Meaning": "Appease", "Defination": "make quiet or calm " },
    {
      "Id": 241,
      "Meaning": "Apperception",
      "Defination": "the process whereby perceived qualities of an object are related to past experience "
    },
    {
      "Id": 242,
      "Meaning": "Appertain",
      "Defination": "be appropriate or applicable "
    },
    {
      "Id": 243,
      "Meaning": "Applause",
      "Defination": "a demonstration of approval by clapping the hand s together"
    },
    {
      "Id": 244,
      "Meaning": "Appraisal",
      "Defination": "a judgement of the value, performance/nature of somebody/something"
    },
    {
      "Id": 245,
      "Meaning": "Apprentice",
      "Defination": "a person who works for an expert to learn a trade"
    },
    { "Id": 246, "Meaning": "Approbation", "Defination": "approval " },
    {
      "Id": 247,
      "Meaning": "Approve",
      "Defination": "to think that somebody/something is acceptable/ suitable  "
    },
    { "Id": 248, "Meaning": "Apt", "Defination": "well-suited quick-witted  " },
    {
      "Id": 249,
      "Meaning": "Aquaphobi",
      "Defination": "a  an extreme fear of drowning !"
    },
    {
      "Id": 250,
      "Meaning": "Aquarians",
      "Defination": "a person born between 21 January and 19 February"
    },
    {
      "Id": 251,
      "Meaning": "Aquarium",
      "Defination": "a glass tank where fish and water plants are kept  "
    },
    {
      "Id": 252,
      "Meaning": "Aquatic",
      "Defination": "growing or living in, or near water "
    },
    {
      "Id": 253,
      "Meaning": "Arable",
      "Defination": "suitable for growing crops  "
    },
    {
      "Id": 254,
      "Meaning": "Arachnology",
      "Defination": "  the scientific study of spiders and related animals such as scorpions"
    },
    {
      "Id": 255,
      "Meaning": "Arbitrary",
      "Defination": "based on or subject to individual discretion or preference or sometimes impulse or caprice  "
    },
    {
      "Id": 256,
      "Meaning": "Arbitrator",
      "Defination": "a person who is chosen to settle a disagreement "
    },
    {
      "Id": 257,
      "Meaning": "Archaeologist",
      "Defination": "a person who studies cultures of the past, and of periods of history by examining the remains of buildings and objects found in the ground "
    },
    {
      "Id": 258,
      "Meaning": "Archaeology",
      "Defination": "the study of cultures of the past, and of periods of history by examining the remains of buildings and objects found in the ground "
    },
    {
      "Id": 259,
      "Meaning": "Archer",
      "Defination": "a person who is expert in the use of a bow and arrow "
    },
    {
      "Id": 260,
      "Meaning": "Archetype",
      "Defination": "an original model on which something is patterned  "
    },
    {
      "Id": 261,
      "Meaning": "Archipelago",
      "Defination": "a large body of water with many islands"
    },
    {
      "Id": 262,
      "Meaning": "Architect",
      "Defination": "a person whose job is designing buildings, etc."
    },
    {
      "Id": 263,
      "Meaning": "Archives",
      "Defination": "a collection of historical documents/records of a government, a family, a place or an organization /"
    },
    {
      "Id": 264,
      "Meaning": "Arcology",
      "Defination": "an ideal integrated city contained within a massive vertical structure, allowing maximum conservation of the surrounding environment."
    },
    {
      "Id": 265,
      "Meaning": "Ardent",
      "Defination": "glowing or shining like fire"
    },
    {
      "Id": 266,
      "Meaning": "Ardour",
      "Defination": "feelings  of great warmth and intensity"
    },
    {
      "Id": 267,
      "Meaning": "Arena",
      "Defination": "A place where fights take place"
    },
    {
      "Id": 268,
      "Meaning": "Arid",
      "Defination": "having little/no rain // very dry"
    },
    {
      "Id": 269,
      "Meaning": "Aristocracy",
      "Defination": "the rule by nobles / government by person of highest social order."
    },
    {
      "Id": 270,
      "Meaning": "Armistice",
      "Defination": "a formal agreement during a war to stop fighting and discuss making peace "
    },
    {
      "Id": 271,
      "Meaning": "Armoured",
      "Defination": "protected by metal covers (military vehicles) "
    },
    {
      "Id": 272,
      "Meaning": "Armoury",
      "Defination": "a place whe re arms are kept"
    },
    {
      "Id": 273,
      "Meaning": "Aroma",
      "Defination": "a pleasant, noticeable  smell "
    },
    {
      "Id": 274,
      "Meaning": "Arouse",
      "Defination": "call forth (emotions, feelings, and responses)"
    },
    { "Id": 275, "Meaning": "Arrhenphobia", "Defination": "fear of men " },
    {
      "Id": 276,
      "Meaning": "Arrival",
      "Defination": "accomplishment of an objective "
    },
    {
      "Id": 277,
      "Meaning": "Arrogate",
      "Defination": "to claim/take something that you have no right to"
    },
    {
      "Id": 278,
      "Meaning": "Arsenal",
      "Defination": "a military structure where arms and ammunition and other military equipment are stored and training is given in the use of arms"
    },
    {
      "Id": 279,
      "Meaning": "Arsonist",
      "Defination": "a criminal who illegally sets fire to property"
    },
    { "Id": 280, "Meaning": "Arsonphobia", "Defination": "fear of fire" },
    {
      "Id": 281,
      "Meaning": "Arteries",
      "Defination": "muscular-walled tube s forming part of the circulation system by which blood (mainly that which has been oxygenated) is conveyed "
    },
    {
      "Id": 282,
      "Meaning": "Articulate",
      "Defination": "good at expressing ideas/ feelings clearly in words (speech)"
    },
    {
      "Id": 283,
      "Meaning": "Artificial",
      "Defination": "made or produced to copy something"
    },
    {
      "Id": 284,
      "Meaning": "Artillery",
      "Defination": "large, heavy guns which are often moved on wheels"
    },
    {
      "Id": 285,
      "Meaning": "Artisan",
      "Defination": "a person who does skilled work, making things with his hands"
    },
    {
      "Id": 286,
      "Meaning": "Artist",
      "Defination": "a person who creates works of art-paintings/ drawings"
    },
    {
      "Id": 287,
      "Meaning": "Artiste",
      "Defination": "a public performer (dancer/ singer)"
    },
    {
      "Id": 288,
      "Meaning": "Artistic",
      "Defination": "connected with arts/artists "
    },
    { "Id": 289, "Meaning": "Artistry", "Defination": "the skill of an artist" },
    {
      "Id": 290,
      "Meaning": "Ascendancy",
      "Defination": "the state that exists when one person or group has power over another"
    },
    {
      "Id": 291,
      "Meaning": "Ascetic",
      "Defination": "a person who lives in a simple and strict way, without physical pleasures, especially for religious reasons (monks, hermits, saints)"
    },
    {
      "Id": 292,
      "Meaning": "Ascribe",
      "Defination": "regard something as being due to a cause"
    },
    {
      "Id": 293,
      "Meaning": "Askance",
      "Defination": "nations that do not trust each other/look upon each other."
    },
    {
      "Id": 294,
      "Meaning": "Asperity",
      "Defination": "roughness harshness ill temper irritability"
    },
    {
      "Id": 295,
      "Meaning": "Assassin",
      "Defination": "a person who murders somebody important or famous, for money or for political reasons"
    },
    {
      "Id": 296,
      "Meaning": "Assent",
      "Defination": "to agree to a request/ an idea/ a suggestion "
    },
    {
      "Id": 297,
      "Meaning": "Assertive",
      "Defination": "expressing opinions/ desires strongly and with confide nce, so that people may take notice"
    },
    {
      "Id": 298,
      "Meaning": "Assiduous",
      "Defination": "working very hard and taking great care that everything is done  "
    },
    {
      "Id": 299,
      "Meaning": "Assign",
      "Defination": "to give somebody something that he can use, or some work or  responsibility "
    },
    {
      "Id": 300,
      "Meaning": "Assimilate",
      "Defination": "become similar to one's environment"
    },
    {
      "Id": 301,
      "Meaning": "Association",
      "Defination": "an official  group of people  who have joi ned  together for a particular purpose"
    },
    {
      "Id": 302,
      "Meaning": "Assurance",
      "Defination": "A positive declaration intended to give confidence "
    },
    {
      "Id": 303,
      "Meaning": "Assure",
      "Defination": "to make yourself certain about something "
    },
    {
      "Id": 304,
      "Meaning": "Astern",
      "Defination": "(of a ship or an airplane) behind"
    },
    {
      "Id": 305,
      "Meaning": "Astraphobia",
      "Defination": "a morbid fear of thunder and lightning"
    },
    {
      "Id": 306,
      "Meaning": "Astrologer",
      "Defination": "someone who predicts  the future by the positions of the planets and sun and moon"
    },
    {
      "Id": 307,
      "Meaning": "Astrology",
      "Defination": "the study of  the positions of the stars and the movements of the planets in the belief that they influence human affairs "
    },
    {
      "Id": 308,
      "Meaning": "Astronaut",
      "Defination": "a person whose job involves travelling and working in a spacecraft"
    },
    {
      "Id": 309,
      "Meaning": "Astronomy",
      "Defination": "the scientific study of the sun, moon, stars, planets, etc. "
    },
    {
      "Id": 310,
      "Meaning": "Astrophobia",
      "Defination": "severe and irrational fe ar of stars and space"
    },
    {
      "Id": 311,
      "Meaning": "Astute",
      "Defination": "clever quick at seeing to get an advantage "
    },
    {
      "Id": 312,
      "Meaning": "Asunder",
      "Defination": "widely separated especially in space"
    },
    {
      "Id": 313,
      "Meaning": "Asylum",
      "Defination": "protection that a government gives to people who have left their own country, because they were in danger for political reasons. // a hospital where people who were mentally ill could be cared for, often for a long time"
    },
    {
      "Id": 314,
      "Meaning": "Atheism",
      "Defination": "the be lief that god does not exist"
    },
    {
      "Id": 315,
      "Meaning": "Atheist",
      "Defination": "a person who believes that god does not exist "
    },
    {
      "Id": 316,
      "Meaning": "Athlete",
      "Defination": "a person who competes in sports running, jumping, physical exercises, etc. "
    },
    { "Id": 317, "Meaning": "Atlas", "Defination": "a book of maps" },
    {
      "Id": 318,
      "Meaning": "Atmosphere",
      "Defination": "the mixture of gases that surrounds the earth"
    },
    {
      "Id": 319,
      "Meaning": "Atoll",
      "Defination": "an island consisting of a circular coral reef surrounding a lagoon"
    },
    {
      "Id": 320,
      "Meaning": "Atonement",
      "Defination": "the act of showing you are sorry for doing something wrong in the past"
    },
    {
      "Id": 321,
      "Meaning": "Attack",
      "Defination": "try to hurt or kill somebody "
    },
    {
      "Id": 322,
      "Meaning": "Attempt",
      "Defination": "an act of trying to do something difficult, often with no success"
    },
    {
      "Id": 323,
      "Meaning": "Attestation",
      "Defination": "the evidence by which some thing is attested"
    },
    {
      "Id": 324,
      "Meaning": "Attic",
      "Defination": "a room/space just below the roof of a house, often used for storing things "
    },
    { "Id": 325, "Meaning": "Attractive", "Defination": "pleasant to look at" },
    {
      "Id": 326,
      "Meaning": "Audacious",
      "Defination": "willing to take risks/to do some thing shocking "
    },
    {
      "Id": 327,
      "Meaning": "Audible",
      "Defination": "that can be heard clearly"
    },
    {
      "Id": 328,
      "Meaning": "Audit",
      "Defination": "a methodical examination or review of a condition or situation"
    },
    {
      "Id": 329,
      "Meaning": "Auditor",
      "Defination": "a qualified accountant who inspects the accounting records and practices of a business/other organisation "
    },
    {
      "Id": 330,
      "Meaning": "Auditorium",
      "Defination": "the area of a theatre or concert hall where the audience sits "
    },
    {
      "Id": 331,
      "Meaning": "Auditory",
      "Defination": "of or relating to the process of hearing "
    },
    { "Id": 332, "Meaning": "Augment", "Defination": "increase" },
    { "Id": 333, "Meaning": "Aurivorous", "Defination": "gold-devouring. " },
    {
      "Id": 334,
      "Meaning": "Authentic",
      "Defination": "made o r do ne in the traditional or original way"
    },
    {
      "Id": 335,
      "Meaning": "Authority",
      "Defination": "official permission or approval"
    },
    {
      "Id": 336,
      "Meaning": "Autism",
      "Defination": "a mental condition in which a person finds it very difficult to communicate/form relationships with others"
    },
    {
      "Id": 337,
      "Meaning": "Autobiography",
      "Defination": "a biography of yourself"
    },
    {
      "Id": 338,
      "Meaning": "Autocracy",
      "Defination": "a system of government of a country in which one person has complete power"
    },
    {
      "Id": 339,
      "Meaning": "Autocrat",
      "Defination": "a ruler who has complete power"
    },
    {
      "Id": 340,
      "Meaning": "Autonomous",
      "Defination": " (of persons) free from external control and constraint in e.g. action and judgment "
    },
    { "Id": 341, "Meaning": "Autonomy", "Defination": "self-rule " },
    {
      "Id": 342,
      "Meaning": "Autophobia",
      "Defination": "also called monophobia/ isolophobia, or eremophobia, is the specific phobia of isolation // a morbid fear of being egotistical, or a dread of being alone or isolated "
    },
    {
      "Id": 343,
      "Meaning": "Autopsy",
      "Defination": "an official examination of a dead body by a doctor in order to discover the cause of death "
    },
    {
      "Id": 344,
      "Meaning": "Avalanche",
      "Defination": "a mass of snow, ice and rock that falls down the side of a mountain"
    },
    {
      "Id": 346,
      "Meaning": "Avarice",
      "Defination": "extreme desire for wealth "
    },
    {
      "Id": 347,
      "Meaning": "Avaricious",
      "Defination": "having an extreme desire for wealth "
    },
    {
      "Id": 348,
      "Meaning": "Avenue",
      "Defination": "a street in a town or city "
    },
    { "Id": 349, "Meaning": "Average", "Defination": "not special " },
    {
      "Id": 350,
      "Meaning": "Averment",
      "Defination": "a declaration that is made emphatically (as if no supporting evidence were necessary)"
    },
    {
      "Id": 351,
      "Meaning": "Aversion",
      "Defination": "a strong feeling of not liking somebody/ something "
    },
    { "Id": 352, "Meaning": "Averted", "Defination": "prevent from happening " },
    {
      "Id": 353,
      "Meaning": "Aviary",
      "Defination": "a place where birds are kept"
    },
    {
      "Id": 354,
      "Meaning": "Aviation",
      "Defination": "the art of operating aircraft"
    },
    {
      "Id": 355,
      "Meaning": "Aviator",
      "Defination": "a person who flies an aircraft"
    },
    { "Id": 356, "Meaning": "Avicide", "Defination": "killing of birds" },
    {
      "Id": 357,
      "Meaning": "Avidity",
      "Defination": "keen interest or enthusiasm"
    },
    {
      "Id": 358,
      "Meaning": "Axiology",
      "Defination": "the study of the nature of values and value judgements "
    },
    {
      "Id": 359,
      "Meaning": "Axiom",
      "Defination": "a rule/principle that most people believe to be true"
    },
    {
      "Id": 360,
      "Meaning": "Babble",
      "Defination": "gibberish resembling the sounds of a baby"
    },
    { "Id": 361, "Meaning": "Baccivorous", "Defination": "feeding on berries " },
    {
      "Id": 362,
      "Meaning": "Bachelor",
      "Defination": "a man who remains unmarried"
    },
    {
      "Id": 363,
      "Meaning": "Backlist",
      "Defination": "the list of books that have been published by a company in the past and are still available"
    },
    {
      "Id": 364,
      "Meaning": "Bacteria",
      "Defination": "the simplest and smallest forms of life"
    },
    {
      "Id": 365,
      "Meaning": "Bactericide",
      "Defination": "any chemical agent that destroys bacteria"
    },
    {
      "Id": 366,
      "Meaning": "Baggage",
      "Defination": "a case used to carry belongings when traveling "
    },
    {
      "Id": 367,
      "Meaning": "Bagpiper",
      "Defination": "someone who plays the bagpipe "
    },
    {
      "Id": 368,
      "Meaning": "Bakery",
      "Defination": "a place where bread and cakes are made and/or sold "
    },
    {
      "Id": 369,
      "Meaning": "Bald",
      "Defination": "having little or no hair on the head "
    },
    {
      "Id": 370,
      "Meaning": "Balderdash",
      "Defination": "senseless talk or writing "
    },
    {
      "Id": 371,
      "Meaning": "Bale",
      "Defination": "a large bundle bound for storage or transport "
    },
    {
      "Id": 372,
      "Meaning": "Ballad",
      "Defination": "a song/poem that tells a story "
    },
    {
      "Id": 373,
      "Meaning": "Balled",
      "Defination": "squeeze or form (something) into a rounded shape"
    },
    {
      "Id": 374,
      "Meaning": "Ballet",
      "Defination": "at heatrical  representation of a story performed to music by ballet dancers "
    },
    {
      "Id": 375,
      "Meaning": "Ballistophobia",
      "Defination": "an abnormal fear of missiles "
    },
    {
      "Id": 376,
      "Meaning": "Bandit",
      "Defination": "a member of an armed group of thieves who attack travelers "
    },
    {
      "Id": 377,
      "Meaning": "Bank",
      "Defination": "Draft  a draft drawn by a bank against funds deposited in another bank "
    },
    {
      "Id": 378,
      "Meaning": "Bank",
      "Defination": "Roll  to support by giving money "
    },
    {
      "Id": 379,
      "Meaning": "Banker",
      "Defination": "a person who owns a bank or has an important job at a bank "
    },
    {
      "Id": 380,
      "Meaning": "Bankrupt",
      "Defination": "without enough money to pay what you own "
    },
    {
      "Id": 381,
      "Meaning": "Bar",
      "Defination": "a room/ establishment where alcoholic d rinks are served over a counter  "
    },
    {
      "Id": 382,
      "Meaning": "Bar",
      "Defination": "the profession of a barrister // a lawyer in a higher court  "
    },
    {
      "Id": 383,
      "Meaning": "Barbarians",
      "Defination": "people wh o do not belong to one of the great civilizations (Greek , roman, Christian)  "
    },
    {
      "Id": 384,
      "Meaning": "Baritone",
      "Defination": "lower in range than tenor and higher than bass  "
    },
    {
      "Id": 385,
      "Meaning": "Barometer",
      "Defination": "an instrument for measuring air pressure to show  when the weather will change "
    },
    {
      "Id": 386,
      "Meaning": "Barracks",
      "Defination": "a large building/ group of buildings for soldiers to live in "
    },
    {
      "Id": 387,
      "Meaning": "Barrel",
      "Defination": "a wooden drum in which beer or oil is stored  "
    },
    {
      "Id": 388,
      "Meaning": "Barren",
      "Defination": "l and not good enough to grow plants on it "
    },
    { "Id": 389, "Meaning": "Basal", "Defination": "of primary importance " },
    {
      "Id": 390,
      "Meaning": "Baseness",
      "Defination": "unworthiness by virtue of lacking higher values "
    },
    { "Id": 391, "Meaning": "Bashful", "Defination": "disposed to avoid notice" },
    {
      "Id": 392,
      "Meaning": "Bask",
      "Defination": "revel in and make the most of something pleasing "
    },
    {
      "Id": 393,
      "Meaning": "Basophilia",
      "Defination": "the tendency of cells to stain with basic dyes "
    },
    {
      "Id": 394,
      "Meaning": "Bass",
      "Defination": "having or denoting a low vocal or instrumental range  "
    },
    {
      "Id": 395,
      "Meaning": "Bathophobia",
      "Defination": "extreme fear of depths (deep water, falling from heights)  "
    },
    {
      "Id": 396,
      "Meaning": "Bathrobe",
      "Defination": "a robe, typically made of terry cloth, worn especially before and after taking a bath. "
    },
    {
      "Id": 397,
      "Meaning": "Batrachophobia",
      "Defination": "fear of amphibians. "
    },
    {
      "Id": 398,
      "Meaning": "Bauxite",
      "Defination": "chief commercial ore of aluminum"
    },
    {
      "Id": 399,
      "Meaning": "Beadle",
      "Defination": "a minor parish (church) official who serves as an usher (a person who shows people where to sit) and keeps order at services "
    },
    {
      "Id": 400,
      "Meaning": "Beam",
      "Defination": "long thick piece of wood or metal or concrete, etc., used in construction "
    }
  ];

export default wordsData;
