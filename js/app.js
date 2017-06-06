
/*1
 ReactDOM.render(
 React.createElement('h1',null,'Hello'),
 document.getElementById('root')
 );
 */
/* 2
 ReactDOM.render(
 <h1>Hello, world!</h1>,
 document.getElementById('root')
 );
  */
var info =[
   {
       'autor':'autor1',
       'text':'text1'
    },
    {
        'autor':'autor2',
        'text':'text2'
    },
    {
        'autor':'autor3',
        'text':'text4'
    }
];

var News = React.createClass({
    render: function () {
        var data= this.props.data;
        var newsTemplate;
        if(data.length>0){
            newsTemplate = data.map(function(item, index){
            return(
                <div key={index}>
                    <p className="news__author">{item.autor}: {item.text}</p>
                </div>
            )
            })
            return(
                <div className="news">
                    {newsTemplate}
                    <p>Новостей всего: {data.length}</p>
                </div>
            );
        }
        else{
            newsTemplate = <p>Новостей нет</p>
            return(
                <div className="news">
                    {newsTemplate}
                    {/*<p>Новостей всего: {data.length}</p>*/}
                </div>
            );
        }

        // return(
        //     <div className="news">
        //         {newsTemplate}
        //         <p>Новостей всего: {data.length}</p>
        //     </div>
        // );
    }
});

// var News = React.createClass({
//     render: function () {
//         return(
//             <div className="news">Новости</div>
//         );
//     }
// });

var Comments = React.createClass({
    render: function () {
        return(
            <div className="comments">Комментарии</div>
        );
    }
});

var App = React.createClass({
    render: function () {
        return(
           <div className="app">
               <News data={info} />
               <Comments />
           </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

