1.  Explain the differences between `client-side routing` and `server-side routing`.

Server-side routing is the traditional method of rendering new pages on the Internet. When the URL changes (by typing it in or clicking on a link), a new page is requested from the server at that address, and if successful it will render the page. It requests only what it needs, but this results in a full page refresh and this can be inefficient, especially if you have duplicate data that you'll need to re-render. Despite this it's still the preferred methods for websites that require SEO.

Client-side routing is based on state or data changes inside a single page application. Clicking on a link will change state or run a function inside an app, which will then render a new view. The page will not refresh in this case - only the components that change based on state will re-render (or initially render if it was not previously rendered). This process makes data and components load quickly, but the initial load of the application may take longer than a server-side routed page because all the data for the app must be loaded, not just what is being currently viewed.

1.  What does HTTP stand for?

Hypertext Transfer Protocol - it's the set of rules that govern how data is sent and received between servers and web clients.

1.  What does CRUD stand for?

Create, Read, Update, Delete.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create - POST
Read - GET
Update - PUT
Delete - DELETE

1.  Mention three tools we can use to make AJAX requests.

A library like axios
API Development Environment like Postman
A Promise inside vanilla JS
