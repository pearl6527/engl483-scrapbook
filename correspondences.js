UP = {
  word: "up",
  list: ["☐", "██", "��", "???", "  ", "上", "up", "up", "up"],
};
INTO = {
  word: "into",
  list: ["", "███", "   ", "", "上", "into", "into", "into"],
};
BED = {
  word: "bed",
  list: ["☐", "██", "��", "???", "   ", "床", "bed", "bed", "bed"],
};
X1 = {
  word: "",
  list: ["☐", "██", "��", "???", "了", "", "", ""],
};
X2 = {
  word: "",
  list: ["☐", "██", "", "???", "的", "'s", "", "", ""],
};
SOUND = {
  word: "sound",
  list: ["☐☐", "████", "����", "??????", "    ", "聲音", "sound", "sound", "sound"],
};
REMAINING = {
  word: "remaining",
  list: ["", "█████", "����", "??????", "      ", "", "remaining", "remaining", "remaining"],
};
THEIR = {
  word: "their",
  list: ["", "███", "   ", "", "their", "their", "their"],
};
EYES = {
  word: "eyes",
  list: ["☐☐", "██", "����", "??????", "   ", "眼睛", "eyes", "eyes", "eyes"],
};
NOT = {
  word: "not",
  list: ["☐", "██", "��", "???", "  ", "未", "尚", "not", "not", "not"],
};
YET = {
  word: "yet",
  list: ["☐", "██", "��", "???", "  ", "未", "尚", "yet", "yet", "yet"],
};
HERE = {
  word: "here",
  list: ["☐☐", "███", "����", "??????", "  ", "到來", "arrived", "here", "here", "here"],
};
GATES = {
  word: "gates",
  list: ["☐", "████", "��", "???", "    ", "門", "door", "doors", "gates", "gates", "gates"],
};
SUNSET = {
  word: "sunset",
  list: ["☐☐", "████", "����", "??????", "      ", "夕陽", "sunset", "sunset", "sunset"],
};
ONLY = {
  word: "only",
  list: ["☐☐", "██", "����", "??????", "   ", "唯一", "one", "only", "only", "only"],
};
HAVE = {
  word: "have",
  list: ["☐", "███", "��", "???", "   ", "了", " ", "have", ""],
};
COVERED = {
  word: "covered",
  list: ["☐☐", "████", "����", "??????", "     ", "遮住", "covering", "covered"],
};
RAIN = {
  word: "rain",
  list: ["☐", "███", "��", "???", "   ", "雨", "rain", "rain", "rain"],
};
BEATING = {
  word: "beating",
  list: ["☐☐", "█████", "����", "??????", "      ", "敲打", "beating", "beating", "beating"],
};
DOWN = {
  word: "down",
  list: ["", "███", "", "down", "  ", "down", "down", "down"],
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
      {
        word: "the",
        list: ["", "██", "", "   ", " ", "the", "the", "the"],
      },
      SUNSET,
      {
        word: "",
        list: ["☐", "██", "��", "???", "帶", "bring"],
      },
      UP, INTO, BED, X1
    ],
    2: [
      {
        word: "the",
        list: ["", "██", "", "   ", "", "the", "the", "the"],
      },
      ONLY, X2, SOUND, REMAINING
    ],
    3: [HAVE, COVERED, THEIR, EYES],
    4: [RAIN, BEATING, DOWN, NOT, YET, HERE],
    5: [
      {
        word: "its",
        list: ["☐", "███", "��", "???", "   ", "的", "'s", "its", "its", "its"],
      },
      {
        word: "wide",
        list: ["☐", "███", "��", "???", "   ", "大", "big", "wide", "wide", "wide"],
      },
      GATES
    ],
  },
  2: {
    1: [
      {
        word: "took",
        list: ["☐", "███", "��", "???", "   ", "把", "took", "took", "took"]
      },
      UP, INTO, BED, X1
    ],
    2: [
      {
        word: "this",
        list: ["☐", "███", "��", "???", "   ", "此", "this", "this", "this"]
      },
      {
        word: "instant",
        list: ["☐", "█████", "����", "???", "   ", "際", "instant", "instant", "instant"]
      },
      X2, SOUND, REMAINING
    ],
    3: [
      {
        word: "too",
        list: ["☐", "██", "��", "???", "   ", "也", "too", "too", "too"]
      },
      THEIR, EYES
    ],
    4: [
      {
        word: "wind",
        list: ["☐", "███", "��", "???", "   ", "風", "wind", "wind", "wind"]
      },
      NOT, YET, HERE
    ],
    5: [GATES]
  },
  3: {
    1: [SUNSET],
    2: [ONLY],
    3: [HAVE, COVERED],
    4: [RAIN, BEATING, DOWN]
  }
};


