// src directory
// represents the logic for our application (actions, components, reducers, style)
// index.js is a vacant file used as the redux store, an interface for passing and accessing data
// 
// components
// components make up the react app in the form of one component at a time
// creating single elements or larger funtionalities to be/ or can be shared throughout the application
// our App component serves as the parent component.
//
// bootstrap.js
// bootstrap.js is more or less optional to have
// its content resembles a database model. multiple imports and elements participating 
// renders the structure/ order of the code, querying the index.html file by its class name
//
// static directory 
// contains an assets folder, inside, a README file
// still in the static directory, favicon.ico file that is used to diplay the icon on your webpages tab
// index.html, the entry point where we slide our js components
//
// webpacks directory
// webpack is a technology used to package and utilize libratries in our js application
// the four config files (common, dev, postscss, prod) have separate roles based on the environment
// under common we see our first rule as to where our logic starts 
// plugins/splitChunks takes/loads application in segments
//
// .babelrc
// converts JS code to a universal form where it can be read, presets defined so to know what syntax to look out for
//
// Procfile/ Readme/ server
// proc tells the web what server to run
// readme walks reader through code
// server imports our server, express, by require
// app.get(/.*/) checks to see if user is trying diff route
//
// Intro to Components
// class based components always include render()
// we call components with JSX syntax (<PortfolioContainer/>)
// functional components essentially js functions that return react elements 
// use Class components whe working with data management
// functional components shouldnt have a lot of logic goin on 
// (constructors) where we place our initial state and hwere we will be defining all of the data points
// we can dynamically build on top of data being passed by looping over it with map()
// props are a way of passing data from parent to child components
// 1 list props and data 2 add props to component (<Portfolio title={key.id}/>) 3 render like object ({props.title})
// (<Portfolio title="props"/>) is JSX for ( React.createElement("Portfolio", {title:"props"}) )
// (this.state) creates an initial state
// its values can be accessed by other parts of our component
//
// state allows us to track user behavior
// react allows us to duplicate compnents on same page and make changes to one without effecing the other
// when dynamically rendering functional components (props) should always be passed as an arg
// functional components should focus on UI
// an anonymous function that uses uppercase for each word in its name is read as component in that file
// the constructor should make the instance a valid representation of the concpet, doing anything should be the duty of the methods
// arrow functions prevent bugs caused by the use of (this)
// remember to include unique keys when creating arrays of an element
// (react-dom) (react-router-dom) libraries are used to apply (<BrowserRouter/>)
// (exact) disables the partial matching when reading urls
// leverage functional component as a means to display links/routes
// react will only call its update method if state has changed
// (constructor, getDerived, render, didmount, shouldupdate, render, snapshot, didupdate, unmount) lifecycle hooks we can perform a task in update
// (handleKeyUp(e)) with setState changes the component causing update
//
// (<input />) should hold the method (onKeyUp={e => this.handleKeyUp(e)})
// when building (click listeners) you need to connect directly to component (this.someMethod = this.someMethod.bind(this)) 
// filter(e => {return e === 1}) example of what data you want retreived when filtered
// ( {() => this.someEvent()}) stops the function from being called automatically
// you can only return a sing div in components so divs and other tags must be nested under main div
// 
// (<Switch>...</Switch>) reads like a statement
// ( <Route/>) should always have (path=) and most times (component=)
// react recognizes the page we are on by adding (class="active")
// to override, (activeClassName="nav-link-active")
// Navlink should hold exact and to=
// when path="port/:slug" (:slug) connects us directly to the port-container data from the component state
// ({this.portItems()}) is rendered within our (porcontainer) class components return
  // the method (portItms()) uses map() to iterate the data provided by (getportItems()) API call,
    // updating (this.state) with (this.setState) and returns the component (<portItem/>) 
    // with props (key,title, url, slug)
  // the component (portitem) is a function returning (props.title, props.url) and a link containing props.slug
// (<route component={NoMatch}/>) should be at the bottom of switch, considered as last (else) statement
// no-match.js should return (<link to="/" >...)
// 
// we place our (API) requeast within our (PortContainer) class component, which is our data manager, labeling the method (getPortitems())
  // using (axios) import methods to get our APIs data we leverage setState to update initial state data with the array of data provided
  // (response.data.port_items) which is the path traversing the code until reaching the data we want
