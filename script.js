$(document).ready(function() {
    $(".btn-local").css('background', 'transparent')
    const settings = {
        'async': true,
        'crossDomain': true,
        'url': "https://type.fit/api/quotes",
        'method': 'GET'
    }
    const getReq = () =>{
        $.ajax(settings).done(function(response){
            const data = JSON.parse(response)
            let randomQuoto = data[Math.round(Math.random()*data.length)]
            $("q").text(randomQuoto.text);
            $('cite').text('-'+randomQuoto.author);
        })
    }
    getReq()

    $('#next').click(function (e) { 
        $("article").css('opacity', 0);
        e.preventDefault();
        setTimeout(() => {
            getReq()
        }, 800);
        setTimeout(() => {
            $("article").css('opacity', 1);
        }, 1500);
    });


    setInterval(() => {
        const x = Math.random()*255;
        const y = Math.random()*255;
        const z = Math.random()*255;
        const rgb = `rgba(${x},${y},${z},.5)`
        $("nav").parent().css('background',rgb)
    }, 1000);
})