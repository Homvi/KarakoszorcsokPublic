//Types can be default, video, img.
import jozsefAttila from "../img/news/Magyarköltészetnapja.jpg";
import koszoru from "../img/news/koszoru.png";
import farsang from "../img/news/farsang.png";
import falubusz from "../img/news/falubusz.png";

export const news = [
  {
    id: 1,
    title: "Itt a farsang, áll a bál...",
    description:
      "Jelmezversenyünk végéhez érve szeretettel gratulálunk mindnyájatoknak a szebbnél szebb jelmezeitekhez. Minden jelmezbe bújt nevező helyezést ért el a versenyen. Az alábbi kis összeállításban megtekinthetitek jelmezes fotóitokat, elért helyezéseiteket. Ajándékaitokat pedig hamarosan eljuttatjuk hozzátok!Kellemes estét kívánunk, köszönjük, hogy kicsit rendhagyó módon, de velünk ünnepeltétek a farsangot!",
    date: "2021-02-22",
    src: farsang,
    type: "default",
    category: "oltás",
    mediaType: "img",
    outerSource:
      "https://www.facebook.com/konyvtarkarakoszorcsok/videos/425909588488586",
  },
  {
    id: 2,
    title:
      "Április 11-e a A magyar költészet napja, melyet  Magyarországon 1964 óta ezen a napon, József Attila születésnapján ünnepelnek.",
    description:
      "Kilencedik alkalommal rendezték meg a Petőfi Irodalmi Múzeumban (PIM) a Versmaratont, amelyen kortárs költők szavalják verseiket tizenkét órán át. A Versmaraton célja a kezdetektől az, hogy közelebb vigye az olvasókhoz a kortárs költészetet. Ennek érdekében Az év versei 2019 antológia mintegy száz szerzője adja elő költeményeit a PIM épületében, de a kezdeményezéshez számos kísérőrendezvény és pályázat is kapcsolódik.",
    date: "2021-04-11",
    src: jozsefAttila,
    type: "default",
    category: "culture",
    mediaType: "img",
  },
  {
    id: 3,
    title:
      "Az Eötvös Károly Megyei Könyvtár támogatásával húsvéti ajtódíszeket készíthettek az aktív könyvtári tagok.",
    description:
      " A vírushelyzet szabályainak betartásával természetesen mindenki a saját otthonában készítette el alkotását. Köszönjük a képeket!",
    date: "2021-04-06",
    src: koszoru,
    type: "default",
    category: "culture",
    mediaType: "img",
  },
  {
    id: 4,
    title: "Falubuszt kapott Karakószörcsök a Magyar Falu Program keretében.",
    description: "",
    date: "2020-11-13",
    src: falubusz,
    type: "default",
    category: "politics",
    mediaType: "img",
    outerSource:
      "https://www.facebook.com/kovacszoltan.fidesz/videos/1281416218892171",
  },
];
