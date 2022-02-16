// const h1 = React.createElement("h1", null, "Heading 1");

// const h1 = React.createElement("h1", {
//     className: "h1-react",
//     id: "h1Id",
//     name: "h1-name"
// }, "Heading 1");
// const root = document.getElementById("root");
// ReactDOM.render(React.Fragment(), root);

// const p1 = React.createElement("p", {
//     style: {
//         color: "red",
//         backgroundColor: "green",
//         fontSize: "40px"
//     }
// }, "Tag p 1");

// // const root = document.getElementById("temp");
// ReactDOM.render(p1, temp);

// const ulRect = React.createElement("ul", 
//                                     null, 
//                                     React.createElement("li", null, "Li1"),
//                                     React.createElement("li", null, "Li2"),
//                                     React.createElement("li", null, "Li3"),
//                                     );
// ReactDOM.render(ulRect, root);

const product = React.createElement("div", 
                                    {
                                        style: {
                                            backgroundColor: "green",
                                            color: "white"
                                        }
                                    }, 
                                    React.createElement("h1", null, "Áo thun"),
                                    React.createElement("img", {
                                        src : "https://i.pravatar.cc/150?img=3"
                                    }),
                                    React.createElement("p", null, "200000 vnđ")
                                    );
// ReactDOM.render(product, root);

//JSX ~ JavaScript XML

//Muốn chèn script vào Jsx  thì dùng 

//Fragment

{/* <React.Fragment>
                <h1>
                    Heading1
                </h1>
                <h2>
                    Heading2
                </h2>
            </React.Fragment> */}

const site = (
    <React.Fragment>
        <h1>
            Heading1
        </h1>
        <h2>
            Heading2
        </h2>
    </React.Fragment>
);
            

ReactDOM.render(page, document.getElementById("root"));

//function component

function Header() {
    return (
        <div className = "header"> Header </div>
    )
}

class Context extends React.Component{
    render(){
        return (
            <div className = "content">Content</div>
        )
    }
}

function Footer() {
    return (
        <div className = "footer"> Footer </div>
    )
}

const page = (
    <div>
        <Header
            
        ></Header>
        <Context/>
        <Footer></Footer>
    </div>
)