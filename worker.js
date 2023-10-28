addEventListener("message", async (e) => {
  console.log(e);
  const req = await fetch("https://pokeapi.co/api/v2/pokemon");
  const res = await req.json();
  postMessage(res);
});
