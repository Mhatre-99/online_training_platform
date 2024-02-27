# CSCI 5709 Grp-05 (Project Proposal Web Application)

* *Date Created*: 27 Feb 2024
* *Last Modification Date*: 27 Feb 2024
* *Assignment URL*: 
* *Git URL*: https://git.cs.dal.ca/panchamia/csci-5709-grp-05

## Authors

- [Aditya Patani]()
- [Aakash Nandwani]()
- [Gunjan Vazrani]()
- [Krisha Panchamia]()
- [Samit Mhatre](sm904139@dal.ca)
- [Shweta Shweta]()

## Built With

- [Node JS](https://nodejs.org/en) - Javascript Runtime used for development
- [Npm](https://docs.npmjs.com//) - Dependency Management Tool
- [VS Code](https://code.visualstudio.com/) - Development code management tool
- [React](https://legacy.reactjs.org/docs/getting-started.html/) - Frontend Development Framework
- [Create React App](https://create-react-app.dev/docs/getting-started/) - Tool used to create react application
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss) - Utility based CSS framework which makes writing CSS effortless for developers
- [Axios](https://github.com/axios/axios) - Promise based HTTP client which helps developers make API calls easily.


## Sources used

1. [LandingPage.jsx](/src/Components/Landing/LandingPage.jsx)

2. [Contact.jsx](/src/Components/Contact/ContactSection.jsx)

*Lines 60 - 85*
```
<Form ref={form} onSubmit={emailService}>
    <label className="form-title">Have any Questions?</label>
    <Form.Group class="floating-label-group">
        <input className="name" type="text" id="name" autocomplete="on" required onChange={(e) => setName(e.target.value)} />
        <label for="name">Full Name</label>
    </Form.Group>
    <Row>
        <Col>
            <Form.Group class="floating-label-group">
            <input className="recipient" type="email" id="email" autocomplete="on" required onChange={(e) => setRecipient(e.target.value)} />
            <label for="email">Email</label>
            </Form.Group>
        </Col>
        <Col >
            <Form.Group class="floating-label-group">
            <input type="tel" id="name" autocomplete="on" required />
            <label for="phone">Phone</label>
            </Form.Group>
        </Col>
    </Row>
    <Form.Group class="floating-label-group">
        <textarea className="message" id="message" cols="40" rows="5" required onChange={(e) => setMessage(e.target.value)} ></textarea>
        <label for="message">Write your message here ... </label>
    </Form.Group>
    <Button type="submit" className="submit-button">Submit Message</Button>
</Form>

```
The code above was created by adapting the code in [Forms | React Bootstrap](https://react-bootstrap.netlify.app/docs/forms/overview) as shown below: 

```

function BasicExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

```
- The code in [Forms | React Bootstarp](https://react-bootstrap.netlify.app/docs/forms/overview) was used as a reference to create the contact form of my web page. I modified the code to match the theme of our website making the form components modern and clean after carefully examining the original source and comprehending the logic and functionality of it. 
- [Forms | React Bootstarp](https://react-bootstrap.netlify.app/docs/forms/overview)'s code was used because our goal was to make the form responsive and Bootstrap has components which are build to be responsive. Using well-written code sped up our development process. The code was modified based on the project requirements. The input type and button designs were changed to match the theme of the website.

## Getting Started

To run this React app locally:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server
4. Open http://localhost:3000 to view the app



## Deployment

Our project is deployed using Netlify. We cloned our repository from Gitlab on Github and used the Github respository to deploy the website on Netlify.

- [Netlify](https://www.netlify.com/) - platform on which application deployed
- [Github](https://github.com/) - platform where source code resides



## Acknowledgments

[1]	“Node.Js — download,” Nodejs.org. [Online]. Available: https://nodejs.org/en/download. [Accessed: 27-Feb-2024].

[2]	“React,” React.dev. [Online]. Available: https://react.dev/. [Accessed: 27-Feb-2024].

[3]	“Netlify app,” Netlify.com. [Online]. Available: https://app.netlify.com/. [Accessed: 27-Feb-2024].

[4]	“Getting started,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/docs/getting-started. [Accessed: 27-Feb-2024].

[5]	“Create react app,” Create-react-app.dev. [Online]. Available: https://create-react-app.dev/. [Accessed: 27-Feb-2024].

[6] "React Bootstarp" React-bootstrap.app. [Online]. Available: https://react-bootstrap.netlify.app/. [Accessed: 27-Feb-2024].

* Above example Code snippets provided us with insights and ideas, which helped us in understanding how can we develop a functionality.