### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
A JWT is a JSON Web Token and it sends information securely as a JSON object.

- What is the signature portion of the JWT?  What does it do?
The signature portion is a cryptographic hash that encodes information with a private key. It is used for authenticating the sender, verifying trustworthiness, and making sure nothing has been altered or changed.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, because the payload is not encrypted.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
To use authentication with a JWT, you need to have a user login verified by the server, token creation using a private key, token storage, sending the token with requests using the JWT in the HTTP authorization header, verify the token, and then access control.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests are isolated, fast, and good for testing single lines of code.
Integration tests are used to check how two different pieces interact with each other (a middle ground between scope and singularity)
E2E tests are slow but comprehensive, similar to longitudinal studies in psychology. They verify the entire app works as expected.

- What is a mock? What are some things you would mock?
A mock is a fake function that mimics a function from within the real code. You can mock API calls, timers, req/res objects, or regular database calls.

- What is continuous integration?
Continuous integration is a way to test frequent code changes in a shared repository or working environment. Each new change gets automaticalyl tested for errors or bugs, to help expedite the programming process.

- What is an environment variable and what are they used for?
An environment variable is anything whose value is set outside of the application. This is normally something standardized within the OS or the work environment. It configures and manages applications without altering any of the code.

- What is TDD? What are some benefits and drawbacks?
TDD is Test-Driven Development. Some benefits include early and quick bug detection, continuous feedback, and better design. Some drawbacks include complex test management as projects get larger, a hefty time investment, and the lack of a one-size-fits-all mechanism that guarantees no bugs make it through tests.

- What is the value of using JSONSchema for validation?
It automatically checks if JSON data meets the criteria you require, which you determined before running tests.

- What are some ways to decide which code to test?
Consider which areas of code are most prone to bugs or errors, as well as starting with the most crucial functionality and working your way out to the least important tweaks. it is also important to consider future changes or implementations you might want to work into the code when testing what is current.

- What does `RETURNING` do in SQL? When would you use it?
RETURNING lets you retrieve any information you want from rows that have been altered by INSERT, UPDATE, or DELETE. You can use it to access values that have been updated without needing to write extra queries.

- What are some differences between Web Sockets and HTTP?
WS use lower per-message overhead than HTTP. WS is for Real-time apps, while HTTP is used for standard web requests and API calls. WS is real-time and bidirectional communication, while HTTP is req/res only. WS is a persistent connection, while HTTP is a stateless connection that has new connections as new requests come in.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
I prefer Express over Flask because I have a better understanding of JavaScript than Python. however, as i expand into Data analytics/science/engineering, I'm sure I will feel more comfortable with Python and Flask as time goes on.