# React Training
This is a series of training articles and code snippets to learn React from scratch.

## 06 State Management

The example used is from facebook React page https://facebook.github.io/react/docs/state-and-lifecycle.html 

### Lifecycle hooks
#### Mounting
   These methods are called when an instance of a component is being created and inserted into the DOM:

    constructor()
    componentWillMount()
    render()
    componentDidMount()

#### Updating
   An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

    componentWillReceiveProps()
    shouldComponentUpdate()
    componentWillUpdate()
    render()
    componentDidUpdate()

#### Unmounting
   This method is called when a component is being removed from the DOM:

    componentWillUnmount()
https://facebook.github.io/react/docs/react-component.html



### How to install and run
Install yarn on your system
https://yarnpkg.com/lang/en/docs/install/

Then run the following commands to install dependacies

```
    yarn install    
```

To run the server
```
    yarn start
```
