export default function withTitles(arr: string[]) {
  const whitelistTechs = [
    { tech: "js", title: "Javascript" },
    { tech: "ts", title: "Typescript" },
    { tech: "react", title: "ReactJS & React Native" },
    { tech: "ai", title: "Adobe Illustrator" },
    { tech: "ps", title: "Adobe Photoshop" },
    { tech: "ae", title: "Adobe After Effects" },
    { tech: "pr", title: "Adobe Premiere" },
  ];

  return arr.map((item) => {
    const whitelist = whitelistTechs.find((tech) => tech.tech === item);

    return (
      whitelist || {
        tech: item,
        title: item.charAt(0).toUpperCase() + item.slice(1),
      }
    );
  });
}
