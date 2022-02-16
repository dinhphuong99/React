function PostItem({
    image,
    title,
    desc,
    published
}) {
    return (
        <div className = "post-item">
                <img
                    src = {image}
                    alt = {title}
                 ></img>

        </div>
    )
}

function Info({clN, srcN}) {
    return (
        <div className = "footer"> Footer </div>
    )
}



const ex = (
    <div className= "wraper">
        <Header
            
        ></Header>
        <Context/>
        <Footer></Footer>
    </div>
)