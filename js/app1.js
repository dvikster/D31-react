var library = [
    {
        "autor":"Jonathan Swift",
        'img':"http://t0.gstatic.com/images?q=tbn:ANd9GcRzF3c1tkASLO-7RTKXAemQUuoLaoyFph3uhxmn-P2kbWhh3mul",
        "name":"Gulliver's Travels",
        "pages":125
    },
    {
        "autor":"Lewis Carroll",
        'img':"http://t2.gstatic.com/images?q=tbn:ANd9GcTa_9WE4U3tScNG0Cts30MVlaesIVvFde6U10-d6YJNUIf6KqKk",
        "name":"Alice's Adventures in Wonderland",
        "pages":225
    },
    {
        "autor":"Pollyanna",
        'img':"http://t1.gstatic.com/images?q=tbn:ANd9GcTKvUhVsv1FJXMxEhi1dRKr7cmVEclev_RBA7xJwfH7EQGpWfPH",
        "name":"Eleanor H. Porter",
        "pages":425
    }
];

var LibraryContent = React.createClass({
    render: function(){
        var data = this.props.data;
        var libraryTemplate;

        if(data.length > 0){
            libraryTemplate = data.map(function (item,index) {
                return(
                    <div className="book" key={index}>
                        <img src={item.img} alt={item.name}/>
                        <p className="name"><strong>Title: </strong>{item.name}</p>
                        <p className="autor"><strong>Autor: </strong>{item.autor}</p>
                        <p className="pages"><strong>Pages: </strong>{item.pages}</p>
                    </div>
                )
            })
        }
        else{
            libraryTemplate = <p className="bookmas">There are no books in the library</p>
        }
        return(
            <div className="library-wrapp">{libraryTemplate}
                <div className={data.length > 0 ? 'bookmas':'booknone'}>Books in library: {data.length}</div>
            </div>
        )
    }
})

ReactDOM.render(
    <LibraryContent data = {library}/>,
    document.getElementById('root')
)
