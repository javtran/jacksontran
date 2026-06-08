export type DanceVideo = {
  title: string;
  style?: string;
  url: string; // YouTube URL
  date?: string;
};

// Videos of classes/sessions I take
export const classesITake: DanceVideo[] = [
  // Example — replace with your actual YouTube links:
  // { title: "Hip-Hop Open Class", style: "Hip-Hop", url: "https://www.youtube.com/watch?v=XXXXX", date: "2024" },
  { title: "Rihanna - Hard Remix (Jellow's Choreo)", url: "https://youtu.be/Uab9drcYRfg"},
  { title: "T-Pain - I Like Dat (Diego's Choreo)", url:"https://youtu.be/Qm-thvNy4uw"},
  { title: "FLO - Recently Deleted (Titus's Choreo)", url: "https://youtu.be/qLk6TyH-xMw"},
  { title: "Cobrah - BRAND NEW BITCH (Madison Moura's Choreo)", url: "https://youtu.be/em3PKBzZMuA"},
];

// Videos of classes I teach
export const classesITeach: DanceVideo[] = [
  // Example:
  // { title: "Heels Choreography", style: "Heels", url: "https://www.youtube.com/watch?v=XXXXX", date: "2024" },
  // { title: "Ariana Grande - The Boy is Mine", style: "Jazz-Funk", url: "https://www.youtube.com/watch?v=hBdUI_KqcqA"},
  { title: "ILLIT - IT'S ME", style: "K-Pop", url: "https://youtu.be/YeVfHP4yEqs?si=vNyJIPjt_Whyvb8f"},
  { title: "Kellis - Milkshake", style: "Jazz-Funk", url: "https://youtu.be/bjhhIMEqN-k"},
  { title: "Ariana Grande - 7 Rings", style: "Jazz-Funk", url: "https://youtu.be/ehSgVz_NTVw"},
  { title: "Pink Pantheres, Zara Larsson - Stateside", style: " Jazz-Funk", url: "https://youtu.be/AOFuobax5xw"},
  { title: "ITZY - THAT'S A NO NO", style: "K-Pop", url: "https://youtu.be/tOZjVnWEJVY"},
  { title: "JENNIE - Like Jennie", style: "K-Pop", url: "https://youtu.be/xaFTpzduowo"},
  { title: "CORTIS - GO!", style: "K-Pop", url: "https://youtu.be/iqIPGm3yrRs"}, 
  { title: "Tame Impala, JENNIE - Dracula", url: "https://youtu.be/fAUSLduYNEQ?si=mgsnCjY38RyWcZE"},
  { title: "FLO - Leak It", style: "Jazz-Funk", url: "https://youtu.be/WIbHzBgsZbI?si=K89Uv1o4G6_xW7Av"},
  { title: "LISA - MONEY", style: "K-pop", url: "https://youtu.be/Bl5YxYGTKhU?si=aON_wjQ5N4y7vs3V"},
  { title: "Tyla - Chanel", style: "Jazz-Funk", url: "https://youtu.be/HVIl5jlmI9I?si=Xj9YvAMgycTt07zW"},
  { title: "aespa - Supernova", style: "Jazz-Funk", url: "https://youtu.be/L8gipxXsiKA?si=vcirzpvVdjhuxTV3" },
  { title: "GIRLSET - Little Miss", style: "Jazz-Funk", url: "https://youtu.be/mhDASCfTmew?si=ZmnxXVW8Tu7d2Psn" },
  { title: "Britney Spears - Toxic", style: "Jazz-Funk", url: "https://youtu.be/8a81GX9tnSY?si=jhzXNjEy8miTmt87" },
  { title: "LISA - Rockstar", style: "Jazz-Funk", url: "https://youtu.be/8X-s7vWrQyQ?si=daMmmQqEYtDu-Kqa" },
  { title: "Lady Gaga, Ariana Grande - Rain On Me", style: "Jazz-Funk", url: "https://youtu.be/RBn_VUTwC50?si=0vpJar_UkIv8BJM3" },
  { title: "Britney Spears - Circus", style: "Jazz-Funk", url: "https://youtu.be/rgRweOpQrRw?si=vdMjbrKqocxcGtcC" },
  { title: "Tate McRae - Greedy", style: "Jazz-Funk", url: "https://youtu.be/hhPh9pVFhAk?si=zDGybdGYaGKYu_02" },
  { title: "Parris Goebel - BACKSTROKE", url: "https://youtu.be/s_9iuj9WDlM?si=lMDYcLHazYRXjG0C" },
  { title: "Doja Cat - Jealous Type", style: "Jazz-Funk", url: "https://youtu.be/gYcLw0oJ2Hw?si=B3MOvT2hK3iVak6J" },
  { title: "Tate McRae - TIT FOR TAT", style: "Jazz-Funk", url: "https://youtu.be/l5GDy-8PIYs?si=Qy1gtIuuL21591KE" },
  { title: "Tate McRae - It's ok I'm ok", style: "Jazz-Funk", url: "https://youtu.be/NrNpFi1x8Bw?si=TVMm7mv_EJ6KEKe-" },
];

