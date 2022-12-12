const data = [
    {url:'https://zenn.dev/k41531/articles/ea787d5d091ef8'},
    {url:'https://zenn.dev/k41531/articles/97d248f32bb3eb'},
    {url:'https://zenn.dev/k41531/articles/a456b04d188efb'},
    {url:'https://zenn.dev/k41531/articles/3e935bd04968d6'},
    {url:'https://zenn.dev/k41531/articles/f21f70b46e8e99'},
    {url:'https://zenn.dev/k41531/articles/32616dc9c01ee6'},
    {url:'https://zenn.dev/k41531/articles/ee46ef1d36a041'},
    {url:'https://zenn.dev/k41531/articles/693be62005d7fe'},
    {url:'https://zenn.dev/k41531/articles/9326dd9e55f309'},
    {url:'https://zenn.dev/k41531/articles/8ade9c6c891dea'},
    {url:'https://zenn.dev/k41531/articles/f65babe3cd1588'},
    {url:'https://zenn.dev/k41531/articles/08bffbbe80474c'},
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
