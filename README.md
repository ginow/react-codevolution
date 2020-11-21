# react-codevolution notes

- npx is npm package runner, so that packages can be run without even installing them

## Component Types

- Stateless

```Javascript
function welcome(props){
    return <h1> Hello, {props.name}</h1>;
}
```

- Statefull Class

```Javascript
class Welcome extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```

## Functional vs Class components

### Functional

- Simple functions
- Use it as much as possible
- Absence of 'this' keyword
- Solution without using state
- Mainly responsible for the UI
- Stateless/ Dumb/ Presentational

### Class

- More feature rich
- Maintain their own private data - state
- Complex UI logic
- Provide lifecycle hooks
- Stateful/ Smart/ Container

## Props vs State

### Props

- props get passed to the component
- Function parameters
- props are immutable (readonly)
  - props - Functional Components
  - this.props - Class Components

### State

- state is managed within the component
- variables declared in the function body
- state can be changed
  - useState Hook - Functional Components
  - this.state - Class Components

### Event Handling approaches

1. using .bind(this), every update to the state causes rerender which will create new event handler, causes performance issue, so don't use this approach
2. onClick={() => this.clickHandler()}, this also has performance issue
3. Best approach is binding inside constructor

## List Rendering

### Index as key

When to use?

- List doesn't have a unique id
- List is static and doesn't change
- List will never be reordered or filtered
