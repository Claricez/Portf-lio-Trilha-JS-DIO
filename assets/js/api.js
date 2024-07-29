async function fecthProfileData() {
  const url =
    "https://raw.githubusercontent.com/Claricez/Portf-lio-Trilha-JS-DIO/main/data/profile.json?token=GHSAT0AAAAAACVFNBIJ5WSSFNK26UMFFUWAZVIFASA";
  const fetching = await fetch(url);
  return await fetching.json();
}
