let heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React")

let main = React.createElement("div", { id: "main" }, React.createElement("div", { id: "child" }, React.createElement('h1', {}, 'Hello Data')))

console.log(heading) // if we console heading it will noting but a javascript object with some property
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(main) //the render method is resonsible to convert heading javascript object to heading element