// , "<em>kuāng</em>"
UP = {
  word: "up",
  list: ["☐", "☐", "██", "��", "???", "[<span class='white'>up</span>]", "上", "up", "up", "up"],
};
INTO = {
  word: "into",
  list: ["", "███", "[<span class='white'>into</span>]", "", "上", "進", "into", "into", "into"],
};
BED = {
  word: "bed",
  list: ["☐", "☐", "██", "��", "???", "[<span class='white'>bed</span>]", "床", "bed", "bed", "bed"],
};
X1 = {
  word: "",
  list: ["☐", "☐", "██", "��", "???", "了", "", "", ""],
};
X2 = {
  word: "",
  list: ["☐", "☐", "██", "", "???", "的", "'s", "", "", ""],
};
SOUND = {
  word: "sound",
  list: ["☐☐", "☐☐", "████", "����", "??????", "[<span class='white'>sound</span>]", "聲音", "sound", "sound", "sound"],
};
REMAINING = {
  word: "remaining",
  list: ["", "█████", "����", "??????", "[<span class='white'>remaining</span>]", "", "remaining", "remaining", "remaining"],
};
THEIR = {
  word: "their",
  list: ["", "███", "[<span class='white'>their</span>]", "", "their", "their", "their"],
};
EYES = {
  word: "eyes",
  list: ["☐☐", "☐☐", "██", "����", "??????", "[<span class='white'>eyes</span>]", "眼睛", "eyes", "eyes", "eyes"],
};
NOT = {
  word: "not",
  list: ["☐", "☐", "██", "��", "???", "[<span class='white'>not</span>]", "未", "尚", "not", "not", "not"],
};
YET = {
  word: "yet",
  list: ["☐", "☐", "██", "��", "???", "[<span class='white'>yet</span>]", "未", "尚", "yet", "yet", "yet"],
};
HERE = {
  word: "here",
  list: ["☐☐", "☐☐", "███", "����", "??????", "[<span class='white'>here</span>]", "到來", "arrived", "here", "here", "here"],
};
GATES = {
  word: "gates",
  list: ["☐", "☐", "████", "��", "???", "[<span class='white'>gates</span>]", "門", "door", "doors", "gates", "gates", "gates"],
};
SUNSET = {
  word: "sunset",
  list: ["☐☐", "☐☐", "████", "����", "??????", "[<span class='white'>sunset</span>]", "夕陽", "sunset", "sunset", "sunset"],
};
ONLY = {
  word: "only",
  list: ["☐☐", "☐☐", "██", "����", "??????", "[<span class='white'>only</span>]", "唯一", "one", "only", "only", "only"],
};
HAVE = {
  word: "have",
  list: ["☐", "☐", "███", "��", "???", "[<span class='white'>have</span>]", "了", "[ ]", "have", "have", "have", ""],
};
COVERED = {
  word: "covered",
  list: ["☐☐", "☐☐", "████", "����", "??????", "[<span class='white'>covered</span>]", "遮住", "covering", "covered", "covered", "covered"],
};
RAIN = {
  word: "rain",
  list: ["☐", "☐", "███", "��", "???", "[<span class='white'>rain</span>]", "雨", "rain", "rain", "rain"],
};
BEATS = {
  word: "beats",
  list: ["☐☐", "☐☐", "█████", "����", "??????", "[<span class='white'>beats</span>]", "敲打", "beats", "beats", "beats", "beating"],
};
DOWN = {
  word: "down",
  list: ["", "███", "", "down", "[<span class='white'>down</span>]", "down", "down", "down"],
};
THE = {
  word: "the",
  list: ["", "██", "", "[<span class='white'>the</span>]", "[ ]", "the", "the", "the"],
};

CORR = {
  title: [
    {
      word: "Poem",
      list: ["Poem", "Poem", "Poem", "poem", "????", "�", "詩"],
    },
    {
      word: "Torn",
      list: ["Torn", "Torn", "Torn", "torn", "????", "��", "被撕"],
    },
    {
      word: "Apart",
      list: ["Apart", "Apart", "Apart", "apart", "?????", "��", "裂的"],
    },
  ],
  1: {
    1: [
      THE, SUNSET,
      {
        word: "",
        list: ["☐", "☐", "██", "��", "???", "帶", "bring", "", "", ""],
      },
      UP, INTO, BED, X1
    ],
    2: [
      {
        word: "the",
        list: ["", "██", "", "[<span class='white'>the</span>]", "", "the", "the", "the"],
      },
      ONLY, X2, SOUND, REMAINING
    ],
    3: [HAVE, COVERED, THEIR, EYES],
    4: [RAIN, BEATS, DOWN, NOT, YET, HERE],
    5: [
      {
        word: "its",
        list: ["☐", "☐", "███", "��", "???", "[<span class='white'>its</span>]", "的", "'s", "its", "its", "its"],
      },
      {
        word: "wide",
        list: ["☐", "☐", "███", "��", "???", "[<span class='white'>wide</span>]", "大", "big", "wide", "wide", "wide"],
      },
      GATES
    ],
  },
  2: {
    1: [
      {
        word: "took",
        list: ["☐", "☐", "███", "��", "???", "[<span class='white'>took</span>]", "把", "took", "took", "took"]
      },
      UP, INTO, BED, X1
    ],
    2: [
      {
        word: "this",
        list: ["☐", "☐", "███", "��", "???", "[<span class='white'>this</span>]", "此", "this", "this", "this"]
      },
      {
        word: "instant",
        list: ["☐", "☐", "█████", "����", "???", "[<span class='white'>instant</span>]", "際", "instant", "instant", "instant"]
      },
      X2, SOUND, REMAINING
    ],
    3: [
      {
        word: "too",
        list: ["☐", "☐", "██", "��", "???", "[<span class='white'>too</span>]", "也", "too", "too", "too"]
      },
      THEIR, EYES
    ],
    4: [
      THE,
      {
        word: "wind",
        list: ["☐", "☐", "███", "��", "???", "[<span class='white'>wind</span>]", "風", "wind", "wind", "wind"]
      },
      NOT, YET, HERE
    ],
    5: [GATES]
  },
  3: {
    1: [SUNSET],
    2: [ONLY],
    3: [HAVE, COVERED],
    4: [RAIN, BEATS, DOWN]
  }
};


