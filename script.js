const data = [
    {url:'https://zenn.dev/k41531/articles/aa375915ce4e8c'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'},
    {url:'#'}
]


data.forEach((elm, index) => {
    const clone = date_cell.content.cloneNode(true);
    clone.querySelector('.date-number').textContent = index + 1;
    clone.querySelector('a').setAttribute("href", elm.url);
    calendar.append(clone);
});