// debugger is a statement that stops the system
// (deconstructing data for (portItem) component would require the props passed to (<porItem/>) to be replaced by (item={item})
// in render() ( const {id,description, url, name} = props.item) now we can pass one word vars that give us similar results as (props.item.name)
//
// (main.scss) serves as the file where we import features from separate scss files (@import "./base.scss")
// (scss) allows you to nest child elements within the parent instead of using arrows 
// self closing tags (<div/>) should be leveraged if only use is for accessing properties
// (style={{}}) is the syntax for inline styling
// taking advantage of our inline styles to pass (backgroundImage) scss allowed us to avoid hard coding each image, dynamic rendering
// (portfolioItem) was converted into class component in order to dynamically create the effect needed (transparent background)
// we do this by setState, giving a property a value we can use across the component, we apply scss to that value so to dynamically render
// when passing the method created in response to our event handler, into the event handler itself, we must utilize an anonymous function
// in our main scss file managing our collection of scss imports is critical to import in proper order remember css is cascading 
// scss requires all our imports to use either single or double quotes. no mismatch.
// if your components method takes an argument you need to apply bind
// ([event.target.name]: event.target.value) our event represents the element(s) passed, if i type one letter, thats the event,
// target focuses on what set of code our element has communicated with. since we are accessing its properties (name) being a key value pair
// and part of an object, we must use common JS and bracket our key (in this case, path to the key) to get its value. 
// (event.target.value) follows the same path however, since its already a value and were targeting a value, we dont need brackets. and value
// represents whatever event typed.
// when working with inputs or forms, remember to use the (preventDefault()) method so to not render our values on the search bar
// (axios) gets imported
// we leverage axios in order to make a post call and create a session. the post call is used to push our credentials up to the server
// ({withCredentials: true}) lets the server know to check if my credentials allow me access.
// (axios.post()) main purpose is creating a session on the server in doing so it gains access to our metadata/credentials.
// the server sends back a cookie, we store that cookie in the browser as access to login. 
// (axios.post()) should have three args. 1 url string 2 object with data passed to the url string to access 3 withCredentials
// axios works with promises so always follows with methods (then,catch)
// we start building our our (authentication) process starting at our app component level because within our switch statement, we have all our routes
// we create an initial state with loggedinstatus as the key, hard coding in our value (NOT_LOGGED_IN)
// reframe from using boolean values with state. could interpret string as value, not value as value
// (render prop) it passes a prop to the component but actually being able to communicate with render process (react-router-dom documentation)
// replace component prop four our render prop
// (render={props => ()}) is the syntax, use parens not brackets.
// we render our props which is afunction that iscalling our (Auth) component
// (<Auth {...props}) uses spread syntax that allows him access to all props that would have been given
//
// updating components state
// start at the app component, weve already added our render prop and weve made it possible for all of that to worrk
// from there we are going to go to the auth componenet were gonna have it accept the props , work with it, then
// pass props to the login
// usually never want to pass props more than a child and then a second child component
// (auth) is going to be the intermediary, its going to communicate up to the app component but its also 
// going to pass data back and forth with the login component
// constructor(props)
// (this.handleSuccessfulAuth= this.handleSuccessfulAuth.bind(this)  this.handleUnSuccessfulAuth = this.handleUnSuccessfulAuth.bind(this))
  // these are gonna be the handlers that are gonna have the goal of two things. theyre going to update the props received
  // so update the render props of handleSuccessfulLogin ...,  then they are gonna be the props passed down to the login component
// handleSuccessfulAuth() { this.props.handleSuccessfulLogin()} this.props.history.push("/") }
  // it calls the function then we perform the redirect. (history) gives us access to the history
  // from the first time that a user accessed the site or accessed the app. where they navigate, routes they hit
// (UnsuccessfulAuth) this.props.handleUnSuccessfulLogin() 
// pass data back up the chain now
// (<Login/>) handleSuccessfulAuth={this.handleSuccessfulAuth} handleUnSuccessfulAuth={this.handleUnSuccessfulAuth}
// (login) within handleSubmit(e) (.then()) this.props.handleSuccessfulAuth()
// also on else this.props.handleUnSuccessfulAuth as well as in our .catch()
// this gives us the ability to update state not just in our current compnent, but eve in parent components
// by passing in props and handlers between the components.
//
// auto check if user is logged in
// (app) checkLoginStatus(){ return axios.get("")} 
// the process thats gonna take place is there is an endpoint on "devcamp.space" called LOGGED_IN and what we can do 
// is check that endpoint to see exactly what the current state of the logged in status is. simply telling us yes or no.
// ("https://api.devcamp.space/logged_in", {withCredentials: true})
// remember, axios returns a promise, meaning .then/ .catch
// to pass checkLoginStatus() we can use a lifecycle hook (componentDidMount()) and have it pass (this.checkLoginStatus())
// created const variables equal to the data, loggedin/loggedinstatus (loggedIn = response.data.logged_in)
// created an if, else if, else if conditional for log ins
// 
// converting a class componenet to functional
// import react alone
// (const NavigationComponent = (props) => {}) remember that react will read Capital letter functions as Components
// delete constructors and render
// export default NavigationComponent at the bottom of page
// whenever a component isnt using state or methods revert to functional component
//
// * Remember, although we are importing components onto others, we can pass props back to the child components
  // recently imported. passing data back in forth to build on functionality, as seen with our auth files
