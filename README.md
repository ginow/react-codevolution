# react-codevolution notes

## Disclaimer

All the code has been taken from a youtube channel called 'Codevolution' [playlist](https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3)

I do not own or take credit for it.

---

## npx

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
- Absence of `this` keyword
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

## Event Handling approaches

1. using `.bind(this)`, every update to the state causes rerender which will create new event handler, causes performance issue, so don't use this approach
2. `onClick={() => this.clickHandler()}`, this also has performance issue
3. Best approach is binding inside constructor

## List Rendering

### Index as key

When to use?

- List doesn't have a unique id
- List is static and doesn't change
- List will never be reordered or filtered

## Regular vs Pure Components

Regular Component:

- Doesn't implements `shouldComponentUpdate` so always returns true.

Pure Components:

- Implements `shouldComponentUpdate` by shallow comparison on props and state of component
- So prevents unnecessary re-rendering

Note: Shallow comparison eg.

```JavaScript
varA==varB //is true if both have same value and are of same type
objA==objB //is true if both reference the exact same object
```

## Error Boundary

- Doesn't catch error inside event handlers (because they don't happen during rendering)
- Use try catch in event handler

## Higher Order Components - HOC

- A pattern where a function takes a component as an argument and returns a new component

### Issue with passing props

- Props get passed only to HOC not to the component which is wrapped

## Render Props

- Share code between react components using a prop whose value is a function

## Context

- Pass data through component tree without having to pass props at every level

## Hooks

### What are Hooks?

- Use React features without class
  eg. State of component
- Hooks don't work in class

### Why Hooks?

- No need to know how this 'keyword' works
- No need to remember bind event handlers in class components
- HOC and render props helps to reuse stateful component logic but code is harder to follow
- Data fetching and subscribing to events related code is organised in one place

### Rules of Hooks

- Call only at top level, not in loops, conditions or nested functions
- Call only from React functions, not js function

### useState

- doesn't automatically merge objects unlike setState
- returns an array with 2 elements, current value of state and state setter function
- if new state value depends on previous then pass a function to setter function

### useEffect

- runs after every render of the component (so will run on componentDidMount and componentDidUpdate)
- for componentUnmount write the code in return statement of useEffect

### useContext

- Pass data in component tree without passing props at every level

### useReducer

- for state management
- useState is built using useReducer

## JavaScript reducer

```javascript
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

### reduce vs useReducer

| reduce in js                               | useReducer in React                                      |
| ------------------------------------------ | -------------------------------------------------------- |
| array.reduce(reducer,initialValue)         | useReducer(reducer,initialState)                         |
| singleValue=reducer(accumulator,itemValue) | newState=reducer(currentState,action)                    |
| reduce method returns a single value       | useReducer returns a pair of values. [newState,dispatch] |

### useState vs useReducer

| Scenario                    | useState          | useReducer             |
| --------------------------- | ----------------- | ---------------------- |
| Number of state transitions | One or two        | Multiple               |
| Related state transitions?  | No                | Yes                    |
| Business logic              | No business logic | Complex business logic |
| Local vs global             | local             | Global                 |

### useCallback

- React.memo has nothing to do with hook, used to check whether value has changed
- Issue: React.memo thinks that parameter changed since the prop is a function which is not the same after rerender
- so use useCallback, it will return a memoized version of callback function that only changes if one of the dependencies has changed

### useMemo

- To prevent unnecessary call of functions

| useMemo                                    | useCallback                         |
| ------------------------------------------ | ----------------------------------- |
| invokes the function and caches its result | caches the function instance itself |
