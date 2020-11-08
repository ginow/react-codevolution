# react-codevolution notes

- npx is npm package runner, so that packages can be run without even installing them

Component Types
---
- Stateless
``` Javascript
function welcome(props){
    return <h1> Hello, {props.name}</h1>;
}
```
- Statefull Class
``` Javascript
class Welcome extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

