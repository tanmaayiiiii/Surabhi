const classSessions = [
  {
    id: "2026-08-18",
    dateLabel: "Tuesday, August 18, 2026",
    notes: [],
    recordings: [
      {
        title: "Recording 1",
        src: "recordings/AUDIO-2026-08-18-19-27-22.m4a",
      },
      {
        title: "Recording 2",
        src: "recordings/AUDIO-2026-08-18-19-28-01.m4a",
      },
      {
        title: "Recording 3",
        src: "recordings/AUDIO-2026-08-18-19-35-51.m4a",
      },
      {
        title: "Recording 4",
        src: "recordings/AUDIO-2026-08-18-19-37-47.m4a",
      },
      {
        title: "Recording 5",
        src: "recordings/AUDIO-2026-08-18-19-55-34.m4a",
      },
    ],
    lyrics: `मेरो सुनो श्याम
छांङो अचलवा
काहा मान ले ऐ जी
हूँ तोरी चेरी

इतनी अरज मोरी
मानो दयानिधे
आयो शरन तेरे
ए सुनो श्याम`,
    lyricsEnglish: `mero suno shyam
chando achalava
kaha maan le ae ji
hu tori cheri

itni araj mori
maano dayanidhe
aayo sharana tere
a suno shaym`,
  },
];

const dateList = document.getElementById("dateList");
const classTitle = document.getElementById("classTitle");
const classNotes = document.getElementById("classNotes");
const classRecordings = document.getElementById("classRecordings");
const classLyrics = document.getElementById("classLyrics");
const classLyricsEnglish = document.getElementById("classLyricsEnglish");

function renderSidebar() {
  dateList.innerHTML = classSessions
    .map(
      (session) => `
        <button class="date-button active" data-session-id="${session.id}">
          <span class="day">${session.dateLabel}</span>
        </button>
      `,
    )
    .join("");
}

function renderSession() {
  const session = classSessions[0];

  classTitle.textContent = session.dateLabel;

  classNotes.innerHTML = "";
  classRecordings.innerHTML = session.recordings
    .map(
      (recording) => `
        <article class="recording-item">
          <strong>${recording.title}</strong>
          <audio controls preload="metadata">
            <source src="${recording.src}" type="audio/mp4" />
          </audio>
        </article>
      `,
    )
    .join("");

  classLyrics.textContent = session.lyrics;
  classLyricsEnglish.textContent = session.lyricsEnglish;
}

renderSidebar();
renderSession();
