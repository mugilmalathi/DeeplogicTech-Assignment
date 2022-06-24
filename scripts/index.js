
function latestNews(){
    fetch("http://localhost:8080/getTimeStories",{
        method: 'GET'
    }).then((result)=>{
        result.json().then((res)=>{
            console.log(res);
            getLatestNews(res)
        })
    })
}

latestNews()

function getLatestNews(arr){

    arr.map((e)=>{
        let div = document.createElement('div');
        div.setAttribute('id', 'latestnews')

        let title = document.createElement('h4');
        title.innerText = e.name;

        let link1 = document.createElement('a');
        link1.innerText = e.url;
        link1.href = e.url;

        let news = document.createElement('h4');
        news.innerText = e.selection2;

        let link2 = document.createElement('a');
        link2.innerText = e.selection2_url;
        link2.href = e.selection2_url;

        div.append(title, link1, news, link2)
        document.getElementById('right_div').append(div)
    })

}

function homeNews(){
    fetch("http://localhost:8080/homenews",{
        method: 'GET'
    }).then((result)=>{
        result.json().then((res)=>{
            console.log(res);
            gethomeNews(res)
        })
    })
}

homeNews()

function gethomeNews(arr){

    arr.map((e)=>{
        let div = document.createElement('div');
        div.setAttribute('id', 'latestnews')

        let title = document.createElement('h4');
        title.innerText = e.name;

        let link1 = document.createElement('a');
        link1.innerText = e.url;
        link1.href = e.url;

        let news = document.createElement('p');
        news.innerText = e.selection2;


        div.append(title, link1, news)
        document.getElementById('left_div').append(div)
    })

}