// Video projects (short films, music videos, etc.)
export const videoProjects: DanceVideo[] = [
  // Example:
  // { title: "Music Video — Artist Name", style: "Hip-Hop", url: "https://www.youtube.com/watch?v=XXXXX", date: "2024" },
  { title: "Get Ur Freak On by Rae Agency", url: "https://www.youtube.com/watch?v=riiHtYAmcn8", date: "2025" },
  { title: "Gatsby by Rae Agency", url: "https://www.youtube.com/watch?v=vvsBofwwjWk", date: "2024" },
  { title: "Syndicate Prelude Norcal 2025", url: "https://www.youtube.com/watch?v=dNBwMBXtVxk&pp=ygURc3luZGljYXRlIHByZWx1ZGXSBwkJOAsBhyohjO8%3D", date: "2025" },
  { title: "Syndicate Ultimate Brawl XXIII 2026", url: "https://www.youtube.com/watch?v=egbTrABlhac&pp=ygUYc3luZGljYXRlIHVsdGltYXRlIGJyYXds", date: "2026" },
  { title: "San Francisco Bay Area Violinist HipHop Violin", url: "https://www.youtube.com/watch?v=gFHCCFvhNxk", date: "2025" },
  { title: "Sensational Chris Brown Violin Cover by Rose Crelli Violin", url: "https://www.youtube.com/watch?v=x6bS3vcAawk", date: "2025" },
  { title: "TXT - Sugar Rush Ride Kpop Dance Cover by StarChrome", url: "https://www.youtube.com/watch?v=RDPUrw80He4&list=RDRDPUrw80He4", date: "2023"},
  { title: "ZEROBASEONE - In Bloom Kpop Dance Cover by StarChrome", url: "https://www.youtube.com/watch?v=8Q9ZC1oF4Bk&list=RD8Q9ZC1oF4Bk", date: "2023"},
  { title: "LE SSERAFIM - ANTIFRAGILE Kpop Dance Cover by StarChrome", url: "https://www.youtube.com/watch?v=3TpMZja_zfQ&list=RD3TpMZja_zfQ", date: "2023"},
  { title: "TWICE - FEEL SPECIAL Kpop Dance Cover by POPreka", url: "https://www.youtube.com/watch?v=3Llkd6YKIVo&list=RD3Llkd6YKIVo", date: "2020"},
  { title: "StarChrome Mainstay 2023 Kpop Dance Cover Performance", url: "https://www.youtube.com/watch?v=sJ0qcLFjJAE", date: "2023"},
  { title: "StarChrome Mainstay 2022 Kpop Dance Cover Performance", url: "https://www.youtube.com/watch?v=BeCgB2AjSFs", date: "2022" },
  { title: "JK Family Mainstay 2023 Performance", url: "https://www.youtube.com/watch?v=4HI9sIJhWkM&list=RD4HI9sIJhWkM", date: "2023" },
  { title: "StarChrome PARANG 2022 Kpop Dance Showcase", url: "https://www.youtube.com/watch?v=oWKdp1J_wEE", date: "2022" },
  { title: "Jackson Tran & Caroline Zeng K-Pop Performance 2025 Fall Rae Showcase", url: "https://www.youtube.com/watch?v=MCtvePpqhyI&t=27s&pp=ygUScmFlIHN0dWRpbyBqYWNrc29u", date: "2025" },
  { title: "Jackson Tran K-Pop Performance 2025 Spring Rae Showcase", url: "https://www.youtube.com/watch?v=-YTqBfpZqb8&pp=ygUScmFlIHN0dWRpbyBqYWNrc29u", date: "2025" },
  { title: "Kyunshi Honey Guest Performance 2024 Rae Showcase", url: "https://www.youtube.com/watch?v=gaKxXKkafWk&list=RDgaKxXKkafWk", date: "2024" },
  { title: "Jackson Tran Jazz Funk Performance 2024 Rae Showcase", url: "https://www.youtube.com/watch?v=Qw_oVSTmL7U&list=RDQw_oVSTmL7U&start_radio=1&pp=ygUScmFlIHN0dWRpbyBqYWNrc29uoAcB", date: "2024" }
];

export const styles = ["Hip-Hop", "Jazz-Funk", "Heels", "Waacking", "K-Pop"] as const;
