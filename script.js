const data = [
    {
        url: 'https://zenn.dev/k41531/articles/ea787d5d091ef8',
        title: '雪降るアドベントカレンダーを作る',
    },
    {
        url: 'https://zenn.dev/k41531/articles/97d248f32bb3eb',
        title: 'Deno+React+ViteをDeno Deployする'
    },
    {
        url: 'https://zenn.dev/k41531/articles/a456b04d188efb',
        title: 'Wasmer3.0 🎉'
    },
    {
        url: 'https://zenn.dev/k41531/articles/3e935bd04968d6',
        title: '【Extism】名状し難いユニバーサル・プラグインシステム'
    },
    {
        url: 'https://zenn.dev/k41531/articles/f21f70b46e8e99',
        title: 'OpenGLで三角形を描く'
    },
    {
        url: 'https://zenn.dev/k41531/articles/32616dc9c01ee6',
        title: 'Zero-copy deserializationとは【ChatGPTとの共著】'
    },

    {
        url: 'https://zenn.dev/k41531/articles/ee46ef1d36a041',
        title: '【Whisper】GPUが無くてもオフラインで簡単音声認識'
    },
    {
        url: 'https://zenn.dev/k41531/articles/693be62005d7fe',
        title: 'DenoからFFIでRustを呼び出す'
    },
    {
        url: 'https://zenn.dev/k41531/articles/9326dd9e55f309',
        title: '実行可能ファイルのシンボルとは'
    },
    {
        url: 'https://zenn.dev/k41531/articles/8ade9c6c891dea',
        title: '【Codon】Pythonコンパイラを試してみた'
    },
    {
        url: 'https://zenn.dev/k41531/articles/f65babe3cd1588',
        title: '【RFC 2119】RFCを読めるようになりたい'
    },
    {
        url: 'https://zenn.dev/k41531/articles/08bffbbe80474c',
        title: 'Rust 🦀 and WebAssemblyのチュートリアルを読む'
    },
    {
        url: 'https://zenn.dev/k41531/articles/99f073ee123e79#',
        title: '【CSS】Flexboxの中でボタンが大きくなる理由'
    },
    {
        url: '#',
        title: ''
    },
    {
        url: '#',
        title: ''
    },
    {
        url: '#',
        title: ''
    },
    {
        url: '#',
        title: ''
    },
    {
        url: '#',
        title: ''
    },
    {
        url: '#',
        title: ''
    },
    {
        url: '#',
        title: ''
    },
    {
        url: '#',
        title: ''
    },
    {
        url: '#',
        title: ''
    },
    {
        url: '#',
        title: ''
    },
    { url: '#' }
]


data.forEach((elm, index) => {
    const clone = date_cell.content.cloneNode(true);
    clone.querySelector('.date-number').textContent = index + 1;
    clone.querySelector('a').setAttribute("href", elm.url);
    calendar.append(clone);
});
function showTitle(event) {
    if (event.textContent === "Show Title") {
        document.querySelectorAll('.date-number').forEach((elm, i) => {
            elm.textContent = data[i].title;
            elm.classList.add("title");
        });
        event.textContent = "Hide Title"
    } else {
        document.querySelectorAll('.date-number').forEach((elm, i) => {
            elm.textContent = i+1;
            elm.classList.remove("title");
        });
        event.textContent = "Show Title"
    }
}