//
// (app) create (authorizedPages) method that returns an array
// reposition our route path blog tag within array
// insert JS code where routes location previously was {this.authorizedPages()}
// we utilize our turnary operator as before to give the condition we are looking for
// (what we are doing here is requiring a login in order to see certain links if not logged in then the path doesnt exist,
// leading them to our no match route)
//
// implementing logout handler
// (app) create (handleSuccessfulLogout()) setState NOT LOGGED
// pass as prop to navigationcomponent
// remember, when passing function as prop, we must bind at top
// the method itself is the prop, the binded result of the method is the value
// what we are doing is passing this function as a prop directly into the navcontainer
// we will be adding the link for that next
// when that link is clicked its going to start aprocess where it goes and calls the server informing the action
// waits for the respons then calls (this.handleSuccessfulLogout) and then all this has to do is go and update the states logged in status
//
// finalizing the logout functionality with a higher order component
// (navigation-container) import axios
// create new function (const handleSignOut)
// axios uses the method delete with first arg being our url ending with logout
// second arg being withcredentials true
// (what we are doing here is we send a request to the url to delete the credentials of logged in)
// its a promise so we follow with the then and catch methods
// once logged out (response) create a conditional that assures the status is 200 meaning it worked
// (if an API is built right, when you call a delete endpoint, it should always sned you back a 200 status)
// if so redirect with push (we know this wont work atm)
// followed by our logout prop which finishes our condition
// then() still needs to return, this is will be our response.data
// (its Paramount to know when to use props over this or neither)
// this is best not used in functional components as it refers to the (window) object
// finish with catch
// below in our JSX code where our name is displayed, we insert our turnary operator once again
// using our props to call our logged in status value for the condition 
// returning an (<a>) tag with an onClick event listener that calls our signout
// ( so far we have our link that points to a handle sign out function, which that is going
// to call delete on the logout endpoint, in turn deleting the session and then we want to redirect to the home page
// while updating the state)
// back to where the code wont work
// the code stalls because the data of history is considered undefined. this is because
// we are within a component that doenst have a route, no path to retrieve its history
// so we cant push that history to our home page with path()
// we have to leverage (higher order components) (HOC) not part of reacts compositional nature
// what these do is allow you to wrap up certain functionality and add that
// to a function or a class or similar, it uses keywords that are part of Reacts compositional nature
// meaning react uses HOC for its compositional abilities that align with its own functionality
// HOC composes different features in a wrapped up feature, not exclusive to react but conventional to coding leveraging react keywords
// we do this by (import {withRouter} from "react-router") withRouter isnt a component like say, NavLink, withRouter is a HOC
// and simply insert it (export default withRouter(NavigationComponent))
// (withRouter will pass updated match, location, and history props to the wrapped component whenever it renders)
//
// (app) we then created authorized routes for the blog/ portfolio manager links made only available once
// the admin/me signs in. 
//
// we began creating the layout for our portfoliomanager page, with scss then bringin
// in images from our portfolio-item. we levearage the spread tool to accept any amount of 
// unaccounted data coming in as its own item in the array not just added together as one
// this works because we have many images coming in
//
// created (portfolio-sidebar-list) functional component this takes in props from the parent 
// and the props specifically are the portfolio items, meaning, when we pass props back,
// the label may read props, however, we know the value is the api of the (portfolio-item) object
// we created the (portfolioList()) inside, and the only role that it has is to take in the props, 
// iterate over them using the map method here to grab the items and to wrap up that port item 
// inside of a dive to call the image, name and id, returning in a collection
// we then return the portfolioList() wrapped up in its own div
// all this behavior gets accessed when calling the component from the parent (PortfolioManager)
//
// here we created the (PortfolioForm) class. the majority of the work is done in our parent 
// component
// we create handle methods to manage our submit info. after we bind, we apply them
// as props to our (PortfolioForm) component in our render

