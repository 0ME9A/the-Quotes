$(document).ready(function () {
    $('q').css('color', 'white')
    $('cite').css('color', 'white')
    $('#root').css('background', 'rgb(40, 40, 40)')
    $('#next-btn ').css('background', 'rgb(40, 40, 40)')
    $('#share-on-twitter').css('background', 'rgb(40, 40, 40)')



    const settings = {
        'async': true,
        'crossDomain': true,
        'url': "https://type.fit/api/quotes",
        'method': 'GET'
    }
    const getReq = () => {
        $.ajax(settings).done(function (response) {
            const data = JSON.parse(response)
            let randomQuoto = data[Math.round(Math.random() * data.length)]
            $("q").text(randomQuoto.text);
            $('cite').text('-' + randomQuoto.author);
            const twitter = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${randomQuoto.text}-"${randomQuoto.author}"`
            $("#share-on-twitter").attr("href", twitter)
        })
    }
    getReq()

    $('body #next-btn').click(function (e) {
        const x = Math.random() * 255;
        const y = Math.random() * 255;
        const z = Math.random() * 255;
        const rgb = `rgba(${x},${y},${z},.5)`
        $('q').css('color', rgb)
        $('cite').css('color', rgb)
        $('#root').css('background', rgb)
        $('#next-btn ').css('background', rgb)
        $('#share-on-twitter').css('background', rgb)
        $("article").css('opacity', 0);

        e.preventDefault();
        setTimeout(() => {
            getReq()
        }, 800);
        setTimeout(() => {
            $("article").css('opacity', 1);
        }, 1500);
    });
})