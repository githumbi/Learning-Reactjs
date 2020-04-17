const fetchData = async ()  => {
    const resp = await fetch('https://api.github.com');

    const data = await resp.json;

    console.log(data);
}