// (PortfolioForm) we work with setting up the methods that will manage the data brought in by props 
// (this.handleChange =this.handleChange.bind(this), this.handleSubmit =this.handleSubmit.bind(this))
// we know that for our form we will be leveraging event listener for entering the input so we create those methods
// with the argument labled event. in our render we return the skeleton of the form, including form, input and divs which 
// group the inputs. we pass them specific prop names, as labled by in the API call
// 
// (portfolio-form) we create a new method tasked with building out the form. (buildForm)
// inside the method, the create a (new form object) (let formData = new FormData())
// (so your first thought may be that we can just mimic the login form, but because we are working with images as values
// what we need to do is actually wrap those images up in a way that the API will bea able understand them.
// API is typically going to understand getting images in a form object kind of value, or form data value)
// so what were doing is creating a new (FormData) object and once we have this, we ca
// add all of the other data points into it
// we do this with a special function specifically built for FormData (append())
// (append()) is going to take two aruments. first, a string with the structure our API expects
// (append("portfolio_item[name]", this.state.name);) the API is going to expect an object
// so when we create this object were saying that we want to add this first element
// (FormData is a special class inside of JS that allows us to wrap up our data in a way that
// servers are able to understand it for more complex data)
// so we append the values to our formData, then we finish our method by returning (formData)
// in order to call the method, we place in within our handlesubmit event which will be used to 
// (post()) our data to be stored in the DB. instead of passing an object as the second argument of post
// we pass our (buildForm()) 
// the promise we set is (this.props.handleSuccessfulFormSubmission(response.data.portfolio_item))
//
// *** (REVIEW THE FIRST FOUR GUIDES IN MODULE 9) ***
//
// (npm i react-dropzone-component)
// 
// import (DropzoneComponent), ("../../../node_modules/react-dropzone-component/styles/filepicker") & 
// ("../../../node_modules/dropzone/dist/min/dropzone.min.css") to (portfolio-form) the last two being custom styles
// that work with our import (DropzoneComponent)
// after our imports we add to our component, two configuration methods 
// first method being (componentConfig())
//  (these methods and the data written inside pertain to dropzones library)
// we return an object with ( iconFiletypes: [".jpg", ".png"] ) as the first key, defining what or how many file types will be accepted
// ( showFiletypeIcon: true, postUrl: "https://httpbin.org/post" ) the following is a boolean permission
// the postUrl essentially downloads the image and sends the API to the site, however we simply want to use postUrl for 
// the animations that it immediately renders on the page once the site is accepted, it will always accept the site so we use a mock url
//  (best practice for using dummy urls to post data "https://httpbin.org/post")
// second method (djsConfig())
// this returns an object as well. (addRemoveLinks: true, maxFiles: 1)
// we then bind these methods
// now we are ready to move downward to our render, and return; within the form, our (<DropzoneComponent/>)
// passing it the props (config, djsConfig) with their values being the methods
// (important to note) we typically dont call our methods with closing parens, reason being, we want to control when their called
// however, we want that functionality immediately, without being triggered by an event, so ( config={this.componentConfig()} )
// 
// (portfolio-form) we build out a method for handling the process for when an image is dropped onto that dropzone compnent
// ( handleThumbDrop() ) inside is the, dropzone specific data 
// (addedfile: file => this.setState({thumb_image: file})) then, bind as usual
//  (the methods names dont neccessarily match the documentation, but they dont have to, the data that we are passing/returning is specific 
//  to dropzones library)
// we have this drop process which we are going to pass to the dropzone component, and whenever a file is dropped onto the component the system
// is going to check for the methods it has available to handle that data, finding (addedfile) which sets state with the same key value
// as the initial state, then runs it.
// we initiate this method by labeling the prop ( eventHandlers={this.handleThumbDrop()} )
// 
// next we create and bind() two more event handler methods within PortfolioForm, (handleBannerDrop, handleLogoDrop)
// typically, best practice is, we manage all events under one method, however, with Dropzone the return calls get 
// mismanaged, reason why new handlers are created.
//  (when working with an API youre going to have certain rules and certain conventions and its the job of that 
//  APIs documentation to tell you exactly what the names of the attribute should be)
// 
// (refs) give us the ability to interact directly with the DOM
// refs allows you to reference into and pull away (shadow DOM) for an element and to be able to work with it directly
// we break up or introduction to (refs) into three steps: 
//  (were going to create a reference, tie it into the component directly, then we can call that anywhere else
//  so what were doing is defining it inside of the constructor, then because we wanna work with it
//  were going to be placing it inside of the handleSubmit())
// the first, we need to define the ref and we can do this inside of our constructor 
// (this.thumbRef = React.createRef(), this.bannerRef = React.createRef(), this.logoRef = React.createRef())
// we then add the (ref=) prop to our DropzoneComponent being rendered in JSX, tying directly into the component
// this is not something that has anything to do with the component library, this something in react where react
// gives us the ablitity to place a handle directly inside of one of these components on any component on the page
// inside (handleSubmit)
// 
// 
// 
//  (skipped)
//
//
// (portfolio-manager) in our axios delete() api call, for our response we set state but 
// for portfolioItems value, (this.state.portfolioItems.filter()) we iterate over it and build a new 
// collection on the fly
// we wanna say that as you iterate through if you find a record and the item.id is not equal to the ID 
// that i want to delete, i want you to return that, keep those records.
//
//
//
// (working on portfolio edit)
// so what we did in the portfolio manager is we created (PortfolioToEdit()) and that function
// does nothing except return the (PortfolioToEdit) state to an empty object, that is its
// only rle. then from there we passed in the (PortfolioToEdit) and then the (clearPortfolioToEdit)
// directly into the portfolio form component so that we have access to it
// then in the (portfolio-form) we created the (componentDidUpdate) function which is
// one of the react lifecycle hooks and then from there we check the (PortfolioToEdit)
// so we grab the props and we say inside of this (portfolioToEdit) is it an empty object?
// if so, skip this entire process so if thats the case i dont want you to even look at this code
// but if there is something there, then i want you to drop down inside and i want you to first 
// grab each one of the (PortfolioToEdit) records, each one of those keys, and im gonna store those in a local variable
// and we use destructuring 
// then because i want to make sure that the PortfolioToEdit is no longer inside of the 
// portfolio manager, im clearing that value so im calling (this.props.clearPortfolioToEdit)
// so that it is no longer there and the main reason im doing that is so that this does not get fired anymore 
// we only want this to happen the first time the user clicks edit on a record, not when they start
// typing because componentDidUpdate will fire every time there is any change at all occurring
// in the component and we only want this stuff to happen if the PortfolioToEdit actually exists and that means 
// that a user just clicked on it
// then weve cleared that out, we call this.setState in the local state four portfolio form and that is how were grabbing
// values such as the id, name... 
// 
// (dynamic axios api queries)
// axios allows you to pass in the first argument instead of just being the url, we can actually
// pass in the first argument of a configuration object
// that is going to allow us to have our form submission process be completely dynamic
// you can pass in and say i want this to be a post request and so instead of calling
// (axios.post/.get) what were going to be able to do is say, i want the method to be
// whatever the value is on the right hand side of this configuration object
// the the url, our urlis going to have to change so were going to be able to dynamically
// change the value of the URL and then we can pass in the data just like we have done up to this 
// point.
// 
// so we created a new base state where we added an edit mode, an api url, and api action.
// the apiUrl is just the same one weve been using since weve been building out the new portfolio form
// its just that same API endpoint. 
// then from there if a record is going to be edited, so if the portfolioToEdit record is true, were going to change those values
// so edit mode is now going to be true. were changing the actual API endpoint thats being hit and were
// making it a patch request instead of a post request
// that is how were able to dynamically change how were communicating with the API
// then from there we altered our axios call, passing in a configuration object where we were able to have a key value kind 
// of setupwhere we have the method, url, data, then with credentials and then specifically the method
// and the url can now be dynamic, we do not have to go and create a completely separate function
//
// (new and edit) 
// so the first thing we did is we created the handleEditFormSubmission function and all that does
// is it resets all of our data, it calls the getPortfolioItems functio, it brings in all of those
// records and it populates our state for the port manager
// that is only called inside of handleSubmit. so inside of handleSubmit, what were doing is were saying when the response comes
// i want you to check and see are we in edit mode or not, if we are then i want to call the handleEditFormSubmission
// and thats going to then go to the api and pull down all the portfolio items and update state
// if not then i want you to use just the standard handleNewFormSubmission function, were going to pass
// in that record and then the other workflow where all we do is we take that portfolio item that got returned to us
// and were just going to stack that on top of all of the other ones
// lastly were going to return to a base state where were going to say edit mode now is false
// were going to update the api url and then the api action.
//
// (remember when were working with APIs and we want to add extra info, not all APIs do but most APIs do allow for
// optional parameters to be sent and the way you can do that inside of the URL is to add a question
// mark. you add a ? then you add the name of the parameter you want to pass in)
// in this case what the API needs is aprameter called image_type and so now we can say
// image_type equals (imageType), remember imageType is what were getting inside the argument, 
// 
// so were deleting the image, we know that this part works. when we get the response back were updating state and were saying whatever 
// that imageType was with (_url), we want to clear that off and so what thats going to effectively
// do is if you come down into our conditional and look at any of the dropzone components
// like this banner_url one, this conditional, even if we're in edit mode, is going to return false because this.state.banner_image_url, 
// this is now gonna be empty. 
// so whats going to happen if everything works is it will no longer be true so its not going to show
// our new thumb image, instead its going to come down into this false condition and its going to
// show the dropzonecomponent
//
// so each time were calling setState what were doing is were essentially creating a state machine for
// this process. were saying if you have this state condition such as thub imageurl, then i want you to perform
// these other tasks such as not showing dropzone but instead showing this other thumb image component url that we built
// out and follow all of the spots where states changed and when you do that, youll start to see the 
// way the data flow works and youll almost look at the application instead of trying to look
// at it kind of at this high level youll start to look at your application in a series of states
//
// 
// (when working with api data we want open to the public we leave out the (withCredentials) because we dont
// need them to verify themselves if the information returned is part of a blog or anything of the sorts)
//
// (when working with react, lean towards working with react tools over console.log... we see its inherit nature as 
// in how unaccounted props get passed without us calling them)
//
//
//
// (modal)
// imported from npm 
// created a class component for it
// passed props
// returned it as a jsx element (<ReactModal isOpen={true}>)
// then rendered on blog.js
//
//
// when calling a function we call it with parens whereas whevever we pass a method
// thats a callback function we dont have the prens in there but whenever you call a prop
// as a function and its inside of an anonymous function thats when your gonna want to put the parens
// (ReactModal.setAppElement(".app-wrapper");) takes away the warning 
// leaves only the modal content as the primary content to be focused on
//
// (modal that creates, save, clears out form, new post ascends ) 
// we start at the blog form level. from there once thats successful once that is submitted
// successfully, we are going to communicate with the parent, which is the modal and then we
// then communicate with its parents.
// (dont want to do more than two levels of data transfer)
// the middle component our modal is literally going to do nothing with the data except pass it straight
// up to the blog component
// -- we use this state to store blog forms in our blogItems array we do this by
// concat() with our states array
// 
// (composition vs inheritance)
// in JS inheritance is when you have classes and inheritance is when you create that class
// and then you have child classes that have shared behavior
// composition is where you create a blueprint or in this cas blog-form-wrapper, then instead
// of having it inherit from some big abstract class, you simply slide in only what you need
//
// (render with fat arrow functions using parens not brackets)
// the brackets essentially need a return call whereas in jsx the parens dont need it
// 
// (retrieving html content from draft js)
// we have created a new func called (onEditorStateChange) this is passed to the editor
// as a prop as expected. whenever someone starts typing in this prop is going to be called
// theyre gonna run the func, theyre gonna pass in the new editor state
// from there were updating the rich text editors value and then because were using this state
// and passing in comma this gives us the ability to ensure that this next process of calling our blog form
// that it does not get run until we have actually updated the local state 
// from there we take our content, we convert it to HTML, after it has been, we got our current content, something 
// we can work with
//
// (base64 string)
//
// image that is represented and stored as a string value
// getbase64 takes two arguments one being the file and the second being the callback func
// inside our first step is creating an instance of new FileReader (reader) an asynchronous func 
// we want to first read or process the data so we call (reader.readAsDataURL) and it takes our file as an
// argument, reading that file as a url
// after, we use the .onload() method that calls the callback func which takes in (reader.result)
// (result) being the end process of (reader.readAsDataURL(file))
// lastly, we apply .onerror() method to manage our errors
// (uploadFile(file))
// calls our getBase64 function as a new Promise
// so whenever the promise is done i want yo run this code and in this case, this object returned where we get our data
// and it has a key of data and then it has this link tag then were passing data
// data is the result of base64, so were creating a new instance of FileReader, we are adding
// in the file itself. so the file is being placed inside, its getting parsed inside of this 
// (readAsDataURL())
// then from there with onload,that means when this starts up what we are doing is running the callback ( data => resolve({ data: {link: data}}) )
