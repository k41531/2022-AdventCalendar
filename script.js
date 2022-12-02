const data = [
    {url:'https://zenn.dev/k41531/articles/ea787d5d091ef8'},
    {url:'https://zenn.dev/k41531/articles/97d248f32bb3eb'},
    {url:'https://zenn.dev/k41531/articles/a456b04d188efb'},
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
