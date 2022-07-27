import Header from './components/Header'
import { useState } from 'react'
import './App.css'

type Emails = {
  id: number,
  sender: string,
  title: string,
  starred: boolean,
  read: boolean
}
const initialEmails: Emails[] = [
  {
    id: 1,
    sender: `Zoom`,
    title: `Cloud Recording - Nicolas Marcora's Personal Meeting Room is now available`,
    starred: false,
    read: true
  },
  {
    id: 2,
    sender: `Zoom`,
    title: `Sean Davison has joined your Personal Meeting Room`,
    starred: false,
    read: false
  },
  {
    id: 3,
    sender: `Notion`,
    title: `1 update in Boolean`,
    starred: true,
    read: true
  },
  {
    id: 4,
    sender: `The Calendly Team`,
    title: `Use more than one calendar?`,
    starred: false,
    read: false
  },
  {
    id: 5,
    sender: `Patrick`,
    title: `Updated invitation: Coding chat with Nico`,
    starred: true,
    read: false
  }
]



function App() {
  const [emails, setEmails] = useState(initialEmails)

  function readEmail(email: Emails) {
    let emailsCopy = JSON.parse(JSON.stringify(emails))
    // const emailsCopy = structuredClone(emails)

    const targetEmail = emailsCopy.find(target => target.id === email.id)
    targetEmail.read = !targetEmail.read

    setEmails(emailsCopy)
  }

  function starred(email: Emails) {

    const ChangeStar = initialEmails.filter(target => target.starred === email.starred)
    setEmails(ChangeStar)
  }


  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
            // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <div className='star-part'>
          {initialEmails.map(initialEmails => (
            <button onClick={() => {
              setEmails(starred)
            }}
            >
              <img src="https://www.gstatic.com/images/icons/material/system/2x/star_border_black_20dp.png" alt="star" />
            </button>
          ))}

          {/* {initialEmails.map(initialEmails => (
            <button className={initialEmails.starred ? 'star' : 'unstarred'}>
              <span onClick={() => {
                setEmails(ChangeStar)
              }}></span>
            </button>
          ))} */}
        </div>
        <div className='form-checkbox'>
          {initialEmails.map(initialEmails => (
            <li className={initialEmails.read ? 'email read' : 'unread'}>

              <label >
                <input
                  type="checkbox"
                />
                <span onClick={() => {
                  readEmail(emails)
                }}>
                  {initialEmails.id}
                </span>
              </label>
            </li>
          ))}
        </div>
        <div>
          {initialEmails.map(initialEmails => (
            <h3>
              {initialEmails.sender}
            </h3>
          ))}
        </div>
        <div>
          {initialEmails.map(initialEmails => (
            <h3>
              {initialEmails.title}
            </h3>
          ))}
        </div>

      </main>
    </div>
  )
}

export default